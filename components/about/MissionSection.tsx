"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Target, Rocket, Heart } from "lucide-react";

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const missionCards = [
    {
      icon: Target,
      title: "Precision",
      description:
        "Delivering high-quality, scalable, and secure solutions tailored to your unique business needs.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description:
        "Pushing boundaries with cutting-edge technology to drive growth and competitive advantage.",
    },
    {
      icon: Heart,
      title: "Impact",
      description:
        "Creating positive change by solving complex problems and transforming business operations.",
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.03)_50%,transparent_52%)] bg-[length:20px_20px]" />
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-blue-300 rotate-12 animate-bounce-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Target className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>

          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-4"></div>
            <div className="w-16 h-1 bg-blue-400 rounded-full"></div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Empowering businesses with{" "}
            <span className="text-blue-300 font-semibold">
              innovative technology solutions
            </span>{" "}
            that drive growth and success in the digital age.
          </motion.p>
        </motion.div>

        {/* Mission Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {missionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-3 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white text-center group-hover:text-blue-200 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-blue-100 leading-relaxed text-center group-hover:text-white transition-colors duration-300">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-lg p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-transparent rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-600 to-transparent rounded-full"></div>
            </div>

            <div className="relative z-10 text-center">
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-6 font-light">
                Our commitment extends beyond delivering solutions – we strive
                to create lasting partnerships that foster innovation and drive
                meaningful change in the business landscape.
              </p>

              <div className="flex flex-wrap justify-center gap-8 mt-8">
                <div className="text-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-2"></div>
                  <span className="text-blue-200 font-medium">
                    Customer Focus
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-2"></div>
                  <span className="text-blue-200 font-medium">
                    Innovation First
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-2"></div>
                  <span className="text-blue-200 font-medium">
                    Global Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MissionSection;
