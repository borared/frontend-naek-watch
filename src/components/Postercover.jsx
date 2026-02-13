import React from "react";

export default function Postercover({ trailerUrl, backdrop, poster, movie, onPlay }) {
  // Extract YouTube video ID from URL
  const extractYoutubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = trailerUrl ? extractYoutubeId(trailerUrl) : null;

  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* Trailer iframe */}
      {videoId ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&loop=1&playlist=${videoId}`}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        backdrop && (
          <img
            src={backdrop}
            alt="Backdrop"
            className="w-full h-full object-cover"
          />
        )
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Movie Info overlay */}
      <div className="absolute bottom-10 left-10 z-10 text-white pointer-events-auto max-w-lg">
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
      >
        {/* <span className="text-lg">▶</span> */}
        <span className="font-semibold">Play Movie</span>
      </button>
    </div>
  );
}
