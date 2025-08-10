import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  Node,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Users } from "lucide-react";
import { orgChart, OrgGroup, CATEGORY_ICON } from "@/data/orgChart";

// Futuristic Neon Org Graph (stable pan/zoom + search-to-focus)
// - No node hover transitions (per project guidelines)
// - Uses semantic tokens (accent/background) for neon look
// - Mobile friendly (auto-fit, responsive re-layout)

type GroupNodeData = {
  id: string;
  name: string;
  iconKey: keyof typeof CATEGORY_ICON;
  count: number;
  depth: number;
};

const nodeWidth = 220;
const nodeHeight = 88;

// Build a depth map for groups
function flattenGroups(groups: OrgGroup[], depth = 0, parentId?: string) {
  const nodes: Array<{ id: string; name: string; iconKey: keyof typeof CATEGORY_ICON; count: number; depth: number }>= [];
  const edges: Array<{ source: string; target: string }> = [];

  for (const g of groups) {
    nodes.push({ id: g.id, name: g.name, iconKey: g.icon, count: g.members?.length ?? 0, depth });
    if (parentId) edges.push({ source: parentId, target: g.id });
    if (g.children && g.children.length) {
      const child = flattenGroups(g.children, depth + 1, g.id);
      nodes.push(...child.nodes);
      edges.push(...child.edges);
    }
  }

  return { nodes, edges };
}

// Radial multi-ring layout by depth with anti-overlap radius
function computeLayout(
  items: Array<{ id: string; depth: number }>,
  width: number,
  height: number
): Record<string, { x: number; y: number }> {
  const byDepth = new Map<number, string[]>();
  for (const it of items) {
    const arr = byDepth.get(it.depth) ?? [];
    arr.push(it.id);
    byDepth.set(it.depth, arr);
  }

  const cx = width / 2;
  const cy = height / 2;
  const maxRing = byDepth.size ? Math.max(...byDepth.keys()) : 0;

  const minMargin = 24; // spacing between nodes on a ring
  const baseRadius = Math.min(width, height) / 5;
  const ringGap = Math.max(nodeHeight + minMargin, Math.min(width, height) / 7);

  const pos: Record<string, { x: number; y: number }> = {};

  for (let d = 0; d <= maxRing; d++) {
    const ids = byDepth.get(d) ?? [];
    if (ids.length === 0) continue;

    const count = ids.length;
    const circumferenceRequirement = count * (nodeWidth + minMargin);
    const spacingRadius = circumferenceRequirement / (2 * Math.PI);
    const radius = Math.max(baseRadius + d * ringGap, spacingRadius);

    const step = (Math.PI * 2) / count;
    const startAngle = -Math.PI / 2; // top center

    ids.forEach((id, i) => {
      const a = startAngle + i * step;
      const x = cx + Math.cos(a) * radius - nodeWidth / 2;
      const y = cy + Math.sin(a) * radius - nodeHeight / 2;
      pos[id] = { x, y };
    });
  }

  return pos;
}

// Group node renderer
function GroupNode({ data, selected }: { data: GroupNodeData; selected: boolean }) {
  const Icon = CATEGORY_ICON[data.iconKey] ?? Users;
  return (
    <div
      className={
        "rounded-xl border bg-background/70 backdrop-blur px-4 py-3 shadow-[0_0_28px_hsl(var(--accent)/0.35)] " +
        (selected ? " ring-2 ring-accent" : " ring-1 ring-accent/30")
      }
      style={{ width: nodeWidth, height: nodeHeight }}
      aria-label={`${data.name} group, ${data.count} members`}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border bg-background shadow-[0_0_12px_hsl(var(--accent)/0.45)]">
          <Icon className="size-4" />
        </span>
        <div className="min-w-0">
          <div className="text-sm font-semibold truncate">{data.name}</div>
          <div className="text-xs text-muted-foreground">{data.count} {data.count === 1 ? "member" : "members"}</div>
        </div>
      </div>
    </div>
  );
}

const nodeTypes = { groupNode: GroupNode } as const;

const GraphContent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dims, setDims] = useState({ w: 800, h: 600 });
  const [query, setQuery] = useState("");
  const { nodes: flatNodes, edges: flatEdges } = useMemo(() => flattenGroups(orgChart), []);

  // Observe container size
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        setDims({ w: cr.width, h: cr.height });
      }
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const layoutPositions = useMemo(() => computeLayout(flatNodes.map(n => ({ id: n.id, depth: n.depth })), Math.max(dims.w, 300), Math.max(dims.h, 300)), [flatNodes, dims]);

  const initialNodes: Node<GroupNodeData>[] = useMemo(() => {
    return flatNodes.map((n) => ({
      id: n.id,
      type: "groupNode",
      data: { id: n.id, name: n.name, iconKey: n.iconKey, count: n.count, depth: n.depth },
      position: layoutPositions[n.id] ?? { x: 0, y: 0 },
      draggable: false,
      selectable: true,
    }));
  }, [flatNodes, layoutPositions]);

  const initialEdges: Edge[] = useMemo(() => {
    return flatEdges.map((e, i) => ({
      id: `e-${i}-${e.source}-${e.target}`,
      source: e.source,
      target: e.target,
      animated: true,
      style: {
        stroke: "hsl(var(--accent))",
        strokeWidth: 1.6,
        filter: "drop-shadow(0 0 6px hsl(var(--accent) / 0.55))",
      },
    }));
  }, [flatEdges]);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node<GroupNodeData>>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges);
  const rf = useReactFlow();

  // Relayout when dims change
  useEffect(() => {
    setNodes((nds) => nds.map((n) => ({ ...n, position: layoutPositions[n.id] ?? n.position })));
  }, [layoutPositions, setNodes]);

  // Fit view on mount and when layout stabilizes
  useEffect(() => {
    const id = setTimeout(() => {
      try { rf.fitView({ padding: 0.15, duration: 400 }); } catch {}
    }, 50);
    return () => clearTimeout(id);
  }, [rf, dims.w, dims.h]);

  const handleFocusSearch = useCallback(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      rf.fitView({ padding: 0.15, duration: 300 });
      return;
    }

    // Match group by name or any member/role inside that group
    const match = orgChart
      .flatMap((g) => [g, ...(g.children ?? [])])
      .find((g) => {
        const inName = g.name.toLowerCase().includes(q);
        const inMembers = (g.members ?? []).some((m) =>
          [m.name, m.role ?? ""].join(" ").toLowerCase().includes(q)
        );
        return inName || inMembers;
      });

    const id = match?.id;
    if (!id) return;
    const n = nodes.find((x) => x.id === id);
    if (!n) return;
    // Center on node
    const x = n.position.x + nodeWidth / 2;
    const y = n.position.y + nodeHeight / 2;
    rf.setCenter(x, y, { zoom: 1.1, duration: 400 });
  }, [query, nodes, rf]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-md items-center gap-2">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search group or member"
              className="pl-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleFocusSearch()}
              aria-label="Search org"
            />
          </div>
          <Button variant="secondary" onClick={handleFocusSearch} aria-label="Focus search result">Go</Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => rf.fitView({ padding: 0.15, duration: 300 })} aria-label="Reset view">Reset</Button>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-1 sm:p-2">
        <div ref={containerRef} className="relative h-[70vh] sm:h-[75vh] lg:h-[80vh] w-full overflow-hidden rounded-md">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
            minZoom={0.7}
            maxZoom={2}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={true}
            panOnScroll={true}
            zoomOnPinch={true}
            zoomOnScroll={true}
            nodeTypes={nodeTypes}
            className="neon-flow"
            proOptions={{ hideAttribution: true }}
          >
            <MiniMap zoomable pannable className="rounded-md" />
            <Background variant={BackgroundVariant.Dots} gap={24} size={1} />
            <Controls showInteractive={false} position="top-right" />
          </ReactFlow>
          {/* Neon lattice overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-md bg-[radial-gradient(circle_at_50%_120%,hsl(var(--accent)/0.12),transparent_60%)]" />
        </div>
      </div>
    </div>
  );
};

const NeonOrgGraph: React.FC = () => {
  return (
    <ReactFlowProvider>
      <GraphContent />
    </ReactFlowProvider>
  );
};

export default NeonOrgGraph;
