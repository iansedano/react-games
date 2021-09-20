import { createContext, useReducer, useEffect } from "react";

import Home from "./Home";
import HeaderBar from "./HeaderBar";

import reducer from "./Reducers/reducer";

import "./App.css";
import "./Utility.css";

export const globalState = createContext();

const defaultState = {
	siteSettings: {
		darkMode: true,
	},
	user: {
		name: null,
		lastLogin: new Date(),
		preferredGame: null,
	},
	games: {
		timesTable: {},
		connectFour: {},
		generalKnowledge: {
			timesPlayed: null,
			settings: {
				numberOfQuestions: 10,
				difficulty: null,
				sessionToken: null,
			},
			answers: [],
		},
	},
};

function App() {
	const [state, dispatch] = useReducer(reducer, defaultState);
	useEffect(() => {
		if (state.siteSettings.darkMode) {
			document.body.classList.add("dark-mode");
		} else document.body.classList.remove("dark-mode");
	});
	return (
		<globalState.Provider value={[state, dispatch]}>
			<HeaderBar />
			<Home />
			<HeaderBar />
		</globalState.Provider>
	);
}

export default App;
