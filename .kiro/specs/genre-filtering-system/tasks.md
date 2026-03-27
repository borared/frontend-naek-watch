# Implementation Plan: Genre Filtering System

## Overview

This plan implements a bilingual genre filtering system for the NaekWatch streaming platform. The implementation consists of three main components: a Genre Mapper utility for translating Khmer genre names to English category values, a GenrePage component for displaying filtered content, and route integration in App.jsx. The system supports one-to-many genre mappings and many-to-many content-genre relationships, with all filtering performed client-side for optimal performance.

## Tasks

- [x] 1. Set up Genre Mapper utility
  - [x] 1.1 Create genreMapper.js utility module
    - Create `src/utils/genreMapper.js` file
    - Define GENRE_MAP constant with all 7 Khmer-to-English mappings
    - Implement `getEnglishCategories()` function for Khmer-to-English translation
    - Implement `getKhmerGenre()` function for English-to-Khmer reverse mapping
    - Implement `getAllKhmerGenres()` function to return all supported genres
    - Implement `isValidGenre()` function for genre validation
    - Add JSDoc comments documenting each function and the mapping structure
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 7.1, 7.2, 7.3, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6_

  - [ ]* 1.2 Write property test for Genre Mapper translation consistency
    - **Property 1: Genre Translation Consistency**
    - **Validates: Requirements 3.1**
    - Use fast-check to generate valid Khmer genre names
    - Verify translation returns non-empty array matching defined mapping
    - Tag: "Feature: genre-filtering-system, Property 1"

  - [ ]* 1.3 Write property test for bidirectional mapping consistency
    - **Property 12: Bidirectional Mapping Consistency**
    - **Validates: Requirements 12.3**
    - Use fast-check to generate English category values
    - Verify round-trip mapping (English → Khmer → English) preserves original value
    - Tag: "Feature: genre-filtering-system, Property 12"

  - [ ]* 1.4 Write unit tests for Genre Mapper
    - Test each specific Khmer-to-English mapping (វាយប្រហារ → action, etc.)
    - Test one-to-many mappings (មនោសញ្ចេតនា → [psychological, drama])
    - Test `getAllKhmerGenres()` returns exactly 7 genres
    - Test `isValidGenre()` with valid and invalid inputs
    - Test unknown genre returns null
    - _Requirements: 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 7.1, 7.3_

- [x] 2. Implement GenrePage component with filtering logic
  - [x] 2.1 Create GenrePage component structure
    - Create `src/Page/GenrePage.jsx` file
    - Import necessary dependencies (React Router hooks, Genre Mapper, media data, MovieCard)
    - Set up component with useParams hook to extract genre from URL
    - Add basic component structure with container and grid layout
    - _Requirements: 2.1, 6.1, 6.2_

  - [x] 2.2 Implement genre validation and error handling
    - Use `isValidGenre()` to validate genre parameter from URL
    - Display error message for invalid genres: "ប្រភេទរឿងមិនត្រឹមត្រូវ"
    - Provide link to return to home page on error
    - Handle case where Genre Mapper returns null
    - _Requirements: 6.5, 11.2, 11.6_

  - [x] 2.3 Implement filtering logic with many-to-many support
    - Translate Khmer genre to English categories using `getEnglishCategories()`
    - Filter media array where any item category matches any translated category
    - Use Array.some() for any-match logic
    - Skip items with malformed categories field (non-array)
    - Wrap filtering in useMemo hook for performance optimization
    - _Requirements: 3.1, 3.2, 3.3, 3.5, 4.1, 4.2, 4.4, 4.5, 9.2, 9.3, 10.1, 10.2, 11.3_

  - [ ]* 2.4 Write property test for any-match filtering logic
    - **Property 2: Any-Match Filtering Logic**
    - **Validates: Requirements 3.2, 4.1, 4.2**
    - Use fast-check to generate content items with various category combinations
    - Verify filtered items have at least one matching category
    - Tag: "Feature: genre-filtering-system, Property 2"

  - [ ]* 2.5 Write property test for data immutability
    - **Property 3: Data Immutability During Filtering**
    - **Validates: Requirements 3.4, 4.3**
    - Use fast-check to generate content items
    - Verify filtering doesn't mutate original objects
    - Compare object references and field values before/after filtering
    - Tag: "Feature: genre-filtering-system, Property 3"

  - [ ]* 2.6 Write property test for exact category matching
    - **Property 4: Exact Category Matching**
    - **Validates: Requirements 3.5**
    - Use fast-check to generate category strings with variations
    - Verify only exact matches (case-sensitive, no partial) are included
    - Tag: "Feature: genre-filtering-system, Property 4"

  - [ ]* 2.7 Write property test for one-to-many mapping support
    - **Property 5: One-to-Many Mapping Support**
    - **Validates: Requirements 1.9, 4.4**
    - Use fast-check to generate content for multi-value genres
    - Verify items with any mapped value are included
    - Test specifically with មនោសញ្ចេតនា → [psychological, drama]
    - Tag: "Feature: genre-filtering-system, Property 5"

  - [x] 2.8 Implement results display with grid layout
    - Display Khmer genre name as page heading
    - Display result count: "{count} រឿង"
    - Render filtered items in responsive grid using MovieCard component
    - Wrap each MovieCard in Link component with correct route (movie vs series)
    - Use Tailwind CSS classes matching existing NaekWatch design
    - _Requirements: 5.1, 5.2, 5.4, 5.5, 5.6, 10.3, 10.4, 10.5_

  - [ ]* 2.9 Write property test for rendered content fields
    - **Property 6: Rendered Content Fields**
    - **Validates: Requirements 5.2**
    - Use fast-check to generate content items
    - Verify rendered output contains poster image, title, and year
    - Tag: "Feature: genre-filtering-system, Property 6"

  - [ ]* 2.10 Write property test for result count accuracy
    - **Property 7: Result Count Accuracy**
    - **Validates: Requirements 5.5**
    - Use fast-check to generate filtered result sets
    - Verify displayed count equals array length
    - Tag: "Feature: genre-filtering-system, Property 7"

  - [x] 2.11 Implement empty state handling
    - Check if filtered array is empty
    - Display empty state message: "មិនមានរឿងក្នុងប្រភេទនេះទេ"
    - Show genre name in heading even when empty
    - Provide link to browse other genres or return home
    - _Requirements: 3.6, 11.4_

  - [ ]* 2.12 Write property test for type-agnostic filtering
    - **Property 10: Type-Agnostic Filtering**
    - **Validates: Requirements 10.1**
    - Use fast-check to generate mix of movies and series
    - Verify both types included in results without discrimination
    - Tag: "Feature: genre-filtering-system, Property 10"

  - [ ]* 2.13 Write property test for type information preservation
    - **Property 11: Type Information Preservation**
    - **Validates: Requirements 10.3**
    - Use fast-check to generate content items
    - Verify type field accessible for rendering type-specific elements
    - Tag: "Feature: genre-filtering-system, Property 11"

  - [ ]* 2.14 Write unit tests for GenrePage component
    - Test invalid genre displays error message
    - Test empty results displays empty state
    - Test genre name displayed in heading
    - Test result count displayed correctly
    - Test malformed categories field handled gracefully
    - Test filtering with មនោសញ្ចេតនា includes both psychological and drama items
    - _Requirements: 3.6, 4.5, 5.4, 5.5, 6.5, 11.2, 11.3, 11.4_

- [x] 3. Checkpoint - Verify core functionality
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Integrate GenrePage route into App.jsx
  - [x] 4.1 Add GenrePage route to App.jsx
    - Import GenrePage component
    - Add route: `<Route path="/genre/:genreName" element={<GenrePage />} />`
    - Place route in appropriate position within Routes component
    - _Requirements: 2.1, 6.1_

  - [ ]* 4.2 Write property test for URL-based filtering initialization
    - **Property 8: URL-Based Filtering Initialization**
    - **Validates: Requirements 6.2**
    - Use fast-check to generate valid genre URLs
    - Verify filtering initializes correctly when navigating to /genre/{genreName}
    - Tag: "Feature: genre-filtering-system, Property 8"

  - [ ]* 4.3 Write integration tests for navigation
    - Test navigation from Navbar genre link to GenrePage
    - Test URL parameter extraction and filtering
    - Test browser back/forward navigation updates filtered results
    - Test clicking movie navigates to /movie/{id}
    - Test clicking series navigates to /series/{id}
    - _Requirements: 2.1, 6.2, 6.3, 10.4, 10.5_

- [ ] 5. Set up testing infrastructure
  - [ ] 5.1 Install testing dependencies
    - Install fast-check for property-based testing: `npm install --save-dev fast-check`
    - Install vitest for test runner: `npm install --save-dev vitest`
    - Install @testing-library/react for component testing: `npm install --save-dev @testing-library/react`
    - Install @testing-library/jest-dom for DOM matchers: `npm install --save-dev @testing-library/jest-dom`
    - Add test script to package.json: `"test": "vitest --run"`

  - [ ] 5.2 Create test directory structure
    - Create `src/utils/__tests__/` directory
    - Create `src/Page/__tests__/` directory
    - Create `src/__tests__/integration/` directory

  - [ ] 5.3 Configure vitest
    - Create `vitest.config.js` with React testing configuration
    - Set up test environment for jsdom
    - Configure test file patterns

- [ ] 6. Write property test for genre validation
  - [ ]* 6.1 Write property test for genre validation correctness
    - **Property 9: Genre Validation Correctness**
    - **Validates: Requirements 7.3**
    - Use fast-check to generate random strings (valid and invalid)
    - Verify validation function returns true only for exact matches
    - Tag: "Feature: genre-filtering-system, Property 9"

- [x] 7. Final checkpoint and verification
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property tests use fast-check with minimum 100 iterations
- All filtering occurs client-side using existing media.js data
- The system supports one-to-many genre mappings (e.g., មនោសញ្ចេតនា → [psychological, drama])
- URL preserves Khmer genre names for bookmarking and sharing
- Error handling ensures graceful degradation for invalid genres and malformed data

