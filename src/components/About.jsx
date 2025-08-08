import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Python", level: 75 },
  { name: "Solidity", level: 60 },
];

export default function About() {
  return (
    <section className="py-20 bg-gray-100 text-gray-800 px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            className="rounded-3xl shadow-xl max-w-xs mx-auto md:mx-0"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <div className="flex-1">
            <p className="mb-6 text-lg leading-relaxed">
              Passionate software engineer focused on building scalable web
              applications and blockchain integrations. Experienced in full-stack
              development with a commitment to clean, maintainable code.
            </p>

            <div className="space-y-5">
              {skills.map(({ name, level }) => (
                <div key={name}>
                  <div className="flex justify-between mb-1 font-semibold">
                    <span>{name}</span>
                    <span>{level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${level}%` }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      className="h-4 bg-indigo-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
