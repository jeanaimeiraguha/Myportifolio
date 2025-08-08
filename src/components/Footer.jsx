import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
        {/* Left: Copyright */}
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Iraguha Jean Aime. All rights reserved.
        </p>

        {/* Right: Social links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/jeanaimeiraguha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/iraguha-jean-aime-77a13b318/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourtwitterhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white transition"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:youremail@example.com"
            aria-label="Email"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
