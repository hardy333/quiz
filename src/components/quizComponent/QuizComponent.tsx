import { IoArrowRedo } from "react-icons/io5";
import { Question, Quiz, quiz2, quiz3 } from "../../data";
import { useState } from "react";
import QuizHeader from "./QuizHeader";
import QuizProgress from "./QuizProgress";
import QuizQuestionInfo from "./QuizQuestionInfo";
import QuizOptions from "./QuizOptions";
import QuizEndScreen from "./QuizEndScreen";
import { quiz4, quiz5, quiz6, quiz7 } from "../../quiz4";

export type QuestionMode = "one-choice" | "multiple-choice" | "input";

export type AnswerdQuesgions = {
  wasAnswerCorrect: boolean;
  question: Question;
  answer: string | string[] | null;
}[];

const QuizComponent = () => {
  const [quiz] = useState<Quiz>(quiz7);

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
  // const questionMode: QuestionMode = currQuestion.type;
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

  const [answeredQuestions, setAnsweredQuestions] = useState<AnswerdQuesgions>(
    []
  );
  const [unUnsweredQuestions, setUnUnsweredQuestions] = useState(
    quiz.questions
  );

  const udpateAnsweredQuestions = () => {
    let wasCorrect = false;
    let answer = null;

    if (currQuestion.type === "one-choice") {
      wasCorrect = selectedSingleAnswerId === currQuestion.correctAnswer;
      answer = selectedSingleAnswerId;
    } else if (currQuestion.type === "multiple-choice") {
      wasCorrect =
        selectedMultyAnswerIds?.sort().join("") ===
        currQuestion.correctAnswers.sort().join("");
      answer = selectedMultyAnswerIds;
    } else {
      wasCorrect = inputAnswer === currQuestion.correctAnswer;
      answer = inputAnswer;
    }

    setAnsweredQuestions([
      ...answeredQuestions,
      {
        wasAnswerCorrect: wasCorrect,
        answer,
        question: currQuestion,
      },
    ]);
  };

  const updateUnAnswerdQuestions = () => {
    setUnUnsweredQuestions((arr) =>
      arr.filter((q) => q.id !== currQuestion.id)
    );
  };

  console.log("answered q", unUnsweredQuestions);

  const resetSelectedAnswers = () => {
    setSelectedMultyAnswerIds(null);
    setSelectedSingleAnswerId(null);
    setInputAnswer("");
    setButtonDisabled(true);
  };

  // Navigation
  // Navigation
  const showNextQuestionWithoutNavigation = () => {
    setCurrQuestionId(
      // filter itself out
      unUnsweredQuestions.filter((q) => q.id !== currQuestion.id)[0].id
    );
  };

  const setNextQuestion = () => {
    setNumberOfQompletedQuestions(numberOfCompletedQuestions + 1);

    if (!currQuestion.navigation) {
      showNextQuestionWithoutNavigation();
      return;
    }

    let nextQuestionId = null;

    // one-choice
    if (currQuestion.type === "one-choice") {
      const foundId = currQuestion.navigation[selectedSingleAnswerId];

      console.log({ foundId });
      if (foundId) {
        nextQuestionId = foundId;
      } else if (currQuestion.navigation.default) {
        nextQuestionId = currQuestion.navigation.default;
      }
    }

    // two-choice
    if (currQuestion.type === "multiple-choice") {
      const foundId = currQuestion.navigation[selectedMultyAnswerIds.join("")];

      if (foundId) {
        nextQuestionId = foundId;
      } else if (currQuestion.navigation.default) {
        nextQuestionId = currQuestion.navigation.default;
      }
    }

    // input type
    if (currQuestion.type === "input") {
      const foundId = currQuestion.navigation[inputAnswer];

      if (foundId) {
        nextQuestionId = foundId;
      } else if (currQuestion.navigation.default) {
        nextQuestionId = currQuestion.navigation.default;
      }
    }

    if (nextQuestionId) {
      const wasAlredyAsked = answeredQuestions.find(
        (q) => q.question.id === nextQuestionId
      );
      if (wasAlredyAsked) {
        showNextQuestionWithoutNavigation();
      } else {
        setCurrQuestionId(nextQuestionId);
      }
    } else {
      showNextQuestionWithoutNavigation();
    }
  };

  const showNextQuestion = () => {
    if (isLastQuestion) {
      return;
    }

    //  Update Answers arrays
    udpateAnsweredQuestions();
    updateUnAnswerdQuestions();

    // Next Question Logic
    setNextQuestion();

    // Rest inputs for next question
    resetSelectedAnswers();
  };

  const endQuiz = () => {
    //  Update Answers arrays
    udpateAnsweredQuestions();
    updateUnAnswerdQuestions();

    // End Quiz
    setIsQuizFinished(true);
  };

  return (
    <>
      {isQuizFinished ? (
        <QuizEndScreen quiz={quiz} answeredQuestions={answeredQuestions} /> // <QuizEndScreen quiz={quiz} completedQuestions={completedQuestions} />
      ) : (
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
