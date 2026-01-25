import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    content:
      "Grituz transformed our online presence completely. Their attention to detail and commitment to quality is unmatched. Our website now generates 3x more leads!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder, Fashion Hub",
    content:
      "The team at Grituz is incredibly talented and professional. They understood our vision perfectly and delivered a stunning e-commerce website that exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Director, Finance Solutions",
    content:
      "Working with Grituz has been a game-changer for our business. Their digital marketing strategies have significantly increased our brand visibility and customer engagement.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Owner, Wellness Studio",
    content:
      "From design to development, Grituz handled everything seamlessly. Their support team is always available and responsive. Highly recommend their services!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what our valued clients have to say about working with us."
        />

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
              
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div>
                <div className="font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
