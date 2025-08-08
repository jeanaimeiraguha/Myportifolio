import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Driving License Management System",
    description:
      "A web app to manage provisional and definitive license candidates, exam results, and admin accounts.",
    techStack: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "https://github.com/jeanaimeiraguha/rdl-system",
  },
  {
    id: 2,
    title: "Stock Inventory Management System",
    description:
      "Backend API for managing spare parts, stock in/out, and reporting built with Node.js and MySQL.",
    techStack: ["Node.js", "Express", "MySQL", "JWT"],
    demoLink: "#",
    repoLink: "https://github.com/jeanaimeiraguha/sims-api",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing skills, projects, and contact info with React and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://iraguha-jean-aime.vercel.app/",
    repoLink: "https://github.com/jeanaimeiraguha/portfolio",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900 text-white px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map(({ id, title, description, techStack, demoLink, repoLink }) => (
            <motion.div
              key={id}
              className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col justify-between hover:shadow-2xl transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
            >
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
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition font-semibold"
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
