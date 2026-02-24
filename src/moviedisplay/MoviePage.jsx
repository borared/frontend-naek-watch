import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieLayout from "./MovieLayout.jsx";
import movies from "../data/movies.js";

export default function MoviePage() {
	const { id } = useParams();
	const navigate = useNavigate();

	const getMovieById = (id) => {
		if (!id) return null;
		const found = movies.find((m) => String(m.id) === String(id));
		if (!found) return null;

		// enrich with placeholder fields expected by MovieLayout
		return {
			...found,
			cast: found.cast || [],
			related: movies.filter((m) => m.id !== found.id),
			backdrop: found.backdrop || found.videoUrl || "",
			poster: found.poster || "",
			synopsis: found.synopsis || "",
			rating: found.rating || "-",
			year: found.year || "",
			duration: found.duration || "",
		};
	};

	const movie = getMovieById(id);

	const handleSelectMovie = (m) => {
		navigate(`/movie/${m.id}`);
	};

	if (!movie) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-black text-white">
				<p>Movie not found.</p>
			</div>
		);
	}

	return <MovieLayout movie={movie} onSelectMovie={handleSelectMovie} />;
}
