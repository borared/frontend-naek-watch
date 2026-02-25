import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieLayout from "./MovieLayout.jsx";
import movies from "../data/movies.js";

export default function MovieDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [currentTrailer, setCurrentTrailer] = useState(null);

	const normalizeMovie = (found) => {
		if (!found) return null;

		// Normalize type to lowercase
		const normalizedMovie = {
			...found,
			type: found.type?.toLowerCase() || "movie",
			cast: found.cast || [],
			related: movies.filter((m) => m.id !== found.id),
			backdrop: found.backdrop || found.videoUrl || "",
			poster: found.poster || "",
			synopsis: found.synopsis || "",
			rating: found.rating || "-",
			year: found.year || "",
			duration: found.duration || "",
			videoUrl: found.videoUrl || "",
		};

		// Transform seasons data if it exists (normalize different season formats)
		if (found.seasons && Array.isArray(found.seasons)) {
			normalizedMovie.seasons = found.seasons.map((season) => {
				const seasonNumber = season.seasonNumber || season.season;
				return {
					seasonNumber,
					episodes: (season.episodes || []).map((ep, index) => ({
						id: ep.id || `s${seasonNumber}e${ep.ep || index + 1}`,
						title: ep.title || `Episode ${ep.ep || index + 1}`,
						duration: ep.duration || "45m",
						videoUrl: ep.videoUrl || found.videoUrl || "",
						thumbnail: ep.thumbnail || found.poster || "",
					})),
				};
			});
		}

		return normalizedMovie;
	};

	const getMovieById = (id) => {
		if (!id) return null;
		const found = movies.find((m) => String(m.id) === String(id));
		return normalizeMovie(found);
	};

	const movie = getMovieById(id);

	// Set initial trailer
	useEffect(() => {
		if (movie) {
			setCurrentTrailer(movie.videoUrl || movie.trailerUrl);
		}
	}, [movie]);

	const handleSelectMovie = (m) => {
		navigate(`/movie/${m.id}`);
	};

	const handleEpisodeSelect = (episode) => {
		// Update the trailer to the episode's video URL
		setCurrentTrailer(episode.videoUrl);
	};

	if (!movie) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-black text-white">
				<p>Movie not found.</p>
			</div>
		);
	}

	return (
		<MovieLayout
			movie={movie}
			onSelectMovie={handleSelectMovie}
			currentTrailer={currentTrailer}
			onEpisodeSelect={handleEpisodeSelect}
		/>
	);
}
