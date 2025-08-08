import { Crown, Shield, Cloud, Server, UserPlus, FileText, Megaphone, Users, Bot, Globe } from "lucide-react";

export type OrgMember = {
  name: string;
  role?: string;
};

export type OrgGroup = {
  id: string;
  name: string;
  icon: keyof typeof CATEGORY_ICON;
  description?: string;
  members?: OrgMember[];
  children?: OrgGroup[];
};

// Minimal icon registry for group headers
export const CATEGORY_ICON = {
  Crown,
  Shield,
  Cloud,
  Server,
  UserPlus,
  FileText,
  Megaphone,
  Users,
  Bot,
  Globe,
};

// NOTE: Names/roles intentionally left empty pending verified import from images
export const orgChart: OrgGroup[] = [
  { id: "founders", name: "Founders", icon: "Crown", members: [] },
  {
    id: "engineering",
    name: "Agent Dev Ops",
    icon: "Bot",
    members: [],
  },
  {
    id: "security",
    name: "Cybersecurity",
    icon: "Shield",
    members: [],
  },
  {
    id: "webdev",
    name: "Website Development",
    icon: "Server",
    members: [],
  },
  { id: "cloud", name: "Cloud Infrastructure", icon: "Cloud", members: [] },
  { id: "it", name: "IT", icon: "Server", members: [] },
  { id: "onboarding", name: "Onboarding", icon: "UserPlus", members: [] },
  { id: "fundraising", name: "Fundraising", icon: "Users", members: [] },
  { id: "docs", name: "Documentation", icon: "FileText", members: [] },
  {
    id: "community-experience",
    name: "Community Experience",
    icon: "Users",
    members: [],
  },
  {
    id: "marketing-content",
    name: "Marketing & Communications (Content)",
    icon: "Megaphone",
    members: [],
  },
  {
    id: "influencer",
    name: "Influencer Marketing",
    icon: "Megaphone",
    members: [],
  },
  { id: "network", name: "Network Architects", icon: "Globe", members: [] },
];
