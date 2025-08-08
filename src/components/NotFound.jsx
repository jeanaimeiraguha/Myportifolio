import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-9xl font-bold mb-6">404</h1>
      <p className="text-2xl mb-6">Oops! Page Not Found</p>
      <Link
        to="/"
        className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-700 transition text-lg"
      >
        Go back home
      </Link>
    </motion.section>
  );
}
