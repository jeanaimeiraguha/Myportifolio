import { motion } from "framer-motion";

const education = [
  {
    year: "2023 - 2025",
    degree: "Advanced Diploma in Software Engineering",
    school: "Kigali Institute of Technology",
    description:
      "Focused on full-stack development, data science, and blockchain technologies.",
  },
  {
    year: "2019 - 2023",
    degree: "Bachelor of Computer Science",
    school: "University of Rwanda",
    description:
      "Specialized in software engineering with projects on web and mobile apps.",
  },
  {
    year: "2015 - 2019",
    degree: "High School Diploma",
    school: "Cyabingo Secondary School",
    description: "Focused on science and mathematics.",
  },
];

export default function Education() {
  return (
    <section className="py-20 bg-gray-900 text-white px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>

        <div className="relative border-l-4 border-indigo-600 pl-8 space-y-12">
          {education.map(({ year, degree, school, description }, idx) => (
            <motion.div
              key={year + idx}
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
            >
              <span className="absolute -left-6 top-1 bg-indigo-600 rounded-full w-5 h-5 border-4 border-gray-900" />
              <p className="text-indigo-400 font-semibold mb-1">{year}</p>
              <h3 className="text-2xl font-bold">{degree}</h3>
              <p className="text-indigo-300 italic mb-2">{school}</p>
              <p className="text-gray-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
