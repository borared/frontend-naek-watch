import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import movies from "../../data/movies";
import useSlider from "../../hook/useSlider";

const heroMovies = movies.filter(
  (movie) => movie.id >= 1 && movie.id <= 5
);

const HeroSection = () => {
  const { index, nextSlide, prevSlide } = useSlider(heroMovies.length, 30000);

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
          <div className="absolute inset-0 w-full h-full scale-125">
            <iframe
              src={heroMovies[index].videoUrl}
              className="w-full h-full object-cover pointer-events-none"
              allow="autoplay; encrypted-media"
              title={heroMovies[index].title}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />

          <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-8 md:px-16">
            <h1 className="text-7xl md:text-9xl font-black text-white italic mb-6">
              {heroMovies[index].title}
            </h1>

            <div className="mt-10 flex gap-4">
              <Link
                to={`/movie/${heroMovies[index].id}`}
                className="px-10 py-4 bg-white text-black font-bold"
              >
                ទស្សនាឥឡូវនេះ
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators + Arrows */}
      <div className="absolute bottom-10 right-10 z-30 flex flex-col items-end gap-4">
        <div className="flex gap-2">
          {heroMovies.map((_, i) => (
            <div
              key={i}
              className={`h-1 transition-all duration-500 ${
                i === index ? "bg-white w-12" : "bg-white/30 w-8"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center 
            bg-white/10 hover:bg-white/20 
            border border-white/20 
            backdrop-blur-md 
            text-white rounded-full 
            transition-all duration-200 hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center 
            bg-white/10 hover:bg-white/20 
            border border-white/20 
            backdrop-blur-md 
            text-white rounded-full 
            transition-all duration-200 hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

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