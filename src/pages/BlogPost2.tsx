import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
    { q: "What are the most important digital marketing trends in 2026?", a: "Intent-driven SEO, first-party data collection, AI-assisted marketing, and conversion optimization are key focus areas." },
    { q: "Is SEO still relevant in 2026?", a: "Yes. SEO remains foundational, but it now requires deeper intent alignment and content quality." },
    { q: "Should businesses rely entirely on AI for marketing?", a: "No. AI supports efficiency, but strategic oversight remains essential for brand clarity and positioning." },
    { q: "Are paid ads more important than organic marketing?", a: "Both are important. Combining SEO and paid ads often produces stronger results than relying on one channel." },
    { q: "How can small businesses adapt to digital marketing trends?", a: "Start with website optimization, structured content planning, and clear lead tracking systems." },
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

const trends = [
    { num: "01", title: "Search Is Becoming Intent-Driven, Not Keyword-Driven", body: "Search engines now prioritize user intent more than exact keywords. Content that answers real questions clearly and thoroughly performs better than keyword-stuffed pages. Businesses should focus on structured, helpful blog content, clear service pages, and FAQ sections targeting real queries." },
    { num: "02", title: "First-Party Data Is Becoming Critical", body: "Privacy regulations and cookie restrictions are limiting third-party tracking. Businesses must rely more on first-party data collected directly from users. Email signups, consultation forms, and website analytics become more valuable than ever." },
    { num: "03", title: "AI-Assisted Marketing, Not AI-Replaced Marketing", body: "AI tools now assist in content drafts, campaign optimization, and ad testing. However, businesses that rely entirely on automated content risk losing brand voice. The real trend is AI-assisted execution combined with human strategy." },
    { num: "04", title: "Short-Form Video Remains Strong, But With Strategy", body: "Short videos continue to influence buying behavior, but random posting does not produce results. Businesses need structured content plans, clear messaging, and defined audience targeting." },
    { num: "05", title: "SEO and Paid Ads Are Working Together", body: "The old debate of SEO versus paid ads is fading. SEO builds long-term authority while paid ads drive immediate visibility. A combined strategy increases conversion rates and reduces cost per acquisition." },
    { num: "06", title: "Conversion Optimization Is Gaining Attention", body: "Traffic alone no longer defines success. Clear calls-to-action, landing page clarity, faster load times, and simplified forms directly impact revenue. Businesses are now treating conversion optimization as a core marketing function." },
];

export default function BlogPost2() {
    return (
        <Layout>
            <article className="pt-32 pb-20">
                <div className="container-custom max-w-3xl mx-auto">
                    {/* Header */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
                        <Link to="/blog" className="text-primary text-sm hover:underline flex items-center gap-1 mb-6">← Back to Blog</Link>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-green-400 bg-green-400/10 mb-4">Digital Marketing</span>
                        <h1 className="heading-xl mb-6 leading-tight">Top Digital Marketing Trends Businesses Should Watch in 2026</h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />February 20, 2026</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />7 min read</span>
                        </div>
                    </motion.div>

                    {/* Intro */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-5 mb-12">
                        <p className="body-md text-muted-foreground leading-relaxed">Businesses that wait for trends to become obvious usually end up paying more to catch up. Digital marketing is not changing overnight. It is evolving in clear, measurable ways. The businesses that observe early signals and act with intention gain an advantage.</p>
                        <p className="body-md text-muted-foreground leading-relaxed">Let us look at what truly matters in 2026.</p>
                    </motion.div>

                    {/* Trends */}
                    <div className="space-y-8 mb-12">
                        {trends.map((trend, i) => (
                            <motion.div key={trend.num} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}
                                className="flex gap-5">
                                <div className="text-primary font-black text-3xl leading-none flex-shrink-0 opacity-30">{trend.num}</div>
                                <div>
                                    <h2 className="text-foreground font-bold text-lg mb-3">{trend.title}</h2>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{trend.body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Practical Steps */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="glass-card p-6 mb-12" style={{ borderColor: 'rgba(139,92,246,0.15)' }}>
                        <h2 className="text-foreground font-bold text-xl mb-4">Practical Steps for Businesses in 2026</h2>
                        <ul className="space-y-2">
                            {["Audit your website structure and content intent", "Improve first-party data collection systems", "Combine SEO with targeted paid campaigns", "Use AI tools carefully, without losing brand clarity", "Optimize landing pages for conversions"].map(step => (
                                <li key={step} className="flex items-start gap-2 text-muted-foreground text-sm"><span className="text-primary mt-1">→</span>{step}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Conclusion */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5 mb-12">
                        <h2 className="text-2xl font-bold text-foreground">Conclusion</h2>
                        <p className="body-md text-muted-foreground leading-relaxed">The Top Digital Marketing Trends Businesses Should Watch in 2026 are not about dramatic disruption. They are about smarter execution, stronger integration, and deeper understanding of user behavior. Businesses that prepare early build stability. Businesses that react late pay for correction.</p>
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
                            <h3 className="heading-md text-gradient mb-3">Ready to Build a Smarter Marketing Strategy?</h3>
                            <p className="text-muted-foreground text-sm mb-6">Explore our digital marketing services and book a free strategy consultation.</p>
                            <Button variant="hero" asChild className="bg-gradient-cta">
                                <Link to="/digital-marketing">Explore Digital Marketing <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </article>
        </Layout>
    );
}
