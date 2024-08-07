import { Link } from "react-router-dom";
import "./home.css";
import { quizArr } from "../../data/quiz/quizzArr";
import { useState } from "react";

const Home = () => {
  const [quizIndex, setQuizIndex] = useState(0);

  return (
    <div className="container">
      {/* <QuizComponent /> */}
      <h2>Choose Quiz</h2>
      <div className="quiz-cards-container">
        {quizArr.map((item, index) => {
          return (
            <div
              className="quiz-card fade-in "
              style={{
                animationDelay: index * 0.1 + "s",
                border: index == quizIndex ? "2px dashed #343205" : "",
              }}
              key={index}
            >
              <h3>{item.desc}</h3>

              <p>Lorem ipsumus hic sunt?</p>
              <footer>
                <Link
                  className="btn"
                  style={{ marginTop: "auto" }}
                  to={"/quiz/" + index}
                >
                  Start Quiz
                </Link>
                <button
                  onClick={() => setQuizIndex(index)}
                  className="btn btn-success"
                >
                  see json
                </button>
              </footer>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <br />

      <div className="json-viewer">
        <pre>{JSON.stringify(quizArr[quizIndex].quiz, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Home;
