// Hook imports
import useFetch, { STATUS, DEFAULT_FETCH_OPTIONS } from "./useFetch";

const OPEN_TRIVIA_RESPONSE_CODES = {
	0: "Success",
	1: "No Results",
	2: "Invalid Parameter",
	3: "Token not found",
	4: "Token Empty",
};

function useOpenTriviaApi(endpoint, options = DEFAULT_FETCH_OPTIONS) {
	const url = "https://opentdb.com/" + endpoint;
	const { status, error, response } = useFetch(url, options);

	if (status === STATUS.resolved) {
		if (response.response_code !== OPEN_TRIVIA_RESPONSE_CODES[0]) {
			return {
				status: status,
				error: OPEN_TRIVIA_RESPONSE_CODES[response.response_code],
				response: response,
			};
		}
	}

	return { status, error, response };
}

export default useOpenTriviaApi;
