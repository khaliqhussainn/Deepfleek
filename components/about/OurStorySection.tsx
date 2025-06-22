import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const OurStorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DeepFleek was founded with a vision to revolutionize the tech industry by providing innovative solutions that address real-world challenges.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto"
        >
          <p className="mb-4">
            Since our inception, we have grown from a small team of passionate individuals to a leading tech company with a global presence. Our commitment to excellence and innovation has enabled us to deliver cutting-edge solutions to our clients.
          </p>
          <p>
            We believe in the power of technology to transform businesses and improve lives. Our team of experts is dedicated to pushing the boundaries of what's possible and creating solutions that make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection;
