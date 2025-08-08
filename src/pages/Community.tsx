import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Community = () => {
  return (
    <PageLayout showContact={false}>
      <SEO title="Community — Gen AI Global" description="Our community hub. LinkedIn feed and updates — content pending." />
      <main className="pt-24 section-container">
        <h1 className="text-3xl font-bold mb-4">Community</h1>
        <p className="text-muted-foreground mb-6">Content Pending — we will embed our LinkedIn activity here. Due to LinkedIn embed restrictions, please follow us directly:</p>
        <a href="https://www.linkedin.com/company/gen-ai-global/" target="_blank" rel="noopener noreferrer" className="underline text-foreground">Visit Gen AI Global on LinkedIn</a>
      </main>
    </PageLayout>
  );
};

export default Community;
