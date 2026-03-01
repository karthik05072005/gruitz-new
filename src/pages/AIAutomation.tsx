import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import LazySection from "@/components/ui/LazySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AutomationReadiness from "@/components/tools/AutomationReadiness";

const services = [
    { title: "AI Chatbot Integration", description: "Automated website chat support and lead capture that works 24/7, reducing response times and improving customer experience." },
    { title: "Workflow Automation", description: "Automate repetitive internal processes to save time, reduce errors, and free your team for higher-value work." },
    { title: "CRM & Email Automation", description: "Streamlined customer communication systems that nurture leads and maintain engagement automatically." },
    { title: "Process Optimization", description: "Identify inefficiencies in your current workflows and implement intelligent systems to improve operational performance." },
    { title: "System Integration", description: "Connect your tools and platforms — CRM, website, email, and payment systems — for smoother, unified workflows." },
];

const faqs = [
    { q: "What is AI automation in simple terms?", a: "AI automation uses intelligent tools to handle repetitive tasks, improve response times, and connect systems so your business operates more efficiently without constant manual effort." },
    { q: "Is AI automation only for large enterprises?", a: "No. Modern AI tools are scalable and practical for small and mid-sized businesses. Automation can start small and grow as your operations expand." },
    { q: "Will AI automation replace my employees?", a: "No. Automation supports teams by reducing repetitive work, allowing employees to focus on higher-value tasks like strategy, customer relationships, and growth initiatives." },
    { q: "What types of processes can be automated?", a: "Common areas include lead capture, customer follow-ups, email marketing, CRM updates, appointment scheduling, chatbot support, and internal workflow tracking." },
    { q: "How long does it take to implement AI automation?", a: "Simple automation systems can be implemented within weeks. More advanced integrations may take longer depending on complexity and existing systems." },
    { q: "Is AI automation expensive?", a: "Costs depend on scope, but many automation solutions provide measurable time savings and operational efficiency that outweigh implementation investment." },
    { q: "Do I need technical knowledge to use automation tools?", a: "No. We set up systems that are user-friendly and provide guidance so your team can manage and monitor automation easily." },
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

export default function AIAutomation() {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
                <AnimatedBlobs />
                <div className="container-custom relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">AI Automation</span>
                        <h1 className="heading-xl mb-6">AI Automation Services for Smarter Business Operations</h1>
                        <p className="body-lg text-muted-foreground mb-8">Practical AI and automation solutions that save time, improve customer response, and streamline daily workflows.</p>
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
                            <h2 className="heading-lg mb-6">Are Manual Tasks Slowing Down Your Business?</h2>
                            <p className="body-md text-muted-foreground leading-relaxed mb-4">If your team spends hours on repetitive tasks, delayed responses, or disconnected systems, productivity and growth suffer.</p>
                            <p className="body-md text-primary font-medium">Automation reduces errors and increases efficiency.</p>
                        </motion.div>
                    </div>
                </section>
            </LazySection>

            {/* Solution */}
            <LazySection>
                <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
                    <div className="container-custom max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg mb-6">Smart Automation Built for Real Business Needs</h2>
                            <p className="body-md text-muted-foreground leading-relaxed">We implement AI-powered tools and workflow automation systems that improve efficiency without unnecessary complexity. Our goal is to identify the highest-impact automation opportunities and implement them in a way that's practical, manageable, and scalable.</p>
                        </motion.div>
                    </div>
                </section>
            </LazySection>

            {/* Services */}
            <LazySection>
                <section className="section-padding">
                    <div className="container-custom">
                        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg text-gradient mb-4">Our AI Automation Services</h2>
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

            {/* Automation Readiness Tool */}
            <LazySection>
                <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
                    <div className="container-custom">
                        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="heading-lg mb-4">Free Automation Readiness Assessment</h2>
                            <p className="body-md text-muted-foreground max-w-xl mx-auto">Answer a few quick questions to identify your top automation opportunities and where to start.</p>
                        </motion.div>
                        <AutomationReadiness />
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
                                <h2 className="heading-lg text-gradient">Ready to Improve Efficiency?</h2>
                                <p className="body-lg text-muted-foreground max-w-2xl mx-auto">Book a free consultation to explore automation solutions tailored to your business workflows.</p>
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
