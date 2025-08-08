import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "CodeAlpha",
    period: "March 2025",
    description:
      "Developed APIs and integrated JWT authentication using Node.js and MySQL.",
  },
  {
    role: "Software Engineer",
    company: "Patie Digital Solution",
    period: "2023 - Present",
    description:
      "Full-stack development with React, Node.js, and cloud deployment.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2021 - 2023",
    description: "Built websites and small apps for local businesses.",
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50 text-gray-900 px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>

        <div className="relative border-l-4 border-indigo-600 pl-8 space-y-12">
          {experiences.map(({ role, company, period, description }, idx) => (
            <motion.div
              key={company + idx}
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
            >
              <span className="absolute -left-6 top-1 bg-indigo-600 rounded-full w-5 h-5 border-4 border-gray-50 flex justify-center items-center text-gray-50">
                <FaBriefcase />
              </span>
              <p className="text-indigo-600 font-semibold mb-1">{period}</p>
              <h3 className="text-2xl font-bold">{role}</h3>
              <p className="italic mb-2 text-indigo-400">{company}</p>
              <p className="text-gray-700">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
