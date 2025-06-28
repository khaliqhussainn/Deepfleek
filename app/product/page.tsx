"use client";
import React, { useRef, useState } from "react";
import {
  Cloud,
  Database,
  Shield,
  Brain,
  Code,
  Smartphone,
  Monitor,
  Globe,
  Zap,
  Lock,
  Layers,
  Bot,
  Palette,
  BarChart3,
  Workflow,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Timer,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: 1,
      icon: Cloud,
      title: "CloudSync Pro",
      subtitle: "Enterprise Cloud Management",
      description:
        "Comprehensive cloud infrastructure management platform with multi-cloud support, automated scaling, and advanced monitoring capabilities.",
      features: [
        "Multi-cloud integration",
        "Auto-scaling",
        "24/7 monitoring",
        "Cost optimization",
      ],
      gradient: "from-blue-500 via-blue-600 to-indigo-700",
      category: "Cloud",
      badge: "Popular",
      price: "Starting at $299/month",
      image: "☁️",
    },
    {
      id: 2,
      icon: Database,
      title: "DataVault Enterprise",
      subtitle: "Advanced Data Analytics",
      description:
        "AI-powered data analytics platform that transforms raw data into actionable insights with real-time processing and machine learning capabilities.",
      features: [
        "Real-time analytics",
        "ML integration",
        "Custom dashboards",
        "API access",
      ],
      gradient: "from-emerald-500 via-teal-600 to-cyan-700",
      category: "Analytics",
      badge: "New",
      price: "Starting at $499/month",
      image: "📊",
    },
    {
      id: 3,
      icon: Shield,
      title: "SecureGuard 360",
      subtitle: "Cybersecurity Suite",
      description:
        "Complete cybersecurity solution with threat detection, incident response, and compliance management for enterprise environments.",
      features: [
        "Threat detection",
        "Incident response",
        "Compliance tools",
        "Security audits",
      ],
      gradient: "from-red-500 via-orange-600 to-amber-700",
      category: "Security",
      badge: "Featured",
      price: "Starting at $399/month",
      image: "🛡️",
    },
    {
      id: 4,
      icon: Brain,
      title: "AI WorkFlow",
      subtitle: "Intelligent Automation",
      description:
        "Revolutionary AI-powered workflow automation that streamlines business processes and enhances productivity across departments.",
      features: [
        "Process automation",
        "AI optimization",
        "Integration APIs",
        "Performance tracking",
      ],
      gradient: "from-purple-500 via-violet-600 to-indigo-700",
      category: "AI/ML",
      badge: "Trending",
      price: "Starting at $699/month",
      image: "🤖",
    },
    {
      id: 5,
      icon: Smartphone,
      title: "MobileFirst Suite",
      subtitle: "Mobile App Development",
      description:
        "Complete mobile application development platform with cross-platform support, real-time collaboration, and integrated testing.",
      features: [
        "Cross-platform",
        "Real-time collab",
        "Integrated testing",
        "App store deployment",
      ],
      gradient: "from-pink-500 via-rose-600 to-red-700",
      category: "Mobile",
      badge: "",
      price: "Starting at $199/month",
      image: "📱",
    },
    {
      id: 6,
      icon: Globe,
      title: "WebCraft Studio",
      subtitle: "Web Development Platform",
      description:
        "Advanced web development environment with modern frameworks, collaborative tools, and seamless deployment capabilities.",
      features: [
        "Modern frameworks",
        "Collaborative IDE",
        "One-click deploy",
        "Performance optimization",
      ],
      gradient: "from-slate-500 via-gray-600 to-zinc-700",
      category: "Web",
      badge: "",
      price: "Starting at $149/month",
      image: "🌐",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Grows with your business from startup to enterprise",
    },
    {
      icon: Bot,
      title: "AI-Powered",
      description: "Intelligent automation and machine learning integration",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-40 min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-950/50 via-slate-950 to-indigo-950/50" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-600/5 to-transparent rounded-full" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 right-32 w-24 h-24 border border-blue-400/30 rounded-lg rotate-12 animate-float"></div>
          <div className="absolute bottom-32 left-32 w-16 h-16 border border-indigo-400/30 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 right-20 w-8 h-32 bg-gradient-to-b from-blue-400/20 to-transparent rounded-full animate-pulse"></div>
        </div>

        <div className="text-center px-4 relative z-10 max-w-6xl animate-fadeInUp">
          <h1 className="text-7xl md:text-8xl font-black mb-8 leading-none">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Products
            </span>
          </h1>

          <div className="flex items-center justify-center mb-12">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-6 animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-blue-100 leading-relaxed font-light">
            Cutting-edge software solutions designed to{" "}
            <span className="text-blue-300 font-semibold">
              transform your business
            </span>{" "}
            and accelerate digital innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slideInUp">
            <button className="group px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transform">
              Explore Products
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-12 py-5 bg-white/10 backdrop-blur-lg text-white font-bold rounded-2xl border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 bg-slate-950 relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
              Premium{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
              Discover our comprehensive suite of enterprise-grade products
              designed for modern businesses
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                      : "bg-white/10 text-blue-200 hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] h-full relative overflow-hidden">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  {/* Product Image/Icon */}
                  <div className="relative mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-3xl">{product.image}</span>
                    </div>
                    <div
                      className={`absolute -inset-4 bg-gradient-to-br ${product.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider">
                        {product.subtitle}
                      </p>
                    </div>

                    <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-blue-200"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-white font-semibold rounded-xl border border-blue-400/30 hover:from-blue-600/40 hover:to-indigo-600/40 transition-all duration-300 group/btn">
                      Learn More
                      <ArrowRight className="inline ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                DeepFleek
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built with enterprise-grade standards and cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white h-80 border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                number: "10K+",
                label: "Active Users",
                description: "Trusted by companies worldwide",
              },
              {
                icon: Timer,
                number: "99.9%",
                label: "Uptime",
                description: "Reliable and always available",
              },
              {
                icon: Rocket,
                number: "50%",
                label: "Faster",
                description: "Improved productivity on average",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fadeInUp"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-950/30 via-slate-950 to-indigo-950/30" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="animate-fadeInUp">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Innovate?
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
              Join thousands of companies already using DeepFleek products to
              transform their operations and accelerate growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Free 30-Day Trial",
                  description: "Full access to all features with no commitment",
                },
                {
                  title: "Expert Onboarding",
                  description:
                    "Dedicated support team to get you started quickly",
                },
                {
                  title: "24/7 Support",
                  description:
                    "Round-the-clock assistance whenever you need it",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl mb-4 flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-blue-100 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-180deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out 0.8s forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;
