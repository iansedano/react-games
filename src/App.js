// Library imports
import { createContext, useReducer, useEffect } from "react";

// Component imports
import PageNavButton from "./Components/PageNavButton";
import Error from "./Components/Error";

// State imports
import reducer from "./State/reducer";
import DEFAULT_STATE from "./State/defaultState";
import PAGES from "./State/PAGES";

// Hook imports
import useLocalStorage from "./Hooks/useLocalStorage";

// Page imports
import Home from "./Home/Home";
import TimesTableGame from "./TimesTableGame/TimesTableGame";
import ConnectFour from "./ConnectFour/ConnectFour";
import QuizApp from "./QuizGame/QuizApp";

import HeaderBar from "./HeaderBar";

// CSS
import "./App.css";
import "./Utility.css";

export const globalContext = createContext();

const localStorageKey = "USER_DATA";

function App() {
	const [store, setStore] = useLocalStorage(localStorageKey, DEFAULT_STATE);
	const [globalState, globalDispatch] = useReducer(reducer, store);

	useEffect(() => {
		setStore(globalState);
	}, [globalState, setStore]);

	useEffect(() => {
		if (globalState.darkMode) {
			document.body.classList.add("dark-mode");
		} else document.body.classList.remove("dark-mode");
	}, [globalState.darkMode]);

	let page;

	switch (globalState.page) {
		case PAGES.HOME:
			page = <Home />;
			break;
		case PAGES.CONNECT_FOUR:
			page = <ConnectFour />;
			break;
		case PAGES.QUIZ_GAME:
			page = <QuizApp />;
			break;
		case PAGES.TIMES_TABLE_GAME:
			page = <TimesTableGame />;
			break;
		default:
			page = <Error />;
			break;
	}

	return (
		<globalContext.Provider value={{ globalState, globalDispatch }}>
			<main className="flex-col full-width">
				<HeaderBar />
				{page}
				{globalState.page !== "home" ? ( // if page not home then no need for button
					<PageNavButton page={PAGES.HOME}>Home</PageNavButton>
				) : null}
				<HeaderBar />
			</main>
		</globalContext.Provider>
	);
}

export default App;
