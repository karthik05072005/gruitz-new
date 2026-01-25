import { motion } from "framer-motion";
import { Target, Eye, Award, Shield, Heart, BookOpen } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import CTABanner from "@/components/home/CTABanner";
import LazySection from "@/components/ui/LazySection";
import logo from "@/assets/grituz-logo.png";

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
              About Us
            </span>
            <h1 className="heading-xl mb-6">
              Redefining <span className="text-primary font-extrabold">Digital Excellence</span>
            </h1>
            <p className="body-lg">
              For over 15 years, Grituz has been at the forefront of web design
              and digital marketing, helping businesses establish powerful
              online presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <LazySection>
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/5 rounded-3xl rotate-3" />
                  <div className="relative bg-foreground rounded-3xl p-16 flex items-center justify-center">
                    <img src={logo} alt="Grituz" className="w-64 h-auto" loading="lazy" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="heading-lg">Who We Are</h2>
                <p className="body-md">
                  Grituz is a premier web design and digital marketing agency
                  based in Bangalore, India. Founded in 2010, we've grown from a
                  small team of passionate designers to a full-service digital
                  agency serving clients globally.
                </p>
                <p className="body-md">
                  Our team comprises talented designers, skilled developers,
                  creative marketers, and strategic thinkers who work together to
                  deliver exceptional digital solutions that drive real business
                  results.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Mission & Vision */}
      <LazySection>
        <section className="section-padding bg-gradient-section">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="heading-md mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To help businesses leverage the power of the internet
                  effectively through affordable, tailored digital solutions that
                  drive growth and create lasting impact in the digital
                  landscape.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="heading-md mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a global leader in innovative web design and digital
                  marketing services, setting new standards of excellence and
                  helping businesses worldwide achieve their full potential.
                </p>
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
                  className="glass-card-hover p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection>
        <CTABanner />
      </LazySection>
    </Layout>
  );
}
