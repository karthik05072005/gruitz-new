import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 w-80 glass-card p-6 mb-4"
          >
            <h4 className="font-semibold text-lg mb-2">Need Help?</h4>
            <p className="text-muted-foreground text-sm mb-4">
              We're here to help! Send us a message and we'll respond as soon as
              possible.
            </p>
            <Button variant="hero" className="w-full" onClick={() => window.location.href = '/contact'}>
              Start Chat
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}
