import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/grituz-logo.png";

export default function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-3" />
              <div className="relative bg-foreground rounded-3xl p-12 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Grituz"
                  className="w-48 h-auto"
                />
              </div>
            </div>
            
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 glass-card p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-primary bg-secondary rounded-full">
              About Us
            </span>
            <h2 className="heading-lg">
              Crafting Digital Excellence Since 2010
            </h2>
            <p className="body-md">
              Grituz is a premium web design and digital marketing agency with
              over 15 years of experience. We specialize in creating stunning,
              high-converting websites and implementing result-driven marketing
              strategies that help businesses thrive in the digital landscape.
            </p>
            <p className="body-md">
              Our team of passionate designers, developers, and marketers work
              together to deliver exceptional digital solutions tailored to each
              client's unique needs and goals.
            </p>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
