// https://avatars.dicebear.com/docs/http-api
// `https://avatars.dicebear.com/api/bottts/${name}.svg`
import { useContext } from "react";

import { globalState } from "./App";

function UserProfile() {
	const { state } = useContext(globalState);
	return (
		<div className="flex-row border-rad justify-evenly user-profile">
			<img
				alt="user gravatar"
				className="user-avatar"
				src={`https://avatars.dicebear.com/api/bottts/${state.user.name}.svg`}
			></img>
			<h2>Welcome, {state.user.name}!</h2>
			<div>
				<h4>Times played</h4>
				<ul>
					<li>Times Table - {state.games.timesTable.timesPlayed}</li>
					<li>
						General Knowledge -{" "}
						{state.games.generalKnowledge.timesPlayed}
					</li>
					<li>Connect 4 - {state.games.connectFour.timesPlayed}</li>
				</ul>
			</div>
		</div>
	);
}

export default UserProfile;
