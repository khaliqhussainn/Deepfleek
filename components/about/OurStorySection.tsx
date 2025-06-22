import React from "react";
import {
  CheckCircle,
  Shield,
  Users,
  Award,
  Eye,
  Target,
  Lightbulb,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import StatsSection from "components/about/Stats";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  variant?: "default" | "diamond" | "hexagon";
};

const FeatureCard = ({
  icon,
  title,
  description,
  delay = 0,
  variant = "default",
}: FeatureCardProps) => {
  if (variant === "diamond") {
    return (
      <div className="group relative" style={{ animationDelay: `${delay}ms` }}>
        <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-blue-900/20 overflow-hidden">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-slate-900 to-slate-800 transform rotate-45 translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-500"></div>

          {/* Icon container */}
          <div className="relative z-10 mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-950 rounded-2xl shadow-lg group-hover:rotate-12 transition-all duration-500">
              <div className="text-white">{icon}</div>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-slate-950 mb-4 group-hover:text-slate-700 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
            <div className="flex items-center text-slate-950 font-medium group-hover:translate-x-2 transition-transform duration-300">
              <span className="mr-2">Learn More</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "hexagon") {
    return (
      <div className="group relative" style={{ animationDelay: `${delay}ms` }}>
        <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-900 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Floating icon */}
          <div className="relative z-10 mb-6 flex items-center">
            <div className="w-16 h-16 bg-slate-950 rounded-xl flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <div className="text-white">{icon}</div>
            </div>
            <div className="w-2 h-2 bg-slate-950 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-slate-950 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  // Default card style
  return (
    <div
      className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-200 hover:border-blue-900/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-blue-800/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-18 h-18 bg-slate-950 rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
          <div className="text-white">{icon}</div>
        </div>
        <h3 className="text-2xl font-bold text-slate-950 mb-4 group-hover:text-slate-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Eye size={32} />,
      title: "Case Review",
      description:
        "Our expert team thoroughly analyzes your case details, identifying key factors and potential outcomes to build a solid foundation for your legal strategy.",
    },
    {
      icon: <Shield size={32} />,
      title: "Evidence Collection",
      description:
        "We systematically gather and organize all relevant documentation, witness statements, and supporting materials to strengthen your position.",
    },
    {
      icon: <Users size={32} />,
      title: "Strategic Defense",
      description:
        "Our experienced attorneys develop a comprehensive defense strategy tailored to your specific situation and legal requirements.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-slate-950 text-white rounded-full text-sm font-semibold mb-6">
            OUR PROCESS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-950 mb-8">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process ensures comprehensive legal support and
            optimal results for every client
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <FeatureCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={index * 100}
                variant="diamond"
              />
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-950 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-20">
                {index + 1}
              </div>
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-950/20 transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award size={32} />,
      title: "20+ Years Experience",
      description:
        "Two decades of proven success in legal representation with thousands of satisfied clients and winning cases.",
    },
    {
      icon: <Shield size={32} />,
      title: "Financial Protection",
      description:
        "We offer flexible payment plans and financial assistance programs to ensure everyone gets the legal help they deserve.",
    },
    {
      icon: <Users size={32} />,
      title: "Personalized Approach",
      description:
        "Every case receives individual attention with customized strategies designed specifically for your unique situation.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Trusted Reputation",
      description:
        "Built on integrity and results, we're recognized as industry leaders with numerous awards and client testimonials.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-slate-950 text-white rounded-full text-sm font-semibold mb-6">
            WHY CHOOSE US
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-950 mb-8">
            Our Advantages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine experience, dedication, and personalized service to
            deliver exceptional legal outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 150}
              variant="hexagon"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanySection = () => {
  const stats = [
    { number: "500+", label: "Cases Won" },
    { number: "20+", label: "Years Experience" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: <Target size={28} />,
      title: "Our Mission",
      description:
        "To provide exceptional legal representation that protects our clients' rights and delivers justice through dedicated advocacy.",
    },
    {
      icon: <Eye size={28} />,
      title: "Our Vision",
      description:
        "To be the most trusted legal firm, setting the standard for excellence in client service and legal outcomes.",
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Our Values",
      description:
        "Integrity, dedication, and client-first approach guide everything we do in our pursuit of justice.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-950/5 rounded-full transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-800/5 rounded-full transform -translate-x-40 translate-y-40"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-6 py-2 bg-slate-950 text-white rounded-full text-sm font-semibold mb-8">
              ABOUT US
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-950 mb-8 leading-tight">
              About Our Company
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              For over two decades, we've been at the forefront of legal
              excellence, providing comprehensive legal services with unwavering
              commitment to our clients' success. Our team of experienced
              attorneys brings together diverse expertise and a shared passion
              for justice.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white border-2 border-blue-900/10 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:border-blue-900/30">
                    <div className="text-4xl font-bold text-slate-950 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="group bg-slate-950 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center">
              <span className="mr-3">Learn More About Us</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>

          <div className="relative">
            {/* Main card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 border-2 border-blue-900/10">
              <div className="space-y-10">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-6 p-4 rounded-2xl hover:bg-blue-50/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-950 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-950 rounded-2xl opacity-10 transform rotate-12"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-slate-800 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <CompanySection />
      <StatsSection />
      <HowItWorks />
      <WhyChooseUs />
    </div>
  );
};

export default About;
