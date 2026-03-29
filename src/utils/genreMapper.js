/**
 * Genre Mapper Utility
 * 
 * Provides bidirectional translation between Khmer genre names (UI) and English category values (data).
 * Supports one-to-many mappings where a single Khmer genre can map to multiple English categories.
 * 
 * @module genreMapper
 */

/**
 * Mapping of Khmer genre names to English category values.
 * Each Khmer genre maps to one or more English categories used in the media data.
 * 
 * @constant {Object.<string, string[]>}
 */
const GENRE_MAP = {
  "វាយប្រហារ": ["action"],
  "រន្ធត់": ["horror"],
  "កំប្លែង": ["comedy"],
  "មនោសញ្ចេតនា": ["psychological", "drama"],
  "តុក្កតា": ["animation", "anime"],
  "វិទ្យាសាស្ត្រ": ["sci-fi"],
  "ដំណើរផ្សងព្រេង": ["adventure", "fantasy"]
};

/**
 * Reverse mapping from English category values to Khmer genre names.
 * Computed once at module initialization for O(1) lookup performance.
 * 
 * @constant {Object.<string, string>}
 */
const REVERSE_MAP = {};
Object.entries(GENRE_MAP).forEach(([khmer, englishArray]) => {
  englishArray.forEach(english => {
    REVERSE_MAP[english] = khmer;
  });
});

/**
 * Translates a Khmer genre name to its corresponding English category values.
 * 
 * @param {string} khmerGenre - The Khmer genre name (e.g., "វាយប្រហារ")
 * @returns {string[]|null} Array of English category values, or null if genre is unknown
 * 
 * @example
 * getEnglishCategories("វាយប្រហារ") // Returns: ["action"]
 * getEnglishCategories("មនោសញ្ចេតនា") // Returns: ["psychological", "drama"]
 * getEnglishCategories("unknown") // Returns: null
 */
export function getEnglishCategories(khmerGenre) {
  return GENRE_MAP[khmerGenre] || null;
}

/**
 * Translates an English category value to its corresponding Khmer genre name.
 * 
 * @param {string} englishCategory - The English category value (e.g., "action")
 * @returns {string|null} Khmer genre name, or null if category is unknown
 * 
 * @example
 * getKhmerGenre("action") // Returns: "វាយប្រហារ"
 * getKhmerGenre("drama") // Returns: "មនោសញ្ចេតនា"
 * getKhmerGenre("unknown") // Returns: null
 */
export function getKhmerGenre(englishCategory) {
  return REVERSE_MAP[englishCategory] || null;
}

/**
 * Returns all supported Khmer genre names.
 * 
 * @returns {string[]} Array of all Khmer genre names
 * 
 * @example
 * getAllKhmerGenres() // Returns: ["វាយប្រហារ", "រន្ធត់", "កំប្លែង", ...]
 */
export function getAllKhmerGenres() {
  return Object.keys(GENRE_MAP);
}

/**
 * Validates if a Khmer genre name is supported.
 * 
 * @param {string} khmerGenre - The Khmer genre name to validate
 * @returns {boolean} True if the genre is valid, false otherwise
 * 
 * @example
 * isValidGenre("វាយប្រហារ") // Returns: true
 * isValidGenre("unknown") // Returns: false
 */
export function isValidGenre(khmerGenre) {
  return khmerGenre in GENRE_MAP;
}
