import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Signup from "./signup/Signup.jsx";
import Main from "./Page/Main.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Router>
			{/* <Signup /> */}
			{/* <section className="min-h-screen" /> */}
            <Footer />
		</>
	);
}
