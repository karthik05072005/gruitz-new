import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import LazySection from "@/components/ui/LazySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WebsiteHealthChecker from "@/components/tools/WebsiteHealthChecker";

const services = [
    { title: "Custom Website Design", description: "Professional website layouts tailored to your brand identity, audience, and business goals." },
    { title: "Responsive Web Development", description: "Mobile-friendly websites that perform seamlessly across desktops, tablets, and smartphones." },
    { title: "CMS Integration", description: "Easy-to-manage websites built on reliable content management systems like WordPress and other scalable platforms." },
    { title: "E-Commerce Website Development", description: "Secure online stores built using platforms such as Shopify, WooCommerce, and custom solutions." },
    { title: "SEO-Ready & Performance Optimization", description: "Clean structure, fast loading speeds, and search-engine-friendly foundations to improve visibility." },
    { title: "Website Redesign & Platform Migration", description: "Modern website revamps and upgrades, including migrations from GoDaddy builders and outdated systems." },
];

const faqs = [
    { q: "How long does it take to build a website?", a: "Most business websites take 3–6 weeks depending on scope, features, and integrations required." },
    { q: "Will my website be mobile-friendly?", a: "Yes. Every website we build is fully responsive and optimized for smooth performance across all devices." },
    { q: "Do you provide ongoing website maintenance?", a: "Yes. We offer structured maintenance plans to ensure your website remains secure, updated, and performing reliably." },
    { q: "Can you redesign my existing website?", a: "Yes. We analyze your current website and improve its design, structure, speed, and overall performance." },
    { q: "Will my website be optimized for SEO?", a: "Yes. We build websites with SEO-friendly structure and best practices to support long-term search visibility." },
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

export default function WebDesign() {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
                <AnimatedBlobs />
                <div className="container-custom relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">Web Design</span>
                        <h1 className="heading-xl mb-6">Professional Web Design and Development Services</h1>
                        <p className="body-lg text-muted-foreground mb-8">Custom website design and development solutions built to improve user experience, increase conversions, and support long-term business growth.</p>
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
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg mb-6">Is Your Website Helping or Hurting Your Business?</h2>
                            <p className="body-md text-muted-foreground leading-relaxed mb-4">An outdated, slow, or poorly structured website can quietly reduce trust and cost you potential customers. If your site is not mobile-friendly, difficult to navigate, or missing clear calls-to-action, visitors may leave before taking action.</p>
                            <p className="body-md text-primary font-medium">Your website should work as your strongest digital asset, not just exist online.</p>
                        </motion.div>
                    </div>
                </section>
            </LazySection>

            {/* Solution Section */}
            <LazySection>
                <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
                    <div className="container-custom max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg mb-6">Websites Designed for Performance and Growth</h2>
                            <p className="body-md text-muted-foreground leading-relaxed mb-4">At Grituz we design and develop websites that combine modern design with clean coding, strong performance foundations, and scalable functionality. Every website is built to be mobile-friendly, search-engine ready, and focused on converting visitors into enquiries or sales.</p>
                            <p className="body-md text-muted-foreground leading-relaxed">Our development process ensures clean code, secure frameworks, and scalable structure, allowing your website to evolve as your business grows. We prioritize clarity, speed, usability, and long-term scalability.</p>
                        </motion.div>
                    </div>
                </section>
            </LazySection>

            {/* Services Grid */}
            <LazySection>
                <section className="section-padding">
                    <div className="container-custom">
                        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg text-gradient mb-4">Our Web Design & Development Services</h2>
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

            {/* Health Checker Tool */}
            <LazySection>
                <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
                    <div className="container-custom">
                        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg mb-4">Free Website Audit & Health Checker</h2>
                            <p className="body-md text-muted-foreground max-w-xl mx-auto">Answer a few quick questions to assess your website's performance and identify improvement opportunities.</p>
                        </motion.div>
                        <WebsiteHealthChecker />
                    </div>
                </section>
            </LazySection>

            {/* FAQ */}
            <LazySection>
                <section className="section-padding">
                    <div className="container-custom max-w-2xl mx-auto">
                        <motion.h2 className="heading-lg text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            Frequently Asked Questions
                        </motion.h2>
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
                                <p className="body-lg text-muted-foreground max-w-2xl mx-auto">Book a free consultation and we'll help you build a website that supports your business goals and attracts the right customers.</p>
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
