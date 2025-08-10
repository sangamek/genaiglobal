import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Linkedin, MessageSquare } from 'lucide-react';

// Optional: Provide LinkedIn post URNs to embed latest posts. Example: "urn:li:share:123"
const LINKEDIN_POST_URNS: string[] = [];

const Community = () => {
  return (
    <PageLayout showContact={false}>
      <SEO title="Community — Gen AI Global" description="Follow us and join the conversation: LinkedIn and Discord." />
      <main className="relative pt-16 md:pt-20">
        {/* Futuristic background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_10%,hsl(var(--accent)/0.16),transparent_60%)]" />
          <div className="absolute inset-0 opacity-40 [background:radial-gradient(hsl(var(--accent)/0.12)_1px,transparent_1px)] [background-size:22px_22px]" />
        </div>
        <section className="container mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl flex-col items-center justify-center gap-8 px-4 text-center">
          <h1 className="bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">Get Involved</h1>
          <p className="max-w-2xl text-balance text-muted-foreground">Stay in the loop, meet contributors, and help democratize AI knowledge.</p>
          <div className="mt-2 grid w-full gap-4 sm:grid-cols-2">
            <a
              href="https://www.linkedin.com/company/gen-ai-global/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border bg-card px-6 py-5 text-lg shadow-[0_0_28px_hsl(var(--accent)/0.35)] ring-1 ring-accent/40 transition-transform hover:scale-[1.02]"
              aria-label="Follow on LinkedIn"
            >
              <span className="absolute inset-0 -z-10 bg-[radial-gradient(400px_200px_at_10%_10%,hsl(var(--accent)/0.2),transparent_60%)]" />
              <Linkedin className="mr-2 size-5" /> Follow on LinkedIn
            </a>
            <a
              href="https://discord.gg/Qxt2TAS5"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border bg-card px-6 py-5 text-lg shadow-[0_0_28px_hsl(var(--accent)/0.35)] ring-1 ring-accent/40 transition-transform hover:scale-[1.02]"
              aria-label="Join our Discord"
            >
              <span className="absolute inset-0 -z-10 bg-[radial-gradient(400px_200px_at_90%_10%,hsl(var(--accent)/0.2),transparent_60%)]" />
              <MessageSquare className="mr-2 size-5" /> Join our Discord
            </a>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Community;
