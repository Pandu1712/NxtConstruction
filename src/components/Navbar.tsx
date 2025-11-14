import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/service" },
    { name: "Projects", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800 text-white shadow-lg fixed w-full z-50 transition-all duration-500">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/Nxtlogo.jpg"
            alt="Nxt Logo"
            className="h-12 w-12 object-contain rounded-full shadow-md"
          />
          <h1 className="text-2xl font-bold tracking-wide">
            Nxt<span className="text-yellow-400">-Construction</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className={`font-medium transition duration-300 ${
                  location.pathname === link.to
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-yellow-400 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-900 to-blue-900 text-white border-t border-gray-700 shadow-xl">
          <ul className="flex flex-col space-y-4 p-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className={`font-medium transition duration-200 ${
                    location.pathname === link.to
                      ? "text-yellow-400"
                      : "hover:text-yellow-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
