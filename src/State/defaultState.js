const DEFAULT_STATE = {
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

export default DEFAULT_STATE;