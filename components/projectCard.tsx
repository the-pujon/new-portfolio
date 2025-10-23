import Link from "next/link";
import React from "react";
// import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const ProjectCard = ({ project }: { project: any }) => {
  let des = `
I developed a **full-stack car wash booking web application** with booking system and JWT-based RBAC. I optimized backend APIs with Redis caching, reducing latency by **97% (194ms → 5ms)**. I designed an admin dashboard that is fast and easy to use, achieving 10ms TBT and 0 CLS. The project delivers a fast, responsive, and user-friendly experience.

  `;
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
          {/* <h4 className='pl-2'>
                Eco-friendly car wash booking platform delivering fast, reliable, and real-time booking management for customers and admins.
              </h4> */}
          {/* <p className="text-foreground text-sm leading-relaxed">
                {project.description}
              </p> */}
          <div className=" markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {project.description}
            </ReactMarkdown>
          </div>
        </div>

        {/* Tags - Compact display */}
        <div className="mb-5 pb-5 border-b border-border">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag: any) => (
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
              READ DETAILS →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
