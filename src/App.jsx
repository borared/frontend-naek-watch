import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import MoviePage from "./moviedisplay/MoviePage.jsx"; // new page component
import sampleMovie from "./data/moviedetail.js";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home page shows initial movie */}
        <Route path="/" element={<MoviePage movie={sampleMovie} />} />

        {/* Dynamic route for each movie */}
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}
