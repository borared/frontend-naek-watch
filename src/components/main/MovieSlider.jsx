import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import MovieCard from "../MovieCard";
import movies from "../../data/movies";
import { chunkArray } from "../../utils/pagination";

const MovieSlider = () => {
	const [currentPage, setCurrentPage] = useState(0);

	// Divide your movies into groups of 5
	const moviePages = chunkArray(movies, 5);

	const handleNext = () => {
		setCurrentPage((prev) => (prev + 1) % moviePages.length);
	};

	return (
		<div className="w-full bg-black p-8 font-sans">
			{/* Header Section */}
			<div className="flex justify-between items-end mb-6">
				<h2 className="text-white text-2xl font-bold font-Kantumruy">កំពុងពេញនិយម</h2>
				<button className="text-gray-400 text-sm hover:text-white transition">
					More...
				</button>
			</div>

			{/* Slider Container */}
			<div className="relative group">
				<div className="grid grid-cols-5 gap-4">
					{moviePages[currentPage]?.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>

				{/* Floating Next Button */}
				<button
					onClick={handleNext}
					className="absolute -right-5 top-[40%] z-10 bg-white rounded-full p-2 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
				>
					<ChevronRight className="w-6 h-6 text-black" strokeWidth={3} />
				</button>
			</div>

			{/* Pagination Indicators */}
			<div className="flex justify-center items-center gap-3 mt-12">
				{moviePages.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentPage(index)}
						className={`h-2.5 rounded-full transition-all duration-300 ${
							currentPage === index
								? "w-8 bg-red-600"
								: "w-2.5 bg-white hover:bg-gray-400"
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default MovieSlider;
