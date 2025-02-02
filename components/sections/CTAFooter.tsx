import { CTASection } from '@/components/blocks/cta-with-rectangle';

export function CTAFooter() {
  return (
    <section className="min-h-[60vh] py-20 flex items-center justify-center overflow-hidden bg-white pb-16">
      <div className="relative z-10 container mx-auto">
        <CTASection
          badge={{
            text: 'Ready to supercharge your business?',
          }}
          title="Transform chaos into clarity. Unlock hidden opportunities and set your business on a path to sustainable growth with AI-driven automation."
          action={{
            text: 'Start Your Journey',
            href: 'https://calendly.com/ibrahim0814/fivethree-consult',
            variant: 'default',
          }}
          className="text-black"
        />
      </div>
    </section>
  );
}
