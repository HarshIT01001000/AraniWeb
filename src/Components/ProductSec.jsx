import React from 'react';
import { ChevronRight } from 'lucide-react';

// Sample data structure to populate the cards
const productData = [
  {
    id: 1,
    category: 'DECOR',
    date: '12 APRIL 2024',
    title: 'The best influencers to follow for sartorial inspiration',
    imageUrl: 'https://placehold.co/400x400/F4F4F4/333333?text=Plant+in+Pot',
  },
  {
    id: 2,
    category: 'DESIGN',
    date: '12 APRIL 2024',
    title: "Everything you need to know about decor's big night out",
    imageUrl: 'https://placehold.co/400x400/F4F4F4/333333?text=Styled+Shelf',
  },
  {
    id: 3,
    category: 'DECOR',
    date: '12 APRIL 2023',
    title: 'All the best looks & moments from the met gala 2023',
    imageUrl: 'https://placehold.co/400x400/F4F4F4/333333?text=Wood+Chair',
  },
  {
    id: 4,
    category: 'DECOR',
    date: '12 APRIL 2024',
    title: 'Find a colour palette that reflects your passion',
    imageUrl: 'https://placehold.co/400x400/F4F4F4/333333?text=White+Vase',
  },
  {
    id: 5,
    category: 'DECOR',
    date: '12 APRIL 2024',
    title: 'The 7 biggest trends of the oscars red carpet',
    imageUrl: 'https://placehold.co/400x400/F4F4F4/333333?text=Glasses+on+Table',
  },
  {
    id: 6,
    category: 'DESIGN',
    date: '12 APRIL 2024',
    title: 'Our new beach house tour with before photos!',
    imageUrl: 'https://placehold.co/400x400/F4F4F4/333333?text=Minimal+Interior',
  },
  {
    id: 7,
    category: 'DECOR',
    date: '12 APRIL 2024',
    title: 'Standing desk for working from home in a small space',
    imageUrl: 'https://placehold.co/400x400/F4F4F4/333333?text=Green+Cabinet',
  },
  {
    id: 8,
    category: 'DECOR',
    date: '12 APRIL 2024',
    title: 'Simple strawberry crisp recipe with easter pie crust cutouts',
    imageUrl: 'https://placehold.co/400x400/F4F4F4/333333?text=Sandals+on+Rug',
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
              Designs
            </h1>{" "}
            {/* Changed title to match image */}
            {/* Breadcrumb Navigation */}
            <div className="flex justify-center items-center gap-2 text-sm font-semibold text-gray-500">
              <p className="hover:text-gray-700 cursor-pointer transition-colors">
                Home
              </p>
              <p className="text-gray-300 pointer-events-none">|</p>
              <p className="text-gray-900">Designs</p>
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
