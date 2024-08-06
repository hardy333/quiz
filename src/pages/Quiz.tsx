// Images
import QuizImg from "../assets/quiz.png";

import { CiClock2 } from "react-icons/ci";
import { IoArrowRedo } from "react-icons/io5";

const Quiz = () => {
  return (
    <>
      <div className="container">
        {/* 
      <div>
        <input type="radio" id="test1" name="radio-group" />
        <label htmlFor="test1">Apple</label>
      </div>

      <div>
        <input type="radio" id="test2" name="radio-group" />
        <label htmlFor="test2">Apple</label>
      </div>

      <input type="checkbox" id="check" />
      <label htmlFor="check">Checkbox</label> */}

        <section className="quiz-container">
          {/* TOP */}
          <header className="quiz-header">
            <div className="quiz-heading-container">
              <img className="quiz-img" src={QuizImg} />
              <h2 className="quiz-name">Quiz name</h2>
            </div>
            <p className="quiz-time-container">
              <span className="quiz-time-svg">
                <CiClock2 />
              </span>
              <span className="quiz-time">00:05:55</span>
            </p>
          </header>

          {/* Middle */}

          <section className="quiz-progress">
            <div className="progress-info">
              <p>Quiz Progress:</p>
              <p>question 1 out of 5 </p>
            </div>

            <div className="quiz-progress-line">
              <div className="quiz-progress-line-success"></div>
            </div>
          </section>

          {/* Info */}
          <section className="question-info">
            <h5>Question 1</h5>
            <h2>React is mainly used for building ___.</h2>
          </section>

          {/* Answers */}
          <section className="answers-container">
            {/* 1 */}
            <div className="answer answer-checkbox">
              <input type="radio" id="test1" name="radio-group" />
              <label htmlFor="test1">Apple</label>
            </div>
            {/* 2 */}
            <div className="answer answer-radio">
              <input type="radio" id="test2" name="radio-group" />
              <label htmlFor="test2">Apple</label>
            </div>
            {/* 3 */}
            <div className="answer answer-radio answer-correct">
              <input type="radio" id="test3" name="radio-group" />
              <label htmlFor="test3">Apple</label>
            </div>
            {/* 4 */}
            <div className="answer answer-radio answer-incorrect">
              <input type="radio" id="test4" name="radio-group" />
              <label htmlFor="test4">Apple</label>
            </div>
          </section>

          {/* Buttons */}
          <div className="quiz-buttons-container">
            <button className="btn">
              Next <IoArrowRedo />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Quiz;
