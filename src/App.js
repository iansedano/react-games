import { createContext, useState, useEffect } from "react";

import Home from "./Home";
import HeaderBar from "./HeaderBar";

import "./App.css";
import "./Utility.css";

export const darkModeContext = createContext();

function App() {
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark-mode");
		} else document.body.classList.remove("dark-mode");
	});
	return (
		<darkModeContext.Provider value={setDarkMode}>
			<HeaderBar />
			<Home />
		</darkModeContext.Provider>
	);
}

export default App;
