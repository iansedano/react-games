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
		darkMode: false,
		page: "home",
	},
	user: {
		name: "Nomad",
		lastLogin: new Date(),
		preferredGame: null,
	},
	games: {
		timesTable: { timesPlayed: 0 },
		connectFour: { timesPlayed: 0 },
		generalKnowledge: {
			timesPlayed: 0,
			settings: {
				numberOfQuestions: 10,
				difficulty: "",
				category: "",
			},
			answers: [],
		},
	},
};

const localStorageKey = "USER_DATA";

function App() {
	const [state, dispatch] = useReducer(reducer, defaultState, (init) => {
		return JSON.parse(localStorage.getItem(localStorageKey)) || init;
	});

	// Do we really want to update local store EVERY time state changes? this is not good for performance. 
	// How about if we just do it at the beginning and end of the lifecycle? 
	// useEffect(() => {
	// 	localStorage.setItem(localStorageKey, JSON.stringify(state));
	// 	return () => {localStorage.setItem(localStorageKey, JSON.stringify(state));}
	// }, []);
	// or maybe just at the end? [remove the first call to localStorage]

	useEffect(() => {
		localStorage.setItem(localStorageKey, JSON.stringify(state));
	}, [state]);


	// this is running on every render. it should only run when darkMode changes
	useEffect(() => {
		if (state.siteSettings.darkMode) {
			document.body.classList.add("dark-mode");
		} else document.body.classList.remove("dark-mode");
	});

	let page;
	/*
	*  We don't have a real routing solution. For that reason, I think this switch statement is a solid idea.
	*  My main concern is relying on "random" strings like "timesTableGame" and "generalKnowledgeGame".
	*  How about if we extract them into a central location that serves as a single source of truth?
	*  ie: const ROUTER = {HOME: 'home', CONNECT_FOUR: 'connectFour' ....}
	*/
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
		/*
		* This is a great demonstration of how powerful context can be. However,
		* having ONE big(and global) context can hurt performance(if you are not careful). Why?
		* Each time your state changes, your entire application will re-render 
		* since all the components depend on the global state. There are two easy solutions:
		* 1 - React for a state management library [redux, recoil...]
		* 2- Split your state into multiple context providers.
		* 3- Optimize your context
		* I think the solutions should be outside the scope of the course[that's up to you tho] 
		* but it might be nice to mention that this is not a good approach for large applications.
		* more: https://kentcdodds.com/blog/how-to-optimize-your-context-value
		*/
		<globalState.Provider value={{ state, dispatch }}>
			<main className="flex-col full-width">
				<HeaderBar />
				{page}
				{/* is there any reason the PageNavButton can't be inside the homepage component? */}
				{state.siteSettings.page !== "home" ? (
					<PageNavButton page="home">Home</PageNavButton>
				) : null}
				<HeaderBar />
			</main>
		</globalState.Provider>
	);
}

export default App;
