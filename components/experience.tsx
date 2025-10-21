// const experiences = [
//   {
//     title: "Full Stack Developer",
//     company: "Tripnest Limited",
//     period: "2025 - Present",
//     description: `
//       Improved server performance by over 60% by implementing Redis caching to reduce API response times, and enhanced
// deployment efficiency through Docker containerization and CI/CD pipelines using GitHub Actions across a
// microservices-based architecture. \n\n
// • Engineered 20+ scalable RESTful APIs with Node.js, Express, and MongoDB to power core OTA features visa
// processing, package booking, and flight integration with real-time pricing, seat availability, and resilient failover support.  \n\n
// \n\n
// • Built a secure CRM system with JWT-based RBAC supporting 5+ user roles, and developed a modular online visa
// application service with integrated payment gateway handling 1,000+ monthly transactions while ensuring high security
// and code maintainability.
//      `,
//   },
//   {
//     title: "Full Stack Developer",
//     company: "Digital Solutions Ltd.",
//     period: "2023 - 2023",
//     description: `
//     • Enhanced user experience by optimizing applications using React and Redux, resulting in faster loading and better
// usability.
// • Collaborated with a cross-functional team to deliver new features on schedule, ensuring smooth integration of
// backend services using Node.js and Express.
// • Refactored existing codebases, improving performance and maintainability, and reducing technical debt across
// multiple projects.
//     `
//   },
// ];

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tripnest Limited",
    period: "2025 - Present",
    description: `• Improved server performance by over 60% by implementing Redis caching to reduce API response times, and enhanced deployment efficiency through Docker containerization and CI/CD pipelines using GitHub Actions across a microservices-based architecture.
• Engineered 20+ scalable RESTful APIs with Node.js, Express, and MongoDB to power core OTA features: visa processing, package booking, and flight integration with real-time pricing, seat availability, and resilient failover support.
• Built a secure CRM system with JWT-based RBAC supporting 5+ user roles, and developed a modular online visa application service with integrated payment gateway handling 1,000+ monthly transactions while ensuring high security and code maintainability.`,
  },
  {
    title: "Junior Developer",
    company: "Core Devs Ltd.",
    period: "2023 - 2023",
    description: `• Enhanced user experience by optimizing applications using React and Redux, resulting in faster loading and better usability.
• Collaborated with a cross-functional team to deliver new features on schedule, ensuring smooth integration of backend services using Node.js and Express.
• Refactored existing codebases, improving performance and maintainability, and reducing technical debt across multiple projects.`,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-6">
      <h2 className="text-3xl font-bold mb-3 text-foreground">EXPERIENCE</h2>
      <div className="space-y-2">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-3 bg-card hover:bg-secondary transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-base font-bold text-foreground">
                {exp.title}
              </h3>
              <span className="text-xs font-semibold text-foreground">
                {exp.period}
              </span>
            </div>
            <p className="text-primary font-bold text-xs mb-1 uppercase">
              {exp.company}
            </p>
            {/* <p className="text-foreground text-sm leading-relaxed">
              {exp.description}
            </p> */}
            {exp.description.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
