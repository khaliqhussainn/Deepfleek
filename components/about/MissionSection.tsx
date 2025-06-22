import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our mission is to empower businesses with innovative technology solutions that drive growth and success.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-blue-200 leading-relaxed max-w-4xl mx-auto"
        >
          <p className="mb-4">
            We are committed to delivering high-quality, scalable, and secure solutions that meet the unique needs of our clients. Our focus on innovation and customer satisfaction sets us apart in the industry.
          </p>
          <p>
            We strive to create a positive impact on the world by leveraging technology to solve complex problems and improve the way businesses operate.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
