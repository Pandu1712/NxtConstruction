import { CheckCircle, Home, Clock, Shield, Ruler, Globe, Phone } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-50 via-white to-yellow-50 min-h-screen py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="text-center mb-12 ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Build Your Dream Home with{" "}
          <span className="text-yellow-500">NXT Constructions</span> 🏗️
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          🏡 Offering <strong>Home Construction</strong> and <strong>Interior Services</strong> 
          at prime locations in Telangana. From Residential to Commercial Construction, 
          Interior Remodeling, and Turnkey Solutions — we make your dream space a reality.  
          Avail our packages and receive <span className="text-yellow-600 font-semibold">₹2 Lacs worth of interiors free!</span> 🌟
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          { icon: Shield, text: "Best Quality Homes" },
          { icon: Ruler, text: "Guaranteed Best Prices" },
          { icon: Clock, text: "On-Time Delivery" },
          { icon: CheckCircle, text: "450+ Quality Checks" },
          { icon: Globe, text: "100% Transparency" },
          { icon: Home, text: "Digital Tracking" },
        ].map(({ icon: Icon, text }, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition-transform hover:-translate-y-1"
          >
            <div className="bg-gradient-to-tr from-yellow-400 to-orange-500 p-3 rounded-full">
              <Icon size={24} className="text-white" />
            </div>
            <p className="font-semibold text-gray-800 text-lg">{text}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-3xl shadow-xl p-8 text-center mb-16">
        <h2 className="text-3xl font-bold mb-3">One-Stop Construction Solution</h2>
        <p className="text-lg">
          From planning to completion — experience transparency, quality, and reliability with NXT Constructions.
        </p>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">✨ Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Basic", price: "₹1550 / Sq.ft" },
            { name: "Standard", price: "₹1650 / Sq.ft" },
            { name: "Premium", price: "₹1750 / Sq.ft" },
            { name: "Royal Grand", price: "₹2050 / Sq.ft" },
          ].map((pkg, index) => (
            <div
              key={index}
              className="bg-white border border-yellow-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">{pkg.name}</h3>
              <p className="text-gray-700 font-bold text-lg">{pkg.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-700 text-lg mb-3">
          🌎{" "}
          <a
            href="https://www.nxtconstructions.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:underline font-semibold"
          >
            www.nxtconstructions.co.in
          </a>
        </p>
        <p className="text-gray-700 text-lg flex justify-center items-center gap-2">
          <Phone className="text-yellow-500" size={20} />{" "}
          <a href="tel:9440013224" className="hover:underline font-semibold">
            +91 94400 13224
          </a>
        </p>
      </div>
    </section>
  );
}
