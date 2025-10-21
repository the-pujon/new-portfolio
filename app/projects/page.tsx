"use client"

import ProjectCard from "@/components/projectCard"
import { projectsData } from "@/data/projectData"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="text-primary font-bold uppercase hover:opacity-80 mb-6 inline-block animate-slide-down"
        >
          ← BACK TO HOME
        </Link>

        <h1 className="text-4xl font-bold mb-2 text-foreground animate-fade-in">ALL PROJECTS</h1>
        <p className="text-sm text-foreground mb-8 animate-fade-in">Explore all of my projects and work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}
