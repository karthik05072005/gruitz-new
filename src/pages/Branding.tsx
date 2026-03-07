import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Palette } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import LazySection from "@/components/ui/LazySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const brandingServices = [
    {
        title: "Logo Design",
        description: "Custom logos designed to reflect your brand personality and create a lasting first impression."
    },
    {
        title: "Brand Identity Systems",
        description: "Comprehensive color palettes, typography, and visual style guidelines for total brand consistency."
    },
    {
        title: "Brand Messaging Framework",
        description: "Developing a clear brand voice and strategic positioning statements that resonate with your audience."
    },
    {
        title: "Brand Strategy Development",
        description: "Defining your target audience, value proposition, and differentiation to win in your market."
    },
    {
        title: "Brand Refresh & Repositioning",
        description: "Modernizing and realigning existing brand identities to stay relevant in an evolving digital landscape."
    },
];

const faqs = [
    {
        q: "How long does branding take?",
        a: "A typical branding project takes 2–4 weeks depending on the scope, including research, design, and revisions."
    },
    {
        q: "Can you redesign an existing logo?",
        a: "Yes. We offer both a brand refresh for minor updates and complete rebranding for a total visual transformation."
    },
    {
        q: "Do you provide brand guidelines?",
        a: "Yes. We provide comprehensive brand guidelines (brand book) that document your colors, fonts, and usage rules."
    },
];

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b" style={{ borderColor: 'rgba(139,92,246,0.15)' }}>
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center py-5 text-left text-foreground font-medium hover:text-primary transition-colors"
            >
                <span>{q}</span>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                </motion.div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <p className="text-muted-foreground text-sm leading-relaxed pb-5">{a}</p>
            </motion.div>
        </div>
    );
}

export default function Branding() {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
                <AnimatedBlobs />
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">Branding Services</span>
                        <h1 className="heading-xl mb-6">Branding Services to Build Strong and Memorable Identities</h1>
                        <p className="body-lg text-muted-foreground mb-8">
                            Strategic branding solutions that define your positioning, strengthen recognition,
                            and create consistency across every customer touchpoint.
                        </p>
                        <Button variant="hero" size="lg" className="bg-gradient-cta" asChild>
                            <Link to="/contact">Book a Free Consultation <ArrowRight className="w-5 h-5 ml-2" /></Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Problem Section */}
            <LazySection>
                <section className="section-padding">
                    <div className="container-custom max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="heading-lg mb-6 text-white px-2">Does Your Brand Clearly Communicate Who You Are?</h2>
                            <p className="body-md text-muted-foreground leading-relaxed mb-6">
                                If your logo feels inconsistent, your messaging lacks clarity, or your visual identity
                                does not reflect your business values, customers may struggle to trust or remember your brand.
                            </p>
                            <p className="text-xl text-primary font-semibold">
                                Strong branding builds credibility and long-term recognition.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </LazySection>

            {/* Solution Section */}
            <LazySection>
                <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
                    <div className="container-custom max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="heading-lg mb-6">Strategic Branding That Creates Impact</h2>
                            <p className="body-md text-muted-foreground leading-relaxed mb-4">
                                At Grituz, we develop brand identities rooted in strategy, not just design.
                                We align your visual identity, messaging, and positioning to create a consistent
                                brand presence that resonates with your target audience.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </LazySection>

            {/* Services Grid */}
            <LazySection>
                <section className="section-padding">
                    <div className="container-custom">
                        <motion.div
                            className="text-center mb-14"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="heading-lg text-gradient mb-4">Our Branding Services</h2>
                        </motion.div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {brandingServices.map((s, i) => (
                                <motion.div
                                    key={s.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    whileHover={{ y: -4 }}
                                    className="glass-card p-6 h-full hover:shadow-glow transition-all duration-300"
                                    style={{ borderColor: 'rgba(139,92,246,0.15)' }}
                                >
                                    <Palette className="w-6 h-6 text-primary mb-3" />
                                    <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </LazySection>

            {/* FAQ */}
            <LazySection>
                <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
                    <div className="container-custom max-w-2xl mx-auto">
                        <motion.h2
                            className="heading-lg text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
                    </div>
                </section>
            </LazySection>

            {/* Final CTA */}
            <LazySection>
                <section className="section-padding">
                    <div className="container-custom">
                        <motion.div
                            className="glass-card p-12 text-center max-w-4xl mx-auto hover:shadow-glow transition-all duration-300 relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
                            <div className="relative z-10 space-y-5">
                                <h2 className="heading-lg text-gradient">Ready to Strengthen Your Brand?</h2>
                                <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                                    Book a free consultation and build a brand that stands out.
                                </p>
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
