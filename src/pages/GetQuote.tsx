import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import LazySection from "@/components/ui/LazySection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const serviceOptions = [
  "Web Design",
  "Branding",
  "Digital Marketing",
  "Website Support",
  "Logo Design",
  "WordPress Development",
  "Shopify Development",
  "Other",
];

const budgetOptions = [
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,50,000",
  "₹2,50,000+",
];

const timelineOptions = [
  "Less than 2 weeks",
  "2-4 weeks",
  "1-2 months",
  "2-3 months",
  "3+ months",
  "Flexible",
];

export default function GetQuote() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <AnimatedBlobs />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-secondary rounded-full">
              Get A Quote
            </span>
            <h1 className="heading-xl mb-6">
              Request a <span className="text-primary font-extrabold">Free Proposal</span>
            </h1>
            <p className="body-lg">
              Tell us about your project and we'll get back to you with a
              detailed proposal and quote within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <LazySection>
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 space-y-8">
                {/* Personal Info */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Personal Information</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input placeholder="John Doe" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                </div>

                {/* Business Info */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Business Details</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Business Name
                      </label>
                      <Input placeholder="Your Company Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Website (if any)
                      </label>
                      <Input type="url" placeholder="https://yourwebsite.com" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Project Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Type of Service *
                      </label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase()}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Budget Range *
                        </label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetOptions.map((budget) => (
                              <SelectItem key={budget} value={budget}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Timeline
                        </label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {timelineOptions.map((timeline) => (
                              <SelectItem key={timeline} value={timeline}>
                                {timeline}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        placeholder="Describe your project, goals, and any specific requirements..."
                        rows={6}
                        required
                      />
                    </div>
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Request Proposal
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  By submitting this form, you agree to our privacy policy. We'll
                  never share your information with third parties.
                </p>
              </form>
            </motion.div>
          </div>
        </section>
      </LazySection>
    </Layout>
  );
}
