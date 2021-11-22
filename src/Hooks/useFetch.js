import { useState, useEffect } from "react";

export const STATUS = {
	pending: "pending",
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
	const [status, setStatus] = useState(STATUS.pending);

	console.log(status);

	useEffect(() => {
		if (options.abort !== true) {
			(async () => {
				if (status === STATUS.pending) {
					try {
						const response = await fetch(url);
						if (response.ok) {
							// TODO - some way to accept different data types?
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
				}
			})();
		} else if (options.abort === true) {
			if (options.cacheValue) {
				setResponse(options.cacheValue);
			}
			setStatus(STATUS.resolved);
		}
	}, [url, options.abort, options.cacheValue, response, error]);

	return { status, error, response };
}

export default useFetch;
