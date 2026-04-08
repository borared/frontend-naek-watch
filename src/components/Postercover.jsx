import React, { useRef, useState, useEffect } from "react";

export default function Postercover({ trailerUrl, backdrop, poster, movie, onPlay }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Extract YouTube video ID from URL
  const extractYoutubeId = (url) => {
    if (!url) return null;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = trailerUrl ? extractYoutubeId(trailerUrl) : null;

  // Only load iframe when the component enters the viewport
  useEffect(() => {
    if (!videoId) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // load once, never unload
        }
      },
      { threshold: 0.25 } // fire when 25% visible
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [videoId]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-black"
    >
      {/* Video layer */}
      {videoId ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        >
          {isVisible ? (
            /* Real iframe — only mounted after visible */
            <iframe
              className="w-full h-full pointer-events-none"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&rel=0&modestbranding=1&wmode=transparent`}
              title="Movie Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            /* Lightweight thumbnail while page is loading */
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={movie.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = backdrop || poster || "";
              }}
            />
          )}
        </div>
      ) : (
        <img
          src={backdrop}
          alt="Backdrop"
          className="w-full h-full object-cover"
        />
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"
        style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
      />

      {/* Movie Info overlay */}
      <div
        className="absolute bottom-10 left-10 z-10 text-white pointer-events-auto max-w-lg"
        style={{ transform: "translateZ(0)" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold">{movie.title}</h1>
        <div className="flex items-center gap-4 mt-2 text-sm md:text-base text-gray-200">
          <span>{movie.year}</span>
          <span>•</span>
          <span>{movie.rating}</span>
          <span>•</span>
          <span>{movie.duration}</span>
        </div>
      </div>

      {/* Play full movie button */}
      <button
        onClick={onPlay}
        className="absolute bottom-10 right-10 z-10 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full flex items-center gap-2 shadow-lg text-white pointer-events-auto"
        style={{ transform: "translateZ(0)" }}
      >
        <span className="font-semibold">Play Movie</span>
      </button>
    </div>
  );
}
