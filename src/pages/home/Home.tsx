import { Link } from "react-router-dom";
import "./home.css";
import { quizArr } from "../../data/quiz/quizzArr";

const Home = () => {
  return (
    <div className="container">
      {/* <QuizComponent /> */}
      <h2>Choose Quiz</h2>
      <div className="quiz-cards-container">
        {quizArr.map((quiz, index) => {
          return (
            <div
              className="quiz-card fade-in "
              style={{
                animationDelay: index * 0.1 + "s",
              }}
              key={index}
            >
              <h3>{quiz.title}</h3>

              <p>Lorem ipsumus hic sunt?</p>
              <Link className="btn" to={"/quiz/" + index}>
                Start Quiz
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
