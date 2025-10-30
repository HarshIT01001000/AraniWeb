import React from 'react';
import { motion } from 'framer-motion';
import { FaRegCalendarAlt } from 'react-icons/fa'; // Used for the date icon

// --- Data ---
const brandNames = ['Medium', 'pepperfry', 'ARTICLE.', 'Instagram', 'Medium', 'pepperfry', 'ARTICLE.', 'Instagram'];
// The array is duplicated to ensure a seamless, gapless loop in the marquee.

const articles = [
  {
    category: 'DECOR',
    date: '22 OCTOBER 2024',
    title: 'The best influencers to follow for sartorial inspiration',
    image: 'https://images.unsplash.com/photo-1616594039964-ae8b6be0baba?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'DESIGN',
    date: '22 OCTOBER 2024',
    title: "Everything you need to know about decor's big night out",
    image: 'https://images.unsplash.com/photo-1616486338812-3c51c7f1d6c5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'DECOR',
    date: '22 OCTOBER 2024',
    title: 'All the best looks & moments from the met gala 2023',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cf8d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'DECOR',
    date: '22 OCTOBER 2024',
    title: 'Find a colour palettes that reflects your passion',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a87b3f7e7?auto=format&fit=crop&w=1200&q=80',
  },
];


// --- Animation Variants for Grid/Cards ---
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// --- Marquee Component (Framer Motion) ---
const MarqueeBrands = ({ brands }) => {
  const marqueeSpeed = 60; // Adjust for slower/faster scroll
  // Estimate a consistent width for each element in the marquee
  const elementWidth = 250; 
  const totalWidthToScroll = elementWidth * (brands.length / 2);

  return (
    <div className="overflow-hidden whitespace-nowrap py-4 border-y border-gray-100 mb-16">
      <motion.div
        className="inline-flex" 
        animate={{
          x: ['0%', `-${totalWidthToScroll}px`], // Scroll half the total width of the content
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: marqueeSpeed,
            ease: 'linear',
          },
        }}
      >
        {brands.map((name, index) => (
          <span
            key={index}
            className="inline-block text-4xl font-serif font-light text-gray-800 opacity-80 cursor-default px-8"
            style={{ minWidth: `${elementWidth}px`, textAlign: 'center' }} 
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// --- Main Component ---
const DecorArticle = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Marquee Brand Names Section */}
        <MarqueeBrands brands={brandNames} />

        {/* Decor Article Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-2">DESIGNERS IDEAS</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">The decor article</h2>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="card bg-base-100 shadow-xl rounded-lg overflow-hidden"
              variants={cardItemVariants}
            >
              <figure className="h-48 w-full">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </figure>
              <div className="card-body p-0 pt-4">
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <span className="font-bold text-gray-800 uppercase text-xs tracking-wider mr-3">{article.category}</span>
                  <FaRegCalendarAlt className="mr-1 text-gray-400" />
                  <span className='text-gray-500'>{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mt-2 leading-snug hover:text-gray-600 transition-colors cursor-pointer">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DecorArticle;