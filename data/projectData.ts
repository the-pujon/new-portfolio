export 
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  client?: string;
  admin?: string;
  clientAdmin?: string;
  server?: string;
  liveLink?: string;
  fullDescription: string;
  challenges: string[];
  solutions: string[];
  learnings: string[];
  des?: string;
}



export const projectsData: Project[] = [
  {
    id: 1,
    title: "Sparkle Car Wash",
    description:`I developed a **full-stack car wash booking web application** with booking system and JWT-based RBAC. I optimized backend APIs with Redis caching, reducing latency by **97% (194ms → 5ms)**. I designed an admin dashboard that is fast and easy to use, achieving 10ms TBT and 0 CLS. The project delivers a fast, responsive, and user-friendly experience.
      `,
    tags: [
      "React",
      "Typescript",
      "MongoDB",
      "Mongoose",
      "Vite",
      "Next JS",
      "Node JS",
      "Express JS",
      "Tailwind",
      "ShadCn UI",
      "Jest",
      "Mocha",
      "Framer Motion",
    ],
    client: "https://github.com/the-pujon/car-service-frontend",
    server: "https://github.com/the-pujon/car-service-backend",
    liveLink: "https://car-service-frontend-ten.vercel.app/",
    fullDescription:
      "This e-commerce platform is a complete solution for online retail businesses. It features a responsive product catalog with advanced filtering, a secure shopping cart system, and integrated payment processing through Stripe. The admin dashboard allows merchants to manage inventory, track orders, and analyze sales metrics in real-time.",
    challenges: [
      "Implementing secure payment processing with PCI compliance",
      "Optimizing product search and filtering for large catalogs",
      "Managing real-time inventory updates across multiple instances",
      "Ensuring smooth checkout experience with minimal cart abandonment",
    ],
    solutions: [
      "Integrated Stripe API with webhook handlers for payment verification",
      "Implemented Elasticsearch for fast product search and filtering",
      "Used Redis for real-time inventory caching and synchronization",
      "Optimized checkout flow with progress indicators and saved payment methods",
    ],
    learnings: [
      "Deep understanding of payment gateway integration and security",
      "Experience with database optimization for e-commerce scale",
      "Best practices for handling sensitive financial data",
      "User experience optimization for conversion rate improvement",
    ],
    des: `
### Sparkle Car Wash: A Comprehensive, Eco-Friendly Car Wash Booking Web Application

**Sparkle Car Wash** is an advanced web application designed to simplify and elevate the car wash booking experience. Built with modern technologies like **React, TypeScript, and Vite** on the frontend, and **Node.js, Express, and MongoDB** on the backend, the platform delivers a seamless, user-friendly experience for both customers and administrators. By prioritizing **eco-friendly practices**, Sparkle Car Wash ensures all services use environmentally safe products, redefining the modern car care experience.

---

## Frontend Excellence

The frontend, powered by **React 18, TypeScript, and Vite**, ensures lightning-fast performance and a highly responsive design. **Tailwind CSS** provides styling, while **Radix UI components** ensure accessibility. **Framer Motion** brings dynamic animations to life, enriching the user experience.

### Frontend Highlights

- **User Authentication & Authorization:** Secure login and account management for users and administrators.  
- **Interactive Booking System:** Real-time slot availability and easy appointment scheduling.  
- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.  
- **Administrative Dashboard:** Manage services, bookings, and performance insights efficiently.  
- **Customer Reviews:** Allow users to leave feedback, enhancing trust and engagement.  
- **Advanced Search & Filtering:** Find services easily with intuitive filters.  
- **Data Visualization:** Insights are presented through charts and graphs using **Recharts**.  
- **Efficient Form Handling:** **React Hook Form** ensures smooth and validated user input.  
- **Seamless Notifications:** Instant feedback with **Sonner Toast** notifications.  

---

## Robust Backend Architecture

The backend, built with **Node.js, Express.js, and TypeScript**, ensures a **scalable and secure** server environment. **MongoDB** combined with **Mongoose** powers the database for high-efficiency data handling.

### Backend Highlights

- **Secure Authentication:** JWT-based authentication with bcrypt for password hashing.  
- **Role-Based Access Control:** Separate permissions for administrators and users.  
- **Advanced Slot Management:** Handle bookings dynamically and efficiently.  
- **Comprehensive Review System:** Collect, manage, and display customer reviews.  
- **Global Error Handling:** Zod-based input validation and secure API endpoints.  
- **Optimized CORS Configuration:** Secure cross-origin resource sharing for deployments.  

---

## Modular Architecture

The project adopts a **clean and modular code structure** for maintainability:

- Feature-based component organization in the frontend.  
- Clearly defined routes, controllers, and services in the backend.  
- Shared utilities and type-safe interfaces for consistency.  

---

## Deployment & Performance Optimization

- **Frontend:** Deployed on **Vercel** for scalability and performance.  
- **Backend:** Secure API hosting with optimized CORS settings.  
- **Production Optimizations:** Minified assets and environment-specific configurations.  

---

## Key Features

- **User Authentication & Authorization:** Secure login and registration process for users and administrators.  
- **Service Booking Management:** Users can view available services, select time slots, and manage bookings effortlessly.  
- **Review & Rating System:** Customers can leave feedback on services, helping maintain high standards.  
- **Responsive Design:** Fully responsive across mobile and desktop devices.  
- **Real-Time Data Synchronization:** Users receive instant updates on booking status and availability.  
- **Admin Dashboard:** Administrators can manage services, view booking statistics, and analyze feedback to improve offerings.  

---

## Challenges and Solutions

- **Challenge:** Complex Slot Management — Implementing a reliable booking system that prevents conflicts and handles time zones.  
  **Solution:** Custom slot management algorithm with Redux for state management.  

- **Challenge:** Real-time Updates — Ensuring instant reflection of booking status and service availability.  
  **Solution:** Utilized RTQ query for real-time updates and booking synchronization.  

- **Challenge:** Performance Optimization — Managing large datasets while maintaining quick load times.  
  **Solution:** Applied lazy loading and code splitting for optimal performance.  

- **Challenge:** Service Analytics — Creating comprehensive yet understandable performance metrics.  
  **Solution:** Modular dashboard components for efficient data visualization.  

- **Challenge:** User Experience — Balancing feature richness with interface simplicity.  
  **Solution:** Developed intuitive UI with Framer Motion animations.  

- **Challenge:** Data Consistency — Maintaining accurate service and booking information across the platform.  
  **Solution:** Implemented **Zod** validation for robust data integrity.  

---

## Why Choose Sparkle Car Wash?

Sparkle Car Wash stands out by combining **advanced technology, user-centric design, and eco-conscious values**. Whether you’re a customer looking for a seamless booking experience or a business owner seeking an all-in-one management platform, Sparkle Car Wash has you covered.

**Redefine your car care experience — streamlined, secure, and sustainable.**
    `,
  },
  {
    id: 2,
    title: "PrimeLifeFit",
    description:
      "I developed a **full-stack e-commerce platform** for fitness products with secure user roles and real-time product/order management. REST APIs were built with **Express, TypeScript, and MongoDB** using RTK Query, following best practices. I also created a responsive admin dashboard with charts and visual insights, delivering a fast, simple, and easy-to-use shopping experience.",
    tags: [
      "React",
      "TypeScript",
      "Redux",
      "RTQ Query",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind",
      "Shadcn UI",
      "Framer Motion",
      "Recharts",
      "JWT",
      "Node.js",
      "Zod",
    ],
    client: "https://github.com/the-pujon/PrimeLifeFit-frontend",
    server: "https://github.com/the-pujon/PrimeLifeFit-backend",
    liveLink: "https://primelifefit.netlify.app/",
    fullDescription:
      "A modern task management application designed for teams to collaborate efficiently. Features include real-time task updates, team workspaces, task assignments, progress tracking, and comprehensive analytics. Built with React for the frontend and Firebase for backend services.",
    challenges: [
      "Implementing real-time synchronization across multiple users",
      "Managing complex state for nested tasks and subtasks",
      "Ensuring data consistency with concurrent updates",
      "Building an intuitive UI for complex task hierarchies",
    ],
    solutions: [
      "Used Firebase Realtime Database for instant updates across clients",
      "Implemented Redux for predictable state management",
      "Added conflict resolution for concurrent task updates",
      "Designed drag-and-drop interface for intuitive task organization",
    ],
    learnings: [
      "Real-time database architecture and synchronization patterns",
      "Complex state management in collaborative applications",
      "User experience design for productivity tools",
      "Performance optimization for real-time applications",
    ],
    des: `
## Introduction
**PrimeLifeFit** represents a cutting-edge e-commerce solution dedicated to the fitness equipment industry. Built with modern web technologies and best practices, this platform offers both a compelling shopping experience for fitness enthusiasts and a powerful management system for administrators.

---

## Project Overview
The platform was developed to address the growing demand for high-quality fitness equipment with a focus on **user experience, performance, and scalability**. By leveraging **React 18 with TypeScript** on the frontend and **Express.js with MongoDB** on the backend, we've created a robust and maintainable codebase that can evolve with business needs.

---

## Technical Architecture
- **Frontend:** Component-based architecture with **Redux Toolkit** for state management and **Redux Persist** for persistent storage.  
- **Styling & UI:** Tailwind CSS for styling and **Radix UI** components for accessible, customizable UI elements.  
- **Backend:** Modular structure with clear separation of concerns, including middleware for authentication, error handling, and request validation.

---

## User Experience
Special attention was paid to the **user interface design**, incorporating smooth animations with **Framer Motion** and responsive layouts that work seamlessly across devices. Features include:
- Dynamic product filtering
- Advanced search functionality
- Intuitive shopping cart system

---

## Admin Dashboard
The administrative interface provides comprehensive tools for managing **products, orders, and customers**. Features include:
- Real-time analytics and sales data visualization using **Recharts**
- Inventory management
- Order processing
- User role management

---

## Security and Performance
- **Security:** JWT-based authentication, role-based access control, and input validation using **Zod schemas**  
- **Performance:** Lazy loading, image optimization, and efficient data fetching strategies  
- **Error Handling:** Centralized backend error middleware and user-friendly frontend messages

---

## Future Scalability
The architecture is designed to accommodate future growth:
- Multi-language support
- Advanced analytics
- Integration with additional payment gateways  
The modular structure allows for easy maintenance and feature additions.

---

## Key Features
- Robust e-commerce platform with **React, TypeScript, and Express.js**  
- Smooth browsing and purchasing of premium fitness equipment  
- Advanced search features for efficient product discovery  
- User authentication and role-based authorization for secure access  
- CRUD operations and order processing for product management  
- Intuitive admin dashboard with real-time insights on revenue, orders, customers, and products

---

## Challenges and Solutions

**Challenge:** Keeping product inventory synchronized in real time with minimal latency.  
**Solution:** Implemented a **MongoDB-based system** with robust indexing and efficient queries to ensure fast updates and reliable stock synchronization.

**Challenge:** Managing user-uploaded product images securely while ensuring efficient storage and retrieval.  
**Solution:** Product images were securely handled using **cloud storage solutions** with secure file upload mechanisms and access control.

**Challenge:** Ensuring uniform and user-friendly error messages across the frontend, backend, and database layers.  
**Solution:** Developed a **centralized error-handling middleware** for the backend and displayed user-friendly messages on the frontend.

**Challenge:** Dynamically managing the shopping cart state, including persistent storage and complex updates.  
**Solution:** Used **Redux Persist** to maintain cart items across sessions without disruptions, even during page reloads.
`,
  },
];