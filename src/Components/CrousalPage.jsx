import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    image: "/DesignSec/P1.webp",
  },
  {
    id: 2,
    image: "/DesignSec/P2.webp",
  },
  {
    id: 3,
    image: "/DesignSec/P3.webp",
  },
];

const CrousalPage = () => {
  return (
    <section className="w-full h-[600px] flex flex-col md:flex-row mt-15 ">
      {/* LEFT SIDE - Hero Section with Background Image */}
      <div
        className="w-full md:w-[70%] flex flex-col justify-center items-start px-10 py-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/10Imgs/4.JPG')",
        }}
      >
        {/* Optional dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10">
          <h4 className="text-sm font-semibold text-white mb-2">
            TRANSFORMING SPACES THAT INSPIRE
          </h4>
          <h1 className="text-5xl font-bold text-white mb-6">
            Design <span className="text-gray-200">& Build Solutions</span>
          </h1>

          <Link to="/products">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition">
              Explore Category
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE - Product Carousel */}
      <div className="w-full md:w-[40%] bg-blue-50 flex justify-center items-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          <div className="w-72 h-72 rounded-full bg-blue-500">
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col justify-center  items-center text-center h-full p-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-92 h-92 rounded object-contain mb-6"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default CrousalPage;
