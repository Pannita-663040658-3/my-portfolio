// components/SectionIndicator.jsx
import React from "react";

export default function SectionIndicator({ activeSection, navItems, scrollToSection }) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === item.id
              ? "bg-[rgb(35,54,117)] scale-125"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
}
