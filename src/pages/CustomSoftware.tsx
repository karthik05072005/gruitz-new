import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import LazySection from "@/components/ui/LazySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
    { title: "Web Application Development", description: "Custom web-based applications designed to automate processes, manage data, and improve operational visibility." },
    { title: "Business Management Systems", description: "Internal software solutions for managing tasks, teams, reporting, inventory, customer data, or project workflows." },
    { title: "System Integration", description: "Connect your website, CRM, payment gateways, marketing tools, and internal platforms into one unified ecosystem." },
    { title: "Custom Feature Development", description: "Develop unique functionalities specific to your business model that cannot be achieved through standard platforms." },
    { title: "Scalable System Planning", description: "Software structured for long-term growth, allowing you to expand features, users, and integrations as your business scales." },
];

const faqs = [
    { q: "What is custom software development?", a: "Custom software development involves building applications specifically designed for your business processes instead of using pre-built generic solutions." },
    { q: "How do I know if my business needs custom software?", a: "If you rely heavily on spreadsheets, manual data entry, disconnected tools, or frequent workarounds, custom software may significantly improve efficiency." },
    { q: "Is custom software expensive?", a: "Investment depends on scope and complexity. However, well-built software often reduces operational costs and increases efficiency over time." },
    { q: "How long does custom software development take?", a: "Timelines vary depending on features and integrations. Smaller systems may take weeks, while larger platforms require structured development phases." },
    { q: "Will the software be scalable?", a: "Yes. We build systems designed to accommodate business growth, additional users, and future feature expansions." },
    { q: "Do you provide ongoing support after development?", a: "Yes. We offer maintenance, updates, and system improvements to ensure long-term reliability and performance." },
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

export default function CustomSoftware() {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
                <AnimatedBlobs />
                <div className="container-custom relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">Custom Software</span>
                        <h1 className="heading-xl mb-6">Custom Software Development for Modern Businesses</h1>
                        <p className="body-lg text-muted-foreground mb-8">Specialized web applications and business systems designed to enhance efficiency and operational control.</p>
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
                            <h2 className="heading-lg mb-6">Are Off-the-Shelf Tools Limiting Your Growth?</h2>
                            <p className="body-md text-muted-foreground leading-relaxed mb-4">Generic software often forces businesses to adjust their processes to fit the tool — not the other way around. This can lead to manual workarounds, data duplication, inefficiencies, and limited scalability.</p>
                            <p className="body-md text-primary font-medium">When your systems don't align with your operations, growth becomes harder to manage.</p>
                        </motion.div>
                    </div>
                </section>
            </LazySection>

            {/* Solution */}
            <LazySection>
                <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
                    <div className="container-custom max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg mb-6">Software Designed Around Your Business</h2>
                            <p className="body-md text-muted-foreground leading-relaxed mb-4">At Grituz, we develop secure and scalable software solutions built around your actual workflows. Instead of adapting your business to generic platforms, we create systems that match your operational needs, improve internal coordination, and provide better control over data and performance.</p>
                            <p className="body-md text-primary font-medium">Our goal is to simplify complexity and build software that supports your business as it evolves.</p>
                        </motion.div>
                    </div>
                </section>
            </LazySection>

            {/* Services */}
            <LazySection>
                <section className="section-padding">
                    <div className="container-custom">
                        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg text-gradient mb-4">Our Custom Software Services</h2>
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

            {/* FAQ */}
            <LazySection>
                <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
                    <div className="container-custom max-w-2xl mx-auto">
                        <motion.h2 className="heading-lg text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Frequently Asked Questions</motion.h2>
                        {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
                    </div>
                </section>
            </LazySection>

            {/* CTA */}
            <LazySection>
                <section className="section-padding">
                    <div className="container-custom">
                        <motion.div className="glass-card p-12 text-center max-w-4xl mx-auto hover:shadow-glow transition-all duration-300 relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
                            <div className="relative z-10 space-y-5">
                                <h2 className="heading-lg text-gradient">Need a Custom Solution?</h2>
                                <p className="body-lg text-muted-foreground max-w-2xl mx-auto">Book a free consultation to explore how custom software can streamline your operations and support sustainable growth.</p>
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
