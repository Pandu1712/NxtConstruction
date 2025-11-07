import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-800 text-gray-300 pt-12 pb-6 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* 1️⃣ Company Info */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="./public/Nxtlogo.jpg"
              alt="Nxt Construction Logo"
              className="h-12 w-12 rounded-full object-contain"
            />
            <h2 className="text-2xl font-bold text-white">
              Nxt<span className="text-yellow-400">-Construction</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Building the future with innovation, quality, and trust.
            From residential homes to commercial projects — we shape spaces that inspire.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="#gallery" className="hover:text-yellow-400 transition">Gallery</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* 3️⃣ Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">
            Get In Touch
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={24} className="text-yellow-400" />
              <span>Adilabad|Hyderabad|Nizamabad</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" />
              <span>+91 94400 13224</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" />
              <span>anirudhkathuri@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* 4️⃣ Social & Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6">
        <div className="flex space-x-5">
          <a href="#" className="hover:text-yellow-400 transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <Linkedin size={20} />
          </a>
        </div>

        {/* <p className="text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">Nxt-Construction</span>.  
          All rights reserved.
        </p> */}
      </div>
    </footer>
  );
}
