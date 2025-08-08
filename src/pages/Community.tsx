import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Linkedin, MessageSquare } from 'lucide-react';

const Community = () => {
  return (
    <PageLayout showContact={false}>
      <SEO title="Community — Gen AI Global" description="Gen AI Global community hub with LinkedIn updates and Discord access." />
      <main className="pt-24 section-container">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Gen AI Global Community</h1>
        <p className="text-muted-foreground mb-10">Connect with our community. We will surface our latest LinkedIn updates here. Due to LinkedIn embed limitations, please follow us directly until the live feed is available.</p>

        <section className="grid gap-8 md:grid-cols-3">
          <article className="md:col-span-2 p-6 rounded-lg border bg-card">
            <h2 className="text-xl font-semibold mb-3">LinkedIn Updates</h2>
            <div className="aspect-[16/9] w-full rounded-md bg-muted flex items-center justify-center text-center text-sm text-muted-foreground">
              Content Pending — LinkedIn company feed embed is restricted. View our latest posts on LinkedIn.
            </div>
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
