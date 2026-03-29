import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getEnglishCategories, isValidGenre } from "../utils/genreMapper";
import media from "../data/media";
import MovieCard from "../components/MovieCard";

export default function GenrePage() {
  const { genreName } = useParams();

  // Validate genre
  if (!isValidGenre(genreName)) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            ប្រភេទរឿងមិនត្រឹមត្រូវ
          </h1>
          <p className="text-gray-400 mb-8">
            ប្រភេទរឿងដែលអ្នកស្វែងរកមិនមានទេ
          </p>
          <Link
            to="/"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-all"
          >
            ត្រឡប់ទៅទំព័រដើម
          </Link>
        </div>
      </div>
    );
  }

  // Translate Khmer genre to English categories
  const englishCategories = getEnglishCategories(genreName);

  // Filter media by genre with many-to-many support
  const filteredMedia = useMemo(() => {
    if (!englishCategories) return { movies: [], series: [] };

    const filtered = media.filter((item) => {
      // Skip items with malformed categories
      if (!Array.isArray(item.categories)) {
        console.warn(`Malformed categories for item ${item.id}`);
        return false;
      }

      // Match if ANY item category matches ANY translated category
      return item.categories.some((cat) => englishCategories.includes(cat));
    });

    // Separate movies and series
    const movies = filtered.filter((item) => item.type === "movie");
    const series = filtered.filter((item) => item.type === "series");

    return { movies, series };
  }, [englishCategories]);

  const totalCount = filteredMedia.movies.length + filteredMedia.series.length;

  return (
    <div className="min-h-screen bg-black text-white pt-10 px-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-red-600 font-Kantumruy">
          {genreName}
        </h1>
        <p className="text-gray-400 mt-3 text-lg font-Kantumruy">
          {totalCount} រឿង
        </p>
      </div>

      {/* Empty State */}
      {totalCount === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-gray-400 mb-4 font-Kantumruy">
            មិនមានរឿងក្នុងប្រភេទនេះទេ
          </h2>
          <p className="text-gray-500 mb-8 font-Kantumruy">
            សូមសាកល្បងប្រភេទរឿងផ្សេងទៀត
          </p>
          <Link
            to="/"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-all inline-block"
          >
            ត្រឡប់ទៅទំព័រដើម
          </Link>
        </div>
      ) : (
        /* Results - Movies and Series Sections */
        <div>
          {/* Movies Section */}
          {filteredMedia.movies.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6 font-Kantumruy border-l-4 border-red-600 pl-3">
                រឿងពេញ ({filteredMedia.movies.length})
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {filteredMedia.movies.map((item) => (
                  <Link
                    key={item.id}
                    to={`/movie/${item.id}`}
                    className="block"
                  >
                    <MovieCard movie={item} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* TV Series Section */}
          {filteredMedia.series.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6 font-Kantumruy border-l-4 border-red-600 pl-3">
                រឿងភាគ ({filteredMedia.series.length})
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {filteredMedia.series.map((item) => (
                  <Link
                    key={item.id}
                    to={`/series/${item.id}`}
                    className="block"
                  >
                    <MovieCard movie={item} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="h-20"></div>
    </div>
  );
}
