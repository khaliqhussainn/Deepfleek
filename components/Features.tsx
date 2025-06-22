"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Rocket, Target, Zap, ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  type FeatureColor = "blue" | "emerald" | "purple";
  type Feature = {
    icon: React.ElementType;
    title: string;
    description: string;
    color: FeatureColor;
    number: string;
  };

  const features: Feature[] = [
    {
      icon: Rocket,
      title: "Cutting-Edge Technology",
      description:
        "Leverage the latest innovations to stay ahead of the competition with enterprise solutions",
      color: "blue",
      number: "01",
    },
    {
      icon: Target,
      title: "Precision Solutions",
      description:
        "Tailored approaches that address your specific business needs with surgical precision",
      color: "emerald",
      number: "02",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance that delivers results at unprecedented speed and efficiency",
      color: "purple",
      number: "03",
    },
  ];

  const getColorClasses = (color: "blue" | "emerald" | "purple") => {
    const colors = {
      blue: {
        icon: "text-blue-600",
        iconBg: "bg-blue-100",
        accent: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:shadow-blue-100/50",
      },
      emerald: {
        icon: "text-emerald-600",
        iconBg: "bg-emerald-100",
        accent: "bg-emerald-600",
        text: "text-emerald-600",
        border: "border-emerald-200",
        hover: "hover:shadow-emerald-100/50",
      },
      purple: {
        icon: "text-purple-600",
        iconBg: "bg-purple-100",
        accent: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:shadow-purple-100/50",
      },
    };
    return colors[color];
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with improved typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Why Choose
            <span className="bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              {" "}
              DeepFleek
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine innovation with reliability to deliver solutions that
            transform your business operations
          </p>
        </motion.div>

        {/* Enhanced Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className={`group relative bg-white p-8 rounded-2xl border ${colorClasses.border} hover:shadow-xl ${colorClasses.hover} transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Number indicator */}
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-bold text-gray-400 tracking-wider">
                    {feature.number}
                  </span>
                </div>

                {/* Icon with enhanced styling */}
                <div
                  className={`relative inline-flex p-3 rounded-xl ${colorClasses.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-6 h-6 ${colorClasses.icon}`} />
                  <div
                    className={`absolute inset-0 rounded-xl ${colorClasses.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Content with better spacing */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle accent line */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-0.5 ${colorClasses.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Enterprise Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
