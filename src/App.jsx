import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./signup/Signup.jsx";
import Signin from "./signup/Signin.jsx";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/signin" replace />} />
			<Route path="/signin" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />
		</Routes>
	);
};
