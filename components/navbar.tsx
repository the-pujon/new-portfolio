"use client"

import { Book, Home, Newspaper, ScrollText, Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Navbar() {
  // pinned = opened by click (stays open until clicking outside or pressing close)
  const [pinned, setPinned] = useState(false)
  // hovered = temporarily opened while mouse is over button or panel
  const [hovered, setHovered] = useState(false)

  const panelRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const isOpen = pinned || hovered

  const navItems = [
    { label: "HOME", href: "/", icon: <Home /> },
    { label: "PROJECTS", href: "/projects", icon: <Book /> },
    { label: "BLOG", href: "/blog", icon: <Newspaper /> },
    { label: "RESUME", href: "/Pujon%20Das%20Auvi_Software%20Engineer.pdf", icon: <ScrollText /> },
  ]

  useEffect(() => {
    function onDocPointer(e: PointerEvent) {
      if (!pinned) return
      const target = e.target as Node | null
      if (
        panelRef.current &&
        buttonRef.current &&
        target &&
        !panelRef.current.contains(target) &&
        !buttonRef.current.contains(target)
      ) {
        setPinned(false)
        setHovered(false)
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setPinned(false)
        setHovered(false)
      }
    }

    document.addEventListener("pointerdown", onDocPointer)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onDocPointer)
      document.removeEventListener("keydown", onKey)
    }
  }, [pinned])

  return (
    <>
      {/* Floating hamburger button bottom-right */}
      <div
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative">
          <button
          ref={buttonRef}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setPinned((s) => { const next = !s; if (!next) setHovered(false); return next })}
          className="w-14 h-14 rounded-full backdrop-blur-sm bg-background/90 border border-foreground/20 shadow-lg flex items-center justify-center text-foreground hover:bg-secondary/90 transition-colors duration-150"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Panel - shows when hovered or pinned */}
        <div
          ref={panelRef}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`absolute bottom-full right-0 mb-2 origin-bottom-right transform transition-all duration-200 ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="w-52 backdrop-blur-sm bg-background/80 border border-foreground/20 shadow-2xl rounded-lg p-2">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.label === "RESUME" ? (
                    <a
                      href={item.href}
                      download="Pujon Das Auvi_Software Engineer.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-semibold text-foreground hover:bg-secondary/20 transition-colors duration-150"
                      onClick={() => {
                        if (!pinned) setHovered(false)
                      }}
                    >
                      <span className="w-5 h-5">{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-semibold text-foreground hover:bg-secondary/20 transition-colors duration-150"
                      onClick={() => {
                        // on clicking a link, close unless user pinned it open
                        if (!pinned) setHovered(false)
                      }}
                    >
                      <span className="w-5 h-5">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* small close control when pinned */}
            {/* {pinned && (
              <div className="mt-2 flex justify-end">
                <button
                  className="text-sm text-foreground/70 hover:text-foreground"
                  onClick={() => setPinned(false)}
                >
                  Close
                </button>
              </div>
            )} */}
          </nav>
        </div>
        </div>
      </div>
    </>
  )
}
