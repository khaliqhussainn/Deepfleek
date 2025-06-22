"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Rocket, Target, Zap } from "lucide-react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Rocket,
      title: "Cutting-Edge Technology",
      description: "Leverage the latest innovations to stay ahead of the competition",
    },
    {
      icon: Target,
      title: "Precision Solutions",
      description: "Tailored approaches that address your specific business needs",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that delivers results at unprecedented speed",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-950">
            Why Choose DeepFleek?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine innovation with reliability to deliver solutions that transform your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold mb-4 text-blue-950">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
