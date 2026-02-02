import { Droplets } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-lg">
                  Krishna <span className="text-primary">Aqua</span>
                </span>
                <span className="text-[10px] text-background/60 uppercase tracking-widest">
                  Distilled Water
                </span>
              </div>
            </a>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Your trusted partner for premium quality distilled water. 
              Serving hospitals, laboratories, and industries since 2017.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>+91 9941473515</li>
              <li>kkrishnaraj0521@gmail.com</li>
              <li>No:32 Mamuthiamman kovil street Noothencherry chennai-600126</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © 2026 Krishna Aqua Distilled Water. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
