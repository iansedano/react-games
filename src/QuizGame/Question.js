import Button from "../Components/Button";
import Error from "../Components/Error";

// {
// 	category: "Entertainment: Film",
// 	type: "multiple",
// 	difficulty: "medium",
// 	question: "What was Marilyn Monroe`s character&#039;s first name in the film &quot;Some Like It Hot&quot;?",
// 	correct_answer: "Sugar",
// 	incorrect_answers: [
// 		"Honey",
// 		"Caramel",
// 		"Candy"
// 	]
// }

function MultipleChoiceQuestion({ question }) {
	const randomIndex = Math.floor(Math.random() * 4);
	let answerList = [...question.incorrect_answers]; // doing this on same line as below does not work because splice returns removed items.
	answerList.splice(randomIndex, 0, question.correct_answer);

	return (
		<>
			<h3 className="bg-1 border-rad padding-s">{question.question}</h3>
			<div className="flex-row">
				{answerList.map((a) => {
					return <Button key={a}>{a}</Button>;
				})}
			</div>
		</>
	);
}

function BooleanQuestion({ question }) {
	return (
		<>
			<h3 className="bg-1 border-rad padding-s">{question.question}</h3>
			<div className="flex-row">
				<Button>true</Button>
				<Button>false</Button>
			</div>
		</>
	);
}

function Question({ question, answerCallback }) {
	function handleClick(e) {
		if (e.target.tagName === "BUTTON") {
			answerCallback(e.target.innerText);
		}
	}

	console.log(question);

	let renderedQuestion;

	// if (!question) return null;

	switch (question.type) {
		case "multiple":
			renderedQuestion = (
				<MultipleChoiceQuestion
					question={question}
					answerCallback={answerCallback}
				/>
			);
			break;
		case "boolean":
			renderedQuestion = (
				<BooleanQuestion
					question={question}
					answerCallback={answerCallback}
				/>
			);
			break;
		default:
			renderedQuestion = <Error>Invalid question type</Error>;
	}

	return (
		<div className="question margin-m flex-col" onClick={handleClick}>
			{renderedQuestion}
		</div>
	);
}
export default Question;
