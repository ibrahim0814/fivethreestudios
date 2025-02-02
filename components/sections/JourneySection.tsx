import { Card } from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";

const journeyData = [
  {
    title: "Discover Your AI Potential",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-8">
          We start by understanding your business inside and out. What are your pain points? Where do you want to go? This helps us identify the perfect AI solutions that align with your goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="inner" className="p-6">
            <h4 className="font-semibold mb-2">Business Analysis</h4>
            <p className="text-base text-neutral-600 dark:text-neutral-400">Deep dive into your workflows and challenges</p>
          </Card>
          <Card variant="inner" className="p-6">
            <h4 className="font-semibold mb-2">AI Opportunity Map</h4>
            <p className="text-base text-neutral-600 dark:text-neutral-400">Identify high-impact areas for AI integration</p>
          </Card>
        </div>
      </div>
    ),
  },
  {
    title: "Smart Solutions, Real Results",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-8">
          Together, we'll implement AI tools that actually make sense for your business. No fancy jargon, just practical solutions that save you time and boost your bottom line.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="inner" className="p-6">
            <h4 className="font-semibold mb-2">Custom Integration</h4>
            <p className="text-base text-neutral-600 dark:text-neutral-400">AI tools that fit seamlessly into your workflow</p>
          </Card>
          <Card variant="inner" className="p-6">
            <h4 className="font-semibold mb-2">Quick Wins</h4>
            <p className="text-base text-neutral-600 dark:text-neutral-400">See immediate improvements in efficiency</p>
          </Card>
        </div>
      </div>
    ),
  },
  {
    title: "Scale & Succeed",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-8">
          Experience practical improvements in your operations—often within the first 90 days.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="inner" className="p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <p className="text-base">Smarter, more streamlined decision-making</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                <p className="text-base">Noticeable boost in team productivity</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    ),
  },
];

export function JourneySection() {
  return (
    <section className="pt-20 pb-4 bg-white flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">
            Your Success Journey with AI
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Proven results driving measurable business growth
          </p>
        </div>
        <Timeline data={journeyData} />
      </div>
    </section>
  );
}
