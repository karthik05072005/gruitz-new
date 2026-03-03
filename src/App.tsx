import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CursorGlow from "@/components/ui/CursorGlow";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import GetQuote from "./pages/GetQuote";
import NotFound from "./pages/NotFound";
// Service Landing Pages
import WebDesign from "./pages/WebDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import WebSupport from "./pages/WebSupport";
import AIAutomation from "./pages/AIAutomation";
import CustomSoftware from "./pages/CustomSoftware";
// Blog
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";

const queryClient = new QueryClient();

// Fixes pages opening at bottom/middle on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const transition = {
    duration: shouldReduceMotion ? 0 : 0.35,
    ease: [0.22, 1, 0.36, 1],
  } as const;

  const pageMotionProps = shouldReduceMotion
    ? {
      initial: false,
      animate: { opacity: 1 },
      exit: { opacity: 1 },
      transition,
    }
    : {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -12 },
      transition,
    };

  const wrap = (node: ReactNode) => (
    <motion.div {...pageMotionProps} className="min-h-[calc(100vh-80px)]">
      {node}
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* Core Pages */}
        <Route path="/" element={wrap(<Index />)} />
        <Route path="/about" element={wrap(<About />)} />
        <Route path="/services" element={wrap(<Services />)} />
        <Route path="/careers" element={wrap(<Careers />)} />
        <Route path="/contact" element={wrap(<Contact />)} />
        <Route path="/get-quote" element={wrap(<GetQuote />)} />
        {/* Service Landing Pages */}
        <Route path="/web-design" element={wrap(<WebDesign />)} />
        <Route path="/digital-marketing" element={wrap(<DigitalMarketing />)} />
        <Route path="/web-support" element={wrap(<WebSupport />)} />
        <Route path="/ai-automation" element={wrap(<AIAutomation />)} />
        <Route path="/custom-software" element={wrap(<CustomSoftware />)} />
        {/* Blog */}
        <Route path="/blog" element={wrap(<Blog />)} />
        <Route path="/blog/ai-website-builder-vs-web-design-agency" element={wrap(<BlogPost1 />)} />
        <Route path="/blog/digital-marketing-trends-2026" element={wrap(<BlogPost2 />)} />
        <Route path="/blog/automation-save-business-time" element={wrap(<BlogPost3 />)} />
        {/* Catch-all */}
        <Route path="*" element={wrap(<NotFound />)} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CursorGlow />
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
