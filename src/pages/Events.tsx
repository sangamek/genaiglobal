
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Events = () => {
  return (
    <PageLayout showContact={false}>
      <SEO title="Events — Gen AI Global" description="Upcoming events — content pending verification." />
      <main className="section-container">
        <h1 className="text-3xl font-bold mb-4">Events</h1>
        <p className="text-muted-foreground">Content Pending — event list will be added when confirmed.</p>
      </main>
    </PageLayout>
  );
};

export default Events;
