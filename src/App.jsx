import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Signup from "./signup/Signup.jsx";
import Main from "./Page/Main.jsx";
import Footer from "./components/Footer.jsx";
import MoviePage from "./moviedisplay/MoviePage.jsx";
import sampleMovie from "./data/movies.js";
import { allContent } from "./data/index.js";



export default function App() {
	return (
		<>
			<Router>
				<Navbar />
				
				<Routes>
					{/* <Route path="/" element={<Main />} />
					<Route path="/signup" element={<Signup />} /> */}
					<Route path="/" element={<MoviePage movie={allContent[0]} />} />
					<Route path="/movie/:id" element={<MoviePage />} />
				</Routes>
			</Router> 
			{/* <Signup /> */}
			{/* <section className="min-h-screen" /> */}
            <Footer />
		</>
	);
}
