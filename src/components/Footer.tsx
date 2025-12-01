import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
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

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/acceptable-use-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Acceptable Use Policy
                </Link>
              </li>
              <li>
                <Link to="/access-authorization-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Access & Authorization Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link to="/disclosure-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Disclosure Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-cancellation-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Refund & Cancellation Policy
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
            </ul>
          </div>
        </div>

        {/* Facebook Disclaimer */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
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
