import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Python", level: 75 },
  { name: "Solidity", level: 60 },
];

const stats = [
  { label: "Years of Experience", value: 5 },
  { label: "Completed Projects", value: 30 },
  { label: "Open Source Contributions", value: 15 },
  { label: "Satisfied Clients", value: "95%" },
];

const interests = [
  "Ethical software engineering",
  "Blockchain & Web3",
  "Clean code & best practices",
  "Continuous learning",
  "Community building",
  "Creative problem solving",
  "Football & teamwork",
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/jeanaimeiraguha", icon: "🐙" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/iraguha-jean-aime-77a13b318/", icon: "💼" },
  { name: "Twitter", url: "#", icon: "🐦" },
];

// Experience data
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

// Testimonials data (15 people)
const testimonials = [
  { id: 1, name: "Alice Mwizerwa", role: "Project Manager", quote: "Iraguha is an outstanding developer. His attention to detail and commitment made our project a success." },
  { id: 2, name: "James Kagabo", role: "Team Lead", quote: "A very professional engineer who always delivers on time with high-quality code." },
  { id: 3, name: "Marie Uwimana", role: "Client", quote: "Great communication and excellent problem-solving skills. Highly recommended!" },
  { id: 4, name: "Eric Nshimiyimana", role: "Product Owner", quote: "Jean Aime consistently produces reliable and scalable software." },
  { id: 5, name: "Sophie Mukamana", role: "UX Designer", quote: "Collaborating with Iraguha was smooth and productive." },
  { id: 6, name: "Paul Habimana", role: "DevOps Engineer", quote: "His knowledge of backend and cloud integration is impressive." },
  { id: 7, name: "Alice Uwamahoro", role: "Scrum Master", quote: "Always punctual, professional, and delivers clean code." },
  { id: 8, name: "John Bosco", role: "CTO", quote: "Iraguha brings great value to any software project." },
  { id: 9, name: "Claire Mukarurangwa", role: "QA Engineer", quote: "Attention to detail in testing and bug fixes is excellent." },
  { id: 10, name: "Fabrice Ndayisaba", role: "Business Analyst", quote: "Understands requirements clearly and implements them flawlessly." },
  { id: 11, name: "Diane Mukasonga", role: "Marketing Manager", quote: "His apps have helped us reach more customers effectively." },
  { id: 12, name: "Emmanuel Uwizeye", role: "Founder", quote: "Professional and committed, a great asset to the team." },
  { id: 13, name: "Sandrine Iradukunda", role: "HR Manager", quote: "Reliable and always willing to learn new skills." },
  { id: 14, name: "Jean Pierre", role: "Full Stack Developer", quote: "Great team player and skilled developer." },
  { id: 15, name: "Christine Uwimana", role: "Project Coordinator", quote: "Delivered projects on time with excellent quality." },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center text-gray-400 py-6 border-t border-gray-700">
      © {year} Iraguha Jean Aime. All rights reserved.
    </footer>
  );
}

export default function About() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Auto-scroll testimonials every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setTestimonialIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [testimonialIndex]);

  function prevTestimonial() {
    setTestimonialIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  }

  function nextTestimonial() {
    setTestimonialIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-20">
      <div className="container mx-auto max-w-6xl">

        {/* About Me Header and Description */}
        <header className="mb-12 text-center">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight mb-4 text-indigo-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hello! I’m <strong>Iraguha Jean Aime</strong>, an ethical software engineer based in Rwanda with a passion for building scalable, efficient, and secure web applications. 
            I combine creativity with clean code and a commitment to ethical development to deliver solutions that truly make a difference.
          </motion.p>
        </header>

        {/* About Text */}
        <article className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-gray-300">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Over the past 5 years, I’ve had the privilege of working on diverse projects ranging from web apps, APIs, to blockchain solutions. 
            My technical expertise spans <strong>JavaScript, React, Node.js, Tailwind CSS, Python, and Solidity</strong>. I’m constantly learning and adapting to new technologies and best practices to stay ahead in this fast-paced industry.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            What sets me apart is my strong belief in <em>ethical software engineering</em>. I prioritize transparency, privacy, and responsibility in every project I touch. 
            I’m also passionate about collaboration and open-source contribution because I believe technology grows best when shared.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            When I’m not coding, I enjoy football and team sports, which inspire my teamwork and leadership in professional settings. 
            I’m excited to connect with like-minded professionals, clients, and collaborators — whether you’re looking for a developer, mentor, or partner in innovation.
          </motion.p>
        </article>

        {/* Stats */}
        <motion.section
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="bg-indigo-700 bg-opacity-80 rounded-lg py-6 shadow-lg"
            >
              <h3 className="text-3xl font-bold">{value}</h3>
              <p className="mt-2 text-indigo-200">{label}</p>
            </div>
          ))}
        </motion.section>

        {/* Skills */}
        <motion.section
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-indigo-400 text-center">
            Technical Skills
          </h2>
          <div className="space-y-6">
            {skills.map(({ name, level }) => (
              <div key={name}>
                <div className="flex justify-between mb-1 font-semibold text-indigo-400">
                  <span>{name}</span>
                  <span>{level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${level}%` }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="h-5 bg-indigo-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Interests */}
        <motion.section
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-indigo-400 text-center">
            What Drives Me
          </h2>
          <ul className="flex flex-wrap justify-center gap-4">
            {interests.map((interest) => (
              <li
                key={interest}
                className="bg-indigo-900 bg-opacity-60 text-indigo-200 px-5 py-2 rounded-full font-semibold shadow-sm"
              >
                {interest}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Experience */}
        <section className="py-20 bg-gray-800 bg-opacity-30 rounded-lg mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-indigo-300">Work Experience</h2>
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
                <span className="absolute -left-6 top-1 bg-indigo-600 rounded-full w-5 h-5 border-4 border-gray-900 flex justify-center items-center text-gray-900">
                  <FaBriefcase />
                </span>
                <p className="text-indigo-300 font-semibold mb-1">{period}</p>
                <h3 className="text-2xl font-bold text-white">{role}</h3>
                <p className="italic mb-2 text-indigo-400">{company}</p>
                <p className="text-gray-300">{description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-900 bg-opacity-80 text-gray-100 px-6 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-indigo-400">Testimonials</h2>
          <div className="relative bg-gray-800 shadow-lg rounded-lg p-10 min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[testimonialIndex].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <p className="text-xl italic relative px-10 text-indigo-300">
                  <FaQuoteLeft className="absolute left-3 top-1 text-indigo-500 text-2xl" />
                  {testimonials[testimonialIndex].quote}
                  <FaQuoteRight className="absolute right-3 bottom-1 text-indigo-500 text-2xl" />
                </p>
                <p className="font-bold text-lg text-indigo-200">{testimonials[testimonialIndex].name}</p>
                <p className="text-indigo-400">{testimonials[testimonialIndex].role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="text-indigo-400 hover:text-indigo-200 text-3xl font-bold select-none"
              >
                ‹
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="text-indigo-400 hover:text-indigo-200 text-3xl font-bold select-none"
              >
                ›
              </button>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <motion.section
          className="max-w-4xl mx-auto mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-indigo-400">Connect With Me</h2>
          <div className="flex justify-center gap-8 text-3xl">
            {socialLinks.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                className="hover:text-indigo-300 transition"
              >
                <span aria-label={name}>{icon}</span>
              </a>
            ))}
          </div>
        </motion.section>

        <Footer />
      </div>
    </section>
  );
}
