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

function Question({ question }) {
	if (question.type === "multiple") {
		return (
			<>
				<h3>{question.question}</h3>
				{question.incorrect_answers.map((a) => {
					return <button>{a}</button>;
				})}
				<button>{question.correct_answer}</button>
			</>
		);
	} else if (question.type === "boolean") {
		return (
			<>
				<h3>{question.question}</h3>
				<button>true</button>
				<button>false</button>
			</>
		);
	} else return question;
}
export default Question;
