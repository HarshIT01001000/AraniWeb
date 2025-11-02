import { motion } from "framer-motion";

// Product data
const productData = [
  {
    id: 1,
    category: "DECOR",
    date: "12 APRIL 2024",
    title: "The best influencers to follow for sartorial inspiration",
    imageUrl: '/10Imgs/1.JPG',
  },
  {
    id: 2,
    category: "DESIGN",
    date: "12 APRIL 2024",
    title: "Everything you need to know about decor's big night out",
    imageUrl: '/10Imgs/2.JPG',
  },
  {
    id: 3,
    category: "DECOR",
    date: "12 APRIL 2023",
    title: "All the best looks & moments from the met gala 2023",
    imageUrl: '/10Imgs/3.JPG',
  },
  {
    id: 4,
    category: "DECOR",
    date: "12 APRIL 2024",
    title: "Find a colour palette that reflects your passion",
    imageUrl: '/10Imgs/10.JPG',
  },
  {
    id: 5,
    category: "DECOR",
    date: "12 APRIL 2024",
    title: "The 7 biggest trends of the oscars red carpet",
    imageUrl: '/10Imgs/5.JPG',
  },
  {
    id: 6,
    category: "DESIGN",
    date: "12 APRIL 2024",
    title: "Our new beach house tour with before photos!",
    imageUrl: '/10Imgs/6.JPG',
  },
  {
    id: 7,
    category: "DECOR",
    date: "12 APRIL 2024",
    title: "Standing desk for working from home in a small space",
    imageUrl: '/10Imgs/7.JPG',
  },
  {
    id: 8,
    category: "DECOR",
    date: "12 APRIL 2024",
    title: "Simple strawberry crisp recipe with easter pie crust cutouts",
    imageUrl: '/10Imgs/8.JPG',
  },
];

const brandNames = [
"Design your dream workspace effortlessly.",
"Modular furniture for every space.",
"End-to-end turnkey project solutions."  

];

// --- Marquee Component (Framer Motion) ---
const MarqueeBrands = ({ brands }) => {
  const marqueeSpeed = 20;
  const elementWidth = 250;
  const totalWidthToScroll = elementWidth * (brands.length / 2);

  return (
    <div className="overflow-hidden whitespace-nowrap py-4 mb-16 bg-white text-black">
      <motion.div
        className="inline-flex"
        animate={{
          x: ["0%", `-${totalWidthToScroll}px`],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: marqueeSpeed,
            ease: "linear",
          },
        }}
      >
        {brands.map((name, index) => (
          <span
            key={index}
            className="inline-block text-2xl md:text-3xl font-semibold text-gray-800 opacity-80 cursor-default px-8"
            style={{ minWidth: `${elementWidth}px`, textAlign: "center" }}
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// --- Single product card with animation ---
function ProductCard({ data, index }) {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1, // Staggered animation
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      {/* Image Container */}
      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="w-full h-full aspect-square object-cover transition duration-300 group-hover:scale-[1.02]"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/400x400/CCCCCC/666666?text=Image";
          }}
        />
      </div>

      {/* Meta Text */}
      <p className="text-xs font-semibold tracking-wider text-gray-500 mb-2">
        {data.category} • {data.date}
      </p>

      {/* Title */}
      <h3 className="text-lg font-normal text-gray-900 leading-snug group-hover:text-gray-700 transition duration-150">
        {data.title}
      </h3>
    </motion.div>
  );
}

// --- Main component with animated heading ---
export default function ProductsForHomePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
        <div className="w-full">
          <MarqueeBrands brands={brandNames} />
        </div>

        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-2">
            DESIGNERS IDEAS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Project Gallery 
          </h2>
        </motion.div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
          {productData.map((item, index) => (
            <ProductCard key={item.id} data={item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
