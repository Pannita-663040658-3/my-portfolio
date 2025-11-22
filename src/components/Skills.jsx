import { useState } from "react";
import { ChevronDown, Code, Layers, Palette, Smartphone, Wrench, Code2, Sparkles } from "lucide-react";

export default function SkillsSection({ scrollToSection, sectionsRef, skills }) {
  const [activeTab, setActiveTab] = useState("frontend");

  const categories = [
    { id: "frontend", label: "Frontend", icon: Code },
    { id: "backend", label: "Backend", icon: Layers },
    { id: "uiux", label: "UI/UX", icon: Palette },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "tool", label: "Tools", icon: Wrench },
  ];

  const floatingIcons = [
    { icon: Code2, top: "15%", left: "10%", delay: "0s", size: 24 },
    { icon: Palette, top: "20%", right: "15%", delay: "0.5s", size: 20 },
    { icon: Sparkles, bottom: "30%", left: "8%", delay: "1s", size: 18 },
    { icon: Code2, bottom: "25%", right: "10%", delay: "1.5s", size: 22 },
  ];

  return (
    <section
      ref={(el) => (sectionsRef.current[2] = el)}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative bg-gradient-to-b from-white to-blue-50/30 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
              linear-gradient(rgb(35,54,117) 1px, transparent 1px),
              linear-gradient(90deg, rgb(35,54,117) 1px, transparent 1px)
            `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Icons */}
      {floatingIcons.map((item, i) => (
        <div
          key={i}
          className="absolute text-blue-200 animate-pulse"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            animationDelay: item.delay,
            animationDuration: "3s",
          }}
        >
          <item.icon size={item.size} />
        </div>
      ))}

      <div className="max-w-5xl w-full space-y-12 relative z-10">
        {/* Title */}
        <h2 className="animate-element text-5xl font-bold text-center">
          <span className="text-[rgb(35,54,117)]">
            Skills.
          </span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300  cursor-pointer ${activeTab === cat.id
                  ? "bg-gradient-to-r from-[rgb(35,54,117)] to-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-600 border border-blue-100 hover:border-[rgb(35,54,117)] hover:text-[rgb(35,54,117)]"
                }`}
            >
              <cat.icon size={16} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills[activeTab]?.map((skill, i) => (
            <div
              key={i}
              className="group relative p-6 bg-white rounded-2xl border border-blue-100 hover:border-[rgb(35,54,117)] transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-2 text-center overflow-hidden transform opacity-0 animate-fadeIn"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "forwards" }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-lg">
                {skill.icon}
              </div>

              {/* Skill name */}
              <h4 className="font-bold text-lg text-gray-800 mb-1">{skill.name}</h4>

              {/* Level badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600`}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chevron Scroll */}
      <button
        onClick={() => scrollToSection(3)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[rgb(35,54,117)]"
      >
        <ChevronDown size={32} />
      </button>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}
