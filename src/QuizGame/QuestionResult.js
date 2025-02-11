import Button from "../Components/Button";

function QuestionResult({ question, answer, nextQuestionCallback }) {
	const rightAnswer = answer === 1;

	if (rightAnswer) {
		return (
			<>
				<h3>{question.correct_answer} is Correct!</h3>
				<Button onClick={nextQuestionCallback}>OK</Button>
			</>
		);
	} else {
		return (
			<>
				<h3>Wrong!</h3>
				<p>The right answer was {question.correct_answer}</p>
				<Button onClick={nextQuestionCallback}>OK</Button>
			</>
		);
	}
}

export default QuestionResult;
