"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown, Download } from "lucide-react"

export function HeroSection() {
  const [nameText, setNameText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  
  // Title rotating typewriter
  const [titleText, setTitleText] = useState("")
  const [titleDeleting, setTitleDeleting] = useState(false)
  const [titleIndex, setTitleIndex] = useState(0)
  const [showTitleCursor, setShowTitleCursor] = useState(true)
  
  const fullName = "MD JAMIL"
  const titles = [
    "Full Stack Web Developer",
    "Aspiring Software Engineer",
    "Researcher"
  ]

  // Continuous typewriter effect for name
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && nameText.length < fullName.length) {
        // Typing
        setNameText(fullName.slice(0, nameText.length + 1))
      } else if (!isDeleting && nameText.length === fullName.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && nameText.length > 0) {
        // Deleting
        setNameText(fullName.slice(0, nameText.length - 1))
      } else if (isDeleting && nameText.length === 0) {
        // Start typing again
        setIsDeleting(false)
      }
    }, isDeleting ? 80 : 120)
    
    return () => clearTimeout(timeout)
  }, [nameText, isDeleting])

  // Rotating typewriter effect for title
  useEffect(() => {
    const currentTitle = titles[titleIndex]
    
    const timeout = setTimeout(() => {
      if (!titleDeleting && titleText.length < currentTitle.length) {
        // Typing
        setTitleText(currentTitle.slice(0, titleText.length + 1))
      } else if (!titleDeleting && titleText.length === currentTitle.length) {
        // Pause before deleting
        setTimeout(() => setTitleDeleting(true), 2500)
      } else if (titleDeleting && titleText.length > 0) {
        // Deleting
        setTitleText(currentTitle.slice(0, titleText.length - 1))
      } else if (titleDeleting && titleText.length === 0) {
        // Move to next title
        setTitleDeleting(false)
        setTitleIndex((prev) => (prev + 1) % titles.length)
      }
    }, titleDeleting ? 60 : 100)
    
    return () => clearTimeout(timeout)
  }, [titleText, titleDeleting, titleIndex])

  // Blinking cursors
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
      setShowTitleCursor(prev => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16 min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="mx-auto max-w-6xl w-full relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left column - Text */}
          <div className="space-y-5 order-2 lg:order-1">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-green-500 uppercase tracking-wider">Available for work</span>
            </div>

            {/* Typewriter Name */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
                  {nameText}
                  {showCursor && <span className="text-primary">|</span>}
                </span>
              </h1>
              
              <div className="relative min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary/90">
                  {titleText}
                  {showTitleCursor && <span className="text-primary">|</span>}
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent w-full animate-width" />
              </div>
            </div>

            <p className="max-w-lg text-sm sm:text-base leading-relaxed text-muted-foreground animate-fade-in-up stagger-2">
              Motivated Software Engineer with <span className="text-primary font-semibold">1+ year</span> of experience 
              building scalable web applications. Passionate about clean code, problem-solving, and continuous learning.
            </p>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-muted-foreground animate-fade-in-up stagger-3">
                <a href="mailto:jamil.rahman.008@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  <span className="font-mono">jamil.rahman.008@gmail.com</span>
                </a>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="font-mono">+880 168 944 4242</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 animate-fade-in-up stagger-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-primary bg-primary px-5 py-2 font-semibold text-sm text-primary-foreground transition-all duration-300 hover:scale-105 active:scale-[0.98] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 touch-manipulation"
              >
                <Mail className="h-4 w-4" />
                <span>Get In Touch</span>
              </a>
              <a
                href="/resume.pdf"
                download="MD_Jamil_Resume.pdf"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-primary bg-primary/10 px-5 py-2 font-semibold text-sm text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-[0.98] shadow-md hover:shadow-lg hover:shadow-primary/30 touch-manipulation"
              >
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </a>
              <a
                href="https://github.com/Jamilgit19"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2 font-semibold text-sm text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10 active:scale-[0.98] hover:shadow-md touch-manipulation"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/md-jamil-8266a6289/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2 font-semibold text-sm text-foreground transition-all duration-300 hover:border-primary hover:bg-primary/10 active:scale-[0.98] touch-manipulation"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right column - Profile Image */}
          <div className="relative order-1 lg:order-2 animate-fade-in-up stagger-2">
            <div className="relative group max-w-xs mx-auto lg:max-w-sm">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 animate-gradient transition-opacity duration-500" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-75 group-hover:opacity-100 animate-gradient transition-opacity duration-500" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-background">
                <Image
                  src="/developer-portrait.png"
                  alt="MD Jamil - Full Stack Web Developer"
                  width={350}
                  height={350}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-float">
          <a href="#skills" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
