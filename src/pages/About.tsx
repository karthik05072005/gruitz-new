import { motion } from "framer-motion";
import { Target, Eye, Award, Shield, Heart, BookOpen, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import LazySection from "@/components/ui/LazySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const coreValues = [
  {
    icon: Award,
    title: "Commitment to Excellence",
    description: "We strive for perfection in every project we undertake.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "Honest communication and clear processes throughout.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Your success is our priority in everything we do.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always evolving with the latest technologies and trends.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-hero">
        <AnimatedBlobs />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-5 text-sm font-medium text-primary bg-secondary rounded-full">
              About Us
            </span>
            <h1 className="heading-xl mb-6">
              Redefining <span className="text-primary font-extrabold">Digital Excellence</span>
            </h1>
            <p className="body-lg text-muted-foreground leading-relaxed">
              Grituz helps businesses build strong digital foundations through strategic design,
              marketing, and technology solutions that drive measurable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <LazySection>
        <section className="section-padding">
          <div className="container-custom">
            {/* Intro text */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2
                className="heading-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Who We Are
              </motion.h2>
              <motion.p
                className="body-md text-muted-foreground leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Grituz is a digital solutions company helping small and medium businesses build,
                scale, and optimize their online presence. We combine strategic thinking, creative
                design, and reliable technology to deliver digital systems that drive sustainable growth.
              </motion.p>
              <motion.p
                className="body-md text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                Our team of designers, developers, and marketing specialists work together to deliver
                exceptional digital solutions that create real, measurable business results.
              </motion.p>
            </div>

            {/* AI Team Visual */}
            <motion.div
              className="mb-16 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ boxShadow: "0 8px 40px rgba(150,55,236,0.25)", border: "1px solid rgba(164,78,244,0.2)" }}
            >
              <img
                src="/images/about_hero_ai.png"
                alt="Grituz AI-powered digital team"
                className="w-full h-72 md:h-96 object-cover"
              />
            </motion.div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { value: "15+", label: "Years of Experience" },
                { value: "40+", label: "Projects Delivered" },
                { value: "25+", label: "Clients Served" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300"
                  style={{ borderColor: "rgba(139,92,246,0.15)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-4xl font-black text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* Mission & Vision */}
      <LazySection>
        <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8"
                style={{ borderColor: "rgba(139,92,246,0.15)" }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="heading-md mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To help growing businesses build impactful digital experiences through strategic design,
                  marketing, and intelligent technology solutions that drive measurable growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card p-8"
                style={{ borderColor: "rgba(139,92,246,0.15)" }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="heading-md mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a trusted digital partner for modern businesses, known for clarity, creativity,
                  and performance-driven results.
                </p>
              </motion.div>
              {/* AI Vision Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="rounded-2xl overflow-hidden hidden md:block"
                style={{ boxShadow: "0 8px 40px rgba(150,55,236,0.3)", border: "1px solid rgba(164,78,244,0.2)" }}
              >
                <img
                  src="/images/about_ai_vision.png"
                  alt="AI neural network vision"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "260px" }}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Core Values */}
      <LazySection>
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              badge="Our Values"
              title="Core Values"
              description="The principles that guide everything we do."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300"
                  style={{ borderColor: "rgba(139,92,246,0.12)" }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* CTA – Glass Card */}
      <LazySection>
        <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
          <div className="container-custom">
            <motion.div
              className="glass-card p-12 text-center max-w-4xl mx-auto hover:shadow-glow transition-all duration-300 relative overflow-hidden"
              style={{ borderColor: "rgba(139,92,246,0.18)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
              <div className="relative z-10 space-y-6">
                <h2 className="heading-lg text-gradient">
                  Ready to Build Your Digital Presence?
                </h2>
                <p className="body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Let's discuss your goals and explore the right strategy for your business.
                  We'll help you move forward with clarity and confidence.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="hero"
                    size="lg"
                    className="bg-gradient-cta hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <Link to="/contact">
                      Book a Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </LazySection>
    </Layout>
  );
}
