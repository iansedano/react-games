function updateGeneralKnowledgeGame(state, action) {
	switch (action.type) {
		case "updateSettings":
			return {
				...state,
				games: {
					...state.games,
					generalKnowledge: {
						...state.games.generalKnowledge,
						settings: {
							...state.games.generalKnowledge.settings,
							...action.payload,
						},
					},
				},
			};
		case "addAnswers":
			return {
				...state,
				games: {
					...state.games,
					generalKnowledge: {
						...state.games.generalKnowledge,
						answers: [
							...state.games.generalKnowledge.answers,
							...action.payload,
						],
					},
				},
			};
		case "resetAnswers":
			return {
				...state,
				games: {
					...state.games,
					generalKnowledge: {
						...state.games.generalKnowledge,
						answers: [],
					},
				},
			};
		default:
			return new Error("invalid general knowledge game action");
	}
}

function gameInfoReducer(state, action) {
	const splitAction = action.type.split("/");
	const actionWithShortenedType = {
		...action,
		type: splitAction.slice(1).join("/"),
	};
	switch (splitAction[0]) {
		case "generalKnowledgeGame":
			return updateGeneralKnowledgeGame(state, actionWithShortenedType);
		default:
			return new Error("not valid game name");
	}
}
export default gameInfoReducer;
