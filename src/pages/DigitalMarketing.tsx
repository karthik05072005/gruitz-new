import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import LazySection from "@/components/ui/LazySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DigitalMarketingAudit from "@/components/tools/DigitalMarketingAudit";

const services = [
    { title: "Search Engine Optimization (SEO)", description: "Improve search rankings and increase organic traffic through keyword research, on-page optimization, and technical SEO improvements." },
    { title: "Pay-Per-Click Advertising (PPC)", description: "Run targeted Google Ads and paid campaigns designed to generate qualified leads and maximize return on investment." },
    { title: "Social Media Marketing", description: "Build brand visibility and engagement with structured content strategies across major social platforms." },
    { title: "Content Marketing", description: "Create SEO-focused content that attracts traffic, builds authority, and supports long-term growth." },
    { title: "Email Marketing", description: "Automated campaigns designed to nurture leads, maintain engagement, and increase customer retention." },
    { title: "Analytics & Performance Tracking", description: "Track traffic, conversions, and ROI to continuously refine and improve marketing performance." },
];

const faqs = [
    { q: "How long does digital marketing take to show results?", a: "SEO typically takes 3–6 months for measurable growth, while paid ads can generate faster results." },
    { q: "Do you offer global digital marketing services?", a: "Yes. We work with businesses across industries and geographic locations worldwide." },
    { q: "What is included in your SEO services?", a: "Keyword research, on-page optimization, technical improvements, and ongoing performance monitoring." },
    { q: "How much should I invest in digital marketing?", a: "Budget depends on your goals and competition. We provide structured recommendations after consultation." },
    { q: "Can you improve my existing campaigns?", a: "Yes. We audit and optimize SEO, PPC, and social campaigns to improve results." },
    { q: "How do you measure marketing success?", a: "We track traffic, lead quality, conversions, and return on investment." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b" style={{ borderColor: 'rgba(139,92,246,0.15)' }}>
            <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-5 text-left text-foreground font-medium hover:text-primary transition-colors">
                <span>{q}</span>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                </motion.div>
            </button>
            <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <p className="text-muted-foreground text-sm leading-relaxed pb-5">{a}</p>
            </motion.div>
        </div>
    );
}

export default function DigitalMarketing() {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
                <AnimatedBlobs />
                <div className="container-custom relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">Digital Marketing</span>
                        <h1 className="heading-xl mb-6">Digital Marketing Services for Growing Businesses</h1>
                        <p className="body-lg text-muted-foreground mb-8">SEO, social media marketing, promotional campaigns, and content strategies designed to increase visibility, generate qualified leads, and drive measurable business growth.</p>
                        <Button variant="hero" size="lg" className="bg-gradient-cta" asChild>
                            <Link to="/contact">Book a Free Consultation <ArrowRight className="w-5 h-5 ml-2" /></Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Problem */}
            <LazySection>
                <section className="section-padding">
                    <div className="container-custom max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg mb-6">Struggling to Generate Consistent Online Leads?</h2>
                            <p className="body-md text-muted-foreground leading-relaxed mb-4">If your website isn't ranking on Google, your ads aren't converting, or your social media feels inconsistent, you're not alone. Many businesses invest in digital marketing without a clear strategy, resulting in wasted budgets and unpredictable results.</p>
                            <p className="body-md text-primary font-medium">Without structured planning, tracking, and optimization, online growth becomes guesswork.</p>
                        </motion.div>
                    </div>
                </section>
            </LazySection>

            {/* Solution */}
            <LazySection>
                <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
                    <div className="container-custom max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg mb-6">Strategic Digital Marketing That Delivers Results</h2>
                            <p className="body-md text-muted-foreground leading-relaxed mb-4">At Grituz, we build data-driven digital marketing systems personalized to your business goals. Instead of running isolated campaigns, we combine SEO, paid advertising, content marketing, and analytics into a focused strategy designed to attract the right audience and convert them into customers.</p>
                            <p className="body-md text-primary font-medium">Every decision is backed by performance insights, not assumptions.</p>
                        </motion.div>
                    </div>
                </section>
            </LazySection>

            {/* Services */}
            <LazySection>
                <section className="section-padding">
                    <div className="container-custom">
                        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg text-gradient mb-4">Our Digital Marketing Services</h2>
                        </motion.div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((s, i) => (
                                <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -4 }}
                                    className="glass-card p-6 hover:shadow-glow transition-all duration-300" style={{ borderColor: 'rgba(139,92,246,0.15)' }}>
                                    <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
                                    <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </LazySection>

            {/* Audit Tool */}
            <LazySection>
                <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
                    <div className="container-custom">
                        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg mb-4">Free Digital Marketing Audit</h2>
                            <p className="body-md text-muted-foreground max-w-xl mx-auto">Answer a few quick questions to evaluate your current digital marketing performance and identify areas for improvement.</p>
                        </motion.div>
                        <DigitalMarketingAudit />
                    </div>
                </section>
            </LazySection>

            {/* FAQ */}
            <LazySection>
                <section className="section-padding">
                    <div className="container-custom max-w-2xl mx-auto">
                        <motion.h2 className="heading-lg text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Frequently Asked Questions</motion.h2>
                        {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
                    </div>
                </section>
            </LazySection>

            {/* CTA */}
            <LazySection>
                <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
                    <div className="container-custom">
                        <motion.div className="glass-card p-12 text-center max-w-4xl mx-auto hover:shadow-glow transition-all duration-300 relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
                            <div className="relative z-10 space-y-5">
                                <h2 className="heading-lg text-gradient">Not Sure Where to Start?</h2>
                                <p className="body-lg text-muted-foreground max-w-2xl mx-auto">Book a free consultation and we'll help you build the right digital marketing strategy for your business goals.</p>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant="hero" size="lg" className="bg-gradient-cta hover:shadow-glow" asChild>
                                        <Link to="/contact">Book a Free Consultation <ArrowRight className="w-5 h-5 ml-2" /></Link>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </LazySection>
        </Layout>
    );
}
