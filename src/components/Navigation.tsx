import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Cybrus Inc.
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Homepage
          </Link>
          <Link 
            to="/case-studies" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Case Studies
          </Link>
          <Button
            size="sm"
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-primary-foreground font-bold"
            onClick={() => window.open("https://cal.com/cybrus-inc/call", "_blank")}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
