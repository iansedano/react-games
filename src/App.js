// Library imports
import { createContext, useReducer, useEffect } from "react";

// Component imports
import PageNavButton from "./Components/PageNavButton";
import Error from "./Components/Error"

// State imports
import reducer from "./State/reducer";
import DEFAULT_STATE from "./State/defaultState"

// Project imports
import Home from "./Home";
import HeaderBar from "./HeaderBar";
import TimesTableGame from "./Games/TimesTableGame/TimesTableGame";
import ConnectFour from "./Games/ConnectFour/ConnectFour";
import GeneralKnowledgeGame from "./Games/GeneralKnowledgeGame/GeneralKnowledgeGame";

// CSS
import "./App.css";
import "./Utility.css";

export const globalState = createContext();

const localStorageKey = "USER_DATA";

const PAGES = {
	"home": <Home />,
	"timesTableGame": <TimesTableGame />,
	"connectFour": <ConnectFour />,
	"generalKnowledgeGame": <GeneralKnowledgeGame />
}

function App() {
	const [state, dispatch] = useReducer(reducer, DEFAULT_STATE, (init) => {
		return JSON.parse(localStorage.getItem(localStorageKey)) || init;
	});

	useEffect(() => {
		localStorage.setItem(localStorageKey, JSON.stringify(state));
	}, [state]);

	useEffect(() => {
		if (state.siteSettings.darkMode) {
			document.body.classList.add("dark-mode");
		} else document.body.classList.remove("dark-mode");
	}, [state.siteSettings.darkMode]);

	return (
		<globalState.Provider value={{ state, dispatch }}>
			<main className="flex-col full-width">
				<HeaderBar />
				{PAGES[state.siteSettings.page] || <Error/>}
				{state.siteSettings.page !== "home" ? ( // if page not home then no need for button
					<PageNavButton page="home">Home</PageNavButton>
				) : null}
				<HeaderBar />
			</main>
		</globalState.Provider>
	);
}

export default App;
