import React from "react";

export default function MovieInfo({ movie }) {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold">{movie.title}</h1>
      <div className="flex items-center gap-3 text-sm text-gray-300 mt-2">
        <span>Year: {movie.year}</span>
        <span>•</span>
        <span>Rating: {movie.rating}</span>
        <span>•</span>
        <span>Duration: {movie.duration}</span>
      </div>
      <p className="text-sm text-gray-300 mt-4 max-w-3xl">{movie.synopsis}</p>
    </>
  );
}
