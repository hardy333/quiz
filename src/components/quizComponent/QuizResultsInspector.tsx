import { Fragment } from "react/jsx-runtime";
import { QuizData } from "../../data";
import { CompletedQuestions } from "./QuizComponent";

type Props = {
  quiz: QuizData;
  completedQuestions: CompletedQuestions;
};

const QuizResultsInspector = ({ quiz, completedQuestions }: Props) => {
  return (
    <div>
      {quiz.quiz.questions.map((q) => {
        const completedQ = completedQuestions.find(
          (completedQ) => completedQ.questionId === q.id
        );

        return (
          <Fragment key={q.id}>
            {/* Info */}
            <section className="question-info">
              <h2>{q?.question}</h2>
            </section>

            {/* Answers */}
            <section className="answers-container">
              {/* 1 */}
              {q.answers.map((ans) => {
                const checked = ans.id === completedQ?.answerId;

                let classN = "";

                if (completedQ?.answerId === ans.id) {
                  classN = completedQ?.wasAnswerCorrect
                    ? "answer-correct"
                    : "answer-incorrect  ";
                }

                return (
                  <div
                    className={`answer answer-radio ${classN}`}
                    data-answer-id={ans.id}
                    key={ans.id}
                  >
                    <input
                      type="radio"
                      id={"ans" + ans.id}
                      name={"radio-group" + q.id}
                      checked={checked}
                    />
                    <label htmlFor={"ans" + ans.id}>{ans.answer}</label>
                  </div>
                );
              })}
            </section>
            <p
              style={{
                fontSize: "14px",
                margin: "10px 0",
                display: completedQ?.wasAnswerCorrect ? "none" : "block",
              }}
            >
              Correct answer was:
              <span style={{ color: "var(--color-success)" }}>
                {" "}
                {q.answers.find((ans) => ans.is_correct)?.answer}{" "}
              </span>
            </p>
          </Fragment>
        );
      })}
    </div>
  );
};

export default QuizResultsInspector;
