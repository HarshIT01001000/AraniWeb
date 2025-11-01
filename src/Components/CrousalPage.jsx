import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    name: "Wooden Cabinet",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.uTI5N9FG2156DsNy5J3AwQAAAA?pid=Api&P=0&h=180",
    oldPrice: "$50.00",
    price: "$23.00",
  },
  {
    id: 2,
    name: "Modern Chair",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.gN4-ayDYrJwhu70RkRf6GQHaE0?pid=Api&P=0&h=180",
    oldPrice: "$60.00",
    price: "$30.00",
  },
  {
    id: 3,
    name: "Stylish Lamp",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.CFQwPzKNxjRqSVeKgJzfFAHaHa?pid=Api&P=0&h=180",
    oldPrice: "$40.00",
    price: "$20.00",
  },
];

const CrousalPage = () => {
  return (
    <section className="w-full h-[600px] flex flex-col md:flex-row mt-15 ">
      {/* LEFT SIDE - Hero Section with Background Image */}
      <div
        className="w-full md:w-[70%] flex flex-col justify-center items-start px-10 py-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://tse2.mm.bing.net/th/id/OIP.TTkFDsn4_-qVqCi90qNHbwHaEP?pid=Api&P=0&h=180')",
        }}
      >
        {/* Optional dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10">
          <h4 className="text-sm font-semibold text-white mb-2">
            SAVE UP TO 50% OFF
          </h4>
          <h1 className="text-5xl font-bold text-white mb-6">
            Lounge <span className="text-gray-200">Collection</span>
          </h1>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition">
            Explore Category
          </button>
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
              <div className="flex flex-col justify-center items-center text-center h-full p-10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-64 h-64 object-contain mb-6"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 line-through">{item.oldPrice}</p>
                <p className="text-xl font-bold text-gray-800">{item.price}</p>
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
