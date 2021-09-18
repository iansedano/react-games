import Button from "./Components/Button";

function GameSelector() {
	return (
		<div className="flex-center game-selector">
			<h3>Play:</h3>
			<Button src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Multiplication_Sign.svg/120px-Multiplication_Sign.svg.png">
				Times Tables
			</Button>
			<Button>Connect Four</Button>
			<Button>General Knowledge</Button>
		</div>
	);
}

export default GameSelector;
