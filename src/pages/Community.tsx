import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Linkedin, MessageSquare } from 'lucide-react';

// Optional: Provide LinkedIn post URNs to embed latest posts. Example: "urn:li:share:123"
const LINKEDIN_POST_URNS: string[] = [];

const Community = () => {
  return (
    <PageLayout showContact={false}>
      <SEO title="Community — Gen AI Global" description="Gen AI Global community hub with LinkedIn updates and Discord access." />
      <main className="pt-16 md:pt-20 section-container">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Gen AI Global Community</h1>
        <p className="text-muted-foreground mb-10">Connect with our community. Follow our latest updates on LinkedIn and join the conversation on Discord.</p>

        <section className="grid gap-8 md:grid-cols-3">
          <article className="md:col-span-2 p-6 rounded-lg border bg-card">
            <h2 className="text-xl font-semibold mb-3">LinkedIn Updates</h2>
            {LINKEDIN_POST_URNS.length > 0 ? (
              <div className="grid gap-4">
                {LINKEDIN_POST_URNS.map((urn) => (
                  <div key={urn} className="aspect-[16/9] w-full overflow-hidden rounded-md">
                    <iframe
                      title={`LinkedIn post ${urn}`}
                      src={`https://www.linkedin.com/embed/feed/update/${urn}`}
                      height="100%"
                      width="100%"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="aspect-[16/9] w-full rounded-md bg-muted flex items-center justify-center text-center text-sm text-muted-foreground">
                Live LinkedIn embeds require specific post URNs or API access. Provide URNs to render here.
              </div>
            )}
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/gen-ai-global/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2 transition hover:opacity-90"
                aria-label="Visit Gen AI Global on LinkedIn"
              >
                <Linkedin className="size-4" /> Follow on LinkedIn
              </a>
            </div>
          </article>

          <aside className="p-6 rounded-lg border bg-card">
            <h2 className="text-xl font-semibold mb-3">Join Our Discord</h2>
            <p className="text-muted-foreground mb-4">Meet volunteers across Research, Community Building, Education, and Event Planning. Say hello and get involved.</p>
            <Button asChild variant="glow" size="lg" className="w-full hover:animate-pulse-slow">
              <a href="https://discord.gg/Qxt2TAS5" target="_blank" rel="noopener noreferrer" aria-label="Join our Discord server">
                <MessageSquare className="size-5" /> Join Our Discord
              </a>
            </Button>
          </aside>
        </section>
      </main>
    </PageLayout>
  );
};

export default Community;
