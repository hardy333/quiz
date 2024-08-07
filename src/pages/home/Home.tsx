import { Link } from "react-router-dom";
import "./home.css";
import { quizArr } from "../../data/quiz/quizzArr";

const Home = () => {
  return (
    <div className="container">
      {/* <QuizComponent /> */}
      <h2>Choose Quiz</h2>
      <div>
        {quizArr.map((quiz, index) => {
          return (
            <div className="quiz-card" key={index}>
              <h3>{quiz.title}</h3>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                quibusdam expedita ab. Quo cumque rem eveniet eum voluptates
                reiciendis suscipit numquam repellendus, voluptatum maiores
                porro consequatur, commodi minus hic sunt?
              </p>
              <Link to={"/quiz/" + index}>Start Quiz</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
