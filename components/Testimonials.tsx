"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "DeepFleek transformed our vision into reality. Their expertise and dedication exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      content:
        "Outstanding technical skills and professional service. They delivered exactly what we needed, on time.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, GrowthCo",
      content:
        "The team's attention to detail and innovative approach helped us scale our business significantly.",
      rating: 5,
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've
            helped transform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-blue-300 mb-4" />
              <p className="text-blue-100 mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div>
                <h4 className="font-bold text-white">{testimonial.name}</h4>
                <p className="text-blue-200 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
