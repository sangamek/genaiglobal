import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Login = () => {
  return (
    <PageLayout showContact={false}>
      <SEO title="Log In — Gen AI Global" description="Static login — no authentication." />
      <main className="pt-16 md:pt-20 section-container max-w-sm mx-auto">
        <h1 className="text-3xl font-bold mb-4">Log In</h1>
        <p className="text-muted-foreground mb-4">Static only — no authentication.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full border rounded-md p-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" className="w-full border rounded-md p-2" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full px-4 py-2 bg-secondary rounded-md">Continue</button>
        </form>
      </main>
    </PageLayout>
  );
};

export default Login;
