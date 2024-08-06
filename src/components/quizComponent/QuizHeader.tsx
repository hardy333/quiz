import QuizImg from "../../assets/quiz.png";
import { CiClock2 } from "react-icons/ci";

type Props = {
  quizTitle: string;
};

const QuizHeader = ({ quizTitle }: Props) => {
  return (
    <header className="quiz-header">
      <div className="quiz-heading-container">
        <img className="quiz-img" src={QuizImg} />
        <h2 className="quiz-name">{quizTitle}</h2>
      </div>
      <p className="quiz-time-container">
        <span className="quiz-time-svg">
          <CiClock2 />
        </span>
        <span className="quiz-time">00:05:55</span>
      </p>
    </header>
  );
};

export default QuizHeader;
