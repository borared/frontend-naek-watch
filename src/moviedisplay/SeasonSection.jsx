import React, { useState, useEffect } from "react";

export default function SeasonSection({ movie, onEpisodeSelect }) {
  const [selectedSeason, setSelectedSeason] = useState(
    movie.seasons?.[0] || null
  );

  // Reset when movie changes
  useEffect(() => {
    setSelectedSeason(movie.seasons?.[0] || null);
  }, [movie]);

  if (!movie.seasons || movie.seasons.length === 0) return null;

  return (
    <div className="mt-10">
      {/* Season Selector */}
      <div className="flex gap-3 mb-6">
        {movie.seasons.map((season) => (
          <button
            key={season.seasonNumber}
            onClick={() => setSelectedSeason(season)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedSeason?.seasonNumber === season.seasonNumber
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            Season {season.seasonNumber}
          </button>
        ))}
      </div>

      {/* Episode List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {selectedSeason?.episodes.map((ep) => (
          <div
            key={ep.id}
            className="rounded-lg bg-black/60 overflow-hidden cursor-pointer hover:scale-105 transition transform"
            onClick={() => onEpisodeSelect(ep)} // update hero trailer
          >
            <img
              src={ep.thumbnail || movie.poster} // fallback
              alt={ep.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-2 text-xs text-gray-300">
              <div className="font-semibold">{ep.title}</div>
              <div className="text-gray-400">{ep.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
