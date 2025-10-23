"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/the-pujon", icon: <Github/> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pujon-das-auvi/", icon: <Linkedin/> },
    // { name: "Twitter", url: "https://twitter.com", icon: "TW" },
    { name: "Email", url: "mailto:auvipujon@gmail.com", icon: <Mail/> },
  ]

  return (
    <header className="bg-card">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-5xl font-bold text-foreground mb-1">PUJON DAS AUVI</h1>
            <p className="text-base text-foreground font-semibold mb-1">Software Engineer / Full Stack Developer</p>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 flex items-center justify-center bg-primary text-primary-foreground font-bold text-xs hover:opacity-80 transition-opacity"
                title={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-sm text-foreground max-w-2xl leading-relaxed">
          Building scalable web applications with modern technologies. Passionate about clean code, user experience, and
          continuous learning.
        </p>
      </div>
    </header>
  )
}

import { SITE_TITLE, SITE_DESCRIPTION, SITE_ROLE } from "./site-metadata"
export { SITE_TITLE, SITE_DESCRIPTION, SITE_ROLE }
