import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507796/Praneeth_pranav_flora-413_venkat_Reddy_sir_Final_3D_page-0006_yjknka.jpg",
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507776/ram_sai_sir_final_designs_page-0021_s1ozjt.jpg",
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507735/Rajesh_sir_3d_Designs_2__page-0010_ktwik9.jpg",
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762507695/Rajesh_sir_3d_Designs_2__page-0007_kprcgf.jpg",
];

export default function Hero() {
  const navigate = useNavigate(); // 👈 Hook for navigation

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slider */}
      <Slider {...settings} className="h-full">
        {images.map((src, index) => (
          <div key={index} className="h-screen w-full">
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
          Welcome to{" "}
          <span className="text-yellow-400">Nxt-Construction</span>
        </h1>
        <p className="text-gray-200 max-w-2xl text-lg md:text-xl">
          Building the future with innovation, smart design, and structural excellence.
        </p>

        {/* 👇 Button that navigates to gallery */}
        <button
          onClick={() => navigate("/gallery")}
          className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Explore Our Projects
        </button>
      </div>
    </div>
  );
}
