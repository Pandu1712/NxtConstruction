import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  "https://www.shutterstock.com/image-photo/modern-singlestory-house-minimalist-garden-260nw-2563059783.jpg",
  "https://www.shutterstock.com/image-photo/modern-house-exterior-illuminated-facade-260nw-2560026799.jpg",
  "https://ssl.cdn-redfin.com/photo/40/islphoto/679/genIslnoResize.25546679_2.jpg",
];

export default function Hero() {
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
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Carousel */}
      <Slider {...settings} className="h-full">
        {images.map((src, index) => (
          <div key={index} className="h-[90vh]">
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
        <button className="mt-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
          Explore Our Projects
        </button>
      </div>
    </div>
  );
}
