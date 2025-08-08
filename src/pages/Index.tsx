
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout showContact={false}>
      <SEO 
        title="Gen AI Global — Responsible AI Community" 
        description="Gen AI Global: An open, responsible AI community. Content pending verification." 
        imageUrl="/lovable-uploads/eed53564-63d3-42ef-ba27-84f9b10a41b0.png"
        keywords={['Gen AI Global', 'responsible AI', 'AI community', 'education', 'research']}
      />
      <main className="pt-24 section-container">
        <header className="max-w-4xl mx-auto text-center">
          <img src="/lovable-uploads/eed53564-63d3-42ef-ba27-84f9b10a41b0.png" alt="Gen AI Global logo" className="mx-auto h-20 w-20 mb-6" />
          <h1 className="text-4xl font-bold mb-3">Gen AI Global</h1>
          <p className="text-muted-foreground">Content Pending — verified copy will appear here.</p>
        </header>
      </main>
    </PageLayout>
  );
};

export default Index;
