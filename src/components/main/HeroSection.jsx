import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const movies = [
  {
    id: 1,
    title: "MIDWAY",
    director: "FROM THE DIRECTOR OF INDEPENDENCE DAY",
    tagline: "BASED ON REAL EVENTS",
    videoUrl: "https://www.youtube.com/embed/BfTYY_pac8o?autoplay=1&mute=1&controls=0&playlist=BfTYY_pac8o&loop=1",
    accent: "bg-blue-600"
  },
  {
    id: 2,
    title: "DUNE",
    director: "FROM DIRECTOR DENIS VILLENEUVE",
    tagline: "IT BEGINS",
    videoUrl: "https://www.youtube.com/embed/n9xhJrPXop4?autoplay=1&mute=1&controls=0&playlist=n9xhJrPXop4&loop=1",
    accent: "bg-orange-500"
  },
  {
    id: 3,
    title: "TENET",
    director: "FROM CHRISTOPHER NOLAN",
    tagline: "TIME RUNS OUT",
    videoUrl: "https://www.youtube.com/embed/LdOM0x0XDMo?autoplay=1&mute=1&controls=0&playlist=LdOM0x0XDMo&loop=1",
    accent: "bg-red-600"
  },
  {
    id: 4,
    title: "THE BATMAN",
    director: "FROM DIRECTOR MATT REEVES",
    tagline: "UNMASK THE TRUTH",
    // FIXED: Changed from /watch?v= to /embed/
    videoUrl: "https://www.youtube.com/embed/mqqft2x_Aa4?autoplay=1&mute=1&controls=0&playlist=mqqft2x_Aa4&loop=1",
    accent: "bg-zinc-700"
  },
  {
    id: 5,
    title: "TOP GUN",
    director: "PRODUCED BY JERRY BRUCKHEIMER",
    tagline: "FEEL THE NEED",
    videoUrl: "https://www.youtube.com/embed/giXco2jaZ_4?autoplay=1&mute=1&controls=0&playlist=giXco2jaZ_4&loop=1",
    accent: "bg-yellow-500"
  }
];
const HeroSection = () => {
   const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 30000);
    return () => clearInterval(timer);
  }, [index]);
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
              src={movies[index].videoUrl}
              className="w-full h-full object-cover pointer-events-none"
              allow="autoplay; encrypted-media"
              title={movies[index].title}
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
              {movies[index].director}
            </motion.p>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-7xl md:text-9xl font-black tracking-tighter text-white italic leading-none mb-6"
            >
              {movies[index].title}
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="tracking-[0.6em] text-sm md:text-lg text-white border-l-4 border-red-600 pl-4 uppercase"
            >
              {movies[index].tagline}
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex gap-4"
            >
              <button className="px-10 py-4 bg-white text-black font-bold text-sm hover:scale-105 transition-transform duration-200">
                WATCH TRAILER
              </button>
              <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm hover:bg-white/20 transition-all">
                + MY LIST
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators & Progress Bar */}
      <div className="absolute bottom-10 right-10 z-30 flex items-center gap-4">
        <div className="flex gap-2">
          {movies.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 w-8 transition-all duration-500 ${i === index ? 'bg-white w-12' : 'bg-white/30'}`} 
            />
          ))}
        </div>
      </div>

      {/* Auto-play Progress Timer (The Line at the bottom) */}
      <motion.div 
        key={`bar-${index}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 30, ease: "linear" }}
        className={`absolute bottom-0 left-0 h-1 w-full origin-left z-40 ${movies[index].accent}`}
      />
    </div>
  )
}

export default HeroSection;
