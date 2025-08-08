import { motion } from "framer-motion";

const team = [
  {
    name: "Alice Mwizerwa",
    role: "Project Manager",
    photo: "/images/alice.jpg",
    linkedin: "https://linkedin.com/in/alicemwizerwa",
  },
  {
    name: "James Kagabo",
    role: "Lead Developer",
    photo: "/images/james.jpg",
    linkedin: "https://linkedin.com/in/jameskagabo",
  },
  {
    name: "Marie Uwimana",
    role: "UX Designer",
    photo: "/images/marie.jpg",
    linkedin: "https://linkedin.com/in/mariewuimana",
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-gray-50 text-gray-900 px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">My Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map(({ name, role, photo, linkedin }) => (
            <motion.div
              key={name}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={photo}
                alt={name}
                className="mx-auto w-32 h-32 rounded-full object-cover mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-indigo-600 mb-4">{role}</p>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                LinkedIn Profile
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
