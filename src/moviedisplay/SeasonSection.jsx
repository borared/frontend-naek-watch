import React, { useState, useEffect } from "react";

export default function SeasonSection({ movie, onEpisodeSelect }) {
	const [selectedSeason, setSelectedSeason] = useState(
		movie.seasons?.[0] || null,
	);

	// Reset when movie changes
	useEffect(() => {
		setSelectedSeason(movie.seasons?.[0] || null);
	}, [movie]);

	if (!movie.seasons || movie.seasons.length === 0) return null;

	return (
		<div className="mt-10">
			{/* Season Selector */}
			<div className="flex gap-4 mb-10 flex-wrap ">
				{movie.seasons.map((season) => (
					<button
						key={season.seasonNumber}
						onClick={() => setSelectedSeason(season)}
						className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:cursor-pointer
          ${
						selectedSeason?.seasonNumber === season.seasonNumber
							? "bg-red-600 text-white shadow-lg scale-105"
							: "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
					}`}
					>
						Season {season.seasonNumber}
					</button>
				))}
			</div>

			{/* Episodes List */}
			<div className="space-y-6 ">
				{selectedSeason?.episodes.map((ep, index) => (
					<div
						key={ep.id}
						onClick={() => onEpisodeSelect(ep)}
						className="group flex flex-col md:flex-row gap-6 bg-zinc-900/60 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
					>
						{/* Thumbnail */}
						<div className="relative w-full md:w-72 h-44 flex-shrink-0 rounded-xl overflow-hidden">
							<img
								src={ep.image}
								alt={ep.title}
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 transform-gpu will-change-transform"
							/>

							{/* Dark gradient */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }} />

							{/* Play button */}
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
								<div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
									<svg
										className="w-6 h-6 text-white"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M8 5v14l11-7z" />
									</svg>
								</div>
							</div>
						</div>

						{/* Episode Info */}
						<div className="flex-1 flex flex-col justify-between">
							<div>
								<h3 className="text-lg font-semibold text-white">
									{index + 1}. {ep.title}
								</h3>

								<p className="text-sm text-zinc-400 mt-2 line-clamp-3">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
									mysterious event begins to unfold in this episode.
								</p>
							</div>

							<div className="mt-4 text-sm text-zinc-500">{ep.duration}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
