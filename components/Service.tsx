"use client";

import { useState, useEffect, useRef } from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  Brain,
  ArrowUpRight,
  CheckCircle,
  Star,
  Sparkles,
} from "lucide-react";

interface Service {
  icon: any;
  title: string;
  description: string;
  features: string[];
  price: string;
  featured?: boolean;
  badge?: string;
}

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services: Service[] = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Modern web applications with React, Next.js, and TypeScript for exceptional performance.",
      features: [
        "React & Next.js",
        "TypeScript",
        "Responsive Design",
        "SEO Optimized",
        "Performance Tuned",
      ],
      price: "$2,500",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description:
        "Smart automation and machine learning solutions to transform your business processes.",
      features: [
        "Machine Learning",
        "Process Automation",
        "Data Analytics",
        "Custom AI Models",
        "Predictive Analysis",
      ],
      price: "$4,000",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Cross-platform mobile apps with native performance for iOS and Android platforms.",
      features: [
        "iOS & Android",
        "React Native",
        "Native Performance",
        "App Store Ready",
        "Push Notifications",
      ],
      price: "$3,500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure with automated deployment and enterprise security.",
      features: [
        "AWS & Azure",
        "Auto Scaling",
        "DevOps Pipeline",
        "24/7 Monitoring",
        "Security First",
      ],
      price: "$1,500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-slate-950 overflow-hidden"
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

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-blue-400 bg-blue-950/80 rounded-full border border-blue-800/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            PROFESSIONAL SERVICES
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Solutions That
            <span className=" bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 bg-clip-text text-transparent">
              &nbsp;Drive Results
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Partner with industry experts to accelerate your digital
            transformation with proven methodologies and cutting-edge
            technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden p-5 hover:-translate-y-1 min-h-[340px]">
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold rounded-full">
                    {service.badge}
                  </div>
                )}

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-blue-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 transition-all duration-500 ${
                          isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-4"
                        }`}
                        style={{
                          transitionDelay: `${index * 100 + idx * 50 + 400}ms`,
                        }}
                      >
                        <CheckCircle className="w-3 h-3 text-blue-400 flex-shrink-0" />
                        <span className="text-slate-300 text-xs font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-slate-500 pl-5">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-auto">
                    {/* <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-blue-400">
                        {service.price}
                      </span>
                    </div> */}

                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-lg hover:shadow-blue-600/25 py-2.5 px-4 text-sm">
                      <span>Get Started</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
