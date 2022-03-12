/**
 * Default globalState
 */

import PAGES from "./PAGES";

const DEFAULT_STATE = {
	// General Site Settings
	darkMode: false,
	page: PAGES.HOME,
	userName: "Nomad",
	lastLogin: new Date(),

	// Quiz Game
	quizTimesPlayed: 0,
	quizNumberOfQuestionsSet: 3,
	quizDifficultySet: "",
	quizCategorySet: "",
	quizAnswers: [],

	// Other Games
	timesTableTimesPlayed: 0,
	connectFourTimesPlayed: 0,
};

export default DEFAULT_STATE;
