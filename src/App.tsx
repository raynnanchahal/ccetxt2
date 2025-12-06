import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import AcceptableUsePolicy from "./pages/AcceptableUsePolicy";
import AccessAuthorizationPolicy from "./pages/AccessAuthorizationPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import DisclosurePolicy from "./pages/DisclosurePolicy";
import RefundCancellationPolicy from "./pages/RefundCancellationPolicy";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* IMPORTANT FOR GITHUB PAGES */}
      <BrowserRouter basename="/ccetxt2">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/acceptable-use-policy" element={<AcceptableUsePolicy />} />
          <Route path="/access-authorization-policy" element={<AccessAuthorizationPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/disclosure-policy" element={<DisclosurePolicy />} />
          <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* MUST stay last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
