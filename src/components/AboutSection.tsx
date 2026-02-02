import { Shield, Award, Droplets, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '100% Pure & Safe',
    description: 'Every batch is rigorously tested for purity and safety standards.',
  },
  {
    icon: Award,
    title: 'Laboratory Grade',
    description: 'Meeting the highest standards required for medical and scientific use.',
  },
  {
    icon: Droplets,
    title: 'Multi-Stage Process',
    description: 'Advanced distillation process ensuring complete mineral removal.',
  },
];

const checkPoints = [
  'ISO certified production facility',
  'Quality tested before dispatch',
  'Eco-friendly packaging options',
  'Consistent quality guaranteed',
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner for{' '}
              <span className="text-gradient">Premium Distilled Water</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
             At Krishna Aqua Distilled Water, we are committed to delivering 100% pure, safe, and high-quality distilled water to meet a wide range of professional and domestic needs.

With a strong focus on purity, hygiene, and reliability, we supply distilled water for hospitals, laboratories, industrial applications, batteries, and households. Our advanced distillation and quality-control processes ensure that every drop meets strict purity and safety standards.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
             We believe in building long-term relationships with our customers through consistent quality, timely delivery, and affordable pricing. Whether it’s small-scale daily use or large-volume industrial supply, Krishna Aqua Distilled Water is your trusted partner for dependable water solutions.
            </p>

            {/* Checkpoints */}
            <div className="grid sm:grid-cols-2 gap-3">
              {checkPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl gradient-card border border-border/50 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl gradient-water flex items-center justify-center shadow-glow">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
