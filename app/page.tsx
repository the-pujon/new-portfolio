"use client"
import Header from "@/components/header"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-6 space-y-7 pb-24">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
