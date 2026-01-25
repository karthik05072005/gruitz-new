import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import LazySection from "@/components/ui/LazySection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const openPositions = [
  {
    title: "Web Designer",
    type: "Full-time",
    location: "Bangalore, India",
    description:
      "Create stunning, user-centric web designs for our diverse client base. You'll work closely with developers and project managers to deliver exceptional results.",
    requirements: [
      "3+ years of web design experience",
      "Proficiency in Figma and Adobe Creative Suite",
      "Strong understanding of UX principles",
      "Portfolio of previous work",
    ],
  },
  {
    title: "WordPress Developer",
    type: "Full-time",
    location: "Bangalore, India",
    description:
      "Build and maintain WordPress websites with custom themes and plugins. Work on diverse projects from simple blogs to complex e-commerce sites.",
    requirements: [
      "2+ years of WordPress development",
      "Strong PHP, HTML, CSS, JavaScript skills",
      "Experience with page builders",
      "Knowledge of WooCommerce",
    ],
  },
  {
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Bangalore, India",
    description:
      "Plan and execute digital marketing campaigns across multiple channels. Analyze data and optimize strategies for maximum ROI.",
    requirements: [
      "2+ years in digital marketing",
      "Experience with Google Ads and Meta Ads",
      "Strong analytical skills",
      "Content creation abilities",
    ],
  },
  {
    title: "SEO Specialist",
    type: "Full-time",
    location: "Remote / Bangalore",
    description:
      "Develop and implement SEO strategies to improve organic rankings. Conduct keyword research, technical audits, and link building campaigns.",
    requirements: [
      "3+ years of SEO experience",
      "Knowledge of SEO tools (Ahrefs, SEMrush)",
      "Technical SEO expertise",
      "Proven track record of results",
    ],
  },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<(typeof openPositions)[0] | null>(
    null
  );

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
              Careers
            </span>
            <h1 className="heading-xl mb-6">
              Join the <span className="text-primary font-extrabold">Grituz Team</span>
            </h1>
            <p className="body-lg">
              Be part of a creative, passionate team that's shaping the future
              of digital experiences. We're always looking for talented
              individuals to join our journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <LazySection>
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              badge="Why Join Us"
              title="Life at Grituz"
              description="We believe in creating an environment where talent thrives."
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Growth Opportunities",
                  description:
                    "Continuous learning and career advancement in a dynamic environment.",
                },
                {
                  title: "Creative Freedom",
                  description:
                    "Express your creativity and bring innovative ideas to life.",
                },
                {
                  title: "Work-Life Balance",
                  description:
                    "Flexible work arrangements that respect your personal time.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* Open Positions */}
      <LazySection>
        <section className="section-padding bg-gradient-section">
          <div className="container-custom">
            <SectionHeading
              badge="Open Positions"
              title="Current Opportunities"
              description="Explore our open positions and find your perfect role."
            />

            <div className="space-y-6">
              {openPositions.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="heading-sm mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <Button variant="hero" onClick={() => setSelectedJob(job)}>
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* Application Dialog */}
      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Apply for {selectedJob?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedJob && (
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">About the Role</h4>
                <p className="text-muted-foreground text-sm">
                  {selectedJob.description}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Requirements</h4>
                <ul className="space-y-2">
                  {selectedJob.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="First Name" required />
                  <Input placeholder="Last Name" required />
                </div>
                <Input type="email" placeholder="Email Address" required />
                <Input type="tel" placeholder="Phone Number" />
                <Input type="url" placeholder="Portfolio URL" />
                <Textarea
                  placeholder="Tell us about yourself and why you're interested in this role..."
                  rows={4}
                />
                <Button variant="hero" className="w-full">
                  Submit Application
                </Button>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
