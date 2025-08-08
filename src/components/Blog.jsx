import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Getting Started with React 18",
    date: "August 1, 2025",
    summary:
      "Learn the new features and best practices introduced in React 18 with practical examples.",
  },
  {
    id: 2,
    title: "Introduction to Solidity Smart Contracts",
    date: "July 15, 2025",
    summary:
      "A beginner-friendly guide to writing and deploying smart contracts on the Ethereum blockchain.",
  },
  {
    id: 3,
    title: "Building Scalable REST APIs with Node.js",
    date: "June 10, 2025",
    summary:
      "Step-by-step tutorial to build and deploy efficient REST APIs using Express and MySQL.",
  },
];

export default function Blog() {
  return (
    <section className="py-20 bg-gray-50 text-gray-800 px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Blog</h2>
        <div className="space-y-10">
          {posts.map(({ id, title, date, summary }) => (
            <motion.article
              key={id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-indigo-600 mb-4">{date}</p>
              <p className="text-gray-700">{summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
