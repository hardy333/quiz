type Props = { numberOfCompletedQuestions: number; numberOfQuestions: number };

const QuizProgress = ({
  numberOfCompletedQuestions,
  numberOfQuestions,
}: Props) => {
  return (
    <section className="quiz-progress">
      <div className="progress-info">
        <p>Quiz Progress:</p>
        <p>
          question{" "}
          {numberOfCompletedQuestions < numberOfQuestions
            ? numberOfCompletedQuestions + 1
            : numberOfQuestions}{" "}
          out of {numberOfQuestions}{" "}
        </p>
      </div>

      <div className="quiz-progress-line">
        <div
          className="quiz-progress-line-success"
          style={{
            width:
              ((numberOfCompletedQuestions + 1) * 100) / numberOfQuestions +
              "%",
          }}
        ></div>
      </div>
    </section>
  );
};

export default QuizProgress;
