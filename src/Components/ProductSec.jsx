import React from 'react';
import { ChevronRight } from 'lucide-react';

// Sample data structure to populate the cards
const productData = [
  {
    id: 1,
    category: 'DECOR',
    title: 'Elegant living room; modern media wall.',
    imageUrl: '/DesignSec/P1.webp',
  },
  {
    id: 2,
    category: 'DESIGN',
    title: "Wooden outdoor seating; evening garden spot.",
    imageUrl: '/DesignSec/P2.webp',
  },
  {
    id: 3,
    category: 'DECOR',
    title: 'Stylish office cabin; arched wall panels.',
    imageUrl: '/DesignSec/P3.webp',
  },
  {
    id: 4,
    category: 'DECOR',
    title: 'White-framed glass sliding door; modern entry.',
    imageUrl: '/DesignSec/P4.webp',
  },
  {
    id: 5,
    category: 'DECOR',
    title: 'Team working hard in open office.',
    imageUrl: '/DesignSec/P5.webp',
  },
  {
    id: 6,
    category: 'DESIGN',
    title: 'Brick exterior; modern office entrance design',
    imageUrl: '/DesignSec/P6.webp',
  },
  {
    id: 7,
    category: 'DECOR',
    title: 'Marble-texture wall; shelf with accent lights.',
    imageUrl: '/DesignSec/P7.webp',
  },
  {
    id: 8,
    category: 'DECOR',
    title: 'Clean, modern kitchen; under-cabinet lighting.',
    imageUrl: '/DesignSec/P8.webp',
  },
];

const ProductCard = ({ data }) => {
  return (
    <div className="group cursor-pointer">
      
      {/* Image Container */}
      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          src={data.imageUrl}
          alt={data.title}
          // The aspect-square and object-cover ensure the image fills the space correctly
          className="w-full h-full aspect-square object-cover transition duration-300 group-hover:scale-[1.02]"
          // Fallback image in case the placeholder URL doesn't load
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/CCCCCC/666666?text=Image"; }}
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
    </div>
  );
};

export default function ProductSec() {
  return (
    <div className="w-full bg-white font-sans">
      <div className="w-full bg-[#e5edf3] py-30 min-h-[30vh]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
              Interiors
            </h1>{" "}
            {/* Changed title to match image */}
            {/* Breadcrumb Navigation */}
            <div className="flex justify-center items-center gap-2 text-sm font-semibold text-gray-500">
              <p className="hover:text-gray-700 cursor-pointer transition-colors">
                Home
              </p>
              <p className="text-gray-300 pointer-events-none">|</p>
              <p className="text-gray-900">Interio</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Optional Section Header (Added for context, can be removed if only the grid is needed) */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Latest in Decor & Design
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
            Explore our curated selection of articles, inspiration, and trends from the world of modern interior design.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {productData.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>



      </div>
    </div>
  );
}
