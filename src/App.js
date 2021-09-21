import { createContext, useReducer, useEffect } from "react";

import Home from "./Home";
import HeaderBar from "./HeaderBar";
import PageNavButton from "./Components/PageNavButton";
import TimesTableGame from "./Games/TimesTableGame/TimesTableGame";
import ConnectFour from "./Games/ConnectFour/ConnectFour";
import GeneralKnowledgeGame from "./Games/GeneralKnowledgeGame/GeneralKnowledgeGame";

import reducer from "./Reducers/reducer";

import "./App.css";
import "./Utility.css";

export const globalState = createContext();

const defaultState = {
	siteSettings: {
		darkMode: true,
		page: "generalKnowledgeGame",
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

	let page;

	switch (state.siteSettings.page) {
		case "home":
			page = <Home />;
			break;
		case "timesTableGame":
			page = <TimesTableGame />;
			break;
		case "connectFour":
			page = <ConnectFour />;
			break;
		case "generalKnowledgeGame":
			page = <GeneralKnowledgeGame />;
			break;
		default:
			return new Error();
	}

	return (
		<globalState.Provider value={[state, dispatch]}>
			<HeaderBar />
			{page}
			{state.siteSettings.page !== "home" ? (
				<PageNavButton page="home">Home</PageNavButton>
			) : null}
			<HeaderBar />
		</globalState.Provider>
	);
}

export default App;
