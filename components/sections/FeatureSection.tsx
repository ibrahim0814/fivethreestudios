import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Market Insights",
    content:
      "Get real-time consumer feedback and market data at your fingertips. Advanced search analytics and financial APIs reveal golden opportunities others miss.",
  },
  {
    title: "Smart Operations",
    content:
      "AI assistants take perfect meeting notes, manage your inbox, and handle scheduling. A virtual team that works 24/7 so you can focus on growth.",
  },
  {
    title: "Rapid Design",
    content:
      "Create stunning presentations, product photos, and websites in minutes. Transform your ideas into professional visuals with powerful AI design tools.",
  },
  {
    title: "Financial Tools",
    content:
      "Smart tax calculators and market analysis tools guide your financial decisions. Get real-time insights that maximize profits and minimize taxes.",
  },
  {
    title: "Customer Success",
    content:
      "AI-powered inbox management and response automation handle customer queries instantly. Build stronger relationships while saving countless hours.",
  },
  {
    title: "Seamless Integration",
    content:
      "Connect all your apps and streamline workflows without coding. Build powerful automated systems that save time and reduce busy work.",
  },
];

export function FeatureSection() {
  return (
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
          {features.map((feature, index) => (
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
  );
}
