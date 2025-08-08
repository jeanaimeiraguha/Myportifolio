import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alice Mwizerwa",
    role: "Project Manager",
    quote:
      "Iraguha is an outstanding developer. His attention to detail and commitment made our project a success.",
  },
  {
    id: 2,
    name: "James Kagabo",
    role: "Team Lead",
    quote:
      "A very professional engineer who always delivers on time with high-quality code.",
  },
  {
    id: 3,
    name: "Marie Uwimana",
    role: "Client",
    quote:
      "Great communication and excellent problem-solving skills. Highly recommended!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  }

  return (
    <section className="py-20 bg-gray-100 text-gray-800 px-6 min-h-screen">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        <div className="relative bg-white shadow-lg rounded-lg p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-xl italic relative px-10">
                <FaQuoteLeft className="absolute left-3 top-1 text-indigo-500 text-2xl" />
                {testimonials[index].quote}
                <FaQuoteRight className="absolute right-3 bottom-1 text-indigo-500 text-2xl" />
              </p>
              <p className="font-bold text-lg">{testimonials[index].name}</p>
              <p className="text-indigo-600">{testimonials[index].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="text-indigo-600 hover:text-indigo-900 text-3xl font-bold select-none"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="text-indigo-600 hover:text-indigo-900 text-3xl font-bold select-none"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
