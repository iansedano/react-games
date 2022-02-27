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

const DEFAULT_STATE = {
	darkMode: false,
	page: "home",
	userName: "Nomad",
	lastLogin: new Date(),
	quizTimesPlayed: 0,
	quizNumberOfQuestionsSet: 10,
	quizDifficultySet: "",
	quizCategorySet: "",
	quizAnswers: [],
};

export default DEFAULT_STATE;
