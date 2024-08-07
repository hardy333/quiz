import { Question } from "../../data/quiz/data";

type Props = {
  numberOfCompletedQuestions: number;
  numberOfQuestions: number;
  currQuestion: Question;
};

const QuizQuestionInfo = ({
  numberOfCompletedQuestions,
  numberOfQuestions,
  currQuestion,
}: Props) => {
  return (
    <section className="question-info">
      <h5 className="question-title-static">
        Question{" "}
        {numberOfCompletedQuestions < numberOfQuestions
          ? numberOfCompletedQuestions + 1
          : numberOfQuestions}
      </h5>
      {currQuestion.image && (
        <img src={currQuestion.image} className="question-img" alt="" />
      )}

      {currQuestion.title && (
        <h2 className="question-title">{currQuestion.title}</h2>
      )}
      <h3 className="question-text">{currQuestion?.question}</h3>
      {currQuestion.description && (
        <p className="question-description">{currQuestion.description}</p>
      )}
    </section>
  );
};

export default QuizQuestionInfo;
