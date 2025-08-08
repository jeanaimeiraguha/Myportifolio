import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Node.js, Solidity for blockchain, Python for data science, and Tailwind CSS for styling.",
  },
  {
    question: "Are you available for freelance projects?",
    answer:
      "Yes! Please reach out via the Contact page to discuss your project requirements.",
  },
  {
    question: "Do you provide consulting services?",
    answer:
      "Absolutely, I provide technical consulting especially in blockchain and software architecture.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gray-100 text-gray-900 px-6 min-h-screen">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {faqs.map(({ question, answer }, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div
                key={question}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${idx}`}
                >
                  <span className="font-semibold text-lg">{question}</span>
                  {isOpen ? (
                    <FaChevronUp className="text-indigo-600" />
                  ) : (
                    <FaChevronDown className="text-indigo-600" />
                  )}
                </button>
                {isOpen && (
                  <div
                    id={`faq-${idx}`}
                    className="px-6 pb-6 text-gray-700 leading-relaxed"
                  >
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
