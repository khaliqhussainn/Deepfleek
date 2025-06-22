"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Code2, Smartphone, Cloud, Brain } from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies",
      features: ["React & Next.js", "Mobile-First Design", "SEO Optimized"],
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "React Native", "Flutter"],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions",
      features: ["AWS & Azure", "DevOps", "Serverless"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence",
      features: ["Data Analytics", "Predictive Models", "Automation"],
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Services
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <service.icon className="w-12 h-12 mb-4 text-blue-300" />
              <h3 className="text-xl font-bold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-blue-200 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
