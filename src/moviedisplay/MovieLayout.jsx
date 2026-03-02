import React from "react";
import HeroSection from "./HeroSection.jsx";
import MovieInfo from "./MovieInfo.jsx";
import CastList from "./CastList.jsx";
import RelatedMovies from "./RelatedMovies.jsx";
import SeasonSection from "./SeasonSection.jsx";

export default function MovieLayout({
  movie,
  onSelectMovie,
  currentTrailer,
  onEpisodeSelect,
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero section uses the dynamic trailer */}
      <HeroSection
        movie={movie}
        trailerUrl={currentTrailer}
        onPlay={() => console.log("Play full movie:", movie.title)}
      />

      <section className="px-6 py-6 md:px-12 md:py-10">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <MovieInfo movie={movie} />
            <CastList cast={movie.cast} />

            {movie.type === "series" && (
              <SeasonSection
                movie={movie}
                onEpisodeSelect={onEpisodeSelect}
              />
            )}
          </div>

          <aside className="bg-black/60 p-4 rounded-lg h-full">
            <div className="text-sm text-gray-300">Subtitles</div>
            <div className="mt-3 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <span>Khmer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span>English</span>
              </div>
            </div>
          </aside>
        </div>

        <RelatedMovies movies={movie.related} onSelectMovie={onSelectMovie} />
      </section>
    </div>
  );
}