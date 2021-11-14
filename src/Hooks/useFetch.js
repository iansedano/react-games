import { useState, useEffect } from "react";

export const STATUS = {
	"pending" : "pending",
	"resolved" : "resolved",
	"rejected" : "rejected"
}

const defaultOptions = {
	"abort" : false
}

function useFetch(url, options = defaultOptions) {
	console.log(url)
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [status, setStatus] = useState(STATUS.pending)

	useEffect(() => {
		if (options.abort !== true) {
			console.log("MAKING REQUEST  " + url);
			(async () => {
				try {
					const response = await fetch(url);
					if (response.ok) {
						// TODO - some way to accept different data types?
						setResponse(await response.json());
						setStatus(STATUS.resolved);
					} else {
						setError("Something went with the request.");
						setStatus(STATUS.rejected);
					}
				} catch (e) {
					setError(`Error message: ${e.message}`);
					setStatus(STATUS.rejected);
				}
			})();
		} else {
			setStatus(STATUS.resolved)
		}
	}, [url, options.abort]);

	return { status, error, response };
}

export default useFetch;
