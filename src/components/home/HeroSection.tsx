import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBlobs from "@/components/ui/AnimatedBlobs";
import heroImage from "@/assets/hero-image.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      <AnimatedBlobs />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Premium Web Solutions
              </span>
            </div>
            
            <h1 className="heading-xl">
              Best Web Design Agency in{" "}
              <span className="text-primary font-extrabold">India</span>
            </h1>
            
            <p className="body-lg max-w-xl">
              Helping small businesses build powerful online presence with
              stunning websites and result-driven marketing strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-quote">
                  Get A Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Done</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Modern agency workspace"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 glass-card p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Verified Agency</div>
                  <div className="text-sm text-muted-foreground">on DesignRush</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
