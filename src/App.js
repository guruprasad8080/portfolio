import React, { useState, useEffect } from 'react';
import { Code, Briefcase, GraduationCap, Award, Mail, Phone, Github, ChevronDown, Menu, X, ExternalLink, Linkedin, Terminal, Coffee, Zap, Database, Server, GitBranch, Box, Cpu } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const roles = ['Java Developer', 'Spring Boot Expert', 'Full-Stack Engineer', 'Microservices Architect'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
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

  // Typing animation effect
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        currentText = currentRole.substring(0, currentText.length - 1);
      } else {
        currentText = currentRole.substring(0, currentText.length + 1);
      }
      
      setTypedText(currentText);
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && currentText === currentRole) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        setRoleIndex((prev) => (prev + 1) % roles.length);
        typeSpeed = 500;
      }
      
      setTimeout(type, typeSpeed);
    };
    
    const timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, [roleIndex]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const skills = {
    'Backend Development': {
      icon: <Server size={24} />,
      items: ['Java', 'J2EE', 'Spring', 'Spring Boot', 'Hibernate', 'JPA', 'Microservices']
    },
    'Frontend Development': {
      icon: <Code size={24} />,
      items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'React', 'Tailwind CSS']
    },
    'Database & Storage': {
      icon: <Database size={24} />,
      items: ['MySQL', 'PostgreSQL', 'Sybase', 'SQL', 'JPA', 'Hibernate']
    },
    'DevOps & Tools': {
      icon: <GitBranch size={24} />,
      items: ['Docker', 'Git', 'GitLab', 'Maven', 'CI/CD', 'Jira', 'Postman']
    },
    'Architecture & Design': {
      icon: <Cpu size={24} />,
      items: ['Microservices', 'REST APIs', 'Design Patterns', 'SOLID', 'Domain-Driven Design']
    },
    'Servers & Deployment': {
      icon: <Box size={24} />,
      items: ['JBoss/Wildfly', 'Tomcat', 'Nginx', 'Apache Spark', 'Node.js']
    }
  };

  const experience = [
    {
      company: 'Infosys Private Limited',
      role: 'Senior Software Consultant',
      period: 'Jan 2025 - Present',
      duration: '2 months',
      location: 'Bangalore, IN',
      highlights: [
        'Architecting HCM (Human Capital Management) solutions for Goldman Sachs with 100K+ global users',
        'Implementing high-performance microservices using Spring Boot, Apache Spark, and async programming',
        'Leading code reviews and ensuring best practices in Agile development environment',
        'Optimizing database queries and improving application response time by 40%'
      ],
      tech: ['Java 8', 'Spring Boot', 'Microservices', 'Apache Spark', 'REST APIs', 'Sybase', 'GitLab']
    },
    {
      company: 'Chemiasoft Private Limited',
      role: 'Senior Software Engineer',
      period: 'Sep 2020 - Dec 2024',
      duration: '4+ years',
      location: 'Bangalore, IN',
      highlights: [
        'Spearheaded complete architectural redesign from monolithic to microservices architecture',
        'Developed enterprise-grade Manufacturing Execution Systems (MES) for pharma industry compliance',
        'Mentored team of 5 junior developers and conducted technical training sessions',
        'Received 4 consecutive spot awards for exceptional performance and innovation'
      ],
      tech: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Hibernate', 'Docker', 'JSF']
    }
  ];

  const projects = [
    {
      name: 'Human Capital Management (HCM)',
      client: 'Goldman Sachs',
      period: 'Apr 2025 - Present',
      tech: ['Java 8', 'Spring Boot', 'Sybase', 'MySQL', 'JPA', 'Apache Spark', 'REST', 'GitLab'],
      description: 'Enterprise-scale platform managing global workforce lifecycle for 100K+ employees',
      highlights: [
        'Built scalable microservices architecture handling millions of requests daily',
        'Implemented async processing with Multithreading and CompletableFutures for 3x performance boost',
        'Designed RESTful APIs with comprehensive security and data validation'
      ],
      impact: '100K+ Users'
    },
    {
      name: 'Laurel Manufacturing Execution Systems',
      client: 'Pharma Manufacturing',
      period: 'Sep 2020 - Dec 2024',
      tech: ['Java', 'Spring Boot', 'Angular 16', 'MySQL', 'Hibernate', 'WebSockets'],
      description: 'Comprehensive 5-module MES solution ensuring FDA compliance and GMP standards',
      highlights: [
        'Architected Manufacturing and Dispensing modules from ground up',
        'Integrated real-time IoT devices using socket programming for tablet testing',
        'Led complete migration to modern Spring Boot stack with zero downtime'
      ],
      impact: '5 Modules'
    },
    {
      name: 'Chemia Electronic Lab Notebook (ELN)',
      client: 'R&D Labs',
      tech: ['Java', 'Spring Boot', 'JSF', 'Prime Faces', 'MySQL', 'PostgreSQL', 'Cloud'],
      description: 'Cloud-ready ELN platform streamlining R&D workflows and experiment management',
      highlights: [
        'Full-stack development with responsive UI and real-time collaboration features',
        'Implemented comprehensive audit trail and compliance reporting',
        'Optimized database queries reducing load time by 60%'
      ],
      impact: 'Cloud-Ready'
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'NMAM Institute of Technology',
      location: 'Nitte, Karnataka',
      year: '2020',
      grade: '8.68/10',
      icon: '🎓'
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Mangalore University',
      location: 'Mangalore',
      year: '2017',
      grade: '70.12%',
      icon: '📚'
    }
  ];

  const certifications = [
    { name: 'Angular 15 Complete Course', org: 'fullstackvidya.com', year: '2023' },
    { name: 'Node.js & Nest.js', org: 'fullstackvidya.com', year: '2024' },
    { name: 'Spot Awards (4x)', org: 'Chemiasoft Private Limited', year: '2021-2024' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-purple-900/20"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Code Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="group flex items-center gap-2 text-xl sm:text-2xl font-bold"
            >
              <Terminal className="text-blue-400 group-hover:text-cyan-400 transition-colors" size={28} />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Guruprasad
              </span>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 text-sm lg:text-base font-medium relative group ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400'
                      : 'text-slate-300 hover:text-blue-400'
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform transition-transform duration-300 ${
                    activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all font-medium ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'hover:bg-slate-800/50 hover:text-blue-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 mb-6">
                <Zap size={16} className="animate-pulse" />
                <span>Available for opportunities</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
                <span className="block text-slate-300 mb-2">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Guruprasad
                </span>
              </h1>
              
              <div className="h-12 sm:h-16 mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-300">
                  <span className="inline-block min-w-[20px]">&gt;</span> {typedText}
                  <span className="inline-block w-0.5 h-6 sm:h-8 bg-cyan-400 ml-1 animate-pulse"></span>
                </h2>
              </div>
              
              <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Senior Software Consultant with <span className="text-blue-400 font-semibold">5+ years</span> of experience 
                building scalable enterprise applications. Specializing in <span className="text-cyan-400 font-semibold">Java</span>, 
                <span className="text-cyan-400 font-semibold"> Spring Boot</span>, and 
                <span className="text-cyan-400 font-semibold"> Microservices</span> architecture.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a 
                  href="mailto:guru8080.gp@gmail.com" 
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-lg transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105"
                >
                  <Mail size={20} />
                  <span className="font-semibold">Get in Touch</span>
                </a>
                <a 
                  href="https://github.com/guruprasad8080" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-lg transition-all border border-slate-700 hover:border-slate-600 hover:scale-105"
                >
                  <Github size={20} />
                  <span className="font-semibold">View GitHub</span>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">5+</div>
                  <div className="text-xs sm:text-sm text-slate-400">Years Exp</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">10+</div>
                  <div className="text-xs sm:text-sm text-slate-400">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400">4x</div>
                  <div className="text-xs sm:text-sm text-slate-400">Awards</div>
                </div>
              </div>
            </div>

            {/* Right Side - Photo & Card */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glowing Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                
                {/* Photo Container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700">
                    {/* Replace this div with your actual photo */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-purple-900/30">
                      {/* Placeholder - Replace src with your photo URL */}
                      <div className="text-center">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-6xl sm:text-7xl font-bold text-white">
                          GP
                        </div>
                        <p className="text-slate-400 text-sm">Add your photo here</p>
                        <p className="text-slate-500 text-xs mt-2">Replace the placeholder with:</p>
                        <code className="text-xs text-cyan-400 block mt-1">
                          &lt;img src="/Users/guruprasad/MySpace/GitHub/portfolio/src/guruPhoto.jpeg" /&gt;
                        </code>
                      </div>
                      {/* Uncomment and use this when you have your photo:
                      <img 
                        src="/path-to-your-photo.jpg" 
                        alt="Guruprasad" 
                        className="w-full h-full object-cover"
                      />
                      */}
                    </div>
                    
                    {/* Code Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-6">
                      <div className="font-mono text-xs sm:text-sm text-green-400">
                        <div className="mb-1"><span className="text-purple-400">const</span> developer = {'{'}</div>
                        <div className="ml-4 mb-1">name: <span className="text-yellow-400">"Guruprasad"</span>,</div>
                        <div className="ml-4 mb-1">role: <span className="text-yellow-400">"Senior Consultant"</span>,</div>
                        <div className="ml-4 mb-1">skills: [<span className="text-yellow-400">"Java"</span>, <span className="text-yellow-400">"Spring"</span>]</div>
                        <div>{'}'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-blue-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Story */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="text-blue-400" size={24} />
                  <h3 className="text-xl font-semibold text-blue-400">My Journey</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Passionate Java developer with <span className="text-blue-400 font-semibold">5+ years</span> of hands-on experience 
                  in building enterprise-grade applications. I thrive on solving complex problems and creating efficient, 
                  scalable solutions.
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Currently at <span className="text-cyan-400 font-semibold">Infosys</span>, I'm working on cutting-edge HCM solutions 
                  for Goldman Sachs, leveraging microservices, Spring Boot, and Apache Spark to serve 100K+ global users.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Previously at <span className="text-cyan-400 font-semibold">Chemiasoft</span>, I led architectural transformations 
                  and earned <span className="text-purple-400 font-semibold">4 consecutive spot awards</span> for exceptional performance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="text-blue-400" size={24} />
                  <h3 className="text-xl font-semibold text-blue-400">What I Do</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Design and implement <strong>microservices architectures</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Build high-performance <strong>RESTful APIs</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Optimize database queries and <strong>application performance</strong></span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Mentor junior developers and <strong>conduct code reviews</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right - Stats & Highlights */}
            <div className="space-y-6">
              {/* Tech Stack Highlight */}
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
                <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
                  <Code size={24} />
                  Core Technologies
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Server size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-200">Java/Spring</div>
                      <div className="text-xs text-slate-400">Expert</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                      <Cpu size={20} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-200">Microservices</div>
                      <div className="text-xs text-slate-400">Advanced</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Database size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-200">Databases</div>
                      <div className="text-xs text-slate-400">Expert</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <Code size={20} className="text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-200">Angular</div>
                      <div className="text-xs text-slate-400">Advanced</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">100K+</div>
                  <div className="text-sm text-slate-400">Users Served</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
                  <div className="text-sm text-slate-400">Major Projects</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-sm text-slate-400">Performance ↑</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">4x</div>
                  <div className="text-sm text-slate-400">Awards Won</div>
                </div>
              </div>

              {/* Current Focus */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Currently Learning</h3>
                <div className="flex flex-wrap gap-2">
                  {['Kubernetes', 'Cloud Architecture', 'System Design', 'Apache Kafka'].map((item) => (
                    <span key={item} className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm text-blue-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technical Arsenal</span>
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit honed through years of building production-grade applications
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, { icon, items }], index) => (
              <div 
                key={category} 
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-slate-700/50 border border-slate-600 hover:border-blue-500/50 rounded-lg text-xs sm:text-sm text-slate-300 hover:text-blue-300 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Work Experience</span>
          </h2>
          <p className="text-center text-slate-400 mb-12">
            Building enterprise solutions across fintech and pharmaceutical industries
          </p>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-10 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-950 group-hover:scale-125 transition-transform"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                        <Briefcase className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">{exp.role}</h3>
                        <p className="text-lg sm:text-xl text-slate-300 font-medium mb-2">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            {exp.period}
                          </span>
                          <span>•</span>
                          <span>{exp.duration}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                      <span className="text-sm sm:text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-600/10 border border-blue-500/30 rounded-full text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-center text-slate-400 mb-12">
            Showcasing impactful solutions that drive business value
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                    <Terminal className="text-blue-400" size={24} />
                  </div>
                  <span className="px-3 py-1 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-xs text-cyan-300">
                    {project.impact}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-2 line-clamp-2">
                  {project.name}
                </h3>
                
                {project.client && (
                  <p className="text-sm text-slate-400 mb-1">
                    <span className="text-cyan-400">Client:</span> {project.client}
                  </p>
                )}
                
                <p className="text-xs text-slate-500 mb-3">{project.period}</p>
                
                <p className="text-sm text-slate-300 mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-slate-700/50 border border-slate-600 rounded text-xs text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="text-slate-500 text-xs py-1">+{project.tech.length - 5}</span>
                    )}
                  </div>

                  <ul className="space-y-2">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-400 text-xs">
                        <span className="text-blue-400 flex-shrink-0">•</span>
                        <span className="line-clamp-2">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Education & Certifications</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-3">
                <GraduationCap size={28} />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{edu.icon}</span>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-200 mb-1">{edu.degree}</h4>
                        <p className="text-slate-300 mb-1">{edu.institution}</p>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-2">
                          <span>{edu.location}</span>
                          <span>•</span>
                          <span>{edu.year}</span>
                        </div>
                        <div className="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm text-blue-400">
                          {edu.grade}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-3">
                <Award size={28} />
                Certifications
              </h3>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all h-full">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/30 transition-colors">
                        <Award className="text-blue-400" size={20} />
                      </div>
                      <div>
                        <h4 className="text-slate-200 font-medium mb-1">{cert.name}</h4>
                        <p className="text-sm text-slate-400">{cert.org}</p>
                        <p className="text-xs text-slate-500 mt-1">{cert.year}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl w-full mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
            Feel free to reach out!
          </p>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <a 
                href="mailto:guru8080.gp@gmail.com" 
                className="flex flex-col items-center gap-3 p-6 bg-blue-600/10 hover:bg-blue-600/20 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={28} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Email</div>
                  <div className="text-blue-400 text-sm break-all">guru8080.gp@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+919632812673" 
                className="flex flex-col items-center gap-3 p-6 bg-cyan-600/10 hover:bg-cyan-600/20 rounded-xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-cyan-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={28} className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Phone</div>
                  <div className="text-cyan-400 text-sm">+91 9632812673</div>
                </div>
              </a>

              <a 
                href="https://github.com/guruprasad8080" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center gap-3 p-6 bg-purple-600/10 hover:bg-purple-600/20 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github size={28} className="text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">GitHub</div>
                  <div className="text-purple-400 text-sm">guruprasad8080</div>
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:guru8080.gp@gmail.com" 
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-lg transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 font-semibold"
              >
                <Mail size={20} />
                Send Message
              </a>
              <a 
                href="https://github.com/guruprasad8080" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-lg transition-all border border-slate-700 hover:border-slate-600 hover:scale-105 font-semibold"
              >
                <Github size={20} />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900/50 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Guruprasad. Crafted with <span className="text-red-400">♥</span> using React & Tailwind CSS
            </p>
            <div className="flex gap-4">
              <a href="mailto:guru8080.gp@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com/guruprasad8080" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
        .animate-tilt {
          animation: tilt 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
