import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Signup from "./signup/Signup.jsx";
import Main from "./Page/Main.jsx";
import Footer from "./components/Footer.jsx";
import MovieDetail from "./moviedisplay/MovieDetail.jsx";
import Store from "./Page/Store.jsx";
import Tasks from "./Page/Tasks.jsx";
import RedeemCheckout from "./Page/RedeemCheckout.jsx";
import { UserProvider } from "./context/UserContext";
import MoviesPage from "./Page/MoviePage.jsx";
import SeriesPage from "./Page/SeriesPage.jsx"

export default function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Navbar />

                <main className="pt-15 min-h-screen bg-black">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/movie/:id" element={<MovieDetail />} />
                        <Route path="/movies" element={<MoviesPage />} />
                        <Route path="/series" element={<SeriesPage />} />
                        <Route path="/store" element={<Store />} />
                        <Route path="/missions" element={<Tasks />} />
                        <Route path="/redeem-checkout" element={<RedeemCheckout />} />
                    </Routes>
                </main>

                <Footer />
            </BrowserRouter>
        </UserProvider>
    );
}
