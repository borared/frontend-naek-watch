import React from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

export default function SeriesPage() {
  
  // Only series
  const seriesList = movies.filter((item) => item.type === "series");

  // Most watched series
  const mostWatchedSeries = [...seriesList]
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
        <span className="text-white">Series</span>
      </div>

      {/* Title */}
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold text-red-600 mb-10 font-Kantumruy">
          បណ្ដុំរឿងភាគ
        </h1>
      </div>

      {/* Most Watched Section */}
      {mostWatchedSeries.length > 0 && (
        <div className="mb-14">
          <h2 className="text-2xl font-semibold mb-6">
            Most Watched
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {mostWatchedSeries.map((item) => (
              <Link key={item.id} to={`/movie/${item.id}`}>
                <MovieCard movie={item} />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Series */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          All Series
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {seriesList.map((item) => (
            <Link key={item.id} to={`/movie/${item.id}`}>
              <MovieCard movie={item} />
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}