/**
 * Parent question component that takes a question in this form:
 *
 * {
 * 		category: "Entertainment: Film",
 * 		type: "multiple",
 * 		difficulty: "medium",
 * 		question:
 *  "What was Marilyn Monroe`s character&#039;s first name in the
 *   film &quot;Some Like It Hot&quot;?",
 * 		correct_answer: "Sugar",
 * 		incorrect_answers: ["Honey", "Caramel", "Candy"]
 * }
 *
 * And renders the appropriate question, of which there are two types:
 * 		- Multiple Choice
 * 		- True or False (Boolean)
 */

// Component imports
import Error from "../Components/Error";

// Project imports
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import BooleanQuestion from "./BooleanQuestion";

function Question({ question, answerCallback, disabled }) {
	function handleClick(e) {
		if (e.target.tagName === "BUTTON") {
			answerCallback(e.target.innerText);
		}
	}

	let renderedQuestion;

	switch (question.type) {
		case "multiple":
			renderedQuestion = (
				<MultipleChoiceQuestion
					question={question}
					disabled={disabled}
				/>
			);
			break;
		case "boolean":
			renderedQuestion = (
				<BooleanQuestion question={question} disabled={disabled} />
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
