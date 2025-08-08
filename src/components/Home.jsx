import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const roles = [
  "Full-Stack Developer",
  "Data Scientist",
  "Blockchain Enthusiast",
  "Ethical Software Engineer",
];

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!deleting && displayedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 150);
    } else if (deleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 100);
    } else if (!deleting && displayedText.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayedText.length === 0) {
      setDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, deleting, currentRoleIndex]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col justify-center items-center text-white px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Iraguha Jean Aime</h1>
        <p className="text-2xl min-h-[40px] text-indigo-400 font-mono tracking-wide mb-8">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
        <div className="flex justify-center gap-8 text-4xl">
          <a
            href="https://github.com/jeanaimeiraguha"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 relative group"
            aria-label="GitHub"
          >
            <FaGithub />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-indigo-600 text-sm rounded px-2 py-1 transition-transform origin-bottom">
              GitHub
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/iraguha-jean-aime-77a13b318/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 relative group"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-indigo-600 text-sm rounded px-2 py-1 transition-transform origin-bottom">
              LinkedIn
            </span>
          </a>
          <a
            href="mailto:iraguha@example.com"
            className="hover:text-indigo-400 relative group"
            aria-label="Email"
          >
            <FaEnvelope />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-indigo-600 text-sm rounded px-2 py-1 transition-transform origin-bottom">
              Email
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
