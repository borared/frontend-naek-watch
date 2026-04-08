import React from "react";
import Postercover from "../components/Postercover.jsx";

export default function HeroSection({ movie, trailerUrl, onPlay }) {
	return (
		<div className="relative rounded-xl shadow-xl bg-black transform-gpu isolate will-change-transform">
			<div className="w-full h-[500px] md:h-[650px] relative overflow-hidden rounded-xl transform-gpu">
				<Postercover
					trailerUrl={trailerUrl || movie.trailerUrl}
					backdrop={movie.backdrop}
					poster={movie.poster}
					movie={movie}
					onPlay={onPlay}
				/>
			</div>
		</div>
	);
}
