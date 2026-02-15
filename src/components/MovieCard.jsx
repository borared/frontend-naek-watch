import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="flex flex-col gap-3 cursor-pointer">
      {/* Poster Container */}
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-neutral-900 border border-white/5 transition-all duration-300 hover:border-white/20 shadow-lg">
        
        {/* 1. Image now receives the hover directly */}
        <img 
          src={movie.image} 
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 hover:brightness-110"
          loading="lazy" 
        />

        {/* 2. Added pointer-events-none so the mouse "clicks through" to the image */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Movie Info */}
      <div className="flex flex-col">
        <p className="text-gray-400 text-[15px] font-medium truncate">
          <span className="text-white hover:text-red-500 transition-colors">
            {movie.title}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;