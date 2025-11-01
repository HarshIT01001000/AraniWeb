import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function OnDemand() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Bottom Image Grid (omitted for brevity, no changes needed here) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Large left image */}
        <div className="relative bg-[#F4F8F7] rounded-xl overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
            alt="Wooden classic table"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8">
            <h3 className="text-3xl font-semibold text-gray-900">
              Wooden <br /> <span className="font-bold">classic table</span>
            </h3>
            <Link to="/products">
              <button className="btn mt-3 bg-[#0B2D4B] text-white hover:bg-[#103C64]">
                Explore category
              </button>
            </Link>
          </div>
        </div>

        {/* Right side two smaller images */}
        <div className="grid grid-rows-2 gap-6">
          <div className="relative bg-[#FDF7F3] rounded-xl overflow-hidden group">
            <img
              src="https://media.designcafe.com/wp-content/uploads/2021/08/30175410/art-deco-interior-design-in-a-21st-century-dining-room.jpg"
              alt="Pottery products"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                Pottery <br /> <span className="font-bold">products</span>
              </h3>
              <Link to="/products">
                <button className="btn mt-3 bg-[#0B2D4B] text-white hover:bg-[#103C64]">
                  Explore category
                </button>
              </Link>
            </div>
          </div>

          <div className="relative bg-[#F2F4FA] rounded-xl overflow-hidden group">
            <img
              src="https://media.istockphoto.com/id/1938106570/photo/digitally-generated-domestic-bedroom-interior.jpg?s=612x612&w=0&k=20&c=bC_YWy11iWh0ZtHJIT5ia4v9QELdl94SVqDge9XNZcc="
              alt="Florence compact furniture"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                Florence <br /> <span className="font-bold">compact</span>
              </h3>
              <Link to="/products">
                <button className="btn mt-3 bg-[#0B2D4B] text-white hover:bg-[#103C64]">
                  Explore category
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
