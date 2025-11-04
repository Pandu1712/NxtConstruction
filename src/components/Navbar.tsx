import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Building2, ClipboardList, Ruler, Home, Cpu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation(); // ✅ To detect active route

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    {
      name: "Location",
      dropdown: true,
      items: [
        { name: "Hyderabad", icon: <Home className="text-blue-400" size={18} /> },
        { name: "Adilabad", icon: <Home className="text-green-400" size={18} /> },
        { name: "Nizamabad", icon: <Ruler className="text-amber-400" size={18} /> },
      ],
    },
    {
      name: "Services",
      dropdown: true,
      items: [
        { name: "Residential Construction", icon: <Home className="text-yellow-400" size={18} /> },
        { name: "Commercial", icon: <Building2 className="text-amber-400" size={18} /> },
        { name: "Project Management", icon: <ClipboardList className="text-orange-400" size={18} /> },
        { name: "Architecture & Structure", icon: <Ruler className="text-blue-400" size={18} /> },
        { name: "Interior & Smart Room", icon: <Cpu className="text-green-400" size={18} /> },
      ],
    },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

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
            alt="Nxt Construction Logo"
            className="h-12 w-12 object-contain rounded-full shadow-md"
          />
          <h1 className="text-2xl font-bold tracking-wide text-white">
            Nxt<span className="text-yellow-400">-Construction</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.name}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="font-medium hover:text-yellow-400 transition duration-300">
                  {link.name}
                </span>
                {activeDropdown === link.name && (
                  <ul className="absolute left-0 mt-3 w-64 bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-100 py-3 z-50">
                    {link.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gradient-to-r from-yellow-50 to-blue-50 hover:text-blue-700 transition duration-200"
                      >
                        {item.icon}
                        <span className="text-sm font-medium">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.name}>
                {link.to ? (
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
                ) : (
                  <span className="font-medium">{link.name}</span>
                )}
              </li>
            )
          )}
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

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-900 to-blue-900 text-white border-t border-gray-700 shadow-xl">
          <ul className="flex flex-col space-y-4 p-5">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.name}>
                  <div
                    className="flex justify-between items-center font-medium cursor-pointer hover:text-yellow-400"
                    onClick={() => toggleDropdown(link.name)}
                  >
                    {link.name}
                    <span>{activeDropdown === link.name ? "−" : "+"}</span>
                  </div>
                  {activeDropdown === link.name && (
                    <ul className="mt-2 space-y-2 pl-4">
                      {link.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center gap-2 text-gray-300 hover:text-yellow-400"
                        >
                          {item.icon}
                          <span className="text-sm">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.name}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className={`font-medium transition duration-200 ${
                        location.pathname === link.to
                          ? "text-yellow-400"
                          : "hover:text-yellow-400"
                      }`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <span className="font-medium">{link.name}</span>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
