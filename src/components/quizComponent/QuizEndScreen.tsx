import "./quiz-end-screen.css";
import { CompletedQuestions } from "./QuizComponent";
import { useState } from "react";
import QuizResultsInspector from "./QuizResultsInspector";
import { Quiz } from "../../data";

type Props = {
  quiz: Quiz;
  completedQuestions: CompletedQuestions;
};
const QuizEndScreen = ({ quiz, completedQuestions }: Props) => {
  const [showReview, setShowReview] = useState(false);

  return (
    <div className="quiz-end-container">
      <h2>QuizEndScreen</h2>
      <p>total number of questions: {quiz.questions.length}</p>
      <p>
        {" "}
        correct answered:{" "}
        {completedQuestions.reduce(
          (res, cq) => (res += cq.wasAnswerCorrect ? 1 : 0),
          0
        )}
      </p>
      <p> incorrect answered: </p>

      <button className="btn" onClick={() => setShowReview(true)}>
        Show review
      </button>
      {showReview && (
        <QuizResultsInspector
          quiz={quiz}
          completedQuestions={completedQuestions}
        />
      )}
    </div>
  );
};

export default QuizEndScreen;
