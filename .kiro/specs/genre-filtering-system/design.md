# Design Document: Genre Filtering System

## Overview

The Genre Filtering System implements a bilingual content discovery feature for the NaekWatch streaming platform. The system bridges the gap between Khmer-language UI elements and English-language data structures, enabling users to browse movies and series by genre using familiar Khmer terminology.

The architecture consists of three primary components:

1. **Genre Mapper Utility** - A translation layer that maps Khmer genre names to English category values with support for one-to-many relationships
2. **GenrePage Component** - A dedicated route component that displays filtered content based on the selected genre
3. **Filtering Logic** - An in-memory filtering system that handles many-to-many relationships between content and genres

The system leverages React Router for URL-based state management, allowing users to bookmark and share genre-specific pages. All filtering occurs client-side using the existing combined media array, ensuring fast response times without server requests.

## Architecture

### Component Hierarchy

```
App.jsx (Router)
├── Navbar.jsx (Genre Selection)
└── GenrePage.jsx (New Component)
    ├── Genre Mapper Utility (Translation)
    ├── Filtering Logic (Content Filtering)
    └── MovieCard.jsx (Content Display)
```

### Data Flow

1. User clicks a Khmer genre link in Navbar
2. React Router navigates to `/genre/{khmerGenreName}`
3. GenrePage extracts genre parameter from URL
4. Genre Mapper translates Khmer name to English category values
5. Filtering logic searches media array for matching categories
6. Filtered results render in responsive grid using MovieCard components

### Key Design Decisions

**Translation Layer Approach**: Rather than modifying the existing data structure or Navbar, we introduce a dedicated Genre Mapper utility that serves as a single source of truth for Khmer-to-English mappings. This approach:
- Maintains backward compatibility with existing code
- Centralizes translation logic for easy maintenance
- Supports one-to-many mappings (e.g., "មនោសញ្ចេតនា" → ["psychological", "drama"])
- Provides O(1) lookup performance using JavaScript objects

**Client-Side Filtering**: All filtering occurs in-memory on the client side because:
- The dataset is relatively small (< 1000 items expected)
- No backend API exists for genre filtering
- Instant response improves user experience
- Reduces server load and complexity

**URL-Based State**: The selected genre is stored in the URL path rather than component state because:
- Enables bookmarking and sharing of genre pages
- Supports browser back/forward navigation
- Maintains state across page refreshes
- Follows RESTful routing conventions

## Components and Interfaces

### Genre Mapper Utility (`src/utils/genreMapper.js`)

A standalone utility module that provides bidirectional translation between Khmer genre names and English category values.

**Exports:**

```javascript
// Maps Khmer genre name to array of English category values
function getEnglishCategories(khmerGenre: string): string[] | null

// Maps English category value to Khmer genre name
function getKhmerGenre(englishCategory: string): string | null

// Returns all supported Khmer genre names
function getAllKhmerGenres(): string[]

// Validates if a Khmer genre name is supported
function isValidGenre(khmerGenre: string): boolean
```

**Internal Data Structure:**

```javascript
const GENRE_MAP = {
  "វាយប្រហារ": ["action"],
  "រន្ធត់": ["horror"],
  "កំប្លែង": ["comedy"],
  "មនោសញ្ចេតនា": ["psychological", "drama"],
  "តុក្កតា": ["animation", "anime"],
  "វិទ្យាសាស្ត្រ": ["sci-fi"],
  "ដំណើរផ្សងព្រេង": ["adventure", "fantasy"]
};
```

The reverse mapping is computed once at module initialization for efficient English-to-Khmer lookups.

### GenrePage Component (`src/Page/GenrePage.jsx`)

A new page component that handles genre-based content filtering and display.

**Props:** None (uses URL parameters via React Router)

**State:**
- No local state needed (derives everything from URL and media data)

**Hooks:**
- `useParams()` - Extract genre name from URL
- `useMemo()` - Memoize filtered results for performance

**Rendering Logic:**

1. Extract `genreName` parameter from URL
2. Validate genre using `isValidGenre()`
3. Translate to English categories using `getEnglishCategories()`
4. Filter media array where any category matches translated values
5. Render results in responsive grid with MovieCard components
6. Handle edge cases: invalid genre, no results, loading states

**Layout Structure:**

```
<div className="container">
  <header>
    <h1>{khmerGenreName}</h1>
    <p>{resultCount} រឿង</p>
  </header>
  
  <div className="grid">
    {filteredMedia.map(item => (
      <Link to={`/${item.type}/${item.id}`}>
        <MovieCard movie={item} />
      </Link>
    ))}
  </div>
  
  {/* Empty state if no results */}
</div>
```

### Filtering Logic

The filtering algorithm implements many-to-many relationship matching:

```javascript
function filterMediaByGenre(media, englishCategories) {
  return media.filter(item => {
    // Skip items with malformed categories
    if (!Array.isArray(item.categories)) return false;
    
    // Match if ANY item category matches ANY translated category
    return item.categories.some(cat => 
      englishCategories.includes(cat)
    );
  });
}
```

**Performance Characteristics:**
- Time Complexity: O(n × m × k) where n = media items, m = categories per item, k = translated categories
- Space Complexity: O(n) for filtered results
- Expected Performance: < 100ms for 1000 items with average 3 categories each

### Router Integration

Add new route to `src/App.jsx`:

```javascript
<Route path="/genre/:genreName" element={<GenrePage />} />
```

The route uses a dynamic parameter to capture the Khmer genre name from the URL. React Router automatically URL-encodes Khmer characters for safe transmission.

### Navbar Integration

No changes required to Navbar.jsx. The existing genre links already use the correct format:

```javascript
<Link to={`/genre/${g}`}>{g}</Link>
```

These links will automatically navigate to the new GenrePage route.

## Data Models

### Content Item Structure

The existing media data structure from `src/data/media.js`:

```javascript
{
  id: number,
  title: string,
  type: "movie" | "series",
  categories: string[],  // English category values
  image: string,
  year: string,
  rating: string,
  duration: string,
  synopsis: string,
  // ... other fields
}
```

**Key Fields for Filtering:**
- `categories`: Array of English category strings (e.g., ["action", "anime"])
- `type`: Determines navigation target (movie vs series detail page)
- `id`: Unique identifier for routing

**Category Values in Data:**
The existing data uses English category values including:
- Content categories: "action", "horror", "comedy", "psychological", "drama", "animation", "anime", "sci-fi", "adventure", "fantasy"
- System categories: "top", "trending", "upcoming" (excluded from genre filtering)

### Genre Mapping Structure

```javascript
{
  khmerGenre: string,      // e.g., "វាយប្រហារ"
  englishCategories: string[]  // e.g., ["action"]
}
```

The mapping supports one-to-many relationships where a single Khmer genre can map to multiple English categories. This handles cases like:
- "មនោសញ្ចេតនា" → ["psychological", "drama"]
- "តុក្កតា" → ["animation", "anime"]
- "ដំណើរផ្សងព្រេង" → ["adventure", "fantasy"]

### URL Parameter Structure

```
/genre/{khmerGenreName}
```

Examples:
- `/genre/វាយប្រហារ` (Action)
- `/genre/រន្ធត់` (Horror)
- `/genre/មនោសញ្ចេតនា` (Psychological)

React Router automatically handles URL encoding/decoding of Khmer Unicode characters.


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Genre Translation Consistency

*For any* valid Khmer genre name, translating it using the Genre Mapper should return a non-empty array of English category values that matches the defined mapping.

**Validates: Requirements 3.1**

### Property 2: Any-Match Filtering Logic

*For any* content item with a categories array and any set of English category values, the filtering logic should include the item in results if and only if at least one category in the item's array matches at least one of the provided English values.

**Validates: Requirements 3.2, 4.1, 4.2**

### Property 3: Data Immutability During Filtering

*For any* content item that passes through the filtering process, the original item's data structure and field values should remain unchanged (filtering returns references to original objects, not modified copies).

**Validates: Requirements 3.4, 4.3**

### Property 4: Exact Category Matching

*For any* English category value used in filtering, only content items with categories that exactly match the value (case-sensitive, no partial matches) should be included in results.

**Validates: Requirements 3.5**

### Property 5: One-to-Many Mapping Support

*For any* Khmer genre name that maps to multiple English category values, filtering should include content items that contain any one of those English values in their categories array.

**Validates: Requirements 1.9, 4.4**

### Property 6: Rendered Content Fields

*For any* content item displayed in the filtered view, the rendered output should contain the item's poster image, title, and year information.

**Validates: Requirements 5.2**

### Property 7: Result Count Accuracy

*For any* filtered result set, the displayed count should exactly equal the number of content items in the filtered array.

**Validates: Requirements 5.5**

### Property 8: URL-Based Filtering Initialization

*For any* valid Khmer genre name in the URL path, navigating to `/genre/{genreName}` should automatically trigger translation and filtering to display matching content.

**Validates: Requirements 6.2**

### Property 9: Genre Validation Correctness

*For any* string input to the genre validation function, it should return true if and only if the string exactly matches one of the seven supported Khmer genre names.

**Validates: Requirements 7.3**

### Property 10: Type-Agnostic Filtering

*For any* genre filter operation, both content items with type "movie" and type "series" should be included in results if their categories match, without discrimination based on type.

**Validates: Requirements 10.1**

### Property 11: Type Information Preservation

*For any* content item displayed in the filtered view, the type field ("movie" or "series") should be accessible for rendering type-specific UI elements or navigation.

**Validates: Requirements 10.3**

### Property 12: Bidirectional Mapping Consistency

*For any* English category value that has a corresponding Khmer genre name, the reverse mapping function should return the correct Khmer name, and translating that Khmer name back should include the original English value.

**Validates: Requirements 12.3**

## Error Handling

The system implements defensive programming practices to handle edge cases and invalid inputs gracefully:

### Invalid Genre Names

**Scenario:** User navigates to `/genre/InvalidGenre` or a genre name not in the mapping

**Handling:**
1. `isValidGenre()` returns false
2. GenrePage component detects invalid genre
3. Display error message: "ប្រភេទរឿងមិនត្រឹមត្រូវ" (Invalid genre)
4. Provide link to return to home page
5. Optionally: Redirect to home page after 3 seconds

**Implementation:**
```javascript
if (!isValidGenre(genreName)) {
  return <ErrorState message="ប្រភេទរឿងមិនត្រឹមត្រូវ" />;
}
```

### Malformed Content Data

**Scenario:** Content item has missing or malformed `categories` field

**Handling:**
1. Filter function checks `Array.isArray(item.categories)`
2. Skip items with non-array categories
3. Continue filtering remaining items
4. Log warning to console for debugging

**Implementation:**
```javascript
if (!Array.isArray(item.categories)) {
  console.warn(`Malformed categories for item ${item.id}`);
  return false;
}
```

### Empty Results

**Scenario:** No content matches the selected genre

**Handling:**
1. Detect empty filtered array
2. Display empty state message: "មិនមានរឿងក្នុងប្រភេទនេះទេ" (No content in this genre)
3. Suggest browsing other genres or returning to home
4. Show genre name in heading to confirm user's selection

**Implementation:**
```javascript
{filteredMedia.length === 0 && (
  <EmptyState 
    message="មិនមានរឿងក្នុងប្រភេទនេះទេ"
    genreName={genreName}
  />
)}
```

### Missing Required Fields

**Scenario:** Content item missing image, title, or other required display fields

**Handling:**
1. Use optional chaining and nullish coalescing in MovieCard
2. Provide fallback values (placeholder image, "Unknown Title")
3. Item still renders but with default values
4. Log warning for data quality monitoring

**Implementation:**
```javascript
<img src={movie.image ?? '/placeholder.jpg'} alt={movie.title ?? 'Unknown'} />
```

### Unknown English Categories

**Scenario:** Genre Mapper receives unknown Khmer genre name

**Handling:**
1. `getEnglishCategories()` returns `null` for unknown genres
2. Calling code checks for null return value
3. Treat as invalid genre (see Invalid Genre Names handling)

**Implementation:**
```javascript
const categories = getEnglishCategories(genreName);
if (!categories) {
  return <ErrorState />;
}
```

### Data Loading Failures

**Scenario:** Media data fails to import (unlikely with static imports)

**Handling:**
1. Check if media array is empty or undefined
2. Display error message: "មិនអាចផ្ទុកទិន្នន័យបានទេ" (Cannot load data)
3. Provide retry button or link to home
4. Use React Error Boundaries to catch import errors

**Implementation:**
```javascript
if (!media || media.length === 0) {
  return <ErrorState message="មិនអាចផ្ទុកទិន្នន័យបានទេ" />;
}
```

## Testing Strategy

The Genre Filtering System requires a dual testing approach combining unit tests for specific examples and property-based tests for universal behaviors.

### Property-Based Testing

**Library:** fast-check (JavaScript property-based testing library)

**Configuration:**
- Minimum 100 iterations per property test
- Each test tagged with feature name and property number
- Tag format: `Feature: genre-filtering-system, Property {N}: {description}`

**Property Test Implementation:**

Each correctness property from the design document should be implemented as a property-based test:

1. **Property 1 (Translation):** Generate random valid Khmer genre names, verify translation returns correct English values
2. **Property 2 (Any-Match):** Generate random content items with various category combinations, verify filtering logic
3. **Property 3 (Immutability):** Generate random content items, verify filtering doesn't mutate original objects
4. **Property 4 (Exact Match):** Generate random category strings with variations, verify only exact matches included
5. **Property 5 (One-to-Many):** Generate random content for multi-value genres, verify all mapped values matched
6. **Property 6 (Rendered Fields):** Generate random content items, verify rendered output contains required fields
7. **Property 7 (Count Accuracy):** Generate random filtered results, verify count equals array length
8. **Property 8 (URL Filtering):** Generate random valid genre URLs, verify filtering initializes correctly
9. **Property 9 (Validation):** Generate random strings (valid and invalid), verify validation function correctness
10. **Property 10 (Type-Agnostic):** Generate random mix of movies and series, verify both types included
11. **Property 11 (Type Info):** Generate random content items, verify type field accessible in output
12. **Property 12 (Bidirectional):** Generate random English categories, verify round-trip mapping consistency

**Example Property Test:**
```javascript
// Feature: genre-filtering-system, Property 2: Any-Match Filtering Logic
test('filtering includes items where any category matches', () => {
  fc.assert(
    fc.property(
      fc.array(contentItemArbitrary),
      fc.array(fc.string()),
      (items, categories) => {
        const filtered = filterMediaByGenre(items, categories);
        filtered.forEach(item => {
          expect(
            item.categories.some(cat => categories.includes(cat))
          ).toBe(true);
        });
      }
    ),
    { numRuns: 100 }
  );
});
```

### Unit Testing

Unit tests complement property tests by verifying specific examples, edge cases, and integration points:

**Genre Mapper Tests:**
- Test each specific Khmer-to-English mapping (Requirements 1.2-1.8)
- Test reverse mapping for known categories
- Test `getAllKhmerGenres()` returns exactly 7 genres
- Test `isValidGenre()` with valid and invalid inputs
- Test unknown genre returns null

**Filtering Logic Tests:**
- Test filtering with "មនោសញ្ចេតនា" includes both "psychological" and "drama" items
- Test empty media array returns empty results
- Test malformed categories field skipped gracefully
- Test system categories ("top", "trending") not included in genre mapping

**GenrePage Component Tests:**
- Test invalid genre displays error message
- Test empty results displays empty state
- Test genre name displayed in heading
- Test result count displayed correctly
- Test clicking movie navigates to `/movie/{id}`
- Test clicking series navigates to `/series/{id}`

**Integration Tests:**
- Test navigation from Navbar genre link to GenrePage
- Test URL parameter extraction and filtering
- Test browser back/forward navigation updates filtered results

### Test Organization

```
src/
├── utils/
│   ├── genreMapper.js
│   └── __tests__/
│       ├── genreMapper.test.js (unit tests)
│       └── genreMapper.properties.test.js (property tests)
├── Page/
│   ├── GenrePage.jsx
│   └── __tests__/
│       ├── GenrePage.test.js (unit tests)
│       └── GenrePage.properties.test.js (property tests)
└── __tests__/
    └── integration/
        └── genreFiltering.test.js
```

### Testing Priorities

**High Priority (Must Test):**
1. Genre mapping correctness (all 7 mappings)
2. Filtering logic with any-match behavior
3. One-to-many mapping support
4. Invalid genre handling
5. Empty results handling

**Medium Priority (Should Test):**
6. Data immutability during filtering
7. Exact matching (no partial matches)
8. Result count accuracy
9. Type-agnostic filtering
10. Malformed data handling

**Low Priority (Nice to Test):**
11. Bidirectional mapping consistency
12. URL-based initialization
13. Rendered field presence
14. Type information preservation

### Performance Testing

While not part of correctness testing, performance should be validated:

- Benchmark filtering with 1000 items (should be < 100ms)
- Benchmark Genre Mapper lookups (should be O(1))
- Monitor rendering performance with large result sets

Use browser DevTools Performance tab or `console.time()` for measurements during development.
