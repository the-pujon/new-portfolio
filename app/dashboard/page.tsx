"use client"

import { useState } from "react"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  client?: string
  admin?: string
  clientAdmin?: string
  server?: string
  liveLink?: string
}

interface BlogPost {
  id: number
  title: string
  date: string
  excerpt: string
  content: string
  readTime: string
}

interface Skill {
  id: number
  name: string
  type: "Frontend" | "Backend" | "Tools" | "Other"
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert"
}

interface Experience {
  id: number
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"projects" | "blogs" | "about" | "skills" | "experience">("projects")
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.",
      tags: ["Next.js", "React", "Stripe", "PostgreSQL"],
      client: "https://github.com/example/ecommerce-client",
      admin: "https://github.com/example/ecommerce-admin",
      clientAdmin: "https://github.com/example/ecommerce-client-admin",
      server: "https://github.com/example/ecommerce-server",
      liveLink: "https://ecommerce-example.com",
    },
  ])

  const [blogs, setBlogs] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      date: "2024-10-15",
      excerpt: "Learn the fundamentals of Next.js 14 and how to build modern web applications.",
      readTime: "8 min read",
      content: "Next.js 14 introduces several powerful features...",
    },
  ])

  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: "React", type: "Frontend", proficiency: "Expert" },
    { id: 2, name: "Node.js", type: "Backend", proficiency: "Advanced" },
    { id: 3, name: "Git", type: "Tools", proficiency: "Expert" },
  ])

  const [experience, setExperience] = useState<Experience[]>([
    {
      id: 1,
      company: "Tech Company",
      position: "Full Stack Developer",
      duration: "2022 - Present",
      description: "Building scalable web applications",
      technologies: ["React", "Node.js", "PostgreSQL"],
    },
  ])

  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null)
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null)
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null)
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [showBlogForm, setShowBlogForm] = useState(false)
  const [showSkillForm, setShowSkillForm] = useState(false)
  const [showExperienceForm, setShowExperienceForm] = useState(false)

  const handleAddProject = () => {
    setEditingProject(null)
    setShowProjectForm(true)
  }

  const handleAddBlog = () => {
    setEditingBlog(null)
    setShowBlogForm(true)
  }

  const handleAddSkill = () => {
    setEditingSkill(null)
    setShowSkillForm(true)
  }

  const handleAddExperience = () => {
    setEditingExperience(null)
    setShowExperienceForm(true)
  }

  const handleSaveProject = (project: Project) => {
    if (editingProject) {
      setProjects(projects.map((p) => (p.id === project.id ? project : p)))
    } else {
      setProjects([...projects, { ...project, id: Math.max(...projects.map((p) => p.id), 0) + 1 }])
    }
    setShowProjectForm(false)
    setEditingProject(null)
  }

  const handleSaveBlog = (blog: BlogPost) => {
    if (editingBlog) {
      setBlogs(blogs.map((b) => (b.id === blog.id ? blog : b)))
    } else {
      setBlogs([...blogs, { ...blog, id: Math.max(...blogs.map((b) => b.id), 0) + 1 }])
    }
    setShowBlogForm(false)
    setEditingBlog(null)
  }

  const handleSaveSkill = (skill: Skill) => {
    if (editingSkill) {
      setSkills(skills.map((s) => (s.id === skill.id ? skill : s)))
    } else {
      setSkills([...skills, { ...skill, id: Math.max(...skills.map((s) => s.id), 0) + 1 }])
    }
    setShowSkillForm(false)
    setEditingSkill(null)
  }

  const handleSaveExperience = (exp: Experience) => {
    if (editingExperience) {
      setExperience(experience.map((e) => (e.id === exp.id ? exp : e)))
    } else {
      setExperience([...experience, { ...exp, id: Math.max(...experience.map((e) => e.id), 0) + 1 }])
    }
    setShowExperienceForm(false)
    setEditingExperience(null)
  }

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  const handleDeleteBlog = (id: number) => {
    setBlogs(blogs.filter((b) => b.id !== id))
  }

  const handleDeleteSkill = (id: number) => {
    setSkills(skills.filter((s) => s.id !== id))
  }

  const handleDeleteExperience = (id: number) => {
    setExperience(experience.filter((e) => e.id !== id))
  }

  return (
    <main className="min-h-screen bg-background text-foreground pb-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">DASHBOARD</h1>
          <Link href="/" className="text-primary font-bold uppercase hover:opacity-80">
            ← BACK TO HOME
          </Link>
        </div>

        <div className="flex gap-4 mb-8 border-b border-foreground/20 overflow-x-auto">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 font-bold uppercase text-sm transition-colors whitespace-nowrap ${
              activeTab === "projects" ? "text-primary border-b-2 border-primary" : "text-foreground hover:text-primary"
            }`}
          >
            PROJECTS
          </button>
          <button
            onClick={() => setActiveTab("blogs")}
            className={`px-4 py-2 font-bold uppercase text-sm transition-colors whitespace-nowrap ${
              activeTab === "blogs" ? "text-primary border-b-2 border-primary" : "text-foreground hover:text-primary"
            }`}
          >
            BLOGS
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-4 py-2 font-bold uppercase text-sm transition-colors whitespace-nowrap ${
              activeTab === "skills" ? "text-primary border-b-2 border-primary" : "text-foreground hover:text-primary"
            }`}
          >
            SKILLS
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-4 py-2 font-bold uppercase text-sm transition-colors whitespace-nowrap ${
              activeTab === "experience"
                ? "text-primary border-b-2 border-primary"
                : "text-foreground hover:text-primary"
            }`}
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`px-4 py-2 font-bold uppercase text-sm transition-colors whitespace-nowrap ${
              activeTab === "about" ? "text-primary border-b-2 border-primary" : "text-foreground hover:text-primary"
            }`}
          >
            ABOUT
          </button>
        </div>

        {activeTab === "projects" && (
          <div>
            <button
              onClick={handleAddProject}
              className="mb-6 px-4 py-2 bg-primary text-primary-foreground font-bold uppercase text-sm hover:opacity-80 transition-opacity"
            >
              + ADD PROJECT
            </button>

            {showProjectForm && (
              <ProjectForm
                project={editingProject}
                onSave={handleSaveProject}
                onCancel={() => {
                  setShowProjectForm(false)
                  setEditingProject(null)
                }}
              />
            )}

            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="p-4 bg-card border border-foreground/10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingProject(project)
                          setShowProjectForm(true)
                        }}
                        className="text-xs px-2 py-1 bg-primary text-primary-foreground hover:opacity-80"
                      >
                        EDIT
                      </button>
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="text-xs px-2 py-1 bg-destructive text-destructive-foreground hover:opacity-80"
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-foreground mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "blogs" && (
          <div>
            <button
              onClick={handleAddBlog}
              className="mb-6 px-4 py-2 bg-primary text-primary-foreground font-bold uppercase text-sm hover:opacity-80 transition-opacity"
            >
              + ADD BLOG
            </button>

            {showBlogForm && (
              <BlogForm
                blog={editingBlog}
                onSave={handleSaveBlog}
                onCancel={() => {
                  setShowBlogForm(false)
                  setEditingBlog(null)
                }}
              />
            )}

            <div className="space-y-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="p-4 bg-card border border-foreground/10">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold">{blog.title}</h3>
                      <p className="text-xs text-foreground/60">{blog.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingBlog(blog)
                          setShowBlogForm(true)
                        }}
                        className="text-xs px-2 py-1 bg-primary text-primary-foreground hover:opacity-80"
                      >
                        EDIT
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(blog.id)}
                        className="text-xs px-2 py-1 bg-destructive text-destructive-foreground hover:opacity-80"
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-foreground">{blog.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div>
            <button
              onClick={handleAddSkill}
              className="mb-6 px-4 py-2 bg-primary text-primary-foreground font-bold uppercase text-sm hover:opacity-80 transition-opacity"
            >
              + ADD SKILL
            </button>

            {showSkillForm && (
              <SkillForm
                skill={editingSkill}
                onSave={handleSaveSkill}
                onCancel={() => {
                  setShowSkillForm(false)
                  setEditingSkill(null)
                }}
              />
            )}

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.id} className="p-4 bg-card border border-foreground/10">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold">{skill.name}</h3>
                      <p className="text-xs text-foreground/60">
                        {skill.type} • {skill.proficiency}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingSkill(skill)
                          setShowSkillForm(true)
                        }}
                        className="text-xs px-2 py-1 bg-primary text-primary-foreground hover:opacity-80"
                      >
                        EDIT
                      </button>
                      <button
                        onClick={() => handleDeleteSkill(skill.id)}
                        className="text-xs px-2 py-1 bg-destructive text-destructive-foreground hover:opacity-80"
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div>
            <button
              onClick={handleAddExperience}
              className="mb-6 px-4 py-2 bg-primary text-primary-foreground font-bold uppercase text-sm hover:opacity-80 transition-opacity"
            >
              + ADD EXPERIENCE
            </button>

            {showExperienceForm && (
              <ExperienceForm
                experience={editingExperience}
                onSave={handleSaveExperience}
                onCancel={() => {
                  setShowExperienceForm(false)
                  setEditingExperience(null)
                }}
              />
            )}

            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="p-4 bg-card border border-foreground/10">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold">{exp.position}</h3>
                      <p className="text-xs text-foreground/60">
                        {exp.company} • {exp.duration}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingExperience(exp)
                          setShowExperienceForm(true)
                        }}
                        className="text-xs px-2 py-1 bg-primary text-primary-foreground hover:opacity-80"
                      >
                        EDIT
                      </button>
                      <button
                        onClick={() => handleDeleteExperience(exp.id)}
                        className="text-xs px-2 py-1 bg-destructive text-destructive-foreground hover:opacity-80"
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-foreground mb-2">{exp.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="p-4 bg-card border border-foreground/10">
            <h2 className="text-2xl font-bold mb-4">EDIT ABOUT SECTION</h2>
            <textarea
              defaultValue="I started coding because I was curious about how websites and apps work..."
              className="w-full p-3 bg-background text-foreground border border-foreground/20 font-mono text-sm mb-4"
              rows={10}
            />
            <button className="px-4 py-2 bg-primary text-primary-foreground font-bold uppercase text-sm hover:opacity-80 transition-opacity">
              SAVE CHANGES
            </button>
          </div>
        )}
      </div>
    </main>
  )
}

function ProjectForm({
  project,
  onSave,
  onCancel,
}: {
  project: Project | null
  onSave: (project: Project) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState<Project>(
    project || {
      id: 0,
      title: "",
      description: "",
      tags: [],
      client: "",
      admin: "",
      clientAdmin: "",
      server: "",
      liveLink: "",
    },
  )

  return (
    <div className="p-4 bg-card border border-foreground/10 mb-6">
      <h3 className="text-lg font-bold mb-4">{project ? "EDIT PROJECT" : "ADD NEW PROJECT"}</h3>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Project Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        />
        <textarea
          placeholder="Project Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
          rows={3}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          defaultValue={formData.tags.join(", ")}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(",").map((t) => t.trim()) })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        />
        <input
          type="text"
          placeholder="Client Repo URL"
          value={formData.client || ""}
          onChange={(e) => setFormData({ ...formData, client: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        />
        <input
          type="text"
          placeholder="Live Link"
          value={formData.liveLink || ""}
          onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        />
        <div className="flex gap-2">
          <button
            onClick={() => onSave(formData)}
            className="px-4 py-2 bg-primary text-primary-foreground font-bold uppercase text-sm hover:opacity-80"
          >
            SAVE
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-foreground/20 text-foreground font-bold uppercase text-sm hover:opacity-80"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  )
}

function BlogForm({
  blog,
  onSave,
  onCancel,
}: {
  blog: BlogPost | null
  onSave: (blog: BlogPost) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState<BlogPost>(
    blog || {
      id: 0,
      title: "",
      date: new Date().toISOString().split("T")[0],
      excerpt: "",
      content: "",
      readTime: "5 min read",
    },
  )

  return (
    <div className="p-4 bg-card border border-foreground/10 mb-6">
      <h3 className="text-lg font-bold mb-4">{blog ? "EDIT BLOG" : "ADD NEW BLOG"}</h3>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Blog Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        />
        <input
          type="text"
          placeholder="Excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        />
        <textarea
          placeholder="Blog Content (Markdown supported)"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
          rows={8}
        />
        <input
          type="text"
          placeholder="Read Time (e.g., 5 min read)"
          value={formData.readTime}
          onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        />
        <div className="flex gap-2">
          <button
            onClick={() => onSave(formData)}
            className="px-4 py-2 bg-primary text-primary-foreground font-bold uppercase text-sm hover:opacity-80"
          >
            SAVE
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-foreground/20 text-foreground font-bold uppercase text-sm hover:opacity-80"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  )
}

function SkillForm({
  skill,
  onSave,
  onCancel,
}: {
  skill: Skill | null
  onSave: (skill: Skill) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState<Skill>(
    skill || {
      id: 0,
      name: "",
      type: "Frontend",
      proficiency: "Intermediate",
    },
  )

  return (
    <div className="p-4 bg-card border border-foreground/10 mb-6">
      <h3 className="text-lg font-bold mb-4">{skill ? "EDIT SKILL" : "ADD NEW SKILL"}</h3>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Skill Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        />
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value as Skill["type"] })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Tools">Tools</option>
          <option value="Other">Other</option>
        </select>
        <select
          value={formData.proficiency}
          onChange={(e) => setFormData({ ...formData, proficiency: e.target.value as Skill["proficiency"] })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
        </select>
        <div className="flex gap-2">
          <button
            onClick={() => onSave(formData)}
            className="px-4 py-2 bg-primary text-primary-foreground font-bold uppercase text-sm hover:opacity-80"
          >
            SAVE
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-foreground/20 text-foreground font-bold uppercase text-sm hover:opacity-80"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  )
}

function ExperienceForm({
  experience,
  onSave,
  onCancel,
}: {
  experience: Experience | null
  onSave: (experience: Experience) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState<Experience>(
    experience || {
      id: 0,
      company: "",
      position: "",
      duration: "",
      description: "",
      technologies: [],
    },
  )

  return (
    <div className="p-4 bg-card border border-foreground/10 mb-6">
      <h3 className="text-lg font-bold mb-4">{experience ? "EDIT EXPERIENCE" : "ADD NEW EXPERIENCE"}</h3>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Company Name"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        />
        <input
          type="text"
          placeholder="Position"
          value={formData.position}
          onChange={(e) => setFormData({ ...formData, position: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        />
        <input
          type="text"
          placeholder="Duration (e.g., 2022 - Present)"
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
          rows={3}
        />
        <input
          type="text"
          placeholder="Technologies (comma separated)"
          defaultValue={formData.technologies.join(", ")}
          onChange={(e) => setFormData({ ...formData, technologies: e.target.value.split(",").map((t) => t.trim()) })}
          className="w-full p-2 bg-background text-foreground border border-foreground/20 font-mono text-sm"
        />
        <div className="flex gap-2">
          <button
            onClick={() => onSave(formData)}
            className="px-4 py-2 bg-primary text-primary-foreground font-bold uppercase text-sm hover:opacity-80"
          >
            SAVE
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-foreground/20 text-foreground font-bold uppercase text-sm hover:opacity-80"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  )
}
