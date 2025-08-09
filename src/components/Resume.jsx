import React from "react";
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
  {
    year: "2022 — Present",
    degree: "Software Engineering and Embedded Systems",
    school: "Gikonko Technical Secondary School",
    description:
      "Comprehensive training on programming languages, software methodologies, and practical coding skills to build robust software solutions.",
  },
  {
    year: "2019 — 2022",
    degree: "Ordinary Level Education (Sciences)",
    school: "Ecole Secondaire Cyabingo",
    description:
      "Focused on sciences, strong foundation in math, physics, chemistry, biology, and deep spiritual values.",
  },
  {
    year: "2013 — 2018",
    degree: "Primary Education",
    school: "Kibenga Primary School",
    description:
      "Developed core values and ethics applied throughout my personal and professional life.",
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
      "Built full-stack web applications using React, Node.js, and Tailwind CSS.",
  },
  {
    period: "2021 — 2023",
    role: "Frontend Developer",
    company: "Italos",
    description:
      "Created user interface components with React and Tailwind CSS, ensuring responsive and engaging user experiences.",
  },
  {
    period: "2023",
    role: "Mid-Level Smart Contract Engineer",
    company: "Blockify",
    description:
      "Developed and tested scalable smart contracts using Solidity for decentralized applications.",
  },
  {
    period: "2022 — Present",
    role: "Project Leader",
    company: "Various Projects",
    description:
      "Lead software development projects, coordinating teams and managing timelines to deliver quality solutions.",
  },
  {
    period: "2018 — Present",
    role: "Web Designer",
    company: "Freelance",
    description:
      "Design intuitive and visually appealing websites by combining UX principles and frontend technologies.",
  },
];

const certifications = [
  {
    title: "Transition to Web3 Bootcamp",
    issuer: "Rise In",
    description:
      "Completed a 15-week community-driven bootcamp focusing on Web3 development projects.",
  },
  {
    title: "Web3 and Blockchain Leadership For Transformation",
    issuer: "Coursera",
    description:
      "Studied leadership and regulatory frameworks essential for blockchain and Web3 success.",
  },
  {
    title: "Web3 Application Development",
    issuer: "Metaschool",
    description:
      "Focused training on Web3 application and NFT development.",
  },
  {
    title: "Hyperledger Fabric Chaincode Development Using GoLang",
    issuer: "Udemy",
    description:
      "Completed comprehensive training on Hyperledger Fabric chaincode development.",
  },
  {
    title: "Blockchain Specialization",
    issuer: "Coursera",
    description:
      "Deep dive into blockchain technologies and practical applications.",
  },
  {
    title: "Decentralized Apps",
    issuer: "Coursera",
    description:
      "Comprehensive study of decentralized applications built on blockchain.",
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
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <motion.h1
          className="text-5xl font-extrabold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h1>

        {/* Education */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-semibold mb-8 border-b-2 border-indigo-400 inline-block pb-1">
            Education
          </h2>
          <div className="space-y-8">
            {education.map(({ year, degree, school, description }) => (
              <div
                key={year + school}
                className="bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{degree}</h3>
                  <span className="text-indigo-400 font-semibold">{year}</span>
                </div>
                <p className="italic text-indigo-300 mb-1">{school}</p>
                {description && (
                  <p className="text-indigo-200">{description}</p>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-8 border-b-2 border-indigo-400 inline-block pb-1">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map(({ period, role, company, description }) => (
              <div
                key={role + company}
                className="bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{role}</h3>
                  <span className="text-indigo-400 font-semibold">{period}</span>
                </div>
                <p className="italic text-indigo-300 mb-1">{company}</p>
                <p className="text-indigo-200">{description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-8 border-b-2 border-indigo-400 inline-block pb-1">
            Certifications
          </h2>
          <div className="space-y-8">
            {certifications.map(({ title, issuer, description }) => (
              <div
                key={title}
                className="bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <span className="text-indigo-400 font-semibold">{issuer}</span>
                </div>
                <p className="text-indigo-200">{description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-semibold mb-8 border-b-2 border-indigo-400 inline-block pb-1">
            Skills
          </h2>
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
        </motion.section>
      </div>
    </section>
  );
}
