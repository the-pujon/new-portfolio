// export default function About() {
//   return (
//     <section id="about" className="py-6 animate-fade-in">
//       <h2 className="text-3xl font-bold mb-3 text-foreground">ABOUT ME</h2>
//       <div className="space-y-2 text-foreground leading-relaxed text-base">
//         <p>
//           I started coding because I was curious about how websites and apps work. What began as small experiments with
//           <span className="font-bold"> JavaScript and React </span>
//           soon grew into a passion for building complete projects. I learned
//           <span className="font-bold"> Node.js, Express, </span>
//           and databases like
//           <span className="font-bold"> MongoDB and PostgreSQL </span>
//           to handle the backend and make my applications more useful and reliable.
//         </p>
//         <p>
//           Over time, I worked on projects where I optimized APIs, organized code, and built systems that are easy to
//           maintain. I enjoy connecting the frontend and backend, creating projects that are smooth, functional, and
//           enjoyable for users.
//         </p>
//         <p>
//           Beyond coding, I write blogs to share what I learn—from project tips to insights about development. For me,
//           coding is more than writing lines of code; it's about solving problems, learning constantly, and creating
//           software that makes a difference.
//         </p>
//       </div>
//     </section>
//   )
// }

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


const about = () => {
  let about = `

## ABOUT ME

I turned **curiosity into code.** I wanted to uncover what really happens behind the scenes: how data flows, how systems scale, and how millions of requests stay seamless. That curiosity grew into a passion for **software engineering**, where I build the invisible systems that make everything work.

I specialize in **Node.js, Express, MongoDB, and PostgreSQL, designing scalable APIs, optimizing databases, and structuring backends that stay fast under real-world pressure.**

 I focus not just on building systems but on **making them reliable in real-world use**. I use **Docker, AWS, and Nginx** for deployment and scalability, and continue exploring **Kubernetes** to automate and orchestrate infrastructure.

**I focus on building maintainable, production-ready systems that solve real problems and scale with users.**

Beyond the code, I write about development—sharing **technical deep-dives**, **architectural decisions**, and **backend problem-solving approaches** that help other developers build better systems.

<i>For me, development is about designing systems that work reliably in real environments, handling failures, scaling under load, and staying maintainable as they grow. It’s about building infrastructure that teams can depend on, not just code that runs.</i>

`;
  return (
    <section id="about" className="py-6 animate-fade-in">
      <div className="prose prose-indigo mx-auto markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {about}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default about;
