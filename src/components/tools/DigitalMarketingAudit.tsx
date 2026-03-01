import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, AlertCircle, CheckCircle2, ArrowRight, RefreshCw, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const questions = [
    { id: 'keyword_ranking', question: 'Are you currently ranking for relevant keywords on Google?', category: 'SEO', options: ['Yes, ranking well for multiple keywords', 'Ranking for some keywords', 'Poor or no rankings', 'Not sure/Never checked'] },
    { id: 'analytics', question: 'Do you track website traffic and conversions regularly?', category: 'Analytics', options: ['Yes, weekly/monthly reviews', 'Occasionally check analytics', 'Rarely check', 'No tracking set up'] },
    { id: 'paid_advertising', question: 'Are you running paid advertising campaigns?', category: 'Paid Advertising', options: ['Yes, active campaigns (Google/Facebook/LinkedIn)', 'Tried but not currently active', 'Planning to start', 'No paid ads'] },
    { id: 'social_consistency', question: 'How consistent is your social media posting?', category: 'Social Media', options: ['Daily or multiple times per week', 'Once a week', 'Occasionally/Irregular', 'Rarely or never post'] },
    { id: 'marketing_strategy', question: 'Do you have a documented marketing strategy?', category: 'Strategy', options: ['Yes, comprehensive documented strategy', 'Basic plan exists', 'Informal approach only', 'No strategy in place'] },
    { id: 'lead_generation', question: 'Are you generating consistent monthly leads?', category: 'Lead Generation', options: ['Yes, steady predictable flow', 'Inconsistent/Sporadic leads', 'Very few leads', 'Not generating leads online'] },
    { id: 'roi_analysis', question: 'Do you analyze campaign performance and ROI?', category: 'ROI Tracking', options: ['Yes, track ROI for all campaigns', 'Track some campaigns', 'Rarely analyze ROI', 'Never measure ROI'] },
    { id: 'email_marketing', question: 'Do you have an active email marketing strategy?', category: 'Email Marketing', options: ['Yes, regular campaigns to segmented lists', 'Send occasional emails', 'Have a list but rarely use it', 'No email marketing'] },
    { id: 'content_marketing', question: 'Are you creating regular content (blogs, videos, guides)?', category: 'Content Marketing', options: ['Yes, consistent content schedule', 'Occasional content creation', 'Rarely create content', 'No content marketing'] },
    { id: 'local_seo', question: 'Is your business optimized for local search (Google Business Profile)?', category: 'Local SEO', options: ['Yes, fully optimized and active', 'Profile exists but not optimized', 'Not set up', 'Not applicable to my business'] },
    { id: 'competitor_analysis', question: 'Do you regularly monitor competitor marketing activities?', category: 'Competitive Intelligence', options: ['Yes, regular competitive analysis', 'Occasionally check competitors', 'Rarely monitor competition', 'Never analyze competitors'] },
    { id: 'conversion_optimization', question: 'Are you actively testing and optimizing for conversions?', category: 'Conversion Optimization', options: ['Yes, regular A/B testing', 'Occasional optimization', 'Made changes once or twice', 'Never optimized for conversions'] },
];

type Answers = Record<string, string>;
interface Results { score: number; level: string; strengths: string[]; criticalIssues: string[]; recommendations: string[]; }

const calculateResults = (answers: Answers): Results => {
    let score = 0;
    const strengths: string[] = [];
    const criticalIssues: string[] = [];
    const recommendations: string[] = [];

    const scoreMap: Record<string, number[]> = {
        keyword_ranking: [3, 2, 0, 1],
        analytics: [3, 1, 0, 0],
        paid_advertising: [3, 1, 2, 0],
        social_consistency: [3, 2, 1, 0],
        marketing_strategy: [3, 2, 1, 0],
        lead_generation: [3, 1, 0, 0],
        roi_analysis: [3, 2, 0, 0],
        email_marketing: [3, 2, 1, 0],
        content_marketing: [3, 2, 1, 0],
        local_seo: [3, 1, 0, 3],
        competitor_analysis: [3, 2, 1, 0],
        conversion_optimization: [3, 2, 1, 0],
    };

    const strengthLabels: Record<string, string> = {
        keyword_ranking: 'Strong keyword presence on Google',
        analytics: 'Regular analytics monitoring',
        paid_advertising: 'Active paid advertising campaigns',
        social_consistency: 'Consistent social media presence',
        marketing_strategy: 'Documented marketing strategy',
        lead_generation: 'Steady lead generation pipeline',
        roi_analysis: 'ROI-based campaign analysis',
        email_marketing: 'Active email marketing system',
        content_marketing: 'Consistent content creation',
        local_seo: 'Local search optimization',
        competitor_analysis: 'Competitive intelligence monitoring',
        conversion_optimization: 'Active conversion optimization',
    };

    const issueLabels: Record<string, string> = {
        keyword_ranking: 'Low or no keyword rankings – SEO needs immediate attention',
        analytics: 'No analytics tracking – flying blind without data',
        social_consistency: 'Inconsistent social media – weakening brand visibility',
        marketing_strategy: 'No documented strategy – random marketing = wasted budget',
        lead_generation: 'Inconsistent leads – growth is unpredictable',
        roi_analysis: 'No ROI tracking – unable to measure marketing value',
        content_marketing: 'No content marketing – missing organic growth opportunities',
    };

    questions.forEach(q => {
        const ans = answers[q.id];
        const idx = q.options.indexOf(ans);
        const pts = scoreMap[q.id]?.[idx] ?? 0;
        score += pts;
        if (pts === 3) strengths.push(strengthLabels[q.id]);
        else if (pts === 0 && issueLabels[q.id]) criticalIssues.push(issueLabels[q.id]);
    });

    const maxScore = questions.length * 3;
    const pct = Math.round((score / maxScore) * 100);

    if (pct >= 75) recommendations.push('Focus on advanced optimization and scaling what works.');
    else if (pct >= 50) {
        recommendations.push('Build on existing foundations with structured campaign management.');
        recommendations.push('Invest in SEO and content to reduce paid ad dependency.');
    } else {
        recommendations.push('Start with foundational work: analytics setup, basic SEO, and a documented strategy.');
        recommendations.push('Book a consultation to create a structured digital marketing roadmap.');
        recommendations.push('Focus on consistent lead generation before scaling spend.');
    }

    let level = 'Critical';
    if (pct >= 75) level = 'Advanced';
    else if (pct >= 50) level = 'Intermediate';
    else if (pct >= 30) level = 'Developing';

    return { score: pct, level, strengths, criticalIssues, recommendations };
};

export default function DigitalMarketingAudit() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Answers>({});
    const [email, setEmail] = useState('');
    const [showEmailCapture, setShowEmailCapture] = useState(false);
    const [results, setResults] = useState<Results | null>(null);

    const handleAnswer = (answer: string) => {
        const newAnswers = { ...answers, [questions[currentQuestion].id]: answer };
        setAnswers(newAnswers);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setResults(calculateResults(newAnswers));
            setShowEmailCapture(true);
        }
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.includes('@')) return;
        setShowEmailCapture(false);
    };

    const resetQuiz = () => { setCurrentQuestion(0); setAnswers({}); setEmail(''); setResults(null); setShowEmailCapture(false); };

    const levelColor = { Advanced: 'text-green-400', Intermediate: 'text-blue-400', Developing: 'text-yellow-400', Critical: 'text-red-400' };
    const progress = (currentQuestion / questions.length) * 100;

    return (
        <div className="glass-card p-8 md:p-10 max-w-3xl mx-auto" style={{ borderColor: 'rgba(139,92,246,0.2)' }}>
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-bold text-foreground text-lg">Free Digital Marketing Audit</h3>
                    <p className="text-muted-foreground text-sm">12 questions to evaluate your marketing performance</p>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {!showEmailCapture && !results && (
                    <motion.div key={`q-${currentQuestion}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                        <div className="mb-6">
                            <div className="flex justify-between text-sm text-muted-foreground mb-2">
                                <span>Question {currentQuestion + 1} of {questions.length}</span>
                                <span className="text-primary font-medium">{questions[currentQuestion].category}</span>
                            </div>
                            <div className="h-1.5 bg-secondary/50 rounded-full overflow-hidden">
                                <motion.div className="h-full bg-gradient-primary rounded-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} />
                            </div>
                        </div>
                        <h4 className="text-foreground font-semibold text-lg mb-6 leading-relaxed">{questions[currentQuestion].question}</h4>
                        <div className="space-y-3">
                            {questions[currentQuestion].options.map((option) => (
                                <motion.button key={option} onClick={() => handleAnswer(option)} whileHover={{ scale: 1.01, x: 4 }} whileTap={{ scale: 0.98 }}
                                    className="w-full text-left p-4 rounded-xl border transition-all duration-200 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5"
                                    style={{ borderColor: 'rgba(139,92,246,0.2)', background: 'rgba(139,92,246,0.03)' }}>
                                    {option}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {showEmailCapture && (
                    <motion.div key="email" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4"><Mail className="w-8 h-8 text-primary" /></div>
                            <h4 className="text-foreground font-bold text-xl mb-2">Your Audit Results Are Ready</h4>
                            <p className="text-muted-foreground text-sm">Enter your email to unlock your personalized marketing report.</p>
                        </div>
                        <form onSubmit={handleEmailSubmit} className="space-y-4">
                            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required
                                className="w-full p-3.5 rounded-xl text-sm text-foreground bg-secondary/30 border focus:outline-none focus:border-primary/50 transition-colors"
                                style={{ borderColor: 'rgba(139,92,246,0.25)' }} />
                            <Button type="submit" variant="hero" size="lg" className="w-full bg-gradient-cta">View My Marketing Score <ArrowRight className="w-4 h-4 ml-2" /></Button>
                        </form>
                    </motion.div>
                )}

                {results && !showEmailCapture && (
                    <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-center mb-8 p-6 rounded-2xl" style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.15)' }}>
                            <div className={`text-5xl font-black mb-2 ${levelColor[results.level as keyof typeof levelColor]}`}>{results.level}</div>
                            <div className="text-foreground font-bold text-lg mb-1">{results.score}% Marketing Score</div>
                            <div className="h-2 bg-secondary/50 rounded-full overflow-hidden max-w-xs mx-auto mt-3">
                                <motion.div className="h-full bg-gradient-primary rounded-full" initial={{ width: 0 }} animate={{ width: `${results.score}%` }} transition={{ duration: 1, delay: 0.3 }} />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            {results.strengths.length > 0 && (
                                <div>
                                    <h5 className="text-green-400 font-semibold text-sm mb-3 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> What's Working</h5>
                                    <ul className="space-y-1.5">{results.strengths.map(s => <li key={s} className="text-muted-foreground text-xs flex items-start gap-2"><span className="text-green-400">✓</span>{s}</li>)}</ul>
                                </div>
                            )}
                            {results.criticalIssues.length > 0 && (
                                <div>
                                    <h5 className="text-red-400 font-semibold text-sm mb-3 flex items-center gap-2"><AlertCircle className="w-4 h-4" /> Priority Issues</h5>
                                    <ul className="space-y-1.5">{results.criticalIssues.map(i => <li key={i} className="text-muted-foreground text-xs flex items-start gap-2"><span className="text-red-400">!</span>{i}</li>)}</ul>
                                </div>
                            )}
                        </div>

                        <div className="mb-8 p-4 rounded-xl" style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.12)' }}>
                            <h5 className="text-foreground font-semibold text-sm mb-3">Recommendations</h5>
                            <ul className="space-y-2">{results.recommendations.map(r => <li key={r} className="text-muted-foreground text-xs flex items-start gap-2"><span className="text-primary">→</span>{r}</li>)}</ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button variant="hero" size="lg" className="flex-1 bg-gradient-cta" asChild>
                                <Link to="/contact">Book a Free Strategy Call <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                            <Button variant="heroOutline" size="lg" onClick={resetQuiz} className="flex items-center gap-2">
                                <RefreshCw className="w-4 h-4" /> Retake
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
