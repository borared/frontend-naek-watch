import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const GenreSelector = () => {
  // 1. Initialize as null so nothing is highlighted on landing
  const [activeGenre, setActiveGenre] = useState(null);

  const genres = [
    "Action", "Animation", "Drama", "Romance", 
    "Comedy", "Crime", "Sci-Fi", "More..."
  ];

  return (
    <div className="w-full bg-black p-8 font-sans">
      {/* Header Section */}
      <div className="mb-6 flex flex-col items-start">
        <div className="flex items-center gap-2 group cursor-pointer">
          <h2 className="text-white text-2xl font-bold tracking-tight font-Kantumruy">
            ជ្រើសរើសប្រភេទរឿង
          </h2>
          <ChevronRight className="text-white w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </div>
        <span className="text-gray-500 text-[18px] mt-1 font-Kantumruy">តាមតម្រូវការ</span>
      </div>

      {/* Buttons Container */}
      <div className="flex flex-wrap gap-3">
        {genres.map((genre) => {
          // 2. This will be false for all buttons on initial page load
          const isActive = activeGenre === genre;
          
          return (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`
                px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:cursor-pointer
                ${isActive 
                  ? 'bg-white text-black scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                  : 'bg-[#FF0000] text-white hover:bg-red-700'
                }
                active:scale-95
              `}
            >
              {genre}
            </button>
          );
        })}
      </div>
      
      {/* 3. Conditional message: Only shows if a user has made a choice */}
      {activeGenre && (
        <p className="mt-6 text-gray-400 text-[18px] animate-fadeIn">
          Filtering by: <span className="text-white font-bold">{activeGenre}</span>
        </p>
      )}
    </div>
  );
};

export default GenreSelector;