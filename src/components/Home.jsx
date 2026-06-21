import React from "react";
import { VscTerminalCmd } from "react-icons/vsc";

const programs = [
  {
    id: "calculator",
    title: "Basic Calculator",
    description:
      "Four arithmetic operations — addition, subtraction, multiplication and division — with input validation and step-by-step working.",
    concepts: ["switch/case", "scanf/printf", "Input validation"],
    icon: "🧮",
    color: "border-blue-200 hover:border-blue-400",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "quadratic",
    title: "Quadratic Solver",
    description:
      "Solves quadratic equations using the quadratic formula. Handles two real roots, one repeated root, and complex roots. Includes a live parabola graph.",
    concepts: ["math.h / sqrt()", "Discriminant logic", "if/else if/else"],
    icon: "📐",
    color: "border-pink-200 hover:border-pink-400",
    badge: "bg-pink-50 text-[#D63384] border-pink-200",
  },
];

const Home = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#fdfcfb] px-4 py-16 md:px-8">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[#D63384]" />
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#D63384]">
              Portfolio Project
            </span>
            <span className="h-[1px] w-8 bg-[#D63384]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            C Programs{" "}
            <span className="text-[#D63384]">in React</span>
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
            A collection of programs originally written in C for my IT diploma —
            reimagined as interactive React web apps with live visualisations and
            step-by-step working.
          </p>

          {/* tech badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {["C Language", "React", "Tailwind CSS", "Chart.js", "Vite"].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-white"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* PROGRAM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {programs.map((prog) => (
            <button
              key={prog.id}
              onClick={() => onNavigate(prog.id)}
              className={`group text-left bg-white rounded-2xl border-2 ${prog.color} p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{prog.icon}</span>
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${prog.badge}`}>
                  C → React
                </span>
              </div>

              <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#D63384] transition-colors">
                {prog.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {prog.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {prog.concepts.map((c) => (
                  <span
                    key={c}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-500 font-mono"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-[#D63384]">
                Open project
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </button>
          ))}
        </div>

        {/* ABOUT THIS PROJECT */}
        <div className="bg-gray-950 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <VscTerminalCmd className="text-[#D63384] text-xl" />
            <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
              About this project
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            These programs were first written in C during my IT diploma studies. C taught me
            how computers actually handle memory, data types, and logic at a low level.
            I rebuilt them in React to show how the same logic translates from a terminal
            program into a modern interactive web interface.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Each program shows the original C source code alongside the React implementation
            so you can compare both approaches directly.
          </p>
        </div>

        {/* WHAT I LEARNED */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: "C Programming",   desc: "Data types, control flow, math.h, printf/scanf, switch statements", icon: "⚙️" },
            { title: "React",           desc: "Controlled inputs, useState, event handling, conditional rendering",  icon: "⚛️" },
            { title: "UI Development",  desc: "Tailwind CSS, responsive layout, component architecture",            icon: "🎨" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-gray-400">
          Built by{" "}
          <span className="text-[#D63384] font-medium">Faidat Olawuyi</span> ·{" "}
          <a
            href="https://github.com/yourusername/c-programs-in-react"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#D63384] transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
