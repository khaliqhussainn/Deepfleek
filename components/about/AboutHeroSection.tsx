import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const AboutHeroSection = () => {
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Learn more about our journey, mission, and the team behind DeepFleek.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHeroSection;
