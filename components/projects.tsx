"use client";

import Link from "next/link";
import ProjectCard from "./projectCard";
import { projectsData } from "@/data/projectData";


export default function Projects() {
  return (
    <section id="projects" className="py-6 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 text-foreground">PROJECTS</h2>
      <div className="grid grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* View All Button */}
      {projectsData.length > 4 && (
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="text-sm font-bold uppercase px-6 py-3 bg-primary text-primary-foreground hover:opacity-80 transition-opacity"
          >
            VIEW ALL PROJECTS →
          </Link>
        </div>
      )}
    </section>
  );
}
