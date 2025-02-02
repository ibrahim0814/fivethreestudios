import { Card } from '@/components/ui/card';

export function AIRealitySection() {
  return (
    <section className="pt-20 pb-4 bg-white flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">
            AI Myths vs. Business Reality
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Break through the clutter to reveal AI’s genuine business value
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card variant="inner" className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-red-500">The Hype</h3>
            <div className="space-y-4">
              {[
                'AI will completely replace human jobs and eliminate the workforce',
                'You need an expensive team of data scientists and engineers with degrees machine learning',
                'It’s all about fancy robots and chatbots taking over everything',
                'AI is far too complex and expensive for small business implementation',
                'It’s just another tech bubble that will burst soon',
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <p className="text-neutral-700 dark:text-neutral-300">{text}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="inner" className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-500">The Reality</h3>
            <div className="space-y-4">
              {[
                'AI amplifies your team’s strengths—no one’s getting replaced',
                'We become your hands-on AI partner, not just consultants',
                'Profit-driving automation that cuts out the busywork',
                'Time-saving tools that free your team to focus on what they do best',
                'A practical, long-term shift in how you work—without the headache',
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <p className="text-neutral-700 dark:text-neutral-300">{text}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
