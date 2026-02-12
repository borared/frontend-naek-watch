import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieLayout from "./MovieLayout.jsx";
import sampleMovie from "../data/moviedetail.js";

export default function MoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find movie by ID or fallback to sampleMovie
  const getMovieById = (id) => {
    if (!id || id === sampleMovie.id.toString()) return sampleMovie;

    const related = sampleMovie.related.find((m) => m.id.toString() === id);
    if (related) {
      return {
        ...related,
        cast: related.cast || sampleMovie.cast,
        backdrop: related.backdrop || related.image || sampleMovie.backdrop,
        poster: related.poster || related.image || sampleMovie.poster,
        synopsis: related.synopsis || "No description available",
        related: sampleMovie.related, // reuse old posters as placeholder
        rating: related.rating || "-",
        year: related.year || "Unknown",
        duration: related.duration || "-",
      };
    }
    return sampleMovie;
  };

  const movie = getMovieById(id);

  // Navigate to related movie
  const handleSelectMovie = (m) => {
    navigate(`/movie/${m.id}`);
  };

  return <MovieLayout movie={movie} onSelectMovie={handleSelectMovie} />;
}
