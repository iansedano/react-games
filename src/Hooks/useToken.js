/**
 * Hook based around useRef that stores a session token used by the OpenTriviaAPI.
 * These tokens ensure that you don't get served the same question in a session.
 * It is appended to the request for questions, see useQuiz and useFetchQuestions.
 */

// Library imports
import { useRef } from "react";

// Hook imports
import { STATUS } from "./useFetch";
import useOpenTriviaApi from "./useOpenTriviaApi";

function useToken() {
	const tokenRef = useRef();

	const haveToken = Boolean(tokenRef.current);

	const { status, response } = useOpenTriviaApi(
		"api_token.php?command=request",
		{ abort: haveToken }
	);

	if (!haveToken && status === STATUS.resolved) {
		tokenRef.current = response.token;
	}

	return tokenRef.current;
}

export default useToken;
