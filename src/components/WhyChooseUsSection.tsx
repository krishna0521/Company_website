import { Sparkles, TestTube, BadgeDollarSign, Timer, Heart, Building2, Stethoscope, FlaskConical, BatteryCharging } from 'lucide-react';

const reasons = [
  {
    icon: Sparkles,
    title: '100% Purity Guaranteed',
    description: 'Every drop undergoes rigorous quality testing to ensure absolute purity.',
  },
  {
    icon: TestTube,
    title: 'Quality Tested',
    description: 'Lab-certified testing for each batch before it leaves our facility.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Affordable Pricing',
    description: 'Premium quality at competitive prices that fit your budget.',
  },
  {
    icon: Timer,
    title: 'On-Time Delivery',
    description: 'Reliable scheduling and punctual delivery you can count on.',
  },
  {
    icon: Heart,
    title: 'Trusted by Customers',
    description: 'Over 500+ satisfied clients across hospitals, labs, battery shops, and industries.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 gradient-hero relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Krishna Aqua{' '}
            <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            When it comes to distilled water, quality and reliability matter. 
            Here's why leading institutions trust Krishna Aqua.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group text-center p-6 rounded-2xl bg-background border border-border/50 shadow-card hover:shadow-glow hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary group-hover:gradient-water transition-all duration-300 mb-5">
                <reason.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-soft">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full gradient-water border-2 border-background flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="w-10 h-10 rounded-full gradient-water border-2 border-background flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="w-10 h-10 rounded-full gradient-water border-2 border-background flex items-center justify-center">
                <BatteryCharging className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="w-10 h-10 rounded-full gradient-water border-2 border-background flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Trusted by 500+ Clients</div>
              <div className="text-sm text-muted-foreground">Hospitals, Labs, Battery Shops & Industries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
