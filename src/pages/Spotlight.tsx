import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Spotlight = () => {
  return (
    <PageLayout showContact={false}>
      <SEO title="Spotlight — Gen AI Global" description="Feature articles — content pending verification." />
      <main className="pt-16 md:pt-20 section-container">
        <h1 className="text-3xl font-bold mb-4">Spotlight</h1>
        <p className="text-muted-foreground">Content Pending — feature article will be published here.</p>
      </main>
    </PageLayout>
  );
};

export default Spotlight;
