import React from "react";
import {
  ArrowRight,
  Eye,
  Heart,
  MessageCircle,
  Play,
  Award,
  Zap,
  Star,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";

const PortfolioComponent = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-blue-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Creative Excellance
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Showcasing innovative design solutions and digital experiences
              that push boundaries and create lasting impact.
            </p>
          </div>

          {/* Featured Project Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Main Featured Project */}
            <div className="group relative ">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 to-blue-800 aspect-[2/3]">
                <div className="absolute inset-0 bg-black/20"></div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=faces,entropy&auto=format&q=80"
                  alt="Analytics Dashboard Design"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 text-blue-200 text-sm mb-3">
                    <Award size={16} />
                    Award Winner
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Analytics Dashboard Redesign
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Complete UX/UI overhaul increasing user engagement by 340%
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-blue-200">
                      <div className="flex items-center gap-1">
                        <Eye size={16} />
                        <span className="text-sm">2.4k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={16} />
                        <span className="text-sm">189</span>
                      </div>
                    </div>
                    <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors">
                      <ArrowRight size={18} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="group relative flex-1 mt-8">
                <div className="relative overflow-hidden rounded-2xl bg-blue-900 h-full">
                  <img
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=faces,entropy&auto=format&q=80"
                    alt="Web Development Project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Corporate Website
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200 text-sm">
                        React & Node.js
                      </span>
                      <div className="flex items-center gap-2">
                        <Play size={14} className="text-white" />
                        <span className="text-white text-sm">Live Site</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Projects */}
            <div className="flex flex-col gap-4 h-full">
              <div className="group relative flex-1">
                <div className="relative overflow-hidden rounded-2xl bg-blue-900 h-full">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=faces,entropy&auto=format&q=80"
                    alt="Mobile App Design"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      E-commerce Mobile App
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200 text-sm">
                        iOS & Android
                      </span>
                      <div className="flex items-center gap-2">
                        <Play size={14} className="text-white" />
                        <span className="text-white text-sm">View Case</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative flex-1">
                <div className="relative overflow-hidden rounded-2xl bg-blue-900 h-full">
                  <img
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=faces,entropy&auto=format&q=80"
                    alt="Web Development Project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Corporate Website
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200 text-sm">
                        React & Node.js
                      </span>
                      <div className="flex items-center gap-2">
                        <Play size={14} className="text-white" />
                        <span className="text-white text-sm">Live Site</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-slate-950 py-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.03)_50%,transparent_52%)] bg-[length:20px_20px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap size={16} />
                What I Do
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Transforming Ideas Into
                <span className="text-blue-200 block">Digital Reality</span>
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                I specialize in creating comprehensive digital solutions that
                blend aesthetic excellence with functional innovation. From
                concept to execution, every project is crafted with precision
                and passion.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-2">150+</div>
                  <div className="text-blue-200 text-sm">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-3xl font-bold text-white mb-2">98%</div>
                  <div className="text-blue-200 text-sm">
                    Client Satisfaction
                  </div>
                </div>
              </div>

              <button className="group bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                Get In Touch
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=700&fit=crop&crop=faces,entropy&auto=format&q=80"
                    alt="Creative Workspace"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-600">
                      Live Project
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    24
                  </div>
                  <div className="text-sm text-gray-500">Active Clients</div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle size={18} className="text-blue-900" />
                    <span className="text-sm font-medium text-gray-600">
                      Feedback
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 bg-yellow-400 rounded-full"
                      ></div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    "Outstanding work!"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise & Process Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star size={16} />
              Expertise & Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Crafting Digital
              <span className="text-blue-900">&nbsp;Experiences</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My streamlined process ensures every project delivers exceptional
              results through strategic thinking and creative execution.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Process Steps */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Discovery & Research
                </h3>
                <p className="text-gray-600 mb-6">
                  Deep dive into understanding your brand, audience, and
                  objectives to create a solid foundation for success.
                </p>
                <div className="flex items-center gap-2 text-blue-900 font-medium text-sm">
                  <span>1-2 weeks</span>
                  <Clock size={16} />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Design & Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Transform insights into stunning visuals and functional
                  solutions that captivate and convert your audience.
                </p>
                <div className="flex items-center gap-2 text-blue-900 font-medium text-sm">
                  <span>2-4 weeks</span>
                  <Clock size={16} />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Launch & Optimize
                </h3>
                <p className="text-gray-600 mb-6">
                  Deploy your project with ongoing support and optimization to
                  ensure continued success and growth.
                </p>
                <div className="flex items-center gap-2 text-blue-900 font-medium text-sm">
                  <span>Ongoing</span>
                  <Clock size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="text-2xl font-bold text-blue-900 mb-2">
                UI/UX Design
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Creating intuitive and beautiful user experiences
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  Figma
                </span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  Adobe XD
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="text-2xl font-bold text-blue-900 mb-2">
                Frontend Dev
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Building responsive and performant interfaces
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  React
                </span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  Vue.js
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="text-2xl font-bold text-blue-900 mb-2">
                Brand Identity
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Crafting memorable brand experiences
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  Logo Design
                </span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  Guidelines
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="text-2xl font-bold text-blue-900 mb-2">
                Strategy
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Aligning design with business goals
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  Research
                </span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  Analytics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
