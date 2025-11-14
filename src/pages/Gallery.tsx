import  { useState } from "react";
import { projects } from "../data/data";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = [
    "All",
    "Residential Construction",
    "Commercial Construction",
    "Architecture Service",
    "Interior & Smart Home",
    "Project Management",
  ];

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleViewMore = (id: string) => {
    navigate(`/project/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="-mt-10 bg-gray-50 min-h-screen py-16 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 tracking-tight">
          Our <span className="text-yellow-500">Projects</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Explore our successfully completed and ongoing construction projects — 
          built with precision, innovation, and trust.
        </p>
      </div>

      {/* Category Filter Bar */}
      <div className="mb-10">
        <div className="flex overflow-x-auto no-scrollbar justify-start sm:justify-center gap-3 md:gap-5 px-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-shrink-0 px-4 md:px-6 py-2 md:py-2.5 rounded-full border font-semibold text-sm md:text-base transition-all duration-300 
                ${
                  selectedCategory === cat
                    ? "bg-yellow-500 text-white border-yellow-500 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:border-yellow-400 hover:text-yellow-500"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="relative group">
              <img
                src={p.images[0]}
                alt={p.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-3 left-3 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {p.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800">{p.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{p.location}</p>

              <div className="flex justify-between items-center mt-4 text-sm text-gray-700 border-t border-gray-200 pt-3">
                <span>{p.area}</span>
                <span>{p.type}</span>
              </div>

              <button
                onClick={() => handleViewMore(p.id)}
                className="mt-5 w-full bg-yellow-500 text-white py-2.5 rounded-lg hover:bg-yellow-600 transition-all duration-300 font-medium tracking-wide"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Load More Button */}
      <div className="text-center mt-12">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full shadow-md font-semibold transition-all duration-300">
          View More Projects
        </button>
      </div>
    </section>
  );
}
