"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      description: "123 Tech Street, Innovation City, IC 12345",
    },
    { icon: Phone, title: "Phone", description: "+1 (123) 456-7890" },
    { icon: Mail, title: "Email", description: "info@deepfleek.com" },
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Information
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Here's how you can reach us.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <info.icon className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{info.title}</h3>
              <p className="text-blue-200">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
