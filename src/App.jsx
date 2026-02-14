import React from "react";
import Navbar from "./components/Navbar.jsx";
import Signup from "./signup/Signup.jsx";
import Footer from "./components/Footer.jsx";
import Signin from "./signup/Signin.jsx";

export default function App() {
	return (
		<div>
			{/* <Navbar /> */}
			<Signup />
			<Signin />
		</div>
	);
};
