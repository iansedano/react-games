import useFetch, { STATUS } from "../../Hooks/useFetch";

const openTriviaResponseCodes = {
	0: "Success",
	1: "No Results",
	2: "Invalid Parameter",
	3: "Token not found",
	4: "Token Empty",
};

function useOpenTriviaApi(endpoint, options) {
	const url = "https://opentdb.com/" + endpoint;
	const { status, error, response } = useFetch(url, options);
	if (status === STATUS.resolved) {
		if (response.response_code !== openTriviaResponseCodes[0]) {
			return {
				status: status,
				error: openTriviaResponseCodes[response.response_code],
				response: response,
			};
		}
	}

	return { status, error, response };
}

export default useOpenTriviaApi;
