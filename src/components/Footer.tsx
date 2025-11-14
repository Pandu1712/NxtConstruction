import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-950 to-black text-gray-300 mt-20 pt-16 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* 1️⃣ Brand Section */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="/Nxtlogo.jpg"
              alt="Nxt Construction Logo"
              className="h-14 w-14 rounded-full object-cover shadow-lg"
            />
            <h2 className="text-3xl font-extrabold tracking-wide text-white">
              Nxt<span className="text-yellow-400">-Construction</span>
            </h2>
          </div>

          <p className="text-gray-400 leading-relaxed text-sm pr-4">
            Delivering high-quality construction with precision, integrity,
            and engineering excellence. We turn visions into landmark projects.
          </p>
        </div>

        {/* 2️⃣ Company Links */}
        <div>
          <h3 className="text-xl font-semibold text-white border-l-4 border-yellow-400 pl-3 mb-5">
            Company
          </h3>

          <ul className="space-y-3 text-sm">
            <li><a className="hover:text-yellow-400 transition" href="/">Home</a></li>
            <li><a className="hover:text-yellow-400 transition" href="/about">About Us</a></li>
            <li><a className="hover:text-yellow-400 transition" href="/services">Services</a></li>
            <li><a className="hover:text-yellow-400 transition" href="/gallery">Projects</a></li>
            <li><a className="hover:text-yellow-400 transition" href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* 3️⃣ Services */}
        <div>
          <h3 className="text-xl font-semibold text-white border-l-4 border-yellow-400 pl-3 mb-5">
            Our Services
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-yellow-400 transition">Residential Construction</li>
            <li className="hover:text-yellow-400 transition">Commercial Projects</li>
            <li className="hover:text-yellow-400 transition">Architecture & Structure</li>
            <li className="hover:text-yellow-400 transition">Interior Designing</li>
            <li className="hover:text-yellow-400 transition">Project Management</li>
          </ul>
        </div>

        {/* 4️⃣ Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white border-l-4 border-yellow-400 pl-3 mb-5">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-yellow-400" size={20} />
              <span>Adilabad | Hyderabad | Nizamabad</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="text-yellow-400" size={18} />
              <span>+91 94400 13224</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="text-yellow-400" size={18} />
              <span>anirudhkathuri@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 mb-8"></div>

      {/* Social + StaffArc */}
      <div className="flex flex-col gap-6 md:flex-row justify-between items-center px-6">
        
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a className="hover:text-yellow-400 transition" href="#">
            <Facebook size={22} />
          </a>
          <a className="hover:text-yellow-400 transition" href="#">
            <Instagram size={22} />
          </a>
          <a className="hover:text-yellow-400 transition" href="#">
            <Linkedin size={22} />
          </a>
        </div>

        {/* StaffArc Credit */}
        <div className="text-sm text-gray-400 flex justify-center items-center gap-1">
          Made with
          <Heart className="h-4 w-4 text-red-500 mx-1" />
          by
          <a
            href="https://staffarc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-orange-500 font-medium hover:underline"
          >
            <img
              src="https://www.staffarc.in/images/Staffarc-logo.png"
              alt="StaffArc logo"
              className="h-5 w-5 object-contain"
            />
            StaffArc
          </a>
        </div>
      </div>
    </footer>
  );
}
