import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Shield,
  Terminal,
  ChevronDown,
  Menu,
  X,
  Star,
  Award,
  Users,
  Coffee,
  Zap,
  Lock,
  Bug,
  Database,
  Server,
  Globe
} from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import FloatingElements from './components/FloatingElements';
import { a, style } from 'framer-motion/client';
import { link } from 'framer-motion/m';
import emailjs from '@emailjs/browser';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  // Add a loading state for feedback (optional)
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Penetration Testing', level: 55, color: 'from-red-500 to-pink-500', icon: Shield },
    { name: 'Web Development', level: 80, color: 'from-cyan-400 to-blue-500', icon: Code },
    { name: 'Network Security', level: 88, color: 'from-green-400 to-emerald-500', icon: Lock },
    { name: 'Python', level: 85, color: 'from-yellow-400 to-orange-500', icon: Terminal },
    { name: 'Bug Bounty', level: 60, color: 'from-purple-400 to-pink-500', icon: Bug },
    { name: 'Database Security', level: 50, color: 'from-indigo-400 to-purple-500', icon: Database }
  ];

  const projects = [
    {
      title: 'subBro',
      description: 'This script fetches subdomains for a given domain using the crt.sh service and saves the results to a file.',
      image: '/image/subbro.png',
      tech: ['Python'],
      github: 'https://github.com/sudheeshspai/subBro',
      live: '#'
    },
    {
      title: 'IP_Master',
      description: 'This tool helps identify the owner of a given IP address or domain name using various methods such as WHOIS lookup and reverse DNS lookup.',
      image: '/image/IP_master.png',
      tech: ['Python'],
      github: 'https://github.com/sudheeshspai/IP_Master',
      live: '#'
    },
    {
      title: 'MAZECRAFT',
      description: 'Made a funny maze game with Steve and Bed he wants to reach the bed. There are 10 levels with different mazes and with many exciting things.',
      image: '/image/mazecraft.png',
      tech: ['Python', 'Pygame'],
      github: 'https://github.com/sudheeshspai/Useless_poject-',
      live: '#'
    }
    ,{
      title: 'HashQR',
      description: 'A QR code generator that creates QR codes for any text input, allowing users to easily share information through scannable codes.',
      image: '/image/hashqr.png',
      tech: ['Typescript', 'React'],
      github: 'https://github.com/sudheeshspai/QR-generator',
      live: 'https://hashqr.netlify.app'
    }
    ,{
      title: 'CLOUDCERT',
      description: 'A cloud-based certificate uploading system with security authentication system that provides secure access to digital resources.',
      image: '/image/cloudcert.png',
      tech: ['Typescript', 'React'],
      github: 'https://github.com/sudheeshspai/QR-generator',
      live: 'https://cloudcerts.netlify.app/'
    }
  ];

  const stats = [
    { icon: Shield, value: '15+', label: 'Security Assessments' },
    { icon: Bug, value: '7', label:'Websites Built' },
    { icon: Award, value: '2027', label: 'Years of Graduation' },
    { icon: Zap, value: '24/7', label: 'Passionate Learner' }
  ];

  // Add your experience data here
  const experience = [
    {
      company: "Hexinox Web Developing Company",
      companyUrl: "https://hexinox.com/",
      role: "Web Development Intern",
      period: "7 Days",
      location: "Remote",
      description: "Completed an intensive internship focused on modern web development practices, collaborating with senior developers to deliver responsive and user-friendly websites.",
      skills: ["HTML", "CSS", "JavaScript", "Teamwork"]
    },
    {
      company: "AC Incorporates",
      companyUrl: "https://ac-inc.in/",
      role: "Chief Technology Officer (CTO)",
      period: "June 2024 - Present",
      location: "Remote",
      description: "Serving as CTO at AC Incorporates, a web development company, leading the technology strategy, overseeing project delivery, and mentoring the development team to ensure high-quality, secure web solutions.",
      skills: ["Leadership", "Web Development", "Project Management", "Security"]
    },
    {
      company: "The Shield Squad",
      companyUrl: "https://shieldsquad.org/",
      role: "Co-founder",
      period: "September 2024 - Present",
      location: "Remote",
      description: "Co-founded The Shield Squad, a cybersecurity-based company. Driving innovation in security solutions, conducting penetration tests, and building a strong security community.",
      skills: ["Cybersecurity", "Penetration Testing", "Startups", "Community Building"]
    },
    {
      company: "Supe AI",
      companyUrl: "https://supeai.vercel.app/",
      role: "Developer",
      period: "April 2025 - Present",
      location: "Remote",
      description: "Developer of Supe AI, continuously striving to innovate and contribute to the tech community by building advanced AI-driven solutions.",
      skills: ["AI", "Innovation", "Software Development", "Tech Community"]
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      <FloatingElements />

      {/* Cyberpunk grid overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Neon glow effects */}
      <div className="fixed inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-pink-900/20 animate-gradient-shift pointer-events-none z-0"></div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-cyan-500/30 shadow-cyan-500/20' : 'bg-transparent'
          }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold text-cyan-400 animate-pulse-glow font-mono">
                &lt;SUDHEESH.EXE/&gt;
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-white hover:text-cyan-400 transition-all duration-300 relative group font-mono ${activeSection === item.toLowerCase() ? 'text-cyan-400 glow-text' : ''
                      }`}
                  >
                    {item.toUpperCase()}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:w-full transition-all duration-300 shadow-sm shadow-cyan-400/50"></span>
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/30 animate-slide-down">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-300 w-full text-left font-mono"
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-pink-900/20 animate-gradient-pulse"></div>
          <div className="relative z-10 text-center px-4">
            <div className="mb-8 animate-fade-in-up">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 p-1 animate-spin-slow shadow-lg shadow-cyan-400/50">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center animate-counter-spin border border-cyan-400/30">
                  <Terminal className="text-4xl text-cyan-400 animate-pulse" size={48} />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200 font-mono">
              <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-text glow-text">
                SUDHEESH S PAI
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 font-mono">
              &gt; CYBERSECURITY_SPECIALIST.EXE
            </p>

            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
              Penetration Tester | Web Developer | Bug Bounty Hunter
              <br />
              <span className="text-cyan-400 font-mono">[SYSTEM_STATUS: ONLINE]</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-800">
              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold rounded-none hover:from-cyan-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 animate-glow font-mono border-2 border-cyan-400/50 hover:border-cyan-400"
              >
                [VIEW_RESUME]
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-none hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 font-mono"
              >
                [CONTACT_ME]
              </button>
            </div>

            <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-1000">
              <a href="https://github.com/sudheeshspai" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 glow-icon">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sudheesh-s-pai-36ab8a290/" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 glow-icon">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sudheeshspai2025@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 glow-icon">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <ChevronDown className="text-cyan-400 animate-pulse glow-icon" size={32} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-900/30 backdrop-blur-sm relative border-y border-cyan-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up font-mono">
                &gt; ABOUT <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent glow-text">ME.EXE</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200 font-mono">
                [LOADING_PROFILE_DATA...]
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <div className="w-full h-96 rounded-none bg-gradient-to-br from-cyan-600/20 to-pink-600/20 flex items-center justify-center backdrop-blur-sm border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-pink-400/10 animate-gradient-shift"></div>
                  <div className="text-center relative z-10">
                    <Shield size={22} className="text-cyan-400 mx-auto  animate-float glow-icon" />
                    <p className="text-gray-300 font-mono"><img src="/image/sudheesh.jpg" alt="Profile" /></p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 animate-fade-in-right">
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                  &gt; HashPai
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I am a dedicated cybersecurity enthusiast with a solid foundation in networking, ethical hacking, and penetration testing. I am currently pursuing my B.Tech at Muthoot Institute of Technology and Science. My journey has equipped me with hands-on experience using a wide range of security tools and methodologies to identify and mitigate vulnerabilities. As a web developer, I blend my technical skills with a creative mindset to build secure, user-friendly applications. I am passionate about continuous learning, staying updated with the latest trends in technology and cybersecurity, and actively participating in bug bounty programs and security communities. My goal is to contribute to a safer digital world while constantly expanding my expertise and sharing knowledge with others.

                </p>
                

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-none bg-gray-800/30 backdrop-blur-sm border-2 border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up glow-box" style={{ animationDelay: `${index * 100}ms` }}>
                      <stat.icon className="text-cyan-400 mx-auto mb-2 animate-pulse glow-icon" size={24} />
                      <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
                      <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative bg-gradient-to-r from-cyan-900/10 to-pink-900/10 border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up font-mono">
                &gt; EXPERIENCE <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent glow-text">.PRO</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200 font-mono">
                [PROFESSIONAL_JOURNEY...]
              </p>
            </div>
            <div className="space-y-10">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative bg-gray-800/30 backdrop-blur-sm border-2 border-cyan-400/20 rounded-lg p-8 hover:border-cyan-400/40 transition-all duration-300 animate-fade-in-up glow-box shadow-lg shadow-cyan-500/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-cyan-400 font-mono">{exp.role}</h3>
                      <span className="text-white font-semibold">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-cyan-400 transition-colors"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </span>
                    </div>
                    <div className="text-cyan-300 font-mono text-sm mt-2 md:mt-0 md:text-right">
                      {exp.period} <span className="text-gray-400">|</span> {exp.location}
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-none text-xs border border-cyan-500/30 font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/10 to-pink-900/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up font-mono">
                &gt; SKILLS <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent glow-text">.SYS</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200 font-mono">
                [INITIALIZING_SKILL_MATRIX...]
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 rounded-none bg-gray-800/30 backdrop-blur-sm border-2 border-cyan-400/20 hover:bg-gray-800/50 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 animate-fade-in-up glow-box">
                <Shield className="text-cyan-400 mx-auto mb-4 animate-float glow-icon" size={48} />
                <h3 className="text-xl font-bold text-white mb-2 font-mono">PENETRATION_TESTING</h3>
                <p className="text-gray-400 font-mono text-xs">[VULNERABILITY_ASSESSMENT_ACTIVE]</p>
              </div>

              <div className="text-center p-8 rounded-none bg-gray-800/30 backdrop-blur-sm border-2 border-cyan-400/20 hover:bg-gray-800/50 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-200 glow-box">
                <Code className="text-cyan-400 mx-auto mb-4 animate-float animation-delay-500 glow-icon" size={48} />
                <h3 className="text-xl font-bold text-white mb-2 font-mono">WEB_DEVELOPMENT</h3>
                <p className="text-gray-400 font-mono text-sm">[SECURE_CODING_PROTOCOLS]</p>
              </div>

              <div className="text-center p-8 rounded-none bg-gray-800/30 backdrop-blur-sm border-2 border-cyan-400/20 hover:bg-gray-800/50 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400 glow-box">
                <Bug className="text-cyan-400 mx-auto mb-4 animate-float animation-delay-1000 glow-icon" size={48} />
                <h3 className="text-xl font-bold text-white mb-2 font-mono">BUG_BOUNTY</h3>
                <p className="text-gray-400 font-mono text-sm">[THREAT_HUNTING_MODE]</p>
              </div>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm border-2 border-cyan-400/20 rounded-none p-6 hover:border-cyan-400/40 transition-all duration-300 animate-fade-in-up glow-box" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="text-cyan-400 glow-icon" size={20} />
                      <span className="text-white font-medium font-mono">{skill.name.toUpperCase()}</span>
                    </div>
                    <span className="text-cyan-400 font-mono">[{skill.level}%]</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-none h-3 overflow-hidden border border-cyan-400/30">
                    <div
                      className={`h-3 rounded-none bg-gradient-to-r ${skill.color} transition-all duration-2000 ease-out animate-skill-bar shadow-sm shadow-cyan-400/50`}
                      style={{ width: `${skill.level}%`, animationDelay: `${index * 200}ms` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-900/30 backdrop-blur-sm relative border-y border-cyan-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-pink-900/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up font-mono">
                &gt; PROJECTS <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent glow-text">.DIR</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200 font-mono">
                [ACCESSING_PROJECT_DATABASE...]
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm border-2 border-cyan-400/20 rounded-none overflow-hidden hover:transform hover:scale-105 hover:border-cyan-400/40 transition-all duration-300 group animate-fade-in-up glow-box" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 filter brightness-75 contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 font-mono">{project.title.toUpperCase()}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-none text-xs border border-cyan-500/30 hover:border-cyan-400/50 transition-colors duration-300 font-mono">
                          {tech.toUpperCase()}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a href={project.github} className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 glow-icon">
                        <Github size={20} />
                      </a>
                      <a href={project.live} className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 glow-icon">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
       
        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/10 to-pink-900/10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up font-mono">
          &gt; GET_IN <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent glow-text">TOUCH.EXE</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up animation-delay-200 font-mono">
          [ESTABLISHING_SECURE_CONNECTION...]
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border-2 border-cyan-400/20 rounded-none p-8 hover:border-cyan-400/40 transition-all duration-300 animate-fade-in-up animation-delay-400 glow-box">
              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSending(true);
                  try {
                    if (
                      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
                      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
                      !import.meta.env.VITE_EMAILJS_PUBLICKEY
                    ) {
                      alert('EmailJS environment variables are missing.');
                      setSending(false);
                      return;
                    }
                    await emailjs.sendForm(
                      import.meta.env.VITE_EMAILJS_SERVICE_ID,
                      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                      e.target as HTMLFormElement,
                      import.meta.env.VITE_EMAILJS_PUBLICKEY
                    );
                    alert('Message sent successfully!');
                    (e.target as HTMLFormElement).reset();
                  } catch (error: any) {
                    alert('Failed to send message. ' + (error?.text || error?.message || JSON.stringify(error)));
                  } finally {
                    setSending(false);
                  }
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyan-400 font-medium mb-2 font-mono">&gt; NAME:</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border-2 border-cyan-400/30 text-white rounded-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 font-mono"
                      placeholder="Enter your name..."
                    />
                  </div>
                  <div>
                    <label className="block text-cyan-400 font-medium mb-2 font-mono">&gt; EMAIL:</label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border-2 border-cyan-400/30 text-white rounded-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 font-mono"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cyan-400 font-medium mb-2 font-mono">&gt; SUBJECT:</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border-2 border-cyan-400/30 text-white rounded-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 font-mono"
                    placeholder="Security Consultation..."
                  />
                </div>

                <div>
                  <label className="block text-cyan-400 font-medium mb-2 font-mono">&gt; MESSAGE:</label>
                  <textarea
                    rows={6}
                    name="message"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border-2 border-cyan-400/30 text-white rounded-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none font-mono"
                    placeholder="Describe your security requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold rounded-none hover:from-cyan-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 font-mono shadow-lg shadow-cyan-500/25 animate-glow border-2 border-cyan-400/50 hover:border-cyan-400"
                  disabled={sending}
                >
                  {sending ? '[SENDING...]' : '[SEND_MESSAGE]'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-black/50 backdrop-blur-sm border-t-2 border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400 animate-fade-in-up font-mono">
                © 2024 SUDHEESH S PAI | [SYSTEM_STATUS: SECURE] | CRAFTED WITH &lt;3 AND LOTS OF ☕
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;