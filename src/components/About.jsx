import { Palette, ChevronDown, Briefcase, Quote, Sparkles, Code2, Brush } from "lucide-react";
import myProfile from "../assets/meMJ.jpg";

export default function AboutSection({ scrollToSection, sectionsRef }) {
  const highlights = [
    { icon: Brush, label: "Art", value: "Passionated" },
    { icon: Palette, label: "UI/UX", value: "Interested" },
  ];

  const floatingIcons = [
    { icon: Code2, top: "15%", left: "10%", delay: "0s", size: 24 },
    { icon: Palette, top: "20%", right: "15%", delay: "0.5s", size: 20 },
    { icon: Sparkles, bottom: "30%", left: "8%", delay: "1s", size: 18 },
    { icon: Code2, bottom: "25%", right: "10%", delay: "1.5s", size: 22 },
  ];

  return (
    <section
      ref={(el) => (sectionsRef.current[1] = el)}
      className="min-h-screen flex items-center justify-center px-6 relative"
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

      <div className="max-w-5xl space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          {/* Left: Content */}
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(35,54,117)] mb-6">
              About me.
            </h2>

            {/* Quote Card */}
            <div className="relative p-6 bg-white rounded-2xl border border-blue-100 shadow-lg">
              <Quote className="absolute top-4 left-4 text-blue-100" size={40} />
              <div className="relative z-10 space-y-4 pl-4">
                <p className="text-gray-600 leading-relaxed">
                  I'm <span className="font-semibold text-[rgb(35,54,117)]">Pannita Pananun</span>, a third-year Computer Engineering student from KhonKaen University. I discovered my passion for web development at 15, when I first learned HTML and realized how much I enjoy shaping layouts and creating aesthetic designs
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I've learned <span className="text-[rgb(35,54,117)] font-medium">React, JavaScript, Node.js, Express</span>. I helped develop my first public website, "Astra" — a horoscope platform.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="group relative z-10 p-4 bg-white rounded-xl border border-blue-100 hover:border-[rgb(35,54,117)] transition-all hover:shadow-lg hover:-translate-y-1 text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-[rgb(35,54,117)] to-blue-500 flex items-center justify-center">
                    <item.icon size={18} className="text-white" />
                  </div>
                  <div className="text-lg font-bold text-[rgb(35,54,117)]">{item.value}</div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                </div>

              ))}
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center">
            <img
              src={myProfile}
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-full shadow-lg"
              alt="Profile"
            />
          </div>
        </div>

      </div>
      <button
        onClick={() => scrollToSection(2)}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce text-[rgb(35,54,117)] mt-10"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
