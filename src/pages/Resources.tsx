import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import SpotlightCard from '@/components/holo/SpotlightCard';

const Resources = () => {
  return (
    <PageLayout showContact={false}>
      <SEO title="Resources — Gen AI Global" description="Resource library — placeholder table until verified data is available." />
      <main className="pt-16 md:pt-20 section-container">
        <h1 className="text-3xl font-bold mb-6">Resources</h1>
        <section aria-label="Featured resources" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SpotlightCard
            title="AI Safety 101"
            description="Foundational principles and best practices for responsible AI."
            href="#"
            cta="Read overview"
          />
          <SpotlightCard
            title="Community Playbook"
            description="Guidelines and workflows for collaborative AI literacy projects."
            href="#"
            cta="View playbook"
          />
          <SpotlightCard
            title="Tooling Directory"
            description="Curated list of open tools for education, research, and policy."
            href="#"
            cta="Browse tools"
          />
        </section>
      </main>
    </PageLayout>
  );
};

export default Resources;
