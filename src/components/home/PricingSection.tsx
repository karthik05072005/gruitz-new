import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    description: "Perfect for small businesses getting started online.",
    features: [
      "5 Page Website",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "1 Month Support",
    ],
    popular: false,
  },
  {
    name: "Basic",
    price: "₹35,000",
    description: "Great for growing businesses needing more features.",
    features: [
      "10 Page Website",
      "Mobile Responsive",
      "Advanced SEO",
      "Blog Integration",
      "Social Media Integration",
      "3 Months Support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹75,000",
    description: "Best for businesses ready to scale their online presence.",
    features: [
      "Unlimited Pages",
      "Custom Design",
      "E-commerce Ready",
      "Premium SEO Package",
      "Content Management System",
      "6 Months Support",
      "Performance Optimization",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "₹1,50,000",
    description: "Enterprise solution for large-scale requirements.",
    features: [
      "Everything in Pro",
      "Custom Functionality",
      "API Integrations",
      "Dedicated Account Manager",
      "12 Months Support",
      "Priority Support",
      "Monthly Analytics Reports",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-custom">
        <SectionHeading
          badge="Pricing"
          title="Transparent Pricing Plans"
          description="Choose the perfect plan that fits your business needs and budget."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass-card p-6 ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="font-semibold text-xl mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.popular ? "hero" : "heroOutline"}
                className="w-full"
                asChild
              >
                <Link to="/get-quote">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
