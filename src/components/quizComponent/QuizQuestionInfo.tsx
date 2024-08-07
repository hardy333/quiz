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
      {/* <img
        src="https://www.imgacademy.com/sites/default/files/img-academy-boarding-school-worlds-most-dedicated.jpg"
        className="question-img"
        alt=""
      /> */}

      {/* <h2 className="question-title">Lorem, ipsum dolor.</h2> */}
      <h3 className="question-text">{currQuestion?.question}</h3>
      {/* <p className="question-description">Lorem ipsum dolor sit amet.</p> */}
    </section>
  );
};

export default QuizQuestionInfo;
