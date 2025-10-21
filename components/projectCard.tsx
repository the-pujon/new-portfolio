import Link from 'next/link'
import React from 'react'

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div>
         <div
            key={project.id}
            className="p-6 bg-card border border-border hover:border-primary transition-all duration-300 animate-slide-up flex flex-col"
          >
            {/* Project Header */}
            <div className="mb-4 flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2 uppercase">
                {project.title}
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags - Compact display */}
            <div className="mb-5 pb-5 border-b border-border">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag:any) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-muted text-muted-foreground font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links Section - Organized vertically */}
            <div className="space-y-3">
              {/* Repository Links */}
              <div className="flex flex-wrap gap-2">
                {project.client && (
                  <Link
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 bg-foreground text-background hover:opacity-80 transition-opacity font-semibold"
                  >
                    CLIENT
                  </Link>
                )}
                {project.admin && (
                  <Link
                    href={project.admin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 bg-foreground text-background hover:opacity-80 transition-opacity font-semibold"
                  >
                    ADMIN
                  </Link>
                )}
                {project.clientAdmin && (
                  <Link
                    href={project.clientAdmin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 bg-foreground text-background hover:opacity-80 transition-opacity font-semibold"
                  >
                    CLIENT & ADMIN
                  </Link>
                )}
                {project.server && (
                  <Link
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 bg-foreground text-background hover:opacity-80 transition-opacity font-semibold"
                  >
                    SERVER
                  </Link>
                )}
              </div>

              {/* Live Link & Read More */}
              <div className="flex items-center justify-between gap-3">
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 bg-primary text-primary-foreground hover:opacity-80 transition-opacity font-semibold"
                  >
                    VIEW LIVE →
                  </Link>
                )}
                <Link
                  href={`/projects/${project.id}`}
                  className="text-xs text-primary font-bold uppercase hover:opacity-80 transition-opacity"
                >
                  READ MORE →
                </Link>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProjectCard