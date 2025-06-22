"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 600], [0, -100]);

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="absolute inset-0"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-transparent to-blue-950/60" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex items-center justify-center h-full px-4"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent"
          >
            DeepFleek
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 text-blue-100 font-light leading-relaxed"
          >
            Advanced Solutions for Tomorrow's Challenges
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white/30 hover:border-white/50 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mx-auto"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
