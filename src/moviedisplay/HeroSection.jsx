import React from "react";
import Postercover from "../components/Postercover.jsx";

export default function HeroSection({ movie, trailerUrl, onPlay }) {
	return (
		<div className="relative rounded-xl overflow-hidden shadow-xl bg-black">
			<div className="w-full h-[500px] md:h-[650px] relative overflow-hidden">
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
