import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function validateEmail(email) {
    // Simple email regex
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="py-20 bg-indigo-900 text-white px-6">
      <div className="container mx-auto max-w-xl text-center">
        <h2 className="text-4xl font-bold mb-6">Subscribe to my Newsletter</h2>
        <p className="mb-10">
          Get the latest updates about my projects, blog posts, and more.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
          noValidate
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`p-3 rounded text-gray-900 flex-grow ${
              error ? "border-2 border-red-500" : "border border-transparent"
            }`}
            aria-invalid={error ? "true" : "false"}
            aria-describedby="email-error"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded font-semibold shadow-lg"
          >
            Subscribe
          </button>
        </motion.form>

        {error && (
          <motion.p
            id="email-error"
            className="text-red-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.p>
        )}

        {submitted && (
          <motion.p
            className="text-green-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thank you for subscribing!
          </motion.p>
        )}
      </div>
    </section>
  );
}
