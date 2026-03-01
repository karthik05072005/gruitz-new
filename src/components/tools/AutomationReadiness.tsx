import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, CheckCircle2, AlertCircle, ArrowRight, RefreshCw, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const questions = [
    { id: 'repetitive_tasks', question: 'Does your team spend significant time on repetitive manual tasks?', category: 'Efficiency', options: ['Yes, many hours daily', 'Some repetitive tasks', 'Very few', 'Not sure'] },
    { id: 'lead_followup', question: 'How do you currently handle lead follow-up?', category: 'Lead Management', options: ['Automated CRM system', 'Mix of manual and automated', 'Mostly manual', 'No structured process'] },
    { id: 'customer_response', question: 'What is your typical customer response time?', category: 'Customer Service', options: ['Under 1 hour (automated)', '1-4 hours', 'Same day', 'Often next day or later'] },
    { id: 'data_entry', question: 'How much time is spent on data entry and report generation?', category: 'Operations', options: ['Minimal, mostly automated', '1-2 hours weekly', '5+ hours weekly', 'Not tracked'] },
    { id: 'tools_connected', question: 'Are your business tools (CRM, email, website) connected?', category: 'Integration', options: ['Yes, fully integrated', 'Partially connected', 'No, tools are separate', 'Not sure'] },
    { id: 'email_automation', question: 'Do you use automated email sequences for customers?', category: 'Email', options: ['Yes, full automation', 'Basic autoresponders', 'No automation', 'Planning to implement'] },
    { id: 'chatbot', question: 'Do you have any chatbot or automated chat support on your website?', category: 'Website', options: ['Yes, AI-powered chatbot', 'Basic live chat only', 'No chat support', 'Not sure if needed'] },
    { id: 'reporting', question: 'How do you generate business performance reports?', category: 'Reporting', options: ['Automated dashboards', 'Semi-automated', 'Manual in spreadsheets', 'Rarely generate reports'] },
];

type Answers = Record<string, string>;
interface Results { score: number; readiness: string; opportunities: string[]; quickWins: string[]; }

const calculateResults = (answers: Answers): Results => {
    let score = 0;
    const opportunities: string[] = [];
    const quickWins: string[] = [];

    const scoreMap: Record<string, number[]> = {
        repetitive_tasks: [0, 1, 3, 1],
        lead_followup: [3, 2, 0, 0],
        customer_response: [3, 2, 1, 0],
        data_entry: [3, 2, 0, 1],
        tools_connected: [3, 2, 0, 1],
        email_automation: [3, 2, 0, 1],
        chatbot: [3, 2, 0, 1],
        reporting: [3, 2, 0, 0],
    };

    questions.forEach(q => {
        const ans = answers[q.id];
        const idx = q.options.indexOf(ans);
        score += scoreMap[q.id]?.[idx] ?? 0;
    });

    const maxScore = questions.length * 3;
    const pct = Math.round((score / maxScore) * 100);

    if (answers.lead_followup === 'Mostly manual' || answers.lead_followup === 'No structured process') {
        opportunities.push('Lead follow-up automation — respond to enquiries instantly');
        quickWins.push('Set up automated lead capture and email response');
    }
    if (answers.customer_response === 'Same day' || answers.customer_response === 'Often next day or later') {
        opportunities.push('AI chatbot — answer customer questions 24/7 automatically');
        quickWins.push('Install a website chatbot for instant customer engagement');
    }
    if (answers.email_automation === 'No automation' || answers.email_automation === 'Basic autoresponders') {
        opportunities.push('Email workflow automation — nurture leads without manual effort');
        quickWins.push('Create email sequences for new leads and follow-ups');
    }
    if (answers.tools_connected === 'No, tools are separate') {
        opportunities.push('System integration — connect CRM, email, and website seamlessly');
        quickWins.push('Integrate your tools to eliminate duplicate data entry');
    }
    if (answers.reporting === 'Manual in spreadsheets' || answers.reporting === 'Rarely generate reports') {
        opportunities.push('Automated reporting dashboard — real-time business insights');
    }

    if (opportunities.length === 0) opportunities.push('Advanced optimization of existing automation systems');

    let readiness = 'High';
    if (pct < 40) readiness = 'High'; // paradox: low score = high need
    else if (pct < 70) readiness = 'Medium';
    else readiness = 'Already Automated';

    return { score: pct, readiness, opportunities, quickWins };
};

export default function AutomationReadiness() {
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
    const progress = (currentQuestion / questions.length) * 100;

    return (
        <div className="glass-card p-8 md:p-10 max-w-3xl mx-auto" style={{ borderColor: 'rgba(139,92,246,0.2)' }}>
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-bold text-foreground text-lg">Free Automation Readiness Assessment</h3>
                    <p className="text-muted-foreground text-sm">8 questions to identify your automation opportunities</p>
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
                            <h4 className="text-foreground font-bold text-xl mb-2">Assessment Complete</h4>
                            <p className="text-muted-foreground text-sm">Enter your email to unlock your automation opportunities report.</p>
                        </div>
                        <form onSubmit={handleEmailSubmit} className="space-y-4">
                            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required
                                className="w-full p-3.5 rounded-xl text-sm text-foreground bg-secondary/30 border focus:outline-none focus:border-primary/50"
                                style={{ borderColor: 'rgba(139,92,246,0.25)' }} />
                            <Button type="submit" variant="hero" size="lg" className="w-full bg-gradient-cta">View My Automation Report <ArrowRight className="w-4 h-4 ml-2" /></Button>
                        </form>
                    </motion.div>
                )}

                {results && !showEmailCapture && (
                    <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-center mb-8 p-6 rounded-2xl" style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.15)' }}>
                            <div className="text-foreground font-black text-4xl mb-2">{results.readiness} Automation Potential</div>
                            <p className="text-muted-foreground text-sm">We identified {results.opportunities.length} automation opportunities for your business.</p>
                        </div>

                        <div className="space-y-6 mb-8">
                            {results.opportunities.length > 0 && (
                                <div>
                                    <h5 className="text-primary font-semibold text-sm mb-3 flex items-center gap-2"><Bot className="w-4 h-4" /> Automation Opportunities</h5>
                                    <ul className="space-y-2">{results.opportunities.map(o => <li key={o} className="text-muted-foreground text-sm flex items-start gap-2 p-3 rounded-lg" style={{ background: 'rgba(139,92,246,0.05)' }}><ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{o}</li>)}</ul>
                                </div>
                            )}
                            {results.quickWins.length > 0 && (
                                <div>
                                    <h5 className="text-green-400 font-semibold text-sm mb-3 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Quick Wins to Start</h5>
                                    <ul className="space-y-2">{results.quickWins.map(q => <li key={q} className="text-muted-foreground text-xs flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span>{q}</li>)}</ul>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button variant="hero" size="lg" className="flex-1 bg-gradient-cta" asChild>
                                <Link to="/contact">Book an Automation Consultation <ArrowRight className="w-4 h-4 ml-2" /></Link>
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
