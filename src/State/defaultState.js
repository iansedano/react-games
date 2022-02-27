// const DEFAULT_STATE = {
// 	siteSettings: {
// 		darkMode: false,
// 		page: "home",
// 	},
// 	user: {
// 		name: "Nomad",
// 		lastLogin: new Date(),
// 		preferredGame: null,
// 	},
// 	games: {
// 		timesTable: { timesPlayed: 0 },
// 		connectFour: { timesPlayed: 0 },
// 		generalKnowledge: {
// 			timesPlayed: 0,
// 			settings: {
// 				numberOfQuestions: 10,
// 				difficulty: "",
// 				category: "",
// 			},
// 			answers: [],
// 		},
// 	},
// };

import PAGES from "./PAGES";

const DEFAULT_STATE = {
	darkMode: false,
	page: PAGES.HOME,
	userName: "Nomad",
	lastLogin: new Date(),
	quizTimesPlayed: 0,
	quizNumberOfQuestionsSet: 10,
	quizDifficultySet: "",
	quizCategorySet: "",
	quizAnswers: [],
	timesTableTimesPlayed: 0,
	connectFourTimesPlayed: 0,
};

export default DEFAULT_STATE;
