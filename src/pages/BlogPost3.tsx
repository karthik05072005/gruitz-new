import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
    { q: "How does automation save business time?", a: "Automation handles repetitive tasks like data entry and follow-ups, allowing teams to focus on higher-value work." },
    { q: "Is automation expensive to implement?", a: "Costs vary, but efficiency gains and reduced errors often justify the investment quickly." },
    { q: "Can small businesses benefit from automation?", a: "Yes. Even basic CRM integration and email workflows improve productivity significantly." },
    { q: "Does automation replace employees?", a: "No. It supports teams by removing repetitive tasks, freeing people for creative and strategic work." },
    { q: "Where should a business start with automation?", a: "Start with lead handling, CRM integration, and customer communication workflows." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b" style={{ borderColor: 'rgba(139,92,246,0.15)' }}>
            <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-4 text-left text-foreground font-medium hover:text-primary transition-colors text-sm">
                <span>{q}</span>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4 text-primary flex-shrink-0 ml-4" />
                </motion.div>
            </button>
            <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <p className="text-muted-foreground text-sm leading-relaxed pb-4">{a}</p>
            </motion.div>
        </div>
    );
}

const automationAreas = [
    { title: "Lead Handling", body: "Automated systems assign new leads instantly, send confirmation emails, and notify teams without delay. This reduces response time and increases conversion rates." },
    { title: "Customer Communication", body: "Email automation nurtures prospects automatically based on behavior. Instead of manual follow-ups, structured workflows maintain engagement without constant manual effort." },
    { title: "Internal Task Management", body: "Workflow automation tools track task progress, reminders, and deadlines. Managers gain visibility without constant meetings or check-ins." },
    { title: "Data Integration", body: "Connecting CRM, marketing platforms, and payment systems eliminates duplicate data entry and reduces administrative burden significantly." },
];

const startingPoints = [
    "Automate lead responses",
    "Integrate CRM with website forms",
    "Use scheduled email workflows",
    "Automate reporting dashboards",
    "Implement chatbot support for common queries",
];

export default function BlogPost3() {
    return (
        <Layout>
            <article className="pt-32 pb-20">
                <div className="container-custom max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
                        <Link to="/blog" className="text-primary text-sm hover:underline flex items-center gap-1 mb-6">← Back to Blog</Link>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-purple-400 bg-purple-400/10 mb-4">AI Automation</span>
                        <h1 className="heading-xl mb-6 leading-tight">How Automation Can Save Your Business Time and Reduce Costs</h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />February 10, 2026</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />6 min read</span>
                        </div>
                    </motion.div>

                    {/* Intro */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-5 mb-12">
                        <p className="body-md text-muted-foreground leading-relaxed">Most businesses do not realize how much time they lose to repetitive work. Manual data entry, delayed responses, scattered systems, and inefficient follow-ups quietly drain productivity. When leaders examine operational inefficiencies closely, they begin to understand how automation can save your business time and reduce costs in practical, measurable ways.</p>
                        <p className="body-md text-primary font-medium">Automation is not about replacing people. It is about removing unnecessary friction.</p>
                    </motion.div>

                    {/* Where Businesses Lose Time */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Where Businesses Lose Time</h2>
                        <div className="glass-card p-6" style={{ borderColor: 'rgba(139,92,246,0.15)' }}>
                            <p className="text-muted-foreground text-sm leading-relaxed">Consider a mid-sized service firm. Leads arrive through email. Someone manually checks inboxes. Data gets entered into spreadsheets. Follow-ups are inconsistent. Reports take hours to compile. This pattern is common. Manual workflows increase human error and reduce response speed.</p>
                        </div>
                    </motion.div>

                    {/* How Automation Improves Efficiency */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-6">How Automation Improves Efficiency</h2>
                        <div className="space-y-5">
                            {automationAreas.map((area, i) => (
                                <motion.div key={area.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className="flex gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-primary font-bold text-xs">{i + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-bold mb-2">{area.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{area.body}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Cost Reduction */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Cost Reduction Through Automation</h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">Savings occur through reduced administrative hours, fewer operational errors, faster lead conversion, and improved reporting efficiency. The impact compounds over time. Businesses often recover automation investment through efficiency gains within months.</p>
                    </motion.div>

                    {/* Practical Starting Points */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="glass-card p-6 mb-12" style={{ borderColor: 'rgba(139,92,246,0.15)' }}>
                        <h2 className="text-foreground font-bold text-xl mb-4">Practical Starting Points</h2>
                        <ul className="space-y-2">
                            {startingPoints.map(step => (
                                <li key={step} className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary mt-1">→</span>{step}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Conclusion */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5 mb-12">
                        <h2 className="text-2xl font-bold text-foreground">Conclusion</h2>
                        <p className="body-md text-muted-foreground leading-relaxed">Understanding how automation can save your business time and reduce costs is about identifying inefficiencies and addressing them systematically. Automation increases clarity, reduces friction, and supports growth without increasing headcount unnecessarily.</p>
                    </motion.div>

                    {/* FAQ */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
                        {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
                    </motion.div>

                    {/* CTA */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="glass-card p-8 text-center relative overflow-hidden" style={{ borderColor: 'rgba(139,92,246,0.2)' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
                        <div className="relative z-10">
                            <h3 className="heading-md text-gradient mb-3">Ready to Automate Your Business?</h3>
                            <p className="text-muted-foreground text-sm mb-6">Explore our AI automation services and identify hidden time savings in your operations.</p>
                            <Button variant="hero" asChild className="bg-gradient-cta">
                                <Link to="/ai-automation">Explore AI Automation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </article>
        </Layout>
    );
}
