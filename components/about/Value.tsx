"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Shield, Lightbulb, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest standards of honesty and transparency in all our business dealings.",
    gradient: "from-slate-600 to-slate-700"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and foster a culture of mutual respect and support.",
    gradient: "from-indigo-600 to-indigo-700"
  },

];

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The principles that guide our decisions and define who we are
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.1
              }}
              className="group"
            >
              <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-gray-200 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {value.description}
                </p>
                
                {/* Subtle hover accent */}
                <div className="mt-6 w-0 h-0.5 bg-blue-600 group-hover:w-12 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500 font-medium">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Guiding our path forward</span>
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;