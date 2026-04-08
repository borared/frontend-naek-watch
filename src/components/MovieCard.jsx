import React from "react";

const MovieCard = ({ movie }) => {
  const isSeries = movie.type === "series";

  return (
    <div className="flex flex-col gap-3 cursor-pointer group">
      
      {/* Poster Container */}
      <div
        className={`relative overflow-hidden rounded-xl bg-neutral-900 
        border border-white/5 transition-all duration-300 
        hover:border-white/20 shadow-lg 
        ${isSeries ? "aspect-[16/9]" : "aspect-[2/3]"}`}
      >
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 
          hover:scale-110 group-hover:brightness-110 transform-gpu will-change-transform"
          loading="lazy"
        />

        <div className="pointer-events-none absolute inset-0 
          bg-gradient-to-t from-black/60 via-transparent to-transparent 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300"
          style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
        />
      </div>

      {/* Only show title for movies */}
      
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
