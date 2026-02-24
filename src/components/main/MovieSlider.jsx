import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import MovieCard from "../MovieCard";
import movies from "../../data/movies";
import { chunkArray } from "../../utils/pagination";
import { useNavigate } from "react-router-dom";



const MovieSlider = ({ category, title }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();

    // 1. Filter the movies first
    const filteredMovies = movies.filter((movie) =>
        movie.categories?.includes(category)
    );

    // 2. Define hasSeries BEFORE using it in chunkSize
    const hasSeries = filteredMovies.some(
        (movie) => movie.type === "series"
    );

    // 3. Now calculate chunkSize and pages
    const chunkSize = hasSeries ? 3 : 5;
    const moviePages = chunkArray(filteredMovies, chunkSize);

    const columnsClass = hasSeries ? "grid-cols-3" : "grid-cols-5";

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % moviePages.length);
    };

    //go to MoviePage when click on movie card
    const handleSelectMovie = (movie) => {
        navigate(`/movie/${movie.id}`);   
    };

    if (filteredMovies.length === 0) return null;

    return (
        <div className="w-full bg-black p-8 font-sans">
            <div className="flex justify-between items-end mb-6">
                <h2 className="text-white text-2xl font-bold font-Kantumruy">
                    {title}
                </h2>
                <button className="text-gray-400 text-[18px] hover:text-white transition font-Kantumruy hover:cursor-pointer">
                    ផ្សេងទៀត...
                </button>
            </div>

            <div className="relative group">
                {/* FIXED: Use backticks for template literals */}
                <div className={`grid ${columnsClass} gap-4`}>
                    {moviePages[currentPage]?.map((movie) => (
                        <div
                            key={movie.id}
                            onClick={() => handleSelectMovie(movie)}
                            className="cursor-pointer"
                        >
                        <MovieCard key={movie.id} movie={movie} />
                    </div>
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="absolute -right-5 top-[40%] z-10 bg-white rounded-full p-2 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
                >
                    <ChevronRight className="w-6 h-6 text-black" strokeWidth={3} />
                </button>
            </div>

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
