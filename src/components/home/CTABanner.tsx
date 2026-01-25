import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-primary overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Got a Project in Mind?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's Transform Your Ideas into Reality. Get in touch with us
              today and start your digital journey.
            </p>
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
