"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const teamMembers = [
  { name: "John Doe", role: "CEO", bio: "John has over 20 years of experience in the tech industry and leads our team with a vision for innovation and growth." },
  { name: "Jane Smith", role: "CTO", bio: "Jane is a technology expert with a passion for developing cutting-edge solutions that drive business success." },
  { name: "Mike Johnson", role: "Lead Developer", bio: "Mike is a skilled developer with a focus on creating high-quality, scalable software solutions." },
];

const TeamSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-950">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals who make DeepFleek a leader in the tech industry.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-950">{member.name}</h3>
              <p className="text-blue-600 mb-4">{member.role}</p>
              <p className="text-gray-700">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
