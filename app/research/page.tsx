"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Microscope,
  Lightbulb,
  BookOpen,
  TrendingUp,
  Users,
  Target,
  Zap,
  Database,
  Globe,
  Award,
  ArrowRight,
  ExternalLink,
  Download,
  Calendar,
  User,
  FileText,
  Search,
  Cpu,
  BarChart3,
  Shield,
  Rocket,
  Network,
  Eye,
  ChevronRight,
  Play,
  DollarSign,
} from "lucide-react";
import CTASection from "components/CTA";

const ResearchPage = () => {
  const heroRef = useRef(null);
  const researchAreasRef = useRef(null);
  const publicationsRef = useRef(null);
  const collaborationRef = useRef(null);
  const facilitiesRef = useRef(null);
  const [activeTab, setActiveTab] = useState("all");
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0 or a default value

  // Handle window resize
  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isResearchAreasInView = useInView(researchAreasRef, {
    once: true,
    amount: 0.1,
  });
  const isPublicationsInView = useInView(publicationsRef, {
    once: true,
    amount: 0.1,
  });
  const isCollaborationInView = useInView(collaborationRef, {
    once: true,
    amount: 0.1,
  });
  const isFacilitiesInView = useInView(facilitiesRef, {
    once: true,
    amount: 0.1,
  });

  const researchAreas = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Advancing AI capabilities through deep learning, neural networks, and cognitive computing solutions for enterprise applications.",
      gradient: "from-purple-600 to-violet-700",
      category: "AI/ML",
      technologies: [
        "Deep Learning",
        "Neural Networks",
        "NLP",
        "Computer Vision",
      ],
      publications: 23,
      projects: 8,
    },
    {
      icon: Database,
      title: "Big Data Analytics & Intelligence",
      description:
        "Transforming massive datasets into actionable insights using advanced analytics, data mining, and predictive modeling.",
      gradient: "from-blue-600 to-cyan-700",
      category: "Data Science",
      technologies: [
        "Data Mining",
        "Predictive Analytics",
        "Real-time Processing",
        "Cloud Computing",
      ],
      publications: 18,
      projects: 12,
    },
    {
      icon: Shield,
      title: "Cybersecurity & Privacy",
      description:
        "Developing next-generation security frameworks, threat detection systems, and privacy-preserving technologies.",
      gradient: "from-red-600 to-orange-700",
      category: "Security",
      technologies: [
        "Threat Detection",
        "Encryption",
        "Blockchain",
        "Zero Trust",
      ],
      publications: 15,
      projects: 6,
    },
    {
      icon: Cpu,
      title: "Quantum Computing Research",
      description:
        "Exploring quantum algorithms, quantum machine learning, and quantum-classical hybrid systems for future computing.",
      gradient: "from-indigo-600 to-purple-700",
      category: "Quantum",
      technologies: [
        "Quantum Algorithms",
        "Quantum ML",
        "Hybrid Systems",
        "Quantum Cryptography",
      ],
      publications: 12,
      projects: 4,
    },
    {
      icon: Network,
      title: "Distributed Systems & Cloud Computing",
      description:
        "Architecting scalable, resilient distributed systems and advancing cloud-native technologies and edge computing.",
      gradient: "from-green-600 to-teal-700",
      category: "Systems",
      technologies: [
        "Microservices",
        "Edge Computing",
        "Kubernetes",
        "Serverless",
      ],
      publications: 20,
      projects: 15,
    },
    {
      icon: Eye,
      title: "Human-Computer Interaction",
      description:
        "Designing intuitive interfaces, augmented reality experiences, and natural user interaction paradigms.",
      gradient: "from-pink-600 to-rose-700",
      category: "HCI",
      technologies: [
        "AR/VR",
        "Voice Interfaces",
        "Gesture Recognition",
        "UX Research",
      ],
      publications: 14,
      projects: 9,
    },
  ];

  const publications = [
    {
      title: "Quantum-Enhanced Machine Learning for Financial Risk Assessment",
      authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez", "Dr. James Liu"],
      journal: "Nature Quantum Information",
      year: "2024",
      category: "Quantum",
      citations: 47,
      impact: "High",
      abstract:
        "Novel quantum algorithms for enhanced financial risk modeling with exponential speedup over classical methods.",
      link: "#",
    },
    {
      title:
        "Federated Learning in Healthcare: Privacy-Preserving AI for Medical Diagnosis",
      authors: ["Dr. Emily Watson", "Prof. David Kumar", "Dr. Lisa Zhang"],
      journal: "IEEE Transactions on Medical Imaging",
      year: "2024",
      category: "AI/ML",
      citations: 63,
      impact: "High",
      abstract:
        "Decentralized machine learning approach for medical image analysis while preserving patient privacy.",
      link: "#",
    },
    {
      title: "Zero-Trust Architecture for Edge Computing Environments",
      authors: ["Dr. Robert Thompson", "Prof. Anna Petrov", "Dr. Kevin Park"],
      journal: "ACM Computing Surveys",
      year: "2024",
      category: "Security",
      citations: 38,
      impact: "Medium",
      abstract:
        "Comprehensive security framework for distributed edge computing with continuous verification.",
      link: "#",
    },
    {
      title: "Real-time Anomaly Detection in IoT Networks Using Deep Learning",
      authors: ["Dr. Maria Santos", "Prof. Ahmed Hassan", "Dr. John Mitchell"],
      journal: "IEEE Internet of Things Journal",
      year: "2024",
      category: "AI/ML",
      citations: 52,
      impact: "High",
      abstract:
        "Advanced neural network architectures for detecting anomalies in large-scale IoT deployments.",
      link: "#",
    },
    {
      title:
        "Blockchain-Based Identity Management for Decentralized Applications",
      authors: ["Dr. Alex Kim", "Prof. Sophie Dubois", "Dr. Mark Johnson"],
      journal: "Blockchain: Research and Applications",
      year: "2023",
      category: "Security",
      citations: 41,
      impact: "Medium",
      abstract:
        "Self-sovereign identity solutions using blockchain technology for enhanced privacy and control.",
      link: "#",
    },
  ];

  const collaborations = [
    {
      name: "MIT Computer Science and Artificial Intelligence Laboratory",
      type: "Academic Partnership",
      focus: "AI Ethics and Explainable AI",
      duration: "2022-2025",
      projects: 3,
      logo: "🎓",
    },
    {
      name: "Stanford HAI (Human-Centered AI Institute)",
      type: "Research Collaboration",
      focus: "Human-AI Interaction",
      duration: "2023-2026",
      projects: 2,
      logo: "🏛️",
    },
    {
      name: "Google Research",
      type: "Industry Partnership",
      focus: "Quantum Computing Applications",
      duration: "2023-2024",
      projects: 1,
      logo: "🏢",
    },
    {
      name: "European Space Agency (ESA)",
      type: "Government Partnership",
      focus: "Satellite Data Analytics",
      duration: "2024-2027",
      projects: 2,
      logo: "🚀",
    },
  ];

  const filteredPublications =
    activeTab === "all"
      ? publications
      : publications.filter((pub) => pub.category === activeTab);
  const categories = [
    "all",
    ...Array.from(new Set(publications.map((pub) => pub.category))),
  ];

  const getChartHeightDivisor = () => {
    if (windowWidth < 640) return 2;
    if (windowWidth < 1024) return 1.5;
    return 1.2;
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-auto pt-24 sm:pt-40 pb-20 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(139,92,246,0.03)_50%,transparent_52%)] bg-[length:30px_30px]" />
        </div>

        {/* Floating Research Icons */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-20 animate-float">
            <Brain className="w-8 h-8 text-purple-400" />
          </div>
          <div className="absolute top-48 right-32 animate-float-delay-1">
            <Microscope className="w-6 h-6 text-blue-400" />
          </div>
          <div className="absolute bottom-40 left-32 animate-float-delay-2">
            <Lightbulb className="w-7 h-7 text-yellow-400" />
          </div>
          <div className="absolute bottom-32 right-20 animate-float-delay-3">
            <Database className="w-6 h-6 text-green-400" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center px-4 relative z-10 max-w-6xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
              <Microscope className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">
                Research & Innovation
              </span>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Pushing the{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Boundaries
            </span>
          </h1>
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-1 bg-purple-400 rounded-full"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-4 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-20 h-1 bg-blue-400 rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100 leading-relaxed font-light">
            Pioneering breakthrough research in{" "}
            <span className="text-purple-300 font-semibold">
              artificial intelligence
            </span>
            ,{" "}
            <span className="text-blue-300 font-semibold">
              quantum computing
            </span>
            , and{" "}
            <span className="text-cyan-300 font-semibold">
              emerging technologies
            </span>{" "}
            that shape the future.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { number: "102", label: "Research Papers", icon: FileText },
              { number: "24", label: "Active Projects", icon: Rocket },
              { number: "15", label: "Research Areas", icon: Target },
              { number: "8", label: "Partnerships", icon: Users },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/20">
                  <stat.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
              <span>Explore Research</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Research Overview</span>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Research Areas Section */}
      <section ref={researchAreasRef} className="py-32 bg-slate-950 relative">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-40 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isResearchAreasInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Research{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Areas
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our multidisciplinary research spans cutting-edge domains, driving
              innovation and solving complex challenges across industries.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isResearchAreasInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 h-full relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  ></div>
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-blue-200 border border-white/30">
                      {area.category}
                    </span>
                  </div>
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className={`absolute -inset-3 bg-gradient-to-br ${area.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                  </div>
                  <div className="relative z-10 mb-6">
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm group-hover:text-white transition-colors duration-300 mb-4">
                      {area.description}
                    </p>
                  </div>
                  <div className="relative z-10 mb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {area.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 rounded-lg text-xs text-blue-200 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 flex justify-between items-center text-sm text-blue-300">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{area.publications}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Rocket className="w-4 h-4" />
                        <span>{area.projects}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Facilities Section */}
      <section
        ref={facilitiesRef}
        className="py-32 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('/grid-pattern.svg')] bg-[length:60px_60px]"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFacilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cutting-edge{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Research Facilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art laboratories and research infrastructure enabling
              breakthrough innovations across disciplines.
            </p>
          </motion.div>
          {/* Lab Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Quantum Computing Lab",
                description:
                  "Housing 3 quantum processors and cryogenic systems for quantum algorithm development",
                image: "/quantum-lab.jpg",
                equipment: [
                  "IBM Quantum System",
                  "D-Wave Advantage",
                  "Dilution Refrigerator",
                ],
                status: "Operational",
                gradient: "from-indigo-500 to-purple-600",
              },
              {
                name: "AI Research Center",
                description:
                  "4000 sq.ft facility with GPU clusters and multimodal AI development environments",
                image: "/ai-lab.jpg",
                equipment: [
                  "NVIDIA DGX Pod",
                  "Large Language Model Cluster",
                  "VR Simulation",
                ],
                status: "Expanding",
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                name: "Cybersecurity Range",
                description:
                  "Isolated network environment for offensive security research and penetration testing",
                image: "/cyber-lab.jpg",
                equipment: [
                  "Cyber Range Platform",
                  "Threat Intelligence Feed",
                  "Honeypot Network",
                ],
                status: "Operational",
                gradient: "from-red-500 to-orange-600",
              },
            ].map((lab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isFacilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-purple-300 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  {/* Lab image placeholder - replace with actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br via-gray-900 to-gray-800 flex items-center justify-center text-white/20">
                    <Database className="w-20 h-20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                        lab.status === "Operational"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {lab.status}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {lab.name}
                    </h3>
                    <p className="text-white/90 text-sm">{lab.description}</p>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h4 className="font-medium text-gray-900 mb-3">
                    Key Equipment:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {lab.equipment.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 mr-3 bg-gradient-to-br ${lab.gradient}`}
                        ></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <button className="text-sm font-medium text-purple-600 hover:text-purple-800 flex items-center transition-colors">
                      <span>View Lab Details</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                    <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 transition-colors flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Book Tour</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Facility Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFacilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-12"
          >
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  value: "15,000",
                  unit: "sq.ft",
                  label: "Research Space",
                  icon: Globe,
                },
                {
                  value: "$25M",
                  unit: "equipment",
                  label: "Specialized Equipment",
                  icon: Cpu,
                },
                {
                  value: "24/7",
                  unit: "access",
                  label: "Researcher Access",
                  icon: Shield,
                },
                {
                  value: "50+",
                  unit: "labs",
                  label: "Dedicated Labs",
                  icon: Microscope,
                },
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {metric.value}{" "}
                    <span className="text-purple-600">{metric.unit}</span>
                  </div>
                  <div className="text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Impact Metrics Section */}
      <section ref={collaborationRef} className="py-32 bg-slate-950 relative">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCollaborationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Research{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Quantifying the real-world influence and academic contributions of
              our research initiatives.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: "10,000+",
                label: "Annual Citations",
                description:
                  "Our research is widely referenced in academic and industry publications",
                icon: BookOpen,
                gradient: "from-purple-500 to-violet-600",
              },
              {
                value: "45",
                label: "Patents Filed",
                description:
                  "Innovative technologies protected and available for licensing",
                icon: Award,
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                value: "8.7",
                label: "Avg. Impact Factor",
                description:
                  "High-quality publications in top-tier journals and conferences",
                icon: BarChart3,
                gradient: "from-green-500 to-teal-600",
              },
              {
                value: "$12M",
                label: "Research Funding",
                description:
                  "Competitive grants and industry-sponsored research projects",
                icon: DollarSign,
                gradient: "from-orange-500 to-red-600",
              },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isCollaborationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${metric.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {metric.value}
                  </h3>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {metric.label}
                  </h4>
                  <p className="text-blue-100 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isCollaborationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Research Publications Timeline
                </h3>
                <p className="text-blue-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Our publication output has grown exponentially over the past 5
                  years, with increasing impact across multiple disciplines.
                </p>
                <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg sm:rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center sm:justify-start space-x-2 text-sm sm:text-base">
                  <span>View All Publications</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              <div className="order-1 lg:order-2 bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl p-4 sm:p-6 h-48 sm:h-56 lg:h-64 flex items-center justify-center border border-white/10">
                {/* Chart component */}
                <div className="text-center w-full">
                  <div className="text-blue-300 mb-2 text-xs sm:text-sm">
                    Publication Growth (2019-2024)
                  </div>
                  <div className="flex items-end justify-center space-x-1 sm:space-x-2 h-24 sm:h-32 lg:h-40">
                    {[15, 32, 48, 67, 89, 102].map((value, i) => (
                      <div
                        key={i}
                        className="w-4 sm:w-6 lg:w-8 bg-gradient-to-t from-purple-400 to-blue-400 rounded-t-sm"
                        style={{
                          height: `${
                            value / getChartHeightDivisor()
                          }px`,
                        }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-2 sm:space-x-4 lg:space-x-8 mt-2 sm:mt-3 text-xs text-blue-200">
                    {["2019", "2020", "2021", "2022", "2023", "2024"].map(
                      (year, i) => (
                        <span key={i} className="text-xs sm:text-sm">
                          {windowWidth < 640 ? year.slice(-2) : year}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTASection />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delay-1 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-delay-2 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }
        @keyframes float-delay-3 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float-delay-1 6s ease-in-out infinite 1s;
        }
        .animate-float-delay-2 {
          animation: float-delay-2 6s ease-in-out infinite 2s;
        }
        .animate-float-delay-3 {
          animation: float-delay-3 6s ease-in-out infinite 3s;
        }
      `}</style>
    </div>
  );
};

export default ResearchPage;
