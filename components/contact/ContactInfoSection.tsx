"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const ContactInfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      description: "123 Tech Street, Innovation City, IC 12345",
      subtitle: "Monday - Friday, 9AM - 6PM",
      color: "from-blue-800 to-deep-blue-700",
    },
    {
      icon: Phone,
      title: "Call Us Today",
      description: "+1 (123) 456-7890",
      subtitle: "Available 24/7 for urgent matters",
      color: "from-blue-800 to-deep-blue-700",
    },
    {
      icon: Mail,
      title: "Send Us Email",
      description: "info@deepfleek.com",
      subtitle: "We'll respond within 2 hours",
      color: "from-blue-800 to-deep-blue-700",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-slate-50 to-transparent rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Contact <span className="text-blue-600">Information</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Here are the best ways to reach our
            team and get the conversation started.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card Background with Gradient Border */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />

              <div className="relative bg-white border-2 border-slate-100 group-hover:border-slate-200 rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 text-center h-full">
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Floating dots decoration */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-700 rounded-full opacity-60" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-900 rounded-full opacity-40" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-slate-700 transition-colors">
                  {info.title}
                </h3>

                <p className="text-lg font-semibold text-slate-800 mb-2">
                  {info.description}
                </p>

                <p className="text-sm text-slate-500 mb-6">{info.subtitle}</p>

                {/* Interactive Button */}
                <div className="mt-auto">
                  <button
                    className={`group/btn inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${info.color} text-white rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
                  >
                    <span>Contact Now</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-slate-200 rounded-full opacity-20" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border border-slate-200 rounded-full opacity-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Our team is standing by to help you with any questions or
              concerns. Don't hesitate to reach out through any of the channels
              above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors duration-300 shadow-lg">
                Schedule a Call
              </button>
              <button className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300">
                Live Chat Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
