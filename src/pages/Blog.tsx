import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import { Link } from "react-router-dom";

const blogPosts = [
    {
        slug: "/blog/ai-website-builder-vs-web-design-agency",
        title: "AI Website Builder vs Web Design Agency",
        excerpt: "Many small businesses are tempted by AI website builders for their speed and low cost. But when it comes to strategy, customization, and long-term growth, the choice between AI and an agency is a business decision — not just a design one.",
        date: "February 28, 2026",
        readTime: "8 min read",
        category: "Web Design",
        image: "/images/blog_ai_vs_agency.png",
    },
    {
        slug: "/blog/digital-marketing-trends-2026",
        title: "Top Digital Marketing Trends Businesses Should Watch in 2026",
        excerpt: "Digital marketing is evolving in clear, measurable ways. Businesses that observe early signals and act with intention gain a real competitive advantage. Here are the trends that truly matter in 2026.",
        date: "February 20, 2026",
        readTime: "7 min read",
        category: "Digital Marketing",
        image: "/images/blog_marketing_trends.png",
    },
    {
        slug: "/blog/automation-save-business-time",
        title: "How Automation Can Save Your Business Time and Reduce Costs",
        excerpt: "Most businesses don't realize how much time they lose to repetitive work. Manual data entry, delayed responses, and disconnected systems quietly drain productivity. Here's how automation addresses this systematically.",
        date: "February 10, 2026",
        readTime: "6 min read",
        category: "AI Automation",
        image: "/images/blog_automation.png",
    },
];

const categoryColors: Record<string, string> = {
    "Web Design": "text-blue-400 bg-blue-400/10",
    "Digital Marketing": "text-green-400 bg-green-400/10",
    "AI Automation": "text-purple-400 bg-purple-400/10",
};

export default function Blog() {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
                <AnimatedBlobs />
                <div className="container-custom relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">Insights & Resources</span>
                        <h1 className="heading-xl mb-6">The Grituz <span className="text-primary font-extrabold">Blog</span></h1>
                        <p className="body-lg text-muted-foreground">Practical insights on web design, digital marketing, and AI automation to help your business grow with clarity and confidence.</p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="glass-card flex flex-col group hover:shadow-glow transition-all duration-300 overflow-hidden"
                                style={{ borderColor: 'rgba(139,92,246,0.15)', padding: '0' }}
                            >
                                {/* Thumbnail */}
                                <div className="w-full h-44 overflow-hidden flex-shrink-0">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="flex flex-col flex-grow p-6">
                                    {/* Category */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}>
                                            <Tag className="w-3 h-3" />
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-foreground font-bold text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                                    </div>

                                    {/* Read More */}
                                    <Link to={post.slug} className="flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-200 mt-auto">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>{/* end card content */}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
