import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Import Sections
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";
import Nav from "./components/Nav";
import SectionIndicator from "./components/SectionIndicator";

import astraImg from "./assets/main-page.png";
import askmafirstImg from "./assets/askmafirst.png";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from "react-icons/fa";
import { 
  SiExpress, SiDocker, SiFigma, SiGithub, 
  SiFirebase, SiFlutter, SiDart, SiMysql,
} from "react-icons/si";



gsap.registerPlugin(ScrollToPlugin);

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);
  const isScrolling = useRef(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 0, label: 'Home' },
    { id: 1, label: 'About' },
    { id: 2, label: 'Skills' },
    { id: 3, label: 'Projects' },
  ];

  const scrollToSection = (index) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    setActiveSection(index);

    gsap.to(window, {
      duration: 1,
      scrollTo: sectionsRef.current[index],
      onComplete: () => (isScrolling.current = false),
    });
  };

  useEffect(() => {
  const handleScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    const sections = sectionsRef.current;

    sections.forEach((section, index) => {
      if (section) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(index);
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  const projects = [
    {
      title: 'Astra – Astrology Web App',
      description:
        'เว็บดูดวงหลากหลายแบบเพื่อความบันเทิง เช่น ไพ่ยิปซี ดูดวงโหราศาสตร์ตะวันตก กงล้อโชคชะตา และChat bot บาร์เทนเดอร์ พร้อมระบบสลับภาษาและ UI ใช้งานง่าย',
      tech: ['HTML', 'CSS', 'JavaScript', 'API Integration', 'Responsive UI'],
      link: 'https://astrax-blue.vercel.app/?fbclid=IwY2xjawOOhbxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeHqvgbAxacXPjrgdcrdajzx4ucw2tQvVymvDty6r7Mdh-uKVxd2CGyFmwvhE_aem_lApyC8jV9gzpesDjQGmueQ',
      image: astraImg,
    },
    {
      title: 'AskMaFirst – True CyberSafe x TrueMoney Hackathon 2025',
      description:
        'ฟีเจอร์เสริมในแอพ TrueMoney เพื่อช่วยตรวจสอบความเสี่ยงก่อนโอนสำหรับเด็กที่ต้องอยู่ในการดูแลของผู้ใหญ่ ออกแบบ UI/UX เพื่อให้เข้ากับธีม "ครอบครัว" พร้อมระบบแจ้งเตือนและประเมินความเสี่ยงไปยังผู้ใหญ่ที่ช่วยเด็ก ๆ คัดกรอง',
      tech: ['Flutter', 'Dart', 'Firebase', 'Figma', 'Mobile Design'],
      link: 'https://github.com/Nattapon-663040649-4/AskMaFirst_True',
      image: askmafirstImg,
    }
  ];

  const skills = {
  frontend: [
    { name: "HTML", level: "Advanced", icon: <FaHtml5 className="text-orange-500" size={40} /> },
    { name: "CSS", level: "Advanced", icon: <FaCss3Alt className="text-blue-500" size={40} /> },
    { name: "JavaScript", level: "Intermediate", icon: <FaJs className="text-yellow-400" size={40} /> },
    { name: "React", level: "Intermediate", icon: <FaReact className="text-cyan-400" size={40} /> },
  ],
  
  backend: [
    { name: "Node.js", level: "Basic", icon: <FaNode className="text-green-600" size={40} /> },
    { name: "Express", level: "Basic", icon: <SiExpress className="text-gray-700" size={40} /> },
    { name: "MySQL", level: "Basic", icon: <SiMysql className="text-blue-700" size={40} /> },
    { name: "Firebase", level: "Intermediate", icon: <SiFirebase className="text-yellow-500" size={40} /> },
  ],

  uiux: [
    { name: "Figma", level: "Intermediate", icon: <SiFigma className="text-purple-500" size={40} /> },
  ],

  mobile: [
    { name: "Flutter", level: "Intermediate", icon: <SiFlutter className="text-blue-400" size={40} /> },
    { name: "Dart", level: "Intermediate", icon: <SiDart className="text-blue-500" size={40} /> },
  ],

  tool: [
    { name: "Github", level: "Basic", icon: <SiGithub className="text-gray-900" size={40} /> },
  ]
};



  return (
    <>
      <Nav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        navItems={navItems}
      />

      <SectionIndicator
        activeSection={activeSection}
        navItems={navItems}
        scrollToSection={scrollToSection}
      />

      <HeroSection
        scrollToSection={scrollToSection}
        sectionsRef={sectionsRef}
      />

      <AboutSection
        scrollToSection={scrollToSection}
        sectionsRef={sectionsRef}
      />

      <SkillsSection
        scrollToSection={scrollToSection}
        sectionsRef={sectionsRef}
        skills={skills}
      />

      <ProjectsSection
        scrollToSection={scrollToSection}
        sectionsRef={sectionsRef}
        projects={projects}
      />

      <footer className="py-8 border-t border-gray-100 text-center text-gray-600 text-sm">
        <p>© 2025 MJ Portfolio. Made by Pannita Pananun using React & Tailwind CSS</p>
      </footer>
    </>
  );
}
