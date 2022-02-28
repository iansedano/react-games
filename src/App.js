// Library imports
import { createContext, useReducer, useEffect } from "react";

// Component imports
import PageNavButton from "./Components/PageNavButton";
import Error from "./Components/Error";

// State imports
import reducer from "./State/reducer";
import DEFAULT_STATE from "./State/defaultState";
import PAGES from "./State/PAGES";

// Page imports
import Home from "./Home/Home";
import TimesTableGame from "./TimesTableGame/TimesTableGame";
import ConnectFour from "./ConnectFour/ConnectFour";
import GeneralKnowledgeGame from "./GeneralKnowledgeGame/GeneralKnowledgeGame";

import HeaderBar from "./HeaderBar";

// CSS
import "./App.css";
import "./Utility.css";

export const globalState = createContext();

const localStorageKey = "USER_DATA";

function App() {
	const [state, dispatch] = useReducer(reducer, DEFAULT_STATE, (init) => {
		return JSON.parse(localStorage.getItem(localStorageKey)) || init;
	});

	useEffect(() => {
		localStorage.setItem(localStorageKey, JSON.stringify(state));
	}, [state]);

	useEffect(() => {
		if (state.darkMode) {
			document.body.classList.add("dark-mode");
		} else document.body.classList.remove("dark-mode");
	}, [state.darkMode]);

	let page;

	switch (state.page) {
		case PAGES.HOME:
			page = <Home />;
			break;
		case PAGES.CONNECT_FOUR:
			page = <ConnectFour />;
			break;
		case PAGES.GENERAL_KNOWLEDGE_GAME:
			page = <GeneralKnowledgeGame />;
			break;
		case PAGES.TIMES_TABLE_GAME:
			page = <TimesTableGame />;
			break;
		default:
			page = <Error />;
			break;
	}

	return (
		<globalState.Provider value={{ state, dispatch }}>
			<main className="flex-col full-width">
				<HeaderBar />
				{page}
				{state.page !== "home" ? ( // if page not home then no need for button
					<PageNavButton page="home">Home</PageNavButton>
				) : null}
				<HeaderBar />
			</main>
		</globalState.Provider>
	);
}

export default App;
