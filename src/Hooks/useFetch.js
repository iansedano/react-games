/**
 * General purpose fetching hook
 */

// Library imports
import { useEffect, useReducer } from "react";

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

const FETCH_ACTIONS = {
	START: "START_FETCH",
	SUCCESS: "FETCH_SUCCESS",
	FAIL: "FETCH_FAIL",
};

function fetchReducer(state, action) {
	switch (action.type) {
		case FETCH_ACTIONS.START:
			return { ...state, status: STATUS.fetching };
		case FETCH_ACTIONS.SUCCESS:
			return {
				status: STATUS.resolved,
				error: null,
				response: action.payload,
			};
		case FETCH_ACTIONS.FAIL:
			return {
				status: STATUS.rejected,
				error: action.payload,
				response: null,
			};
		default:
			console.error("Invalid fetch action");
			return state;
	}
}

function useFetch(url, options = DEFAULT_FETCH_OPTIONS) {
	const [fetchState, dispatch] = useReducer(fetchReducer, {
		status: STATUS.idle,
		error: null,
		response: null,
	});

	if (options.abort === true && fetchState.status !== STATUS.resolved) {
		if (options.cacheValue) {
			dispatch({
				type: FETCH_ACTIONS.SUCCESS,
				payload: options.cacheValue,
			});
		}
	}

	useEffect(() => {
		const request = async () => {
			try {
				const response = await fetch(url);

				if (response.ok) {
					dispatch({
						type: FETCH_ACTIONS.SUCCESS,
						payload: await response.json(),
					});
				} else {
					dispatch({
						type: FETCH_ACTIONS.FAIL,
						payload: `${response.status}, ${response.statusText}`,
					});
				}
			} catch (e) {
				dispatch({
					type: FETCH_ACTIONS.FAIL,
					payload: `Error message: ${e.message}`,
				});
			}
		};

		if (fetchState.status === STATUS.idle) {
			dispatch({ type: FETCH_ACTIONS.START });
			request();
		}
	}, [url, fetchState.status]);

	return fetchState;
}

export default useFetch;
