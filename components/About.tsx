
"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-950">
              Innovation Meets Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              At DeepFleek, we're not just building solutions – we're crafting the future. Our team of experts combines deep technical knowledge with creative problem-solving to deliver results that exceed expectations.
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              From concept to deployment, we ensure every project is executed with precision, innovation, and a relentless focus on quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Our Story <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-50">
                Meet the Team
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg text-gray-700">
                    Agile Development Process
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg text-gray-700">
                    24/7 Technical Support
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg text-gray-700">
                    Scalable Architecture
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg text-gray-700">
                    Quality Assurance
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
