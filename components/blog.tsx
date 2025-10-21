"use client"

import Link from "next/link"

interface BlogPost {
  id: number
  title: string
  date: string
  excerpt: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    date: "2024-10-15",
    excerpt: "Learn the fundamentals of Next.js 14 and how to build modern web applications with the latest features.",
  },
  {
    id: 2,
    title: "React Hooks Best Practices",
    date: "2024-09-28",
    excerpt: "Explore best practices for using React Hooks effectively in your applications.",
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js",
    date: "2024-09-10",
    excerpt: "A deep dive into building scalable and maintainable APIs using Node.js and Express.",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-6">
      <h2 className="text-3xl font-bold mb-3 text-foreground">BLOG</h2>
      <div className="space-y-2">
        {blogPosts.map((post) => (
          <div key={post.id} className="p-3 bg-card hover:bg-secondary transition-all duration-300">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-base font-bold text-foreground uppercase">{post.title}</h3>
              <span className="text-xs font-semibold text-foreground whitespace-nowrap ml-4">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <p className="text-foreground mb-2 text-sm">{post.excerpt}</p>
            <Link
              href={`/blog/${post.id}`}
              className="text-xs text-primary font-bold uppercase hover:opacity-80 transition-opacity"
            >
              READ MORE →
            </Link>
          </div>
        ))}
      </div>
      <Link
        href="/blog"
        className="text-xs text-primary font-bold uppercase hover:opacity-80 transition-opacity mt-3 inline-block"
      >
        VIEW ALL POSTS →
      </Link>
    </section>
  )
}
