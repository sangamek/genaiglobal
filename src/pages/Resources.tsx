import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Resources = () => {
  return (
    <PageLayout showContact={false}>
      <SEO title="Resources — Gen AI Global" description="Resource library — placeholder table until verified data is available." />
      <main className="pt-24 section-container">
        <h1 className="text-3xl font-bold mb-4">Resources</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead className="bg-secondary/50">
              <tr>
                <th className="text-left p-3 border">Title</th>
                <th className="text-left p-3 border">Type</th>
                <th className="text-left p-3 border">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border text-muted-foreground" colSpan={3}>Content Pending — resources will appear here.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </PageLayout>
  );
};

export default Resources;
