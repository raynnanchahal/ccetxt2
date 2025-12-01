import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const InlineCTA = () => {
  return (
    <div className="py-12 flex justify-center">
      <Button
        size="lg"
        className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-primary-foreground font-bold group"
        onClick={() => window.open("https://cal.com/cybrus-inc/call", "_blank")}
      >
        Book a call
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};
