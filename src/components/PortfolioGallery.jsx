import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web",
    description: "Full-stack e-commerce platform built with React and Node.js.",
    image: "/images/ecommerce.png",
    link: "#",
  },
  {
    id: 2,
    title: "Mobile Fitness App",
    category: "Mobile",
    description: "Cross-platform fitness app built with Flutter.",
    image: "/images/fitness-app.png",
    link: "#",
  },
  {
    id: 3,
    title: "Blockchain Voting DApp",
    category: "Blockchain",
    description: "Decentralized voting application using Solidity and Web3.js.",
    image: "/images/blockchain-dapp.png",
    link: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Web",
    description: "Personal portfolio built with React and Tailwind CSS.",
    image: "/images/portfolio.png",
    link: "#",
  },
];

const categories = ["All", "Web", "Mobile", "Blockchain"];

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50 text-gray-900 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Portfolio Gallery</h2>

        {/* Category Filters */}
        <div className="flex justify-center gap-6 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-indigo-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {filteredProjects.map(({ id, title, description, image, link }) => (
            <motion.a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col"
              layout
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image}
                alt={title}
                className="object-cover h-48 w-full"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700 flex-grow">{description}</p>
                <span className="mt-4 text-indigo-600 font-semibold hover:underline">
                  View Project →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
