/*
ACTION TYPES

siteSettings
	darkModeToggle
userInfo
	setName
	setLastLogin
	refreshFavoriteGame
gameInfo
	generalKnowledgeGame
		incrementTimesPlayes
		settings
			set


interface gameSiteState {
	siteSettings: {
		darkMode: boolean,
	};
	user: {
		name: string,
		lastLogin: Date,
		preferredGame: string,
	};
	games: {
		timesTable: {},
		connectFour: {},
		generalKnowledge: {
			timesPlayed: number,
			settings: {
				numberOfQuestions: number,
				difficulty: string,
				sessionToken: string,
			},
			answers: [
				{
					date: Date,
					correct: boolean,
					category: number,
					difficulty: string,
				}
			],
		},
	};
}
*/
import siteSettingsReducer from "./siteSettingsReducer";
import userInfoReducer from "./userInfoReducer";
import gameInfoReducer from "./gameInfoReducer";

function reducer(state, action) {
	console.log({ state });
	const splitAction = action.type.split("/");
	const actionWithShortenedType = {
		...action,
		type: splitAction.slice(1).join("/"),
	};
	switch (splitAction[0]) {
		case "siteSettings":
			console.log({ actionWithShortenedType });
			return siteSettingsReducer(state, actionWithShortenedType);
		case "userInfo":
			return userInfoReducer(state, actionWithShortenedType);
		case "gameInfo":
			return gameInfoReducer(state, actionWithShortenedType);
		default:
			throw new Error();
	}
}

export default reducer;
