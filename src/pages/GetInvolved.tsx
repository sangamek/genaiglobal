import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

type FormValues = {
  name: string;
  email: string;
  interest: 'Research' | 'Community Building' | 'Education' | 'Event Planning';
};

const GetInvolved = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { toast } = useToast();

  const onSubmit = (data: FormValues) => {
    console.log('Volunteer submission (static):', data);
    toast({ title: 'Thanks!', description: 'Submission received (static). No authentication or backend yet.' });
    reset();
  };

  return (
    <PageLayout showContact={false}>
      <SEO title="Get Involved — Gen AI Global" description="Volunteer form — static, no authentication." />
      <main className="pt-24 section-container max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Get Involved</h1>
        <p className="text-muted-foreground mb-6">Choose an interest area and submit the form. Labels are verified; processing is static.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input className="w-full border rounded-md p-2" {...register('name')} placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full border rounded-md p-2" {...register('email')} placeholder="you@example.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Interest Area</label>
            <select className="w-full border rounded-md p-2" {...register('interest')} defaultValue="Research">
              <option>Research</option>
              <option>Community Building</option>
              <option>Education</option>
              <option>Event Planning</option>
            </select>
          </div>
          <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Submit</button>
        </form>
      </main>
    </PageLayout>
  );
};

export default GetInvolved;
