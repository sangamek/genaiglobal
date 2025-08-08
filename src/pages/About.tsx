
import SEO from '@/components/SEO';
import PageLayout from '@/components/PageLayout';
import OrgChart3D from '@/components/OrgChart3D';

const About = () => {
  return (
    <PageLayout showContact={false}>
      <SEO
        title="About Us — Gen AI Global Organization"
        description="Explore Gen AI Global's organizational structure in an interactive, searchable org chart."
      />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">About Gen AI Global</h1>
          <p className="text-muted-foreground mb-8">Interactive organizational chart with search, zoom/pan, collapsible groups, and export options.</p>
          <div className="relative h-[70vh] sm:h-[75vh] lg:h-[80vh] overflow-hidden rounded-lg border bg-card">
            <OrgChart3D />
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default About;
