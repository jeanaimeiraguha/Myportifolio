import { motion } from "framer-motion";

const education = [
  {
    year: "2023 - 2025",
    degree: "Advanced Diploma in Software Engineering",
    school: "Kigali Institute of Technology",
  },
  {
    year: "2019 - 2023",
    degree: "Bachelor of Computer Science",
    school: "University of Rwanda",
  },
];

const experience = [
  {
    period: "March 2025",
    role: "Backend Developer Intern",
    company: "CodeAlpha",
    description:
      "Developed RESTful APIs using Node.js, Express, MySQL, and JWT authentication.",
  },
  {
    period: "2023 - Present",
    role: "Software Engineer",
    company: "Patie Digital Solution",
    description:
      "Built full-stack web applications with React, Node.js, and Tailwind CSS.",
  },
];

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "MySQL",
  "Tailwind CSS",
  "Solidity",
  "Python",
  "Docker",
];

export default function Resume() {
  return (
    <section className="py-20 bg-gray-50 text-gray-900 px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>

        {/* Education */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 border-b-2 border-indigo-600 pb-2">
            Education
          </h3>
          <ul className="space-y-6">
            {education.map(({ year, degree, school }) => (
              <li key={year} className="pl-4 border-l-4 border-indigo-600">
                <p className="text-indigo-600 font-semibold">{year}</p>
                <p className="text-lg font-semibold">{degree}</p>
                <p className="italic text-gray-700">{school}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6 border-b-2 border-indigo-600 pb-2">
            Experience
          </h3>
          <ul className="space-y-6">
            {experience.map(({ period, role, company, description }) => (
              <li key={company + period} className="pl-4 border-l-4 border-indigo-600">
                <p className="text-indigo-600 font-semibold">{period}</p>
                <p className="text-lg font-semibold">{role}</p>
                <p className="italic text-indigo-700 mb-2">{company}</p>
                <p className="text-gray-700">{description}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 border-b-2 border-indigo-600 pb-2">
            Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
