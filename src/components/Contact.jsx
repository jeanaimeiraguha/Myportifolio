import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Email is invalid";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Here you can handle sending form data to your backend or email service
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            className="md:w-1/3 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-indigo-500 text-2xl" />
              <p>Bugesera , Kigali, Rwanda</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-indigo-500 text-2xl" />
              <a href="tel:+250791059171" className="hover:text-indigo-400">
                +250 791 059 171
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-indigo-500 text-2xl" />
              <a
                href="mailto:jeanaimeiraguha@gmail.com"
                className="hover:text-indigo-400"
              >
                jeanaimeiraguha@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="md:w-2/3 bg-gray-800 p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            noValidate
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-semibold">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 rounded bg-gray-700 border ${
                  errors.name ? "border-red-500" : "border-transparent"
                } text-white`}
              />
              {errors.name && (
                <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 rounded bg-gray-700 border ${
                  errors.email ? "border-red-500" : "border-transparent"
                } text-white`}
              />
              {errors.email && (
                <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 rounded bg-gray-700 border ${
                  errors.message ? "border-red-500" : "border-transparent"
                } text-white resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 mt-1 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded font-semibold w-full"
            >
              Send Message
            </button>

            {submitted && (
              <p className="mt-4 text-green-400 font-semibold text-center">
                Thank you for your message! I will get back to you soon.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
