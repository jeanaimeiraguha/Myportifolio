import { FaCode, FaMobileAlt, FaCloud, FaLock } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Creating responsive, modern, and scalable web applications.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    description: "Building performant cross-platform mobile apps with Flutter & React Native.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Integration",
    description: "Deploying and managing apps on cloud platforms with DevOps best practices.",
  },
  {
    icon: <FaLock />,
    title: "Security & Audits",
    description: "Performing security audits and implementing best practices for software safety.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-indigo-900 text-white px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-4xl mx-auto">
          {services.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-indigo-700 rounded-xl p-6 text-center shadow-lg cursor-pointer hover:bg-indigo-600 transition"
            >
              <div className="text-5xl mb-5 mx-auto">{icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-indigo-200">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
