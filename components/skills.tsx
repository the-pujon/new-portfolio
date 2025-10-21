"use client"

import { useState } from "react"

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "SASS",
      "Bootstrap",
      "Shadcn UI",
      "Material UI",
      "Ant Design",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Prisma",
      "GraphQL",
      "REST APIs",
      "Redis",
      "Socket.io",
      "tRPC",
      "Kafka",
      "RabbitMQ",
      "Kong",
      "Microservices",
    ],
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      "Docker",
      "AWS (S3, EC2, Lambda)",
      "Nginx",
      "CI/CD (GitHub Actions)",
      "Git",
      "GitHub",
      "Vercel",
      "Linux",
    ],
  },
  {
    category: "Testing & Tools",
    skills: [
      "Jest",
      "Vitest",
      "Supertest",
      "Stripe",
      "Firebase",
      "Chai",
      "Mocha",
      // "Cypress",
      "Postman",
      "Swagger",
      "ESLint",
      "Prettier",
      // "Webpack",
      // "Babel",
      // "Figma",
      // "Adobe XD",
      // "Sketch",
      // "InVision",

      // "Discord.js",
    ],
  },
  {
    category: "Other",
    skills: [
      "UI/UX Design",
      "Agile",
      "Problem Solving",
      "Communication",
    ],
  },
];


export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-6">
      <h2 className="text-3xl font-bold mb-3 text-foreground">SKILLS</h2>
      <div className="space-y-3">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="bg-card p-3">
            <h3 className="text-base font-bold text-foreground mb-2 uppercase">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`px-3 py-1 transition-all duration-200 cursor-default text-sm ${
                    hoveredSkill === skill
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-muted text-foreground hover:bg-secondary"
                  }`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
