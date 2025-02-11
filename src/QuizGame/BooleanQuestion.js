// Component imports
import Button from "../Components/Button";

function BooleanQuestion({ question, disabled }) {
	return (
		<>
			<h3 className="bg-1 border-rad padding-s">{question.question}</h3>
			<div className="flex-row">
				<Button disabled={disabled}>true</Button>
				<Button disabled={disabled}>false</Button>
			</div>
		</>
	);
}

export default BooleanQuestion;
