import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieLayout from "./MovieLayout.jsx";
import { allContent } from "../data/index.js";

export default function MoviePage({ movie: fallbackMovie }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentMovie = id
    ? allContent.find((m) => m.id.toString() === id)
    : fallbackMovie;

  if (!currentMovie) return <h1>Movie not found</h1>;

  // State for the current trailer URL (movie or episode)
  const [currentTrailer, setCurrentTrailer] = useState(
    currentMovie.trailerUrl
  );

  // Reset trailer when the movie changes
  useEffect(() => {
    setCurrentTrailer(currentMovie.trailerUrl);
  }, [currentMovie]);

  const handleSelectMovie = (m) => {
    navigate(`/movie/${m.id}`);
  };

  const handleEpisodeSelect = (episode) => {
    setCurrentTrailer(episode.videoUrl); // update hero trailer
  };

  return (
    <MovieLayout
      movie={currentMovie}
      onSelectMovie={handleSelectMovie}
      currentTrailer={currentTrailer} // pass to HeroSection
      onEpisodeSelect={handleEpisodeSelect} // pass to SeasonSection
    />
  );
}
