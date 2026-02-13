import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Signup from "./signup/Signup.jsx";
import Main from "./Page/Main.jsx";
import Footer from "./components/Footer.jsx";
// import MoviePage from "./moviedisplay/MoviePage.jsx"; 

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/signup" element={<Signup />} />
                
                {/* When you're ready for dynamic movies, use this: */}
                {/* <Route path="/movie/:id" element={<MoviePage />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}