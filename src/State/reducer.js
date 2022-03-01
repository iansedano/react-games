import ACTIONS from "./ACTIONS";
import PAGES from "./PAGES";

function reducer(state, action) {
	// const splitAction = action.type.split("/");
	// const actionWithShortenedType = {
	// 	...action,
	// 	type: splitAction.slice(1).join("/"),
	// };
	// switch (splitAction[0]) {
	// 	case "siteSettings":
	// 		return siteSettingsReducer(state, actionWithShortenedType);
	// 	case "userInfo":
	// 		return userInfoReducer(state, actionWithShortenedType);
	// 	case "gameInfo":
	// 		return gameInfoReducer(state, actionWithShortenedType);
	// 	default:
	// 		throw new Error("invalid root action type");
	// }

	switch (action.type) {
		// --- Site Actions ---
		case ACTIONS.TOGGLE_DARK_MODE:
			return { ...state, darkMode: !state.darkMode };
		case ACTIONS.CHANGE_PAGE:
			return { ...state, page: PAGES[action.payload] };

		// --- Quiz Actions ---
		case ACTIONS.QUIZ_ADD_ANSWERS:
			return {
				...state,
				quizAnswers: [...state.quizAnswers, action.payload],
			};
		case ACTIONS.QUIZ_RESET_ANSWERS:
			return {
				...state,
				quizAnswers: [],
			};
		case ACTIONS.QUIZ_INCREMENT_TIMES_PLAYED:
			return { ...state, quizTimesPlayed: state.quizTimesPlayed + 1 };
		case ACTIONS.QUIZ_UPDATE_SETTINGS:
			return {
				...state,
				quizNumberOfQuestionsSet: action.payload.numberOfQuestions,
				quizDifficultySet: action.payload.difficulty,
				quizCategorySet: action.payload.category,
			};

		// ---
		default:
			throw new Error("invalid action type");
	}
}

export default reducer;
