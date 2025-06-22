"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      number: "500+",
      label: "PROJECTS DELIVERED",
      description: "Creative work that drives real results",
    },
    {
      number: "100+",
      label: "HAPPY CLIENTS",
      description: "Brands that keep coming back for more",
    },
    {
      number: "15",
      label: "YEARS OF EXPERIENCE",
      description: "Mastering the art of innovation, content and design",
    },
    {
      number: "99%",
      label: "CLIENT SATISFACTION",
      description: "We mostly focus on exceeding expectations",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.03)_50%,transparent_52%)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Our Edge in <br />
                <span className="text-gray-300">Excellance</span>
              </h2>

              <p className="text-lg md:text-lg text-gray-400 leading-relaxed max-w-lg">
                Whether it's an engaging explainer video, a vibrant social media
                campaign, or captivating motion graphics, we bring creativity
                and expertise to every project.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 group"
              >
                <span className="mr-2">Know More About us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="space-y-4"
              >
                {/* Number */}
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="space-y-2">
                  <div className="text-sm font-bold text-gray-400 tracking-wider">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
