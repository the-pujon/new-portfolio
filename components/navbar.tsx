"use client"

import { Book, Home, Newspaper, ScrollText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "HOME", href: "/", icon: <Home/> },
    { label: "PROJECTS", href: "/projects", icon: <Home/> },
    { label: "BLOG", href: "/blog", icon: <Newspaper/> },
    { label: "RESUME", href: "#resume", icon: <ScrollText/> },
  ]

  return (
    <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 ">
      <div className="flex gap-2 px-6 py-3 backdrop-blur-sm bg-background/80 border border-foreground/20 rounded-full shadow-2xl animate-fade-in">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="px-4 py-2 text-sm font-bold uppercase flex flex-col items-center text-foreground hover:text-primary hover:bg-secondary/20 transition-all duration-200"
          >
            <span>{item.icon}</span> <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
