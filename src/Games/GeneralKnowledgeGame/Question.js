import Button from "./../../Components/Button";

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
			<h3>{question.question}</h3>
			{answerList.map((a) => {
				return <Button key={a}>{a}</Button>;
			})}
		</>
	);
}

function BooleanQuestion({ question }) {
	return (
		<>
			<h3>{question.question}</h3>
			<Button>true</Button>
			<Button>false</Button>
		</>
	);
}

function Question({ question, answerQuestion }) {
	function handleClick(e) {
		answerQuestion(e.target.innerText);
	}

	return (
		<div className="question" onClick={handleClick}>
			{!question ? (
				<h3>End of Quiz!</h3>
			) : question.type === "multiple" ? (
				<MultipleChoiceQuestion
					question={question}
					answerQuestion={answerQuestion}
				/>
			) : question.type === "boolean" ? (
				<BooleanQuestion
					question={question}
					answerQuestion={answerQuestion}
				/>
			) : (
				question
			)}
		</div>
	);
}
export default Question;
