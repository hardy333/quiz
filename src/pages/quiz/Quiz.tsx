// Images
import { useParams } from "react-router-dom";
import QuizComponent from "../../components/quizComponent/QuizComponent";
import { quizArr } from "../../data/quiz/quizzArr";

const Quiz = () => {
  const params = useParams();

  const quiz = quizArr[params.quizIndex];

  return (
    <>
      <div className="container">
        <QuizComponent quiz={quiz} />
      </div>
    </>
  );
};

export default Quiz;
