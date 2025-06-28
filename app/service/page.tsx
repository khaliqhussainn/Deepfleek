"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Plane,
  Car,
  ShoppingBag,
  GraduationCap,
  DollarSign,
  Heart,
  Building,
  Shield,
  Store,
  Smartphone,
  Truck,
  MapPin,
  Flag,
  Building2,
  Users,
  Briefcase,
} from "lucide-react";

const ServicesPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 });

  const services = [
    {
      icon: Plane,
      title: "Aerospace and Defense",
      description:
        "Advanced solutions for aerospace engineering, defense systems, and mission-critical applications with highest security standards.",
      gradient: "from-blue-600 to-indigo-700",
      category: "Engineering",
    },
    {
      icon: Car,
      title: "Automotive Industry",
      description:
        "Innovative automotive technologies, smart vehicle systems, and digital transformation solutions for modern mobility.",
      gradient: "from-slate-600 to-gray-700",
      category: "Manufacturing",
    },
    {
      icon: ShoppingBag,
      title: "Consumer Products",
      description:
        "End-to-end product development, market analysis, and consumer experience optimization for retail success.",
      gradient: "from-orange-600 to-red-600",
      category: "Retail",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Educational technology solutions, learning management systems, and digital transformation for academic institutions.",
      gradient: "from-green-600 to-emerald-700",
      category: "Technology",
    },
    {
      icon: DollarSign,
      title: "Financial Institutions",
      description:
        "Secure fintech solutions, banking systems, compliance tools, and financial analytics platforms.",
      gradient: "from-emerald-600 to-teal-700",
      category: "Finance",
    },
    {
      icon: Heart,
      title: "Health Care Industry",
      description:
        "Healthcare technology, medical device integration, patient management systems, and telemedicine solutions.",
      gradient: "from-red-600 to-pink-700",
      category: "Healthcare",
    },
    {
      icon: Building,
      title: "Industrial Goods",
      description:
        "Industrial automation, supply chain optimization, and manufacturing process improvement solutions.",
      gradient: "from-gray-600 to-slate-700",
      category: "Manufacturing",
    },
    {
      icon: Shield,
      title: "Insurance Industry",
      description:
        "Insurance technology platforms, risk assessment tools, claims processing systems, and customer portals.",
      gradient: "from-blue-600 to-cyan-700",
      category: "Finance",
    },
    {
      icon: Users,
      title: "Principal Investors",
      description:
        "Investment management platforms, portfolio analysis tools, and financial advisory solutions for institutional clients.",
      gradient: "from-purple-600 to-indigo-700",
      category: "Finance",
    },
    {
      icon: Building2,
      title: "Public Sector",
      description:
        "Government technology solutions, public service platforms, and civic engagement tools for transparent governance.",
      gradient: "from-indigo-600 to-blue-700",
      category: "Government",
    },
    {
      icon: Store,
      title: "Retail Industry",
      description:
        "E-commerce platforms, inventory management, customer analytics, and omnichannel retail solutions.",
      gradient: "from-pink-600 to-rose-700",
      category: "Retail",
    },
    {
      icon: Smartphone,
      title: "Technology, Media & Telecommunications",
      description:
        "Cutting-edge tech solutions, media platforms, telecom infrastructure, and digital communication systems.",
      gradient: "from-violet-600 to-purple-700",
      category: "Technology",
    },
    {
      icon: Truck,
      title: "Transportation and Logistics",
      description:
        "Smart logistics solutions, fleet management systems, route optimization, and supply chain visibility platforms.",
      gradient: "from-amber-600 to-orange-700",
      category: "Logistics",
    },
    {
      icon: MapPin,
      title: "Travel and Tourism",
      description:
        "Travel booking platforms, hospitality management systems, and tourism experience optimization solutions.",
      gradient: "from-teal-600 to-cyan-700",
      category: "Travel",
    },
    {
      icon: Flag,
      title: "US Public Sector and Government",
      description:
        "Federal and state government solutions, compliance systems, and public administration digital transformation.",
      gradient: "from-red-600 to-blue-700",
      category: "Government",
    },
  ];

  const categories = Array.from(
    new Set(services.map((service) => service.category))
  );

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-auto pt-24 sm:pt-40 flex items-center justify-center bg-slate-950 text-white overflow-hidden"
      >
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-blue-300 rotate-12 animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-blue-400 rounded-full animate-pulse"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center px-4  relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-4"></div>
            <div className="w-16 h-1 bg-blue-400 rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100 leading-relaxed font-light">
            Comprehensive technology solutions across{" "}
            <span className="text-blue-300 font-semibold">15+ industries</span>,
            delivering innovation and excellence in every project.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-blue-200 text-sm font-medium border border-white/20"
              >
                {category}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section ref={servicesRef} className="py-32 bg-slate-950 relative">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-40 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              From aerospace to healthcare, we deliver tailored solutions that
              drive digital transformation across diverse industries.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.1,
                }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 h-full relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-blue-200 border border-white/30">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className={`absolute -inset-3 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - White Background */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                DeepFleek
              </span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine industry expertise with cutting-edge technology to
              deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                number: "15+",
                title: "Industries Served",
                description: "Comprehensive expertise across diverse sectors",
              },
              {
                number: "500+",
                title: "Projects Delivered",
                description: "Successful implementations worldwide",
              },
              {
                number: "98%",
                title: "Client Satisfaction",
                description: "Consistently exceeding expectations",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {stat.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section - Dark Background */}
      <section className="py-32 bg-slate-950 relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Approach
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures success at every stage of your
              digital transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Deep dive into your business needs and challenges",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Develop tailored solutions aligned with your goals",
                icon: "🎯",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Build robust, scalable solutions using best practices",
                icon: "⚡",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Deploy and optimize for maximum impact and ROI",
                icon: "🚀",
              },
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="text-blue-400 font-bold text-lg mb-2">
                    {approach.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {approach.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {approach.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Business?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how our industry expertise can drive your digital
              transformation and accelerate your growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                Get Started Today
              </button>
              <button className="px-10 py-4 bg-white text-gray-900 font-semibold rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Free Consultation",
                  description:
                    "30-minute discovery call to understand your needs",
                },
                {
                  title: "Custom Proposal",
                  description:
                    "Tailored solution with timeline and investment details",
                },
                {
                  title: "Ongoing Support",
                  description:
                    "Dedicated team for maintenance and future enhancements",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
    </div>
  );
};

export default ServicesPage;
