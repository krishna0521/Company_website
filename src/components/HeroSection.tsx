import { Button } from '@/components/ui/button';
import { ArrowRight, Droplets, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-water.jpg';

const WHATSAPP_NUMBER = '919876543210'; // Replace with actual number
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I would like to order distilled water from Krishna Aqua.');

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pure distilled water"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Water Bubbles */}
        <div className="absolute bottom-0 left-[10%] w-4 h-4 rounded-full bg-primary/20 animate-bubble" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-0 left-[30%] w-6 h-6 rounded-full bg-accent/20 animate-bubble" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-[50%] w-3 h-3 rounded-full bg-primary/30 animate-bubble" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-0 left-[70%] w-5 h-5 rounded-full bg-accent/25 animate-bubble" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-[85%] w-4 h-4 rounded-full bg-primary/20 animate-bubble" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm text-secondary-foreground mb-8 animate-fade-up">
            <Droplets className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Premium Quality Distilled Water</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Pure Distilled Water for{' '}
            <span className="text-gradient">Safe & Reliable</span> Use
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Laboratory-grade purity for hospitals, industries, and homes. 
            Trusted by thousands for quality, hygiene, and on-time delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="xl">
                <MessageCircle className="w-5 h-5" />
                Order Now
              </Button>
            </a>
            <a href="#contact">
              <Button variant="heroOutline" size="xl">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '100%', label: 'Pure & Safe' },
              { value: '500+', label: 'Happy Clients' },
              { value: '24/7', label: 'Delivery Service' },
              { value: '9+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
