import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "What services does Grituz offer?",
    answer:
      "We offer comprehensive web design, branding, digital marketing, and website support services. From custom website development to SEO, social media marketing, and ongoing maintenance, we provide end-to-end digital solutions.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity of the project. A simple website typically takes 2-4 weeks, while more complex projects with custom functionality may take 6-8 weeks or more. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support after the website is launched?",
    answer:
      "Yes! We offer various support packages ranging from 1 to 12 months. Our support includes regular updates, security monitoring, performance optimization, and technical assistance whenever you need it.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer transparent pricing with packages starting from ₹15,000 for starter websites up to ₹1,50,000+ for enterprise solutions. Each project is unique, so we provide custom quotes based on your specific requirements.",
  },
  {
    question: "Can you help with digital marketing and SEO?",
    answer:
      "Absolutely! We offer comprehensive digital marketing services including SEO, social media marketing, content marketing, and paid advertising. Our data-driven strategies are designed to increase your online visibility and drive conversions.",
  },
];

export default function FAQSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
