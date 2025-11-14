import { CheckCircle, Home, Clock, Shield, Ruler, Globe, Phone } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-50 via-white to-yellow-50 min-h-screen py-16 px-6 md:px-12 lg:px-24"
    >
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Build Your Dream Home with{" "}
          <span className="text-yellow-500">NXT Constructions</span> 🏗️
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          🏡 Offering <strong>Home Construction</strong> and <strong>Interior Services</strong> 
          at prime locations in Telangana. From Residential to Commercial Construction, 
          Interior Remodeling, and Turnkey Solutions — we make your dream space a reality.  
          Avail our packages and receive{" "}
          <span className="text-yellow-600 font-semibold">₹2 Lacs worth of interiors free!</span> 🌟
        </p>
      </div>

      {/* Key Features */}
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

      {/* One Stop Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-3xl shadow-xl p-8 text-center mb-16">
        <h2 className="text-3xl font-bold mb-3">One-Stop Construction Solution</h2>
        <p className="text-lg">
          From planning to completion — experience transparency, quality, and reliability with NXT Constructions.
        </p>
      </div>

      {/* Packages Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">🏠 Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Standard Package */}
          <div className="bg-white border border-yellow-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-yellow-600 mb-2">✨ Standard Package</h3>
            <p className="text-gray-800 font-semibold mb-4">Rate: ₹1599 / sq.ft</p>
            <ul className="text-gray-700 text-left space-y-2">
              <li>• Basic quality materials (Local brands)</li>
              <li>• Floor tiles up to ₹50/sq.ft</li>
              <li>• Basic bathroom fittings</li>
              <li>• Asian Paints & Putty</li>
              <li>• Goldmedal switches & wiring</li>
              <li>• Standard kitchen platform & sink</li>
              <li>• MS window grills</li>
            </ul>
          </div>

          {/* Premium Package */}
          <div className="bg-white border-2 border-yellow-400 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-orange-500 mb-2">💰 Premium Package</h3>
            <p className="text-gray-800 font-semibold mb-4">Rate: ₹1799 / sq.ft</p>
            <ul className="text-gray-700 text-left space-y-2">
              <li>• JSW Steel, KCP Cement, Red Bricks</li>
              <li>• Vitrified Tiles (800x800) up to ₹90/sq.ft</li>
              <li>• Astral Bathroom Fittings</li>
              <li>• Finolex Electricals, Modular switches</li>
              <li>• Premium Paints (Asian Paints) & Wall Putty</li>
              <li>• Teak Finish Main Door, UPVC 3-track windows</li>
              <li>• Anti-skid tiles in wet areas</li>
              <li>• RCC tanks, Elevation with SS Railing</li>
              <li>• Digital Progress Updates</li>
            </ul>
          </div>

          {/* Luxury Package */}
          <div className="bg-white border border-yellow-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-yellow-700 mb-2">🌟 Luxury Package</h3>
            <p className="text-gray-800 font-semibold mb-4">Rate: ₹1999 / sq.ft</p>
            <ul className="text-gray-700 text-left space-y-2">
              <li>• Birla/Ambuja Cement, TATA Steel</li>
              <li>• Large Format Tiles (1000x1000mm)</li>
              <li>• Jaguar/Hindware Premium Fittings</li>
              <li>• Schneider/Legrand Electricals</li>
              <li>• Designer POP & False Ceiling</li>
              <li>• Veneer Main Door, Modular Kitchen</li>
              <li>• Premium Elevation (glass, cladding)</li>
              <li>• Landscaping, Parking Finishing, Lighting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why NXT Construction Section */}
      <div className="text-center bg-white border border-yellow-200 rounded-3xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose <span className="text-yellow-600">NXT Constructions?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {[
            "✔️ Transparent Pricing",
            "✔️ Escrow Payment Systems",
            "✔️ 15-Year Structural Warranty",
            "✔️ 400+ Quality Checks",
            "✔️ Dedicated Project Manager",
          ].map((point, i) => (
            <p key={i} className="text-gray-700 text-lg">{point}</p>
          ))}
        </div>
        <p className="mt-8 text-lg font-semibold text-gray-800">
          Get in touch today and build your dream home with confidence! 🏡
        </p>
      </div>

    {/* Project Service Locations */}
<div className="mt-16 text-center">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">
    My Project Services In
  </h2>

  <div className="flex flex-wrap justify-center gap-4">
    <span className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition">
      Hyderabad
    </span>

    <span className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition">
      Nizamabad
    </span>

    <span className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition">
      Adilabad
    </span>
  </div>
</div>


      {/* Contact Info */}
      
    </section>
  );
}
