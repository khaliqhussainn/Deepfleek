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
      color: "blue",
    },
    {
      icon: Target,
      title: "Precision Solutions",
      description: "Tailored approaches that address your specific business needs",
      color: "indigo",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that delivers results at unprecedented speed",
      color: "violet",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        icon: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
        hover: "hover:border-blue-200 hover:bg-blue-100/50"
      },
      indigo: {
        icon: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-100",
        hover: "hover:border-indigo-200 hover:bg-indigo-100/50"
      },
      violet: {
        icon: "text-violet-600",
        bg: "bg-violet-50",
        border: "border-violet-100",
        hover: "hover:border-violet-200 hover:bg-violet-100/50"
      }
    };
    return colors[color];
  };

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-3">
            Why Choose DeepFleek?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We combine innovation with reliability to deliver exceptional results
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-6 rounded-xl border-2 ${colorClasses.border} ${colorClasses.bg} ${colorClasses.hover} transition-all duration-300 hover:shadow-sm`}
              >
                {/* Icon */}
                <div className={`inline-flex p-2 rounded-lg ${colorClasses.bg} mb-4 group-hover:scale-105 transition-transform duration-200`}>
                  <feature.icon className={`w-5 h-5 ${colorClasses.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Optional bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-gray-500">
            Trusted by leading companies worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;