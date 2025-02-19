// Component imports
import PageNavButton from "./../Components/PageNavButton";

// State imports
import PAGES from "./../State/PAGES";

function GameSelector() {
	return (
		<div className="bg-3 flex-col border-rad border-s">
			<h3>Play:</h3>
			<div>
				<PageNavButton page={PAGES.TIMES_TABLE_GAME}>
					Times Tables
				</PageNavButton>
				<PageNavButton page={PAGES.CONNECT_FOUR}>
					Connect Four
				</PageNavButton>
				<PageNavButton page={PAGES.QUIZ_GAME}>
					General Knowledge
				</PageNavButton>
			</div>
		</div>
	);
}

export default GameSelector;
