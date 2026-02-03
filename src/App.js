import React, { useState, useEffect } from 'react';
import { Code, Briefcase, GraduationCap, Award, Mail, Phone, Github, ChevronDown, Menu, X, ExternalLink, Linkedin } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
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
    'Languages & Frameworks': ['Java', 'J2EE', 'Spring', 'Spring Boot', 'Hibernate', 'JPA', 'JSF', 'Prime Faces'],
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'Angular', 'TypeScript', 'Node.js', 'REST APIs'],
    'Databases': ['SQL', 'MySQL', 'PostgreSQL', 'Sybase'],
    'Tools & Technologies': ['Maven', 'Docker', 'Postman', 'Git', 'GitLab', 'Jira', 'CI/CD'],
    'Servers': ['JBoss/Wildfly', 'Tomcat', 'Nginx'],
    'Architecture': ['Microservices', 'Design Patterns', 'OOPS', 'Data Structures']
  };

  const experience = [
    {
      company: 'Infosys Private Limited',
      role: 'Senior Software Consultant',
      period: 'Jan 2025 - Present',
      location: 'Bangalore, IN',
      highlights: [
        'Working on HCM (Human Capital Management) for Goldman Sachs',
        'Hands-on experience with Java, Spring Boot, REST APIs, and Microservices',
        'Proficient in Agile methodologies and version control tools like Git and GitLab',
        'Ensuring end-to-end ownership of development, testing, deployment, and support'
      ]
    },
    {
      company: 'Chemiasoft Private Limited',
      role: 'Senior Software Engineer',
      period: 'Sep 2020 - Dec 2024',
      location: 'Bangalore, IN',
      highlights: [
        'Spearheaded design and implementation of new project architecture',
        'Developed Manufacturing Execution Systems (MES) for pharmaceutical industry',
        'Mentored junior engineers and improved team skill levels',
        'Received spot awards for four consecutive years for outstanding performance'
      ]
    }
  ];

  const projects = [
    {
      name: 'Human Capital Management (HCM)',
      client: 'Goldman Sachs',
      period: 'Apr 2025 - Present',
      tech: ['Java 8', 'Spring Boot', 'Sybase', 'MySQL', 'JPA', 'Apache Spark', 'REST', 'GitLab'],
      description: 'Strategic platform for attracting, developing and managing global workforce at Goldman Sachs',
      highlights: [
        'Worked on microservices architecture and REST APIs',
        'Implemented async programming with Multithreading and Completable Futures',
        'Enhanced application performance and scalability for global users'
      ]
    },
    {
      name: 'Laurel Manufacturing Execution Systems (MES)',
      client: 'Pharma Manufacturing',
      tech: ['Java', 'Spring Boot', 'Angular 16', 'MySQL', 'Hibernate'],
      description: 'Comprehensive MES solution with 5 modules for pharmaceutical manufacturing compliance',
      highlights: [
        'Developed Manufacturing and Dispensing modules from scratch',
        'Integrated weighing balance and tablet parameter testing using socket programming',
        'Complete migration to Spring Boot architecture'
      ]
    },
    {
      name: 'Chemia Electronic Lab Notebook (ELN)',
      tech: ['Java', 'Spring Boot', 'JSF-Prime Faces', 'MySQL', 'PostgreSQL'],
      description: 'Browser-based & cloud-ready ELN platform designed by scientists for scientists',
      highlights: [
        'Full-stack development with modern Java frameworks',
        'Designed to drive and manage all R&D activities from one dashboard'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'NMAM Institute of Technology',
      location: 'Nitte, Karnataka',
      year: 'June 2020',
      grade: '8.68/10'
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Mangalore University',
      location: 'Mangalore',
      year: 'May 2017',
      grade: '70.12%'
    }
  ];

  const certifications = [
    'Angular 15 - fullstackvidya.com (March 2023)',
    'Node.js & Nest.js - fullstackvidya.com (August 2024)',
    'Spot Awards for 4 consecutive years - Chemiasoft Private Limited'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-blue-900/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              &lt;Guruprasad /&gt;
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1 lg:space-x-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 text-sm lg:text-base ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                      : 'hover:bg-slate-800/50 hover:text-blue-400'
                  }`}
                >
                  {item}
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
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
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
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm text-blue-400 mb-6">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Hi, I'm Guruprasad
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-300 mb-6 font-medium">
            Senior Software Consultant
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Java Developer with 5+ years of experience specializing in Spring Boot, Microservices, 
            and Full-Stack Development. Currently working at Infosys on HCM solutions for Goldman Sachs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href="mailto:guru8080.gp@gmail.com" 
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg shadow-blue-600/30"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="https://github.com/guruprasad8080" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce inline-block hover:text-blue-400 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-600/10 rounded-xl border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-slate-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-blue-600/10 rounded-xl border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-slate-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-blue-600/10 rounded-xl border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">4x</div>
                <div className="text-slate-300 text-sm">Award Winner</div>
              </div>
            </div>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Highly motivated and skilled Java Developer with over 5+ years of experience with a strong focus 
              on Software and Web Development. I am passionate about building scalable, maintainable applications 
              and staying updated with the latest technologies and industry trends.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Currently working as a Senior Software Consultant at Infosys, where I contribute to Human Capital 
              Management solutions for Goldman Sachs, working with cutting-edge technologies like Spring Boot, 
              Microservices, and Apache Spark.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              My previous role at Chemiasoft involved spearheading architecture design for pharmaceutical 
              manufacturing systems, where I received spot awards for four consecutive years for outstanding performance.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div 
                key={category} 
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
                  <Code size={20} className="flex-shrink-0" />
                  <span className="line-clamp-1">{category}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
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
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                      <Briefcase className="text-blue-400" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-1">{exp.role}</h3>
                    <p className="text-lg sm:text-xl text-slate-300 mb-2">{exp.company}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base text-slate-400">
                      <span>{exp.period}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-slate-300 flex items-start gap-3 text-sm sm:text-base">
                      <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-400 line-clamp-2 flex-1">
                    {project.name}
                  </h3>
                  <ExternalLink size={18} className="text-slate-400 group-hover:text-blue-400 transition-colors flex-shrink-0 ml-2" />
                </div>
                {project.client && (
                  <p className="text-xs sm:text-sm text-slate-400 mb-2">
                    <span className="text-blue-400">Client:</span> {project.client}
                  </p>
                )}
                {project.period && (
                  <p className="text-xs sm:text-sm text-slate-400 mb-4">{project.period}</p>
                )}
                <p className="text-slate-300 mb-4 text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs border border-slate-600">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-slate-400 text-xs py-1">+{project.tech.length - 4}</span>
                  )}
                </div>
                <ul className="space-y-2">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="text-slate-400 text-xs sm:text-sm flex items-start gap-2">
                      <span className="text-blue-400 flex-shrink-0">•</span>
                      <span className="line-clamp-2">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-400 flex items-center gap-3">
              <GraduationCap size={28} />
              Education
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-slate-200 mb-2">{edu.degree}</h4>
                  <p className="text-base sm:text-lg text-slate-300 mb-1">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm sm:text-base text-slate-400 mb-3">
                    <span>{edu.location}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{edu.year}</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full">
                    <p className="text-blue-400 text-sm">Grade: {edu.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-400 flex items-center gap-3">
              <Award size={28} />
              Certifications & Achievements
            </h3>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-slate-300 flex items-start gap-3 text-sm sm:text-base">
                    <span className="text-blue-400 mt-1 flex-shrink-0 text-lg">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl w-full mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
            <div className="space-y-6">
              <a 
                href="mailto:guru8080.gp@gmail.com" 
                className="flex items-center justify-center gap-3 text-base sm:text-lg hover:text-blue-400 transition-all p-4 rounded-lg hover:bg-blue-600/10 group"
              >
                <Mail size={24} className="group-hover:scale-110 transition-transform" />
                <span className="break-all">guru8080.gp@gmail.com</span>
              </a>
              <a 
                href="tel:+919632812673" 
                className="flex items-center justify-center gap-3 text-base sm:text-lg hover:text-blue-400 transition-all p-4 rounded-lg hover:bg-blue-600/10 group"
              >
                <Phone size={24} className="group-hover:scale-110 transition-transform" />
                +91 9632812673
              </a>
              <a 
                href="https://github.com/guruprasad8080" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3 text-base sm:text-lg hover:text-blue-400 transition-all p-4 rounded-lg hover:bg-blue-600/10 group"
              >
                <Github size={24} className="group-hover:scale-110 transition-transform" />
                guruprasad8080
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-700 py-8 text-center">
        <p className="text-slate-400 text-sm sm:text-base">
          © 2025 Guruprasad. Built with React and Tailwind CSS.
        </p>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
