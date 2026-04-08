import React from "react";

export default function RelatedMovies({ movies, onSelectMovie }) {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold mb-3">More like this</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {movies.map((r) => (
          <div
            key={r.id}
            className="rounded-lg bg-black/60 overflow-hidden cursor-pointer hover:scale-105 transition transform transform-gpu will-change-transform"
            onClick={() =>
              onSelectMovie({
                ...r,
                year: r.year || "Unknown",
                rating: r.rating || "-",
                duration: r.duration || "-",
                backdrop: r.backdrop || r.image,
                poster: r.poster || r.image,
                cast: r.cast || [],
                synopsis: r.synopsis || "No description available",
                related: movies, // reuse the old posters for placeholder
              })
            }
          >
            <img
              src={r.image || movies[0].poster}
              alt={r.title}
              className="w-80 h-90 object-cover rounded-t-lg"
            />
            <div className="p-2 text-xs text-gray-300">{r.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
