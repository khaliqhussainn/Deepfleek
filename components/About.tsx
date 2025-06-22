import React from "react";
import { ArrowRight, TrendingUp, DollarSign, Users, Star } from "lucide-react";

const PortfolioComponent = () => {
  return (
    <div className="min-h-screen bg-white text-slate-950 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-sm text-cyan-400 font-medium">
              Featured Case Study
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Logo, Identity & Web Design for Uber
            </h1>
            <p className="text-gray-800 text-lg leading-relaxed">
              Design menus lorem, suscipit sit at sapien sit amet, dictum
              lacinia lorem. In vel hendrerit elit. Vestibulum eget risus velit.
              Aliquam bibendum lorem et dui posuere at placerat arcu lobortis.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Maecenas lorem magna, elementum ut dignissim et, imperdiet vitae
              mauris.
            </p>


          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 to-transparent"></div>

              {/* Light bulb illustration */}
              <div className="relative z-10">
                <div className="w-24 h-32 mx-auto mb-4">
                  <div className="w-full h-20 bg-white/20 rounded-full border-4 border-white/40 relative">
                    <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/50 rounded-full"></div>
                  </div>
                  <div className="w-12 h-8 bg-white/30 mx-auto mt-2 rounded-sm"></div>
                  <div className="w-16 h-4 bg-white/40 mx-auto mt-1 rounded-sm"></div>
                </div>

                {/* Floating dollar signs */}
                <div className="absolute top-8 left-8 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                  <DollarSign size={16} className="text-yellow-800" />
                </div>
                <div className="absolute top-16 right-12 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                  <DollarSign size={16} className="text-yellow-800" />
                </div>
                <div className="absolute bottom-20 left-12 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                  <DollarSign size={16} className="text-yellow-800" />
                </div>
                <div className="absolute bottom-16 right-8 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
                  <DollarSign size={16} className="text-yellow-800" />
                </div>

                {/* Light rays */}
                <div className="absolute top-4 left-1/2 w-1 h-8 bg-yellow-300 transform -translate-x-1/2 -rotate-12"></div>
                <div className="absolute top-4 left-1/2 w-1 h-8 bg-yellow-300 transform -translate-x-1/2 rotate-12"></div>
                <div className="absolute top-8 right-4 w-1 h-8 bg-yellow-300 transform rotate-45"></div>
                <div className="absolute top-8 left-4 w-1 h-8 bg-yellow-300 transform -rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
              {/* Computer/Chart illustration */}
              <div className="relative z-10 flex items-center gap-6">
                {/* Laptop */}
                <div className="relative">
                  <div className="w-24 h-16 bg-gray-600 rounded-t-lg"></div>
                  <div className="w-28 h-2 bg-gray-500 rounded-b-xl -mt-1"></div>
                  <div className="absolute top-2 left-2 right-2 bottom-2 bg-gray-800 rounded"></div>
                  <div className="absolute top-3 left-3 right-3 bottom-3 bg-green-400 rounded opacity-80"></div>
                </div>

                {/* Chart */}
                <div className="flex items-end gap-1 h-20">
                  <div className="w-3 h-8 bg-cyan-400 rounded-t"></div>
                  <div className="w-3 h-12 bg-cyan-400 rounded-t"></div>
                  <div className="w-3 h-16 bg-cyan-400 rounded-t"></div>
                  <div className="w-3 h-10 bg-cyan-400 rounded-t"></div>
                </div>

                {/* Large bulb */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-green-500 rounded-full opacity-80 relative">
                  <div className="absolute inset-2 bg-white/30 rounded-full"></div>
                </div>
              </div>

              {/* Floating dollar signs */}
              <div className="absolute top-6 left-6 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <DollarSign size={14} className="text-yellow-800" />
              </div>
              <div className="absolute top-12 right-8 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <DollarSign size={14} className="text-yellow-800" />
              </div>
              <div className="absolute bottom-12 left-8 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <DollarSign size={14} className="text-yellow-800" />
              </div>
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <DollarSign size={14} className="text-yellow-800" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              My Regime Design, Development And Marketing.
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Nulla et velit gravida, feugiat quam a, molestie ante. Mauris
              posuere suscipit dui, eget bibendum tellus blandit at. Praesent
              non lorem sed ligula commodo blandit et ut magna. Quisque
              efficitur lorem ut dolor rutrum commodo.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Nulla pharetra hendrerit mi quis dignissim. Quisque luctus, tortor
              a commodo fermentum, est lacus condimentum est, ut pharetra odio
              enim eget ipsum.
            </p>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
