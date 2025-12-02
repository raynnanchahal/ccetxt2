import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Cybrus Inc.
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-3">
          <Button
            size="sm"
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-primary-foreground font-bold text-xs px-3"
            onClick={() => window.open("https://cal.com/cybrus-inc/call", "_blank")}
          >
            <Calendar className="w-3 h-3 mr-1" />
            Book
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-xl">
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  to="/" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/case-studies" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Case Studies
                </Link>
                <Link 
                  to="/services" 
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Services
                </Link>
                <Button
                  className="mt-4 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-primary-foreground font-bold"
                  onClick={() => {
                    window.open("https://cal.com/cybrus-inc/call", "_blank");
                    setOpen(false);
                  }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Call
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
