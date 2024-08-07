import QuizImg from "../../assets/quiz.png";
import { CiClock2 } from "react-icons/ci";
import useTime from "../../hooks/useTime";

type Props = {
  quizTitle: string;
};

const QuizHeader = ({ quizTitle }: Props) => {
  const time = useTime();

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
        <span className="quiz-time">
          {String(time.hours).padStart(2, "0")}:
          {String(time.minutes).padStart(2, "0")}:
          {String(time.seconds).padStart(2, "0")}
        </span>
      </p>
    </header>
  );
};

export default QuizHeader;
