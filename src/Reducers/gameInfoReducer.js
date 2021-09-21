function gameInfoReducer(state, action) {
	switch (action.type) {
		case "generalKnowledgeGame":
			return updateGeneralKnowledgeGame(state, action);
		default:
			return new Error("not valid game name");
	}
}
export default gameInfoReducer;
