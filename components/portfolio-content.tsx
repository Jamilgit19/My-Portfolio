"use client"

import { Code2, Briefcase, BookOpen, Star, Mail, Phone, MapPin, Github, Linkedin, Database, Wrench, Layers, Terminal, Sparkles, ExternalLink, Zap, Target, Users, Send, Award, Heart, Lightbulb, Globe, GraduationCap, Cpu } from "lucide-react"

export function PortfolioContent() {
  // Skill icons mapping (using emojis for language-specific ones)
  const skillIcons: Record<string, string> = {
    "JavaScript": "⚡",
    "Python": "🐍",
    "C": "©️",
    "C++": "➕",
    "Go": "🔵",
    "React.js": "⚛️",
    "Node.js": "🟢",
    "Express.js": "🚂",
    "HTML": "🌐",
    "CSS": "🎨",
    "MongoDB": "🍃",
    "MySQL": "🐬",
    "PostgreSQL": "🐘",
    "Git": "📦",
    "GitHub": "🐙",
    "Firebase": "🔥"
  }

  const projectTagIcons: Record<string, string> = {
    "React": "⚛️",
    "Node.js": "🟢",
    "MongoDB": "🍃",
    "Python": "🐍",
    "ML": "🤖",
    "NLP": "💬",
    "Backend": "⚙️",
    "API": "🔌",
    "Database": "💾"
  }

  const skills = {
    languages: { icon: Terminal, items: ["JavaScript", "Python", "C", "C++", "Go"] },
    frameworks: { icon: Layers, items: ["React.js", "Node.js", "Express.js"] },
    technologies: { icon: Code2, items: ["HTML", "CSS", "Figma", "RESTful APIs"] },
    databases: { icon: Database, items: ["MongoDB", "MySQL", "PostgreSQL"] },
    tools: { icon: Wrench, items: ["Git", "GitHub", "Firebase"] },
    other: { icon: Sparkles, items: ["OOP", "Problem Solving", "Team Collaboration"] }
  }

  const experience = [
    {
      title: "Full Stack Web Developer",
      company: "NerdLab",
      location: "Dhaka, Bangladesh",
      period: "2024 – 2025",
      achievements: [
        "Developed full-stack applications using React.js, Node.js, and MongoDB.",
        "Built RESTful APIs with authentication and authorization.",
        "Collaborated with cross-functional teams and optimized performance."
      ]
    }
  ]

  const projects = [
    {
      title: "Employee Management and Payroll System",
      description: "Full-stack system with authentication, role-based access, and CRUD operations.",
      icon: Users,
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Fake News Detection Using Machine Learning",
      description: "NLP-based ML model for classifying real and fake news articles.",
      icon: Target,
      tags: ["Python", "ML", "NLP"]
    },
    {
      title: "Exchangify E-Commerce Platform",
      description: "Academic e-commerce platform implementing backend logic and workflows.",
      icon: Zap,
      tags: ["Backend", "API", "Database"]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "BRAC University",
      year: "2022 – 2026",
      details: "CGPA: 3.36 / 4.00"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Birshrestha Noor Mohammad Public College",
      year: "2019 – 2021",
      details: "GPA: 5.00 / 5.00"
    }
  ]

  const activities = [
    "Event Management Executive, Computer Club, BRAC University",
    "Member, BRAC University Research Club"
  ]

  const interests = [
    { name: "Problem Solving", icon: "💡" },
    { name: "Software Engineering", icon: "💻" },
    { name: "Web Development", icon: "🌐" },
    { name: "Continuous Learning", icon: "📚" },
    { name: "Sports", icon: "⚽" }
  ]

  return (
    <section className="relative px-4 sm:px-6 py-8 sm:py-12">
      <div className="mx-auto max-w-5xl space-y-12 sm:space-y-14">
        {/* Technical Skills */}
        <div id="skills" className="scroll-mt-20 space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Code2 className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(skills).map(([category, data]) => {
              const IconComponent = data.icon
              return (
                <div 
                  key={category} 
                  className="group relative overflow-hidden space-y-3 p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card/50 to-card/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-foreground">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full border border-primary/30 bg-primary/5 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 cursor-default"
                      >
                        {skillIcons[item] && (
                          <span className="text-sm">{skillIcons[item]}</span>
                        )}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Experience */}
        <div id="experience" className="scroll-mt-20 space-y-5">
          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold">Experience</h2>
          </div>
          
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 bg-card/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">{exp.title}</h3>
                    <p className="text-sm text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono text-muted-foreground">{exp.period}</p>
                    <p className="text-xs text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="scroll-mt-20 space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Star className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">Featured Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden p-5 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card/50 to-card/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                  
                  <div className="relative space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div>
                      <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {projectTagIcons[tag] && <span className="text-xs">{projectTagIcons[tag]}</span>}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 bg-card/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1.5">
                  <div>
                    <h3 className="text-base font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-primary font-medium">{edu.school}</p>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground">{edu.year}</p>
                </div>
                {/* <p className="text-xs text-muted-foreground">{edu.details}</p> */}
              </div>
            ))}
          </div>
        </div>

        {/* Activities and Interests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Award className="w-4 h-4 text-primary flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold">Leadership & Activities</h3>
            </div>
            <ul className="space-y-2">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors p-3 rounded-lg hover:bg-card/50 border border-transparent hover:border-border"
                >
                  <div className="p-1.5 rounded-md bg-primary/10 border border-primary/20 flex-shrink-0 h-fit">
                    <Users className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="leading-relaxed">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Heart className="w-4 h-4 text-primary flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full border border-primary/30 bg-primary/5 text-foreground hover:bg-primary/20 transition-all duration-200 hover:border-primary/60 cursor-default"
                >
                  <span className="text-sm">{interest.icon}</span>
                  {interest.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="scroll-mt-20 space-y-5">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-bold">Get In Touch</h2>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Contact Info Cards */}
            <div className="p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary/10">
              <p className="text-sm sm:text-base text-muted-foreground mb-5 text-center leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Feel free to reach out!
              </p>
              
              <div className="space-y-3">
                <a
                  href="mailto:jamil.rahman.008@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">jamil.rahman.008@gmail.com</span>
                </a>
                
                <a
                  href="tel:+8801689444242"
                  className="flex items-center gap-3 p-3.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">+880 168 944 4242</span>
                </a>
                
                <div className="flex items-center gap-3 p-3.5 rounded-lg border border-border bg-card/30">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Dhaka, Bangladesh</span>
                </div>
              </div>
              
              <div className="flex justify-center gap-3 mt-5 pt-5 border-t border-border">
                <a
                  href="https://github.com/Jamilgit19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 text-sm font-medium group"
                >
                  <Github className="w-4 h-4 group-hover:text-primary transition-colors" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/md-jamil-8266a6289/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 text-sm font-medium group"
                >
                  <Linkedin className="w-4 h-4 group-hover:text-primary transition-colors" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 rounded-xl border border-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="text-center mb-5">
                <h3 className="text-lg font-semibold mb-1">Send Me a Message</h3>
                <p className="text-xs text-muted-foreground">I'll get back to you as soon as possible</p>
              </div>
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="access_key" value="5d9a3ea7-3cbd-41d6-8db6-092fbd21ead7" />
                <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold mb-2 text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold mb-2 text-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="custom_subject"
                    required
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold mb-2 text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-vertical"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
