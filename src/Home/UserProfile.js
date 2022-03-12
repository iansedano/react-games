// Library imports
import { useContext } from "react";

// State imports
import { globalContext } from "./../App";

function UserProfile() {
	const { globalState } = useContext(globalContext);
	return (
		<div className="flex-row border-rad justify-evenly user-profile">
			<img
				alt="user gravatar"
				className="user-avatar"
				// https://avatars.dicebear.com/docs/http-api
				src={`https://avatars.dicebear.com/api/bottts/${globalState.userName}.svg`}
			></img>
			<h2>Welcome, {globalState.userName}!</h2>
			<div>
				<h4>Times played</h4>
				<ul>
					<li>Times Table - {globalState.timesTableTimesPlayed}</li>
					<li>General Knowledge - {globalState.quizTimesPlayed}</li>
					<li>Connect 4 - {globalState.connectFourTimesPlayed}</li>
				</ul>
			</div>
		</div>
	);
}

export default UserProfile;
