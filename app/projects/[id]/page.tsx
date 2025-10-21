"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { projectsData } from "@/data/projectData";


export default function ProjectDetail() {
  const params = useParams();
  const projectId = Number.parseInt(params.id as string);
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link
            href="/"
            className="text-primary font-bold uppercase hover:opacity-80"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="text-primary font-bold uppercase hover:opacity-80 mb-6 inline-block"
        >
          ← BACK TO HOME
        </Link>

        <h1 className="text-4xl font-bold mb-2 text-foreground">
          {project.title}
        </h1>
        <p className="text-sm text-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-primary text-primary-foreground font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8 text-xs">
          {project.client && (
            <Link
              href={project.client}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-foreground text-background hover:opacity-80 transition-opacity font-semibold"
            >
              CLIENT
            </Link>
          )}
          {project.admin && (
            <Link
              href={project.admin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-foreground text-background hover:opacity-80 transition-opacity font-semibold"
            >
              ADMIN
            </Link>
          )}
          {project.clientAdmin && (
            <Link
              href={project.clientAdmin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-foreground text-background hover:opacity-80 transition-opacity font-semibold"
            >
              CLIENT & ADMIN
            </Link>
          )}
          {project.server && (
            <Link
              href={project.server}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-foreground text-background hover:opacity-80 transition-opacity font-semibold"
            >
              SERVER
            </Link>
          )}
          {project.liveLink && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-primary text-primary-foreground hover:opacity-80 transition-opacity font-semibold"
            >
              LIVE DEMO
            </Link>
          )}
        </div>

        <section className="mb-8">
          <div className="prose prose-indigo mx-auto p-4 markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {project.des!}
            </ReactMarkdown>
          </div>
        </section>

        <Link
          href="/"
          className="text-primary font-bold uppercase hover:opacity-80"
        >
          ← BACK TO HOME
        </Link>
      </div>
    </main>
  );
}
