import UserProfile from "./UserProfile";
import GameSelector from "./GameSelector";

function Home() {
	return (
		<div className="home full-width">
			<UserProfile />
			<GameSelector />
		</div>
	);
}

export default Home;
