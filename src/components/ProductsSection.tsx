import { FlaskConical, Hospital, Battery, Factory, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    icon: FlaskConical,
    title: 'Laboratory Use',
    description: 'Ultra-pure distilled water for scientific experiments, chemical analysis, and research applications.',
    sizes: ['500ml', '1L', '5L', '20L'],
    highlight: true,
  },
  {
    icon: Hospital,
    title: 'Hospitals & Clinics',
    description: 'Medical-grade distilled water for autoclaves, medical equipment, and patient care.',
    sizes: ['1L', '5L', '20L', 'Bulk'],
    highlight: false,
  },
  {
    icon: Battery,
    title: 'Batteries & Inverters',
    description: 'Extend the life of your batteries and inverters with our mineral-free distilled water.',
    sizes: ['1L', '5L', '20L'],
    highlight: false,
  },
  {
    icon: Factory,
    title: 'Industrial Use',
    description: 'Bulk supply for manufacturing, cooling systems, and industrial processes.',
    sizes: ['20L', '50L', 'Bulk'],
    highlight: true,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-32 gradient-hero">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Distilled Water for Every{' '}
            <span className="text-gradient">Application</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From laboratories to homes, we provide tailored solutions in various packaging 
            sizes to meet your specific requirements.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group relative p-6 rounded-2xl bg-background border transition-all duration-300 hover:-translate-y-2 hover:shadow-soft ${
                product.highlight ? 'border-primary/30 shadow-glow' : 'border-border/50 shadow-card'
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                product.highlight ? 'gradient-water shadow-glow' : 'bg-secondary'
              }`}>
                <product.icon className={`w-7 h-7 ${product.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Sizes */}
              <div className="flex flex-wrap gap-2 mb-5">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {size}
                  </span>
                ))}
              </div>

              {/* Learn More */}
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Get Quote
                <Package className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Custom Order CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Need custom packaging or bulk quantities? We've got you covered.
          </p>
          <Button size="lg" variant="outline">
            Request Custom Order
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
