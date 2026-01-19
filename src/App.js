import React, { useState } from 'react';
import { Code, Briefcase, GraduationCap, Award, Mail, Phone, Github, ChevronDown, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Guruprasad
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
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
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Guruprasad
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-6">Senior Software Consultant</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Java Developer with 5+ years of experience specializing in Spring Boot, Microservices, 
            and Full-Stack Development. Currently working at Infosys on HCM solutions for Goldman Sachs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:guru8080.gp@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://github.com/guruprasad8080" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-colors">
              <Github size={20} />
              GitHub
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-blue-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Highly motivated and skilled Java Developer with over 5+ years of experience with a strong focus 
              on Software and Web Development. I am passionate about building scalable, maintainable applications 
              and staying updated with the latest technologies and industry trends.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Currently working as a Senior Software Consultant at Infosys, where I contribute to Human Capital 
              Management solutions for Goldman Sachs, working with cutting-edge technologies like Spring Boot, 
              Microservices, and Apache Spark.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              My previous role at Chemiasoft involved spearheading architecture design for pharmaceutical 
              manufacturing systems, where I received spot awards for four consecutive years for outstanding performance.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
                  <Code size={20} />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
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
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <Briefcase className="text-blue-400 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-blue-400">{exp.role}</h3>
                    <p className="text-xl text-slate-300">{exp.company}</p>
                    <p className="text-slate-400">{exp.period} • {exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-10">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-slate-300 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">▹</span>
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
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-all hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.name}</h3>
                {project.client && (
                  <p className="text-sm text-slate-400 mb-2">Client: {project.client}</p>
                )}
                {project.period && (
                  <p className="text-sm text-slate-400 mb-4">{project.period}</p>
                )}
                <p className="text-slate-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-slate-400 text-xs py-1">+{project.tech.length - 4} more</span>
                  )}
                </div>
                <ul className="space-y-1">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Education & Certifications</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
              <GraduationCap size={24} />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <h4 className="text-xl font-semibold text-slate-200">{edu.degree}</h4>
                  <p className="text-slate-300">{edu.institution}</p>
                  <p className="text-slate-400">{edu.location} • {edu.year}</p>
                  <p className="text-blue-400 mt-2">Grade: {edu.grade}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
              <Award size={24} />
              Certifications & Achievements
            </h3>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-slate-300 flex items-start gap-2">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-slate-300 mb-12">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
            <div className="space-y-4">
              <a href="mailto:guru8080.gp@gmail.com" className="flex items-center justify-center gap-3 text-lg hover:text-blue-400 transition-colors">
                <Mail size={24} />
                guru8080.gp@gmail.com
              </a>
              <a href="tel:+919632812673" className="flex items-center justify-center gap-3 text-lg hover:text-blue-400 transition-colors">
                <Phone size={24} />
                +91 9632812673
              </a>
              <a href="https://github.com/guruprasad8080" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 text-lg hover:text-blue-400 transition-colors">
                <Github size={24} />
                guruprasad8080
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 text-center text-slate-400">
        <p>© 2025 Guruprasad. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
}