import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, AlertCircle, CheckCircle2, ArrowRight, RefreshCw, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const questions = [
    { id: 'mobile', question: 'Is your website mobile-friendly and responsive?', category: 'Design & UX', options: ['Yes, fully responsive', 'Partially responsive', 'No, desktop only', 'Not sure'] },
    { id: 'speed', question: 'How fast does your website load?', category: 'Performance', options: ['Under 3 seconds', '3-5 seconds', 'Over 5 seconds', 'Not sure'] },
    { id: 'ssl', question: 'Does your website have an SSL certificate (HTTPS)?', category: 'Security', options: ['Yes', 'No', 'Not sure'] },
    { id: 'seo', question: 'Have you optimized your website for search engines (SEO)?', category: 'SEO', options: ['Yes, fully optimized', 'Basic optimization', 'No optimization', 'Not sure'] },
    { id: 'analytics', question: 'Do you track website analytics?', category: 'Analytics', options: ['Yes, actively monitoring', 'Set up but rarely check', 'Not set up', 'Not sure'] },
    { id: 'content', question: 'When was your website content last updated?', category: 'Content', options: ['Within last month', '1-6 months ago', 'Over 6 months ago', 'Not sure'] },
    { id: 'cta', question: 'Does your website have clear calls-to-action (CTAs)?', category: 'Conversion', options: ['Yes, very clear', 'Somewhat clear', 'No clear CTAs', 'Not sure'] },
    { id: 'backup', question: 'Do you regularly backup your website?', category: 'Maintenance', options: ['Yes, automated backups', 'Manual backups occasionally', 'No backups', 'Not sure'] },
];

type Answers = Record<string, string>;
type Issue = { category: string; issue: string };
interface Results {
    score: number;
    grade: string;
    status: string;
    recommendation: string;
    issues: Issue[];
    strengths: string[];
}

const calculateResults = (answers: Answers): Results => {
    let score = 0;
    const maxScore = questions.length * 3;
    const issues: Issue[] = [];
    const strengths: string[] = [];

    const check = (id: string, answer: string) => {
        if (id === 'mobile') {
            if (answer === 'Yes, fully responsive') { score += 3; strengths.push('Mobile-friendly design'); }
            else issues.push({ category: 'Design & UX', issue: 'Mobile responsiveness needs improvement' });
        }
        if (id === 'speed') {
            if (answer === 'Under 3 seconds') { score += 3; strengths.push('Fast loading speed'); }
            else { score += answer === '3-5 seconds' ? 2 : 0; issues.push({ category: 'Performance', issue: 'Website speed optimization needed' }); }
        }
        if (id === 'ssl') {
            if (answer === 'Yes') { score += 3; strengths.push('Secure HTTPS connection'); }
            else issues.push({ category: 'Security', issue: 'SSL certificate required for security' });
        }
        if (id === 'seo') {
            if (answer === 'Yes, fully optimized') { score += 3; strengths.push('Search engine optimized'); }
            else { score += answer === 'Basic optimization' ? 2 : 0; issues.push({ category: 'SEO', issue: 'SEO optimization needs improvement' }); }
        }
        if (id === 'analytics') {
            if (answer === 'Yes, actively monitoring') { score += 3; strengths.push('Active analytics tracking'); }
            else issues.push({ category: 'Analytics', issue: 'Analytics tracking needs attention' });
        }
        if (id === 'content') {
            if (answer === 'Within last month') { score += 3; strengths.push('Fresh, updated content'); }
            else { score += answer === '1-6 months ago' ? 2 : 0; issues.push({ category: 'Content', issue: 'Content needs regular updates' }); }
        }
        if (id === 'cta') {
            if (answer === 'Yes, very clear') { score += 3; strengths.push('Clear calls-to-action'); }
            else issues.push({ category: 'Conversion', issue: 'Improve calls-to-action for better conversions' });
        }
        if (id === 'backup') {
            if (answer === 'Yes, automated backups') { score += 3; strengths.push('Regular backups in place'); }
            else issues.push({ category: 'Maintenance', issue: 'Regular backup system needed' });
        }
    };

    Object.entries(answers).forEach(([id, answer]) => check(id, answer));

    const percentage = Math.round((score / maxScore) * 100);
    let grade = 'D', status = 'Needs Improvement', recommendation = 'Your website requires immediate attention. Professional help is recommended to address critical issues.';
    if (percentage >= 80) { grade = 'A'; status = 'Excellent'; recommendation = 'Your website is in great shape! Continue maintaining best practices and keep content fresh.'; }
    else if (percentage >= 60) { grade = 'B'; status = 'Good'; recommendation = 'Your website is performing well but has room for improvement. Address the issues below to reach excellence.'; }
    else if (percentage >= 40) { grade = 'C'; status = 'Fair'; recommendation = 'Your website needs attention. Addressing these issues will significantly improve performance and user experience.'; }

    return { score: percentage, grade, status, recommendation, issues, strengths };
};

export default function WebsiteHealthChecker() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Answers>({});
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
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
        if (!email || !email.includes('@')) return;
        setShowEmailCapture(false);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setEmail('');
        setPhone('');
        setResults(null);
        setShowEmailCapture(false);
    };

    const gradeColor = { A: 'text-green-400', B: 'text-blue-400', C: 'text-yellow-400', D: 'text-red-400' }[results?.grade || 'D'];
    const progress = ((currentQuestion) / questions.length) * 100;

    return (
        <div className="glass-card p-8 md:p-10 max-w-3xl mx-auto" style={{ borderColor: 'rgba(139,92,246,0.2)' }}>
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-bold text-foreground text-lg">Free Website Audit & Health Checker</h3>
                    <p className="text-muted-foreground text-sm">Answer 8 quick questions to assess your website</p>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {/* Quiz Questions */}
                {!showEmailCapture && !results && (
                    <motion.div key={`q-${currentQuestion}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                        {/* Progress */}
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
                                <motion.button
                                    key={option}
                                    onClick={() => handleAnswer(option)}
                                    whileHover={{ scale: 1.01, x: 4 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full text-left p-4 rounded-xl border transition-all duration-200 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5"
                                    style={{ borderColor: 'rgba(139,92,246,0.2)', background: 'rgba(139,92,246,0.03)' }}
                                >
                                    {option}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Email Capture */}
                {showEmailCapture && (
                    <motion.div key="email" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                                <Mail className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="text-foreground font-bold text-xl mb-2">Your Results Are Ready</h4>
                            <p className="text-muted-foreground text-sm">Enter your details to unlock your full website health report.</p>
                        </div>
                        <form onSubmit={handleEmailSubmit} className="space-y-4">
                            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required
                                className="w-full p-3.5 rounded-xl text-sm text-foreground bg-secondary/30 border focus:outline-none focus:border-primary/50 transition-colors"
                                style={{ borderColor: 'rgba(139,92,246,0.25)' }} />
                            <input type="tel" placeholder="Phone number (optional)" value={phone} onChange={e => setPhone(e.target.value)}
                                className="w-full p-3.5 rounded-xl text-sm text-foreground bg-secondary/30 border focus:outline-none focus:border-primary/50 transition-colors"
                                style={{ borderColor: 'rgba(139,92,246,0.25)' }} />
                            <Button type="submit" variant="hero" size="lg" className="w-full bg-gradient-cta">
                                View My Results <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </motion.div>
                )}

                {/* Results */}
                {results && !showEmailCapture && (
                    <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        {/* Score Card */}
                        <div className="text-center mb-8 p-6 rounded-2xl" style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.15)' }}>
                            <div className={`text-7xl font-black mb-2 ${gradeColor}`}>{results.grade}</div>
                            <div className="text-foreground font-bold text-xl mb-1">{results.status}</div>
                            <div className="text-muted-foreground text-sm mb-4">{results.score}% Health Score</div>
                            <div className="h-2 bg-secondary/50 rounded-full overflow-hidden max-w-xs mx-auto">
                                <motion.div className="h-full bg-gradient-primary rounded-full" initial={{ width: 0 }} animate={{ width: `${results.score}%` }} transition={{ duration: 1, delay: 0.3 }} />
                            </div>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-center">{results.recommendation}</p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {results.strengths.length > 0 && (
                                <div>
                                    <h5 className="text-green-400 font-semibold text-sm mb-3 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Strengths</h5>
                                    <ul className="space-y-2">
                                        {results.strengths.map(s => <li key={s} className="text-muted-foreground text-xs flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span>{s}</li>)}
                                    </ul>
                                </div>
                            )}
                            {results.issues.length > 0 && (
                                <div>
                                    <h5 className="text-red-400 font-semibold text-sm mb-3 flex items-center gap-2"><AlertCircle className="w-4 h-4" /> Issues Found</h5>
                                    <ul className="space-y-2">
                                        {results.issues.map(i => <li key={i.issue} className="text-muted-foreground text-xs flex items-start gap-2"><span className="text-red-400 mt-0.5">!</span>{i.issue}</li>)}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button variant="hero" size="lg" className="flex-1 bg-gradient-cta" asChild>
                                <Link to="/contact">Book a Free Website Audit <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
