import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
    { q: "Is an AI website builder enough for a small business?", a: "For very early-stage businesses with simple needs, an AI builder can provide a basic online presence. However, when growth, SEO, or integrations matter, an agency provides strategic depth." },
    { q: "Which is better for SEO, AI website builder or web design agency?", a: "Agencies typically provide stronger SEO foundations through structured keyword planning and technical optimization. AI builders offer basic SEO features but limited strategic depth." },
    { q: "Are web design agencies worth the cost?", a: "If your website directly impacts revenue, lead generation, or brand perception, professional design often justifies the investment. The value lies in performance, not just aesthetics." },
    { q: "Can AI replace web designers completely?", a: "AI assists in layout and content generation, but it does not replace strategic thinking, user psychology, or business alignment provided by experienced designers." },
    { q: "How do I decide between AI Website Builder vs Web Design Agency?", a: "Assess your long-term goals, technical needs, budget, and growth plans. If your website plays a central role in operations or marketing, an agency is usually the safer long-term choice." },
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

export default function BlogPost1() {
    return (
        <Layout>
            <article className="pt-32 pb-20">
                <div className="container-custom max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
                        <Link to="/blog" className="text-primary text-sm hover:underline flex items-center gap-1 mb-6">
                            ← Back to Blog
                        </Link>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-blue-400 bg-blue-400/10 mb-4">Web Design</span>
                        <h1 className="heading-xl mb-6 leading-tight">AI Website Builder vs Web Design Agency</h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />February 28, 2026</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />8 min read</span>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="prose-dark max-w-none space-y-6">
                        <p className="body-md text-muted-foreground leading-relaxed">A business owner recently told me, "I built my website in one evening using an AI tool. It looks fine. But it is not bringing enquiries." That sentence captures the real dilemma behind AI Website Builder vs Web Design Agency. The issue is rarely about how fast you can launch. It is about whether your website actually works for your business.</p>

                        <p className="body-md text-muted-foreground leading-relaxed">Many small and mid-sized companies are tempted by AI website builders. They promise speed, low cost, and simplicity. On the other side, a web design agency offers strategy, customization, and technical depth. Choosing between them is not just a design decision. It is a business decision.</p>

                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Understanding AI Website Builders</h2>
                        <p className="body-md text-muted-foreground leading-relaxed">AI website builders use automated tools to generate layouts, content suggestions, and structure based on a few inputs. You answer questions about your business, choose a style, and the system builds a site in minutes. For early-stage startups, solo consultants, or local service providers testing an idea, this can be useful. However, AI tools rely on templates and pattern-based logic. They do not deeply understand your positioning, your customer psychology, or your long-term growth plan. They generate a structure, not a strategy.</p>

                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What a Web Design Agency Actually Does</h2>
                        <p className="body-md text-muted-foreground leading-relaxed">A professional web design agency does more than arrange sections on a page. An experienced team studies your target audience, competitors, brand voice, and conversion goals. They plan site architecture. They design user journeys. They consider search engine structure, loading speed, mobile behavior, and lead flow. A manufacturing company might need distributor forms, product filtering, technical downloads, and region-based inquiries. An AI builder will not anticipate these nuances. An agency will.</p>

                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">AI Website Builder vs Web Design Agency: Key Differences</h2>

                        <div className="glass-card p-6 space-y-5" style={{ borderColor: 'rgba(139,92,246,0.15)' }}>
                            <div><h3 className="text-foreground font-bold mb-2">1. Strategy vs Automation</h3><p className="text-muted-foreground text-sm leading-relaxed">AI tools automate layout creation. Agencies design with intent. If you run a coaching business, an AI builder may create a generic homepage. An agency will map your services to audience segments and structure calls to action for conversion.</p></div>
                            <div><h3 className="text-foreground font-bold mb-2">2. Customization vs Templates</h3><p className="text-muted-foreground text-sm leading-relaxed">AI builders operate within preset templates. Agencies build around your workflow — CRM integration, payment gateways, multi-language support, or custom dashboards are all possible from the start.</p></div>
                            <div><h3 className="text-foreground font-bold mb-2">3. SEO Foundation</h3><p className="text-muted-foreground text-sm leading-relaxed">Many AI builders claim to be SEO friendly. They provide basic meta tags and mobile responsiveness. Agencies plan technical SEO, keyword mapping, structured data, internal linking, and performance optimization.</p></div>
                            <div><h3 className="text-foreground font-bold mb-2">4. Scalability</h3><p className="text-muted-foreground text-sm leading-relaxed">A simple website might work when you have 20 clients. Custom architecture allows growth. Template-driven systems may require rebuilding when complexity increases.</p></div>
                        </div>

                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">When an AI Website Builder Makes Sense</h2>
                        <ul className="list-none space-y-2">
                            {["You need a temporary landing page", "You are validating a new idea", "Budget is extremely limited", "You do not require integrations or custom features"].map(i => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary mt-1">→</span>{i}</li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">When a Web Design Agency Is the Smarter Choice</h2>
                        <ul className="list-none space-y-2">
                            {["You want consistent lead generation", "You need CRM, payment, or ERP integration", "You plan to scale operations", "You care about long-term SEO", "You want your website to support marketing campaigns"].map(i => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-green-400 mt-1">✓</span>{i}</li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Conclusion</h2>
                        <p className="body-md text-muted-foreground leading-relaxed">The debate around AI Website Builder vs Web Design Agency should not focus only on cost or speed. It should focus on outcomes. If you need speed and simplicity, AI can help. If you need performance, integration, and strategic growth, a professional agency provides depth that automation alone cannot.</p>
                        <p className="body-md text-muted-foreground leading-relaxed">Before deciding, evaluate your business goals honestly. Think about where you want to be in three years, not three weeks.</p>
                    </motion.div>

                    {/* FAQ */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16">
                        <h2 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
                        {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
                    </motion.div>

                    {/* CTA */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="mt-16 glass-card p-8 text-center relative overflow-hidden" style={{ borderColor: 'rgba(139,92,246,0.2)' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
                        <div className="relative z-10">
                            <h3 className="heading-md text-gradient mb-3">Ready to Build a Website That Works?</h3>
                            <p className="text-muted-foreground text-sm mb-6">Explore our web design services at grituz.com. A short conversation can clarify far more than hours of research.</p>
                            <Button variant="hero" asChild className="bg-gradient-cta">
                                <Link to="/web-design">Explore Web Design Services <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </article>
        </Layout>
    );
}
