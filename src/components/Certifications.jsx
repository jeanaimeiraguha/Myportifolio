import { motion } from "framer-motion";

const certifications = [
  {
    id: 1,
    title: "Python for Data Science",
    issuer: "Cambridge UK",
    date: "March 2024",
    link: "#",
  },
  {
    id: 2,
    title: "Solidity & Blockchain Development",
    issuer: "Rise in Community",
    date: "February 2025",
    link: "#",
  },
  {
    id: 3,
    title: "Flutter App Development",
    issuer: "Great Learning",
    date: "February 2025",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-gray-900 text-white px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map(({ id, title, issuer, date, link }) => (
            <motion.a
              key={id}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 rounded-lg p-6 hover:bg-indigo-600 transition shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-indigo-400 mb-4">{issuer}</p>
              <p className="text-gray-300">{date}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
