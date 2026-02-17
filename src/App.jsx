import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Signup from "./signup/Signup.jsx";
import Main from "./Page/Main.jsx";
import Footer from "./components/Footer.jsx";
import MoviePage from "./moviedisplay/MoviePage.jsx";

export default function App() {
    return (
        <BrowserRouter>
            {/* Navbar is fixed, so it stays at the top */}
            <Navbar />

            {/* This wrapper ensures content starts below the navbar */}
            <main className="pt-15 min-h-screen bg-black">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/movie/:id" element={<MoviePage />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}