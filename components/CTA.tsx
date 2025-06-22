"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-slate-50/60"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-slate-200 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-16 h-16 border-2 border-blue-700 rotate-45"></div>
          <div className="absolute bottom-32 left-16 w-12 h-12 border-2 border-blue-700 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-700 transform rotate-45"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-blue-700 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Ready to Transform Your Business?
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how{" "}
            <span className="text-blue-700 font-semibold">DeepFleek</span> can
            help you achieve your goals with cutting-edge solutions tailored to
            your unique needs
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-700/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              className="px-6 py-3 border-2 border-solid border-blue-700 hover:border-blue-800 text-blue-700 hover:text-blue-800 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-700/10 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
