"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import MarkdownRenderer from "@/components/markdown-renderer"

interface BlogPost {
  id: number
  title: string
  date: string
  excerpt: string
  content: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    date: "2024-10-15",
    excerpt: "Learn the fundamentals of Next.js 14 and how to build modern web applications with the latest features.",
    readTime: "8 min read",
    content: `Next.js 14 introduces several powerful features including improved performance, better developer experience, and enhanced routing capabilities. In this comprehensive guide, we'll explore how to leverage these features to build scalable applications.

## Why Next.js 14?

Next.js 14 brings significant improvements over previous versions. The new App Router provides a more intuitive way to structure your application, with built-in support for layouts, nested routing, and server components.

## Key Features

### Server Components
Server components allow you to render components on the server, reducing the amount of JavaScript sent to the client. This improves performance and security.

### Improved Image Optimization
The new Image component provides better optimization out of the box, with automatic format selection and responsive image handling.

### Enhanced Routing
The App Router provides a more flexible routing system with support for dynamic routes, catch-all routes, and optional catch-all routes.

## Getting Started

To create a new Next.js 14 project, use the following command:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new Next.js project with all the necessary dependencies and configuration.

## Best Practices

1. Use server components by default
2. Leverage the new Image component for images
3. Use the App Router for new projects
4. Implement proper error handling
5. Optimize your bundle size

Next.js 14 is a powerful framework that makes it easy to build modern web applications. With its improved performance and developer experience, it's an excellent choice for new projects.`,
  },
  {
    id: 2,
    title: "React Hooks Best Practices",
    date: "2024-09-28",
    excerpt: "Explore best practices for using React Hooks effectively in your applications.",
    readTime: "10 min read",
    content: `React Hooks have revolutionized how we write components. In this article, we'll discuss best practices for using hooks, common pitfalls to avoid, and patterns that lead to cleaner, more maintainable code.

## Understanding Hooks

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They make it possible to use state and other React features without writing a class component.

## Common Hooks

### useState
The useState hook lets you add state to functional components. It returns an array with two elements: the current state value and a function to update it.

### useEffect
The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

### useContext
The useContext hook lets you subscribe to React context without introducing nesting.

## Best Practices

### 1. Only Call Hooks at the Top Level
Don't call hooks inside loops, conditions, or nested functions. This ensures that hooks are called in the same order each time a component renders.

### 2. Only Call Hooks from React Functions
Call hooks from React function components or custom hooks, not from regular JavaScript functions.

### 3. Use the ESLint Plugin
The eslint-plugin-react-hooks plugin enforces these rules automatically.

### 4. Create Custom Hooks
Extract component logic into custom hooks to make your code more reusable and testable.

### 5. Optimize Performance
Use useMemo and useCallback to optimize performance by memoizing values and functions.

## Common Pitfalls

- Forgetting to include dependencies in the dependency array
- Creating infinite loops with useEffect
- Not cleaning up side effects
- Using hooks conditionally

By following these best practices, you can write cleaner, more maintainable React code.`,
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js",
    date: "2024-09-10",
    excerpt: "A deep dive into building scalable and maintainable APIs using Node.js and Express.",
    readTime: "12 min read",
    content: `Building APIs that can handle millions of requests requires careful planning and architecture. We'll explore caching strategies, database optimization, and deployment considerations for production-ready APIs.

## Architecture Considerations

### Microservices vs Monolith
Decide whether to build a monolithic API or split it into microservices. Monoliths are simpler to start with, while microservices provide better scalability.

### Load Balancing
Use load balancers to distribute traffic across multiple servers. This ensures that no single server becomes a bottleneck.

### Caching Strategies
Implement caching at multiple levels: application-level caching, database query caching, and HTTP caching.

## Database Optimization

### Indexing
Create indexes on frequently queried columns to improve query performance.

### Query Optimization
Write efficient queries that minimize the amount of data transferred from the database.

### Connection Pooling
Use connection pooling to reuse database connections and reduce overhead.

## Performance Optimization

### Compression
Enable gzip compression to reduce the size of API responses.

### Pagination
Implement pagination to limit the amount of data returned in a single request.

### Rate Limiting
Implement rate limiting to prevent abuse and ensure fair usage.

## Monitoring and Logging

### Application Monitoring
Use tools like New Relic or Datadog to monitor application performance.

### Error Tracking
Implement error tracking to identify and fix issues quickly.

### Structured Logging
Use structured logging to make logs easier to search and analyze.

## Deployment

### Containerization
Use Docker to containerize your application for consistent deployment across environments.

### Orchestration
Use Kubernetes to orchestrate containers and manage scaling.

### CI/CD Pipeline
Implement a CI/CD pipeline to automate testing and deployment.

By following these practices, you can build scalable APIs that handle millions of requests efficiently.`,
  },
]

export default function BlogDetail() {
  const params = useParams()
  const postId = Number.parseInt(params.id as string)
  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="text-primary font-bold uppercase hover:opacity-80">
            ← BACK TO BLOG
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground animate-fade-in">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/blog" className="text-primary font-bold uppercase hover:opacity-80 mb-6 inline-block">
          ← BACK TO BLOG
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-2 text-foreground">{post.title}</h1>
          <div className="flex gap-4 mb-8 text-sm text-foreground font-semibold">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>{post.readTime}</span>
          </div>

          <MarkdownRenderer content={post.content} />
        </article>

        <div className="mt-12 pt-8 border-t border-foreground/20">
          <Link href="/blog" className="text-primary font-bold uppercase hover:opacity-80">
            ← BACK TO BLOG
          </Link>
        </div>
      </div>
    </main>
  )
}
