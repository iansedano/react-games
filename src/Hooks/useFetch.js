import { useState, useEffect } from "react";

export const STATUS = {
	idle: "idle",
	fetching: "fetching",
	resolved: "resolved",
	rejected: "rejected",
};

export const DEFAULT_FETCH_OPTIONS = {
	abort: false,
	cacheValue: null,
};

function useFetch(url, options = DEFAULT_FETCH_OPTIONS) {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [status, setStatus] = useState(STATUS.idle);

	if (options.abort === true && status !== STATUS.resolved) {
		if (options.cacheValue) {
			setResponse(options.cacheValue);
			setStatus(STATUS.resolved);
		}
	}

	useEffect(() => {
		const request = async () => {
			console.log("actually fectching", url);

			let response;

			try {
				response = await fetch(url);

				if (response.ok) {
					setResponse(await response.json());
				} else {
					setError("Something went with the request.");
				}
			} catch (e) {
				setError(`Error message: ${e.message}`);
			} finally {
				if (response) {
					setStatus(STATUS.resolved);
				} else if (error) {
					setStatus(STATUS.rejected);
				}
			}
		};

		if (status === STATUS.idle) {
			setStatus(STATUS.fetching);
			request();
		}
	}, [url, response, error, status]);

	return { status, error, response };
}

export default useFetch;
