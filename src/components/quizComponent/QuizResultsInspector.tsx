import { BaseQuestion, MultipleChoiceQuestion } from "../../data";
import { AnswerdQuesgions } from "./QuizComponent";
import QuizQuestionInfo from "./QuizQuestionInfo";

type Props = {
  answeredQuestions: AnswerdQuesgions;
};

const QuizResultsInspector = ({ answeredQuestions }: Props) => {
  return (
    <div>
      {answeredQuestions.map((currQuestion, index) => {
        let renderOptions = null;

        // Single ------------------------------------------------
        if (currQuestion.question.type === "one-choice") {
          renderOptions = (
            <div className="question-inspector-container">
              <section className="answers-container">
                {currQuestion?.question.options.map((option) => {
                  console.log(
                    currQuestion.answer,
                    option.id === currQuestion.answer
                  );

                  const inputId = `answer-radio-quiestion-${currQuestion.question.id}-option-${option.id}`;
                  const inputName = `answer-radio-name-q-${currQuestion.question.id}`;

                  return (
                    <div
                      className={`answer answer-radio ${
                        option.id === currQuestion.answer
                          ? currQuestion.wasAnswerCorrect
                            ? "answer-correct"
                            : "answer-incorrect"
                          : ""
                      }`}
                      data-answer-id={option.id}
                      key={currQuestion.question.id + option.id}
                    >
                      <input
                        checked={option.id === currQuestion.answer}
                        type="radio"
                        name={inputName}
                        id={inputId}
                        readOnly
                      />
                      <label htmlFor={inputId}>{option.text}</label>
                    </div>
                  );
                })}
              </section>
              {currQuestion.wasAnswerCorrect ? null : (
                <p>
                  Correct Answer was:
                  <strong>
                    {" "}
                    {
                      currQuestion.question.options.find(
                        (opt) =>
                          opt.id ===
                          (currQuestion as AnswerdQuesgions[0]).question
                            ?.correctAnswer
                      )?.text
                    }
                  </strong>
                </p>
              )}
            </div>
          ); // Multy  ------------------------------------------------
        } else if (currQuestion.question.type === "multiple-choice") {
          renderOptions = (
            <div className="question-inspector-container">
              <section className="answers-container">
                {currQuestion?.question.options.map((option) => {
                  return (
                    <div
                      className="answer answer-checkbox"
                      data-answer-id={option.id}
                      key={option.id}
                    >
                      <input
                        checked={currQuestion.answer?.includes(option.id)}
                        type="checkbox"
                        id={currQuestion.question.id + "-" + option.id}
                        readOnly
                      />
                      <label
                        htmlFor={currQuestion.question.id + "-" + option.id}
                      >
                        {option.text}
                      </label>
                    </div>
                  );
                })}
              </section>
              {currQuestion.wasAnswerCorrect ? null : (
                <p>
                  Correct Answers was:{" "}
                  <strong>
                    {currQuestion.question.correctAnswers.reduce(
                      (res, answer) =>
                        (res +=
                          currQuestion.question?.options?.find(
                            (x) => x.id === answer
                          ).text + ",  "),
                      ""
                    )}
                  </strong>
                </p>
              )}
            </div>
          ); // Input  ------------------------------------------------
        } else if (currQuestion.question.type === "input") {
          renderOptions = (
            <div className="question-inspector-container">
              <section
                className="answers-container"
                style={{ padding: "20px ", minHeight: 200 }}
              >
                <div className="input-container">
                  <label htmlFor="" className="lable">
                    Submited Answer
                  </label>
                  <input
                    value={currQuestion.answer as string}
                    style={{ width: "100%" }}
                    type="text"
                    className={`input ${
                      currQuestion.wasAnswerCorrect
                        ? "input-success"
                        : "input-danger"
                    }`}
                    placeholder="Your Answer is?"
                    readOnly
                  />
                </div>
              </section>
              {currQuestion.wasAnswerCorrect ? null : (
                <p>
                  Correct Answer was:{" "}
                  <strong>{currQuestion.question?.correctAnswer}</strong>
                </p>
              )}
            </div>
          );
        } else {
          renderOptions = <p>Invalid Question Type, Please try another quiz</p>;
        }
        return (
          <div>
            <QuizQuestionInfo
              numberOfCompletedQuestions={index}
              currQuestion={currQuestion.question}
              numberOfQuestions={answeredQuestions.length}
            />

            {renderOptions}
          </div>
        );
      })}
    </div>
  );
};

export default QuizResultsInspector;
