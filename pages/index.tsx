import Link from "next/link";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { NavBar } from "@/components/ui/nav-bar";
import { CTASection } from "@/components/blocks/cta-with-rectangle";
import { Card } from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <BackgroundPaths title="Five Three Studios" />

      <main className="relative">
        <section className="pt-20 pb-4 bg-white flex items-center">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">
                AI Myths vs. Business Reality
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                Cut through the noise and discover AI's real business value
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card variant="inner" className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-red-500">
                  The Hype
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <p className="text-neutral-700 dark:text-neutral-300">AI will replace all jobs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <p className="text-neutral-700 dark:text-neutral-300">You need a team of data scientists</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <p className="text-neutral-700 dark:text-neutral-300">It's all about robots and chatbots</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <p className="text-neutral-700 dark:text-neutral-300">AI is too complex for small businesses</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✕</span>
                    <p className="text-neutral-700 dark:text-neutral-300">It's just a passing trend</p>
                  </div>
                </div>
              </Card>

              <Card variant="inner" className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-emerald-500">
                  The Reality
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <p className="text-neutral-700 dark:text-neutral-300">AI enhances your team's capabilities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <p className="text-neutral-700 dark:text-neutral-300">We become your strategic AI partner</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <p className="text-neutral-700 dark:text-neutral-300">Profit-driving automation tools</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <p className="text-neutral-700 dark:text-neutral-300">30% average efficiency gains in first 90 days</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    <p className="text-neutral-700 dark:text-neutral-300">A fundamental shift in efficiency</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-4 flex items-center">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl mb-4 text-black dark:text-white">
                AI That Works As Hard As You Do
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                Transform your operations with AI solutions built for your unique business DNA
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Operational Excellence",
                  content: "Achieve 2X workflow efficiency through intelligent automation that adapts to your business rhythms",
                },
                {
                  title: "Strategic Decision Making",
                  content: "Make decisions 3X faster with real-time market intelligence and predictive insights",
                },
                {
                  title: "Customer Centricity",
                  content: "3X customer retention through hyper-personalized experiences powered by AI",
                },
                {
                  title: "Scalable Growth",
                  content: "2X your business capacity without proportional cost increases",
                },
                {
                  title: "Risk Intelligence",
                  content: "3X faster risk identification and mitigation through predictive analytics",
                },
                {
                  title: "Market Adaptation",
                  content: "2X faster response to market changes with AI-driven insights",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  variant="gradient"
                  title={feature.title}
                  description={feature.content}
                  className="bg-background"
                />
              ))}
            </div>
          </div>
        </section>

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
            <Timeline
              data={[
                {
                  title: "Discover Your AI Potential",
                  content: (
                    <div>
                      <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        We start by understanding your business inside and out. What are your pain points? Where do you want to go? This helps us identify the perfect AI solutions that align with your goals.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card variant="inner" className="p-6">
                          <h4 className="font-semibold mb-2">Business Analysis</h4>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">Deep dive into your workflows and challenges</p>
                        </Card>
                        <Card variant="inner" className="p-6">
                          <h4 className="font-semibold mb-2">AI Opportunity Map</h4>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">Identify high-impact areas for AI integration</p>
                        </Card>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Smart Solutions, Real Results",
                  content: (
                    <div>
                      <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Together, we'll implement AI tools that actually make sense for your business. No fancy jargon, just practical solutions that save you time and boost your bottom line.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card variant="inner" className="p-6">
                          <h4 className="font-semibold mb-2">Custom Integration</h4>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">AI tools that fit seamlessly into your workflow</p>
                        </Card>
                        <Card variant="inner" className="p-6">
                          <h4 className="font-semibold mb-2">Quick Wins</h4>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">See immediate improvements in efficiency</p>
                        </Card>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Scale & Succeed",
                  content: (
                    <div>
                      <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Our clients see remarkable improvements in their business:
                      </p>
                      <div className="grid grid-cols-1 gap-4">
                        <Card variant="inner" className="p-6">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-500">✓</span>
                              <p className="text-sm">50% reduction in manual tasks</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-500">✓</span>
                              <p className="text-sm">3X faster decision making</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-emerald-500">✓</span>
                              <p className="text-sm">2X increase in team productivity</p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </section>

        {/* Spacer div */}
        <div className="h-4"></div>

        <section className="min-h-[60vh] py-20 flex items-center justify-center overflow-hidden bg-white pb-16">
          <div className="relative z-10 container mx-auto">
            <CTASection
              badge={{
                text: "Ready to Transform Your Business?",
              }}
              title="Transform chaos into clarity. Unlock hidden opportunities and set your business on a path to sustainable growth with AI-driven automation."
              action={{
                text: "Start Your Journey",
                href: "https://calendly.com/ibrahim0814/fivethree-consult",
                variant: "default",
              }}
              className="text-black"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
