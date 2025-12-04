import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cybrus Inc.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Creative cybersecurity solutions that think different and defend smarter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@cybrus.in" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@cybrus.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/917983901906" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Gurugram, India
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Linkedin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="https://in.linkedin.com/company/cybrusinc" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links - Horizontal */}
        <div className="border-t border-border/50 pt-6 md:pt-8 mb-6">
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/disclaimer" className="hover:text-primary transition-colors">
              Disclaimer
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/acceptable-use-policy" className="hover:text-primary transition-colors">
              Acceptable Use Policy
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/access-authorization-policy" className="hover:text-primary transition-colors">
              Access & Authorization Policy
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/cookies-policy" className="hover:text-primary transition-colors">
              Cookies Policy
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/disclosure-policy" className="hover:text-primary transition-colors">
              Disclosure Policy
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/refund-cancellation-policy" className="hover:text-primary transition-colors">
              Refund & Cancellation Policy
            </Link>
          </div>
        </div>

        {/* Facebook Disclaimer */}
        <div className="mb-6">
          <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto px-4">
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cybrus Incorporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
