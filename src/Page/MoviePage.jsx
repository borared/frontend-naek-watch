import React from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

export default function MoviesPage() {
  
  // Only full movies
  const fullMovies = movies.filter((movie) => movie.type === "movie");

  // Most watched (if views exist)
  const mostWatched = [...fullMovies]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-black text-white px-8 pt-8 pb-20">

      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-gray-400">
        <Link to="/" className="hover:text-white transition">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-white">Movie</span>
      </div>

      {/* Title */}
      <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold text-red-600 mb-10 font-Kantumruy">
            បណ្ដុំរឿងពេញ
          </h1>
      </div>

      {/* Most Watched Section */}
      {mostWatched.length > 0 && (
        <div className="mb-14">
          <h2 className="text-2xl font-semibold mb-6">
            Most Watched
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {mostWatched.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Movies */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          All Movies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {fullMovies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}