import "./quiz-end-screen.css";
import { AnswerdQuesgions } from "./QuizComponent";
import { useState } from "react";
import QuizResultsInspector from "./QuizResultsInspector";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../../data/quiz/data";

type Props = {
  quiz: Quiz;
  answeredQuestions: AnswerdQuesgions;
};
const QuizEndScreen = ({ quiz, answeredQuestions }: Props) => {
  const [showReview, setShowReview] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="quiz-end-container">
      <h2>QuizEndScreen</h2>
      <p>total number of questions: {quiz.questions.length}</p>
      <p>
        {" "}
        correct answered:{" "}
        {answeredQuestions.reduce(
          (res, cq) => (res += cq.wasAnswerCorrect ? 1 : 0),
          0
        )}
      </p>

      {!showReview && (
        <button className="btn" onClick={() => setShowReview(true)}>
          Show review
        </button>
      )}
      {showReview && (
        <QuizResultsInspector answeredQuestions={answeredQuestions} />
      )}
      {showReview && (
        <>
          <button className="btn" onClick={() => navigate("/")}>
            Back to home
          </button>
          {/* <button className="btn" onClick={() => navigate("./")}>
            Try Again
          </button> */}
        </>
      )}
    </div>
  );
};

export default QuizEndScreen;
