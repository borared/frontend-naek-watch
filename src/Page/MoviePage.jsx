import React from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies"; // your existing movie data

export default function MoviesPage() {
  
  // Filter only full movies (if your data has type)
  const fullMovies = movies.filter((movie) => movie.type === "movie");

  // Sort by views for Most Watched
  const mostWatched = [...fullMovies]
    .sort((a, b) => b.views - a.views)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-black text-white px-8 pt-24 pb-20">

      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-gray-400">
        <Link to="/" className="hover:text-white transition">
          Home
        </Link>
        <span className="mx-2"> &gt; </span>
        <span className="text-white">Movie</span>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-red-600 mb-10 font-Kantumruy">
        រឿងពេញ
      </h1>

      {/* Most Watched Section */}
      <div className="mb-14">
        <h2 className="text-2xl font-semibold mb-6">
          🔥 Most Watched
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mostWatched.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="group"
            >
              <div className="bg-neutral-900 rounded-xl overflow-hidden border border-white/5 hover:border-gray-400 transition-all">
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm">
                    {movie.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    {movie.views} views
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Movies Grid */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          All Movies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {fullMovies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="group"
            >
              <div className="bg-neutral-900 rounded-xl overflow-hidden border border-white/5 hover:border-gray-400 transition-all">
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm">
                    {movie.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    {movie.year}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}