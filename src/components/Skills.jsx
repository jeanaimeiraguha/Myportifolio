import { motion } from "framer-motion";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaEthereum,
  FaDatabase,
} from "react-icons/fa";

const skills = [
  { name: "JavaScript", level: 90, icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", level: 85, icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", level: 75, icon: <FaPython className="text-blue-600" /> },
  { name: "Blockchain (Solidity)", level: 60, icon: <FaEthereum className="text-purple-600" /> },
  { name: "Databases (MySQL, MongoDB)", level: 80, icon: <FaDatabase className="text-indigo-600" /> },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-900 text-white px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {skills.map(({ name, level, icon }) => (
            <motion.div
              key={name}
              className="bg-gray-800 rounded-lg p-6 flex items-center gap-6 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl">{icon}</div>
              <div className="flex-1">
                <div className="flex justify-between mb-2 font-semibold text-lg">
                  <span>{name}</span>
                  <span>{level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-5">
                  <motion.div
                    className="bg-indigo-500 h-5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
