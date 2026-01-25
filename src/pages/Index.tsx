import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClientLogos from "@/components/home/ClientLogos";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTABanner from "@/components/home/CTABanner";
import LazySection from "@/components/ui/LazySection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      <LazySection>
        <ClientLogos />
      </LazySection>
      
      <LazySection delay={0.1}>
        <ServicesSection />
      </LazySection>
      
      <LazySection delay={0.1}>
        <AboutPreview />
      </LazySection>
      
      <LazySection delay={0.1}>
        <WhyChooseUs />
      </LazySection>
      
      <LazySection delay={0.1}>
        <TestimonialsSection />
      </LazySection>
      
      <LazySection delay={0.1}>
        <PricingSection />
      </LazySection>
      
      <LazySection delay={0.1}>
        <FAQSection />
      </LazySection>
      
      <LazySection delay={0.1}>
        <CTABanner />
      </LazySection>
    </Layout>
  );
};

export default Index;
