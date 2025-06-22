"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ContactHeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Get in touch with us to learn more about our services and how we can help you achieve your goals.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHeroSection;
