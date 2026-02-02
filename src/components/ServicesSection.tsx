import { Truck, FlaskConical, Building2, BatteryCharging } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Doorstep Delivery',
    description: 'Free delivery to your home, office, or facility. We ensure your water arrives safely and on time.',
    features: ['Same-day delivery available', 'GPS tracking', 'Safe handling'],
  },
  {
    icon: Building2,
    title: 'Bulk Supply for Industries',
    description: 'Large-scale supply solutions for factories, manufacturing units, and commercial establishments.',
    features: ['Custom volumes', 'Scheduled deliveries', 'Dedicated account manager'],
  },
  {
    icon: FlaskConical,
    title: 'Laboratory Supply',
    description: 'High-purity distilled water for laboratories, research centers, and medical facilities meeting strict quality standards.',
    features: ['Multiple purity grades', 'Lab-grade certified', 'Regular supply'],
  },
  {
    icon: BatteryCharging,
    title: 'Inverter & Battery Shop Supply',
    description: 'Dedicated supply service for inverter and battery shops across Chennai. Keep your business running smoothly.',
    features: ['All Chennai coverage', 'Bulk discounts', 'Regular supply schedule'],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Convenient Solutions{' '}
            <span className="text-gradient">Tailored to You</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Beyond just supplying water, we provide comprehensive services designed 
            to make your experience seamless and hassle-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl gradient-card border border-border/50 shadow-card hover:shadow-soft transition-all duration-300"
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-5 mb-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-secondary flex items-center justify-center group-hover:gradient-water group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="ml-[84px] flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
