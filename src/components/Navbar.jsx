import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase, FaFileAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Projects", path: "/projects", icon: <FaBriefcase /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-indigo-400 font-bold text-2xl tracking-wide">
          Iraguha
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-semibold">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative px-2 py-1 hover:text-indigo-400 transition ${
                    isActive ? "text-indigo-400" : "text-gray-300"
                  }`
                }
              >
                {name}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full bg-indigo-400 transition-all ${
                    window.location.pathname === path ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden focus:outline-none text-2xl"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col md:hidden bg-gray-800 font-semibold">
          {navItems.map(({ name, path }) => (
            <li key={name} className="border-b border-gray-700">
              <NavLink
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-4 hover:text-indigo-400 transition ${
                    isActive ? "text-indigo-400" : "text-gray-300"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
