
import { motion } from "framer-motion";
import { FiHome, FiBriefcase, FiClipboard, FiLayers, FiSmartphone } from "react-icons/fi";

// Services Data
const services = [
  { title: "Residential Construction", description: "Building dream homes with precision, quality, and modern designs.", icon: <FiHome size={28} />, color: "from-green-400 to-green-600" },
  { title: "Commercial", description: "Innovative commercial projects tailored to your business needs.", icon: <FiBriefcase size={28} />, color: "from-blue-400 to-blue-600" },
  { title: "Project Management", description: "Efficient planning and execution of construction projects.", icon: <FiClipboard size={28} />, color: "from-purple-400 to-purple-600" },
  { title: "Architecture & Structure", description: "Designing strong and aesthetic structures with advanced architecture.", icon: <FiLayers size={28} />, color: "from-red-400 to-red-600" },
  { title: "Interior & Smart Room", description: "Creating smart, functional, and stylish interiors for modern living.", icon: <FiSmartphone size={28} />, color: "from-yellow-400 to-yellow-600" },
];

export default function HomePage() {

  return (
    <div className="w-full">

      {/* Services Section */}
      <div className="-mt-10 min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12">
           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 tracking-tight">
          Our <span className="text-yellow-500">Services</span>
        </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            We offer a wide range of construction and architectural services to bring your projects to life with quality, precision, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`bg-gradient-to-r ${service.color} text-white p-8 rounded-3xl shadow-lg flex flex-col items-start gap-4 hover:shadow-2xl cursor-pointer`}
            >
              <div className="p-4 bg-white/20 rounded-xl">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold">{service.title}</h3>
              <p className="text-white/90 text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
