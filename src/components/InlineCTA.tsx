import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const InlineCTA = () => {
  return (
    <div className="py-8 md:py-12 flex justify-center px-4">
      <Button
        size="lg"
        className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-primary-foreground font-bold group text-sm md:text-base px-6 md:px-8"
        onClick={() => window.open("https://cal.com/cybrus-inc/call", "_blank")}
      >
        Book a call
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};
