import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import movies from "../../data/movies";


const heroMovies = movies.filter((movie) => movie.id >= 1 && movie.id <= 5);

const HeroSection = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((prev) => (prev + 1) % heroMovies.length);
		}, 30000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative h-[90vh] w-full overflow-hidden bg-black font-sans">
			<AnimatePresence mode="wait">
				<motion.div
					key={index}
					initial={{ x: "100%", opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: "-100%", opacity: 0 }}
					transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
					className="absolute inset-0 w-full h-full"
				>
					{/* Video Layer */}
					<div className="absolute inset-0 w-full h-full scale-125">
						<iframe
							src={heroMovies[index].videoUrl}
							className="w-full h-full object-cover pointer-events-none"
							allow="autoplay; encrypted-media"
							title={heroMovies[index].title}
						/>
					</div>

					{/* Cinematic Overlays */}
					<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />
					<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />

					{/* Content */}
					<div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-8 md:px-16">
						<motion.p
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3 }}
							className="tracking-[0.4em] text-xs md:text-sm mb-4 text-gray-300 font-medium uppercase"
						>
							{heroMovies[index].director}
						</motion.p>

						<motion.h1
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4 }}
							className="text-7xl md:text-9xl font-black tracking-tighter text-white italic leading-none mb-6"
						>
							{heroMovies[index].title}
						</motion.h1>

						<motion.p
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.5 }}
							className="tracking-[0.6em] text-sm md:text-lg text-white border-l-4 border-red-600 pl-4 uppercase"
						>
							{heroMovies[index].tagline}
						</motion.p>

						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.6 }}
							className="mt-10 flex gap-4"
						>
							<button className="px-10 bg-white text-black font-bold text-[15px] hover:scale-105 transition-transform duration-200 font-Kantumruy hover:cursor-pointer">
								<Link to={`/movie/${heroMovies[index].id}`}>
									ទស្សនាឈុតខ្លីៗ
								</Link>
							</button>

							<button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all">
								+ MY LIST
							</button>
						</motion.div>
					</div>
				</motion.div>
			</AnimatePresence>

			{/* Slide Indicators */}
			<div className="absolute bottom-10 right-10 z-30 flex items-center gap-4">
				<div className="flex gap-2">
					{heroMovies.map((_, i) => (
						<div
							key={i}
							className={`h-1 w-8 transition-all duration-500 ${
								i === index ? "bg-white w-12" : "bg-white/30"
							}`}
						/>
					))}
				</div>
			</div>

			{/* Auto-play Progress Timer */}
			<motion.div
				key={`bar-${index}`}
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 30, ease: "linear" }}
				className={`absolute bottom-0 left-0 h-1 w-full origin-left z-40 ${heroMovies[index].accent}`}
			/>
		</div>
	);
};

export default HeroSection;
