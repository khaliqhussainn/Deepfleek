"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Globe, Settings, Database, TrendingUp } from "lucide-react";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: Globe,
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a comprehensive project roadmap",
    },
    {
      icon: Settings,
      title: "Design & Development",
      description: "Our team crafts beautiful, functional solutions using cutting-edge technologies",
    },
    {
      icon: Database,
      title: "Testing & Optimization",
      description: "Rigorous testing ensures your solution performs flawlessly across all platforms",
    },
    {
      icon: TrendingUp,
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support for continuous improvement",
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
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach that ensures every project is delivered on time and exceeds expectations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 mb-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  <step.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-950">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 border-t-2 border-dashed border-blue-300 transform translate-x-4"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;