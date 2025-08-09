import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectImages = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", // Driving License System
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", // Inventory
  "https://images.unsplash.com/photo-1523475496153-3b898f2a4d8e?auto=format&fit=crop&w=600&q=80", // Portfolio
  "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80", // Real-time Chat
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80", // E-commerce
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80", // Blog Platform
];

const projects = [
  {
    id: 1,
    title: "Driving License Management System",
    description:
      "A web app to manage provisional and definitive license candidates, exam results, and admin accounts.",
    techStack: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    demoLink: "https://iraguha-jean-aime.vercel.app/rdl-system",
    repoLink: "https://github.com/jeanaimeiraguha/rdl-system",
    image: projectImages[0],
  },
  {
    id: 2,
    title: "Stock Inventory Management System",
    description:
      "Backend API for managing spare parts, stock in/out, and reporting built with Node.js and MySQL.",
    techStack: ["Node.js", "Express", "MySQL", "JWT"],
    demoLink: "https://iraguha-jean-aime.vercel.app/sims-api",
    repoLink: "https://github.com/jeanaimeiraguha/sims-api",
    image: projectImages[1],
  },
  {
  id: 3,
  title: "Portfolio Website",
  description:
    "Personal portfolio showcasing skills, projects, and contact info with React and Tailwind CSS.",
  techStack: ["React", "Tailwind CSS", "Framer Motion"],
  demoLink: "https://codepen.io/team/codepen/full/KKVdVyX",
  repoLink: "https://github.com/jeanaimeiraguha/portfolio",
  image: "https://images.unsplash.com/photo-1502880195258-07f5482e90e4?auto=format&fit=crop&w=600&q=80",
},

  {
    id: 4,
    title: "Real-time Chat Application",
    description:
      "A chat app supporting instant messaging, user authentication, and group chats.",
    techStack: ["React", "Socket.io", "Node.js", "Express"],
    demoLink: "https://socket.io/demos/chat/", // Official working demo link
    repoLink: "https://github.com/jeanaimeiraguha/realtime-chat-app",
    image: projectImages[3],
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce app with product listings, shopping cart, and payment integration.",
    techStack: ["React", "Node.js", "Stripe", "MongoDB"],
    demoLink: "https://iraguha-jean-aime.vercel.app/ecommerce",
    repoLink: "https://github.com/jeanaimeiraguha/ecommerce-platform",
    image: projectImages[4],
  },
  {
    id: 6,
    title: "Blog Platform",
    description:
      "A blogging platform allowing users to create, edit, and comment on posts.",
    techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    demoLink: "https://iraguha-jean-aime.vercel.app/blog",
    repoLink: "https://github.com/jeanaimeiraguha/blog-platform",
    image: projectImages[5],
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map(({ id, title, description, techStack, demoLink, repoLink, image }) => (
            <motion.div
              key={id}
              className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col justify-between hover:shadow-2xl transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.15 }}
            >
              <img
                src={image}
                alt={title}
                className="rounded-md mb-4 object-cover h-40 w-full"
                loading="lazy"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-600 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-auto">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition font-semibold ${demoLink === "#" ? "pointer-events-none opacity-50" : ""}`}
                >
                  Demo <FaExternalLinkAlt />
                </a>
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition font-semibold"
                >
                  Code <FaGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
