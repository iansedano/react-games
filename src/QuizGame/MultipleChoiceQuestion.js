// Component imports
import Button from "../Components/Button";

function MultipleChoiceQuestion({ question, disabled }) {
	const answerList = [question.correct_answer, ...question.incorrect_answers];
	answerList.sort(); // This makes the output always the same but masks the right answer

	return (
		<>
			<h3 className="bg-1 border-rad padding-s">{question.question}</h3>
			<div className="flex-row">
				{answerList.map((a) => {
					return (
						<Button key={a} disabled={disabled}>
							{a}
						</Button>
					);
				})}
			</div>
		</>
	);
}

export default MultipleChoiceQuestion;
