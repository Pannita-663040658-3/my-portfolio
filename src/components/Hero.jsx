import { useState, useEffect } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Facebook, Sparkles, Code2, Palette } from "lucide-react";
import resumePDF from "../assets/ResumePannita.pdf";

export default function HeroSection({ sectionsRef }) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/Kinzokubat47", label: "Facebook" },
        { icon: Github, href: "https://github.com/Pannita-663040658-3", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/pannita-pananan/", label: "LinkedIn" },
        { icon: Mail, href: "https://myaccount.google.com/?hl=th&utm_source=OGB&utm_medium=act&gar=WzJd&pli=1", label: "Email" },
    ];

    const floatingIcons = [
        { icon: Code2, top: "15%", left: "10%", delay: "0s", size: 24 },
        { icon: Palette, top: "20%", right: "15%", delay: "0.5s", size: 20 },
        { icon: Sparkles, bottom: "30%", left: "8%", delay: "1s", size: 18 },
        { icon: Code2, bottom: "25%", right: "10%", delay: "1.5s", size: 22 },
    ];

    return (
        <section 
        ref={(el) => (sectionsRef.current[0] = el)}
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div
                    className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-transform duration-1000"
                    style={{
                        background: "linear-gradient(135deg, rgb(35,54,117) 0%, rgb(59,130,246) 100%)",
                        top: "10%",
                        left: "20%",
                        transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
                    }}
                />
                <div
                    className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl transition-transform duration-1000"
                    style={{
                        background: "linear-gradient(135deg, rgb(59,130,246) 0%, rgb(147,197,253) 100%)",
                        bottom: "10%",
                        right: "15%",
                        transform: `translate(${-mousePos.x * 0.015}px, ${-mousePos.y * 0.015}px)`,
                    }}
                />

                {/* Grid Pattern */}
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
            </div>

            {/* Main Content */}
            <div className={`max-w-4xl text-center space-y-6 relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 shadow-lg mb-6">
                    <span className="text-sm font-medium text-[rgb(35,54,117)]">Available for Internship</span>
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>

                {/* Name */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="text-gray-800">Hello, I'm</span>
                    <br />
                    <span className="bg-gradient-to-r from-[rgb(35,54,117)] via-blue-600 to-[rgb(35,54,117)] bg-clip-text text-transparent">
                        Pannita Pananun
                    </span>
                </h1>

                {/* Role */}
                <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-[rgb(35,54,117)]" />
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[rgb(35,54,117)]">
                        Frontend Developer
                    </h2>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-[rgb(35,54,117)]" />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 ">
                    <button
                        onClick={() => window.open(resumePDF, "_blank")}
                        className="relative z-10 group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[rgb(35,54,117)] to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 cursor-pointer"
                    >
                        <span className="relative z-10">View Resume</span>
                        <ArrowUpRight size={18} className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[rgb(35,54,117)] opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                    </button>

                </div>

                {/* Social Links */}
                <div className="flex gap-3 justify-center pt-6">
                    {socialLinks.map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            className="group relative w-11 h-11 flex items-center justify-center rounded-full bg-white border border-blue-100 shadow-md hover:shadow-xl hover:border-[rgb(35,54,117)] transition-all duration-300 hover:-translate-y-1"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <social.icon
                                size={18}
                                className="text-[rgb(35,54,117)] transition-transform group-hover:scale-110"
                            />
                            <div className="absolute -bottom-8 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {social.label}
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <button className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[rgb(35,54,117)] group">
                <span className="text-xs font-medium opacity-60 group-hover:opacity-100 transition-opacity">Scroll Down</span>
                <div className="w-6 h-10 rounded-full border-2 border-[rgb(35,54,117)]/30 flex items-start justify-center p-1.5 group-hover:border-[rgb(35,54,117)] transition-colors">
                    <div className="w-1.5 h-2.5 rounded-full bg-[rgb(35,54,117)] animate-bounce" />
                </div>
            </button>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle cx="150" cy="50" r="80" fill="none" stroke="rgb(35,54,117)" strokeWidth="0.5" />
                    <circle cx="150" cy="50" r="60" fill="none" stroke="rgb(35,54,117)" strokeWidth="0.5" />
                    <circle cx="150" cy="50" r="40" fill="none" stroke="rgb(35,54,117)" strokeWidth="0.5" />
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <rect x="20" y="100" width="30" height="30" fill="none" stroke="rgb(35,54,117)" strokeWidth="0.5" transform="rotate(45 35 115)" />
                    <rect x="50" y="130" width="20" height="20" fill="none" stroke="rgb(35,54,117)" strokeWidth="0.5" transform="rotate(45 60 140)" />
                </svg>
            </div>
        </section>
    );
}