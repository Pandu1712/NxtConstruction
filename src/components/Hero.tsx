import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // for navigation

const slides = [
  {
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507760/ram_sai_sir_final_designs_page-0008_jkvryq.jpg",
  },
  {
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507717/Rajesh_sir_3d_Designs_2__page-0010_invgqp.jpg",
  },
  {
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507796/Praneeth_pranav_flora-413_venkat_Reddy_sir_Final_3D_page-0008_uvwjrg.jpg",
  },
  {
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507715/Rajesh_sir_3d_Designs_2__page-0007_d4keqe.jpg",
  },
  {
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507693/Rajesh_sir_3d_Designs_2__page-0004_ba7xiy.jpg",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-8xl mx-auto overflow-hidden shadow-2xl mt-6">
      {/* Slides */}
      <div
        className="flex transition-transform duration-[900ms] ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative w-full h-[320px] sm:h-[460px] md:h-[550px] flex-shrink-0"
          >
            <img
              src={slide.img}
              className="w-full h-full object-cover scale-105 transition-transform duration-[1200ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Overlay Feature */}
      <div className="absolute inset-0 bg-black/30 px-6 flex flex-col items-center" style={{ top: 0 }}>
        <div className="mt-[10vh] md:mt-[15vh] lg:mt-[20vh] text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-xl mb-3 md:mb-4">
            Welcome to <span className="text-yellow-400">Nxt-Construction</span>
          </h1>
          <p className="text-gray-200 max-w-2xl sm:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6">
            Building the future with innovation, smart design, and structural excellence.
          </p>
          <button
            onClick={() => navigate("/gallery")}
            className="mt-3 sm:mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Build Your Dream Home
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 bg-orange-500/70 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 bg-orange-500/70 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === i ? "bg-orange-500 scale-125 shadow-md" : "bg-white/60 hover:bg-orange-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
