"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Jamilgit19", handle: "@Jamilgit19", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/md-jamil-8266a6289/", handle: "/in/md-jamil", icon: Linkedin },
  { label: "Email", href: "mailto:jamil.rahman.008@gmail.com", handle: "jamil.rahman.008@gmail.com", icon: Mail },
]

export function Footer() {
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Let's build something together"
  const splitPoint = "Let's build something ".length

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer id="connect" className="border-t border-border/30 px-4 sm:px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-wider text-primary">Connect</p>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-balance">
                {typedText.slice(0, splitPoint)}
                {typedText.length > splitPoint && (
                  <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                    {typedText.slice(splitPoint)}
                  </span>
                )}
                {typedText.length < fullText.length && showCursor && (
                  <span className="text-primary">|</span>
                )}
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
              Always interested in collaborations, interesting problems, and conversations about code, design, and
              everything in between.
            </p>

            <div className="pt-1">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-primary bg-primary/10 px-6 py-2.5 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98] w-full sm:w-auto"
              >
                <span className="relative z-10">send a message</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
            </div>
          </div>

          {/* Right column - Links */}
          <div className="space-y-4 lg:text-right animate-fade-in-up stagger-2">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Find me elsewhere
            </p>
            <div className="space-y-1.5">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-transparent p-3 transition-all duration-300 lg:flex-row-reverse active:bg-secondary/30 hover:border-border/50 hover:bg-card/50 glass animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="flex items-center gap-2.5 lg:flex-row-reverse">
                    <link.icon className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                    <span className="font-mono text-sm font-medium transition-colors group-hover:text-gradient">
                      {link.label}
                    </span>
                    {link.label !== "Email" && (
                      <ExternalLink className="h-3 w-3 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground truncate">{link.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-6 sm:flex-row animate-fade-in stagger-4">
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>Forged with</span>
            <Heart className="h-3.5 w-3.5 text-destructive animate-pulse" />
            <span>& code</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground/50 transition-all duration-300 hover:text-primary hover:scale-110"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="font-mono text-xs text-muted-foreground text-center sm:text-right">
            © {new Date().getFullYear()} MD Jamil — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
