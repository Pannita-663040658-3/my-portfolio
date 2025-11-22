import { ArrowUpRight, Sparkles, Code2, Palette } from "lucide-react";


export default function ProjectsSection({ scrollToSection, sectionsRef, projects }) {
    const floatingIcons = [
        { icon: Code2, top: "15%", left: "10%", delay: "0s", size: 24 },
        { icon: Palette, top: "20%", right: "15%", delay: "0.5s", size: 20 },
        { icon: Sparkles, bottom: "30%", left: "8%", delay: "1s", size: 18 },
        { icon: Code2, bottom: "25%", right: "10%", delay: "1.5s", size: 22 },
    ];

    return (
        <section
            ref={(el) => (sectionsRef.current[3] = el)}
            className="min-h-screen flex items-center justify-center px-6 py-20 relative"
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
                    className="absolute text-blue-200 animate-pulse z-10"
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
            <div className="max-w-6xl w-full space-y-12">
                <h2 className="animate-element text-5xl font-bold text-center">
                    <span className="text-[rgb(35,54,117)]">My Project.</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8 ">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="animate-element group relative z-10 bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[rgb(35,54,117)] transition-all hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className="relative h-48 bg-white flex items-center justify-center">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                )}
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-gray-600 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-[rgb(35,54,117)]/10 text-[rgb(35,54,117)] text-xs rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative flex items-center gap-2 text-[rgb(35,54,117)] hover:gap-3 transition-all cursor-pointer"
                                >
                                    Show more <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
