import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import LazySection from "@/components/ui/LazySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
    { title: "Regular Updates & Maintenance", description: "Ongoing updates to core systems, plugins, themes, and frameworks to maintain compatibility, security, and smooth functionality." },
    { title: "Security Monitoring & Protection", description: "Continuous monitoring for vulnerabilities, malware threats, and unauthorized access to protect your website and customer data." },
    { title: "Performance Optimization", description: "Speed improvements, database cleanup, and technical enhancements to maintain fast loading times and stable performance." },
    { title: "Backup & Recovery Systems", description: "Automated backups and secure storage solutions to ensure your website can be restored quickly in case of unexpected issues." },
    { title: "Technical Troubleshooting & Support", description: "Prompt resolution of technical errors, broken features, display issues, or functionality disruptions." },
];

const faqs = [
    { q: "Why is website maintenance important?", a: "Regular maintenance prevents security risks, improves performance, and ensures compatibility with updates. Without maintenance, websites become vulnerable over time." },
    { q: "How often should a website be updated?", a: "Core updates and plugin checks should be monitored regularly. Most websites require ongoing monthly maintenance to stay secure and stable." },
    { q: "Do you provide emergency support?", a: "Yes. We assist with urgent issues such as website downtime, security breaches, or technical errors that require immediate attention." },
    { q: "Will maintenance affect my website's performance?", a: "Proper maintenance improves performance. Updates and optimization ensure your website runs faster and more reliably." },
    { q: "Do you offer support for websites not built by Grituz?", a: "Yes. We provide maintenance and support for existing websites after conducting an initial assessment." },
    { q: "What happens if my website gets hacked?", a: "We assist with cleanup, restoration from backups, vulnerability fixes, and implementation of stronger security measures to prevent future incidents." },
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

export default function WebSupport() {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
                <AnimatedBlobs />
                <div className="container-custom relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">Web Support</span>
                        <h1 className="heading-xl mb-6">Website Support and Maintenance Services</h1>
                        <p className="body-lg text-muted-foreground mb-8">Proactive website maintenance and technical support to ensure security, performance, and uninterrupted functionality.</p>
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
                            <h2 className="heading-lg mb-6">Is Your Website Secure and Updated?</h2>
                            <p className="body-md text-muted-foreground leading-relaxed mb-4">Websites require continuous care. Outdated plugins, neglected updates, security vulnerabilities, and slow performance can expose your business to downtime, data risks, and lost opportunities.</p>
                            <p className="body-md text-primary font-medium">Without regular monitoring and maintenance, even well-built websites can gradually decline in performance and reliability.</p>
                        </motion.div>
                    </div>
                </section>
            </LazySection>

            {/* Solution */}
            <LazySection>
                <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
                    <div className="container-custom max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg mb-6">Reliable Website Maintenance and Technical Support</h2>
                            <p className="body-md text-muted-foreground leading-relaxed mb-4">At Grituz, we provide structured website support services designed to keep your website secure, updated, and performing efficiently. Our proactive approach ensures issues are identified early and resolved quickly, minimizing risk and disruption.</p>
                            <p className="body-md text-primary font-medium">We help you focus on running your business while we handle the technical upkeep.</p>
                        </motion.div>
                    </div>
                </section>
            </LazySection>

            {/* Services */}
            <LazySection>
                <section className="section-padding">
                    <div className="container-custom">
                        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg text-gradient mb-4">Our Website Support Services</h2>
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
                                <h2 className="heading-lg text-gradient">Need Ongoing Website Support?</h2>
                                <p className="body-lg text-muted-foreground max-w-2xl mx-auto">Book a free consultation to ensure your website remains secure, updated, and performing at its best.</p>
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
