import { IoArrowRedo } from "react-icons/io5";
import { Question, Quiz, quiz2 } from "../../data";
import { useState } from "react";
import QuizHeader from "./QuizHeader";
import QuizProgress from "./QuizProgress";
import QuizQuestionInfo from "./QuizQuestionInfo";
import QuizOptions from "./QuizOptions";

export type QuestionMode = "one-choice" | "multiple-choice" | "input";

export type CompletedQuestions = {
  questionId: string | number;
  answerId: string | number;
  wasAnswerCorrect: boolean;
}[];

const QuizComponent = () => {
  const [quiz] = useState<Quiz>(quiz2.quiz);

  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [numberOfCompletedQuestions, setNumberOfQompletedQuestions] =
    useState(0);
  const [currQuestionId, setCurrQuestionId] = useState(quiz.questions[0].id);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // Derived States ----
  const currQuestion = quiz.questions.find(
    (q) => q.id === currQuestionId
  ) as Question;
  const numberOfQuestions = quiz.questions.length;
  const isLastQuestion = numberOfCompletedQuestions === numberOfQuestions - 1;
  const questionMode: QuestionMode = currQuestion.type;
  // DErived Stated

  /***************** Input States ***********************/
  const [selectedSingleAnswerId, setSelectedSingleAnswerId] = useState<
    null | string
  >(null);
  const [selectedMultyAnswerIds, setSelectedMultyAnswerIds] = useState<
    null | string[]
  >(null);
  const [inputAnswer, setInputAnswer] = useState("");
  /***************** Input States ***********************/

  // const [completedQuestions, setCompletedQuestions] =
  //   useState<CompletedQuestions>([]);

  // Methods ************************************************
  // Methods ************************************************

  // 1) stores answerd option in array 2) resetes selected unswer
  // const manageQuestionSubmit = () => {
  //   const wasAnswerCorrect =
  //     currQuestion.answers.find((ans) => ans.is_correct)?.id ===
  //     selectedAnswerId;

  //   setCompletedQuestions([
  //     ...completedQuestions,
  //     {
  //       questionId: currQuestionId,

  //       answerId: selectedAnswerId as string | number,
  //       wasAnswerCorrect: wasAnswerCorrect,
  //     },
  //   ]);

  //   setSelectedAnswerId(null);
  // };

  const resetSelectedAnswers = () => {
    setSelectedMultyAnswerIds(null);
    setSelectedSingleAnswerId(null);
    setInputAnswer("");
    setButtonDisabled(true);
  };

  const showNextQuestion = () => {
    if (isLastQuestion) {
      return;
    }
    setNumberOfQompletedQuestions(numberOfCompletedQuestions + 1);
    setCurrQuestionId(quiz.questions[numberOfCompletedQuestions + 1].id);

    resetSelectedAnswers();
    // manageQuestionSubmit();
  };

  const endQuiz = () => {
    // manageQuestionSubmit();
    setIsQuizFinished(true);
  };

  return (
    <>
      {isQuizFinished ? null : ( // <QuizEndScreen quiz={quiz} completedQuestions={completedQuestions} />
        <section className="quiz-container">
          {/* TOP */}
          <QuizHeader quizTitle={quiz.title} />

          {/* Middle */}
          <QuizProgress
            numberOfCompletedQuestions={numberOfCompletedQuestions}
            numberOfQuestions={numberOfQuestions}
          />

          {/* Info */}
          <QuizQuestionInfo
            numberOfCompletedQuestions={numberOfCompletedQuestions}
            currQuestion={currQuestion}
            numberOfQuestions={numberOfQuestions}
          />

          {/* Answers */}
          <QuizOptions
            selectedSingleAnswerId={selectedSingleAnswerId}
            setSelectedSingleAnswerId={setSelectedSingleAnswerId}
            selectedMultyAnswerIds={selectedMultyAnswerIds}
            setSelectedMultyAnswerIds={setSelectedMultyAnswerIds}
            inputAnswer={inputAnswer}
            setInputAnswer={setInputAnswer}
            buttonDisabled={buttonDisabled}
            setButtonDisabled={setButtonDisabled}
            currQuestion={currQuestion}
          />

          {/* Buttons */}
          <div className="quiz-buttons-container">
            {isLastQuestion ? (
              <button
                disabled={buttonDisabled}
                className="btn btn-success"
                onClick={endQuiz}
              >
                Submit
              </button>
            ) : (
              <button
                disabled={buttonDisabled}
                className="btn"
                onClick={showNextQuestion}
              >
                Next <IoArrowRedo />
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default QuizComponent;
