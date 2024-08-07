import { ChangeEvent, Dispatch, useEffect } from "react";
import { Question } from "../../data";

type Props = {
  currQuestion: Question;
  buttonDisabled: boolean;
  setButtonDisabled: Dispatch<React.SetStateAction<boolean>>;
  selectedSingleAnswerId: string | null;
  setSelectedSingleAnswerId: Dispatch<React.SetStateAction<string | null>>;
  selectedMultyAnswerIds: null | string[];
  setSelectedMultyAnswerIds: Dispatch<React.SetStateAction<string[] | null>>;
  inputAnswer: string;
  setInputAnswer: Dispatch<React.SetStateAction<string>>;
};

type Option = {
  id: string;
  text: string;
};

const QuizOptions = ({
  currQuestion,
  setButtonDisabled,
  selectedSingleAnswerId,
  setSelectedSingleAnswerId,
  selectedMultyAnswerIds,
  setSelectedMultyAnswerIds,
  inputAnswer,
  setInputAnswer,
}: Props) => {
  // Single ------------------------------------------------
  const handleSingleAnswerChange = (
    _e: ChangeEvent<HTMLInputElement>,
    option: Option
  ) => {
    setSelectedSingleAnswerId(option.id);
    setButtonDisabled(false);
  };

  // Multy ------------------------------------------------
  const handleMultyAnswerChange = (
    e: ChangeEvent<HTMLInputElement>,
    option: Option
  ) => {
    // setSelectedSingleAnswerId(option.id);
    if (e.target.checked && selectedMultyAnswerIds) {
      setSelectedMultyAnswerIds([...selectedMultyAnswerIds, option.id]);
    } else if (e.target.checked && !selectedMultyAnswerIds) {
      setSelectedMultyAnswerIds([option.id]);
    } else if (!e.target.checked && selectedMultyAnswerIds) {
      setSelectedMultyAnswerIds(
        selectedMultyAnswerIds.filter((id) => id !== option.id)
      );
    }
  };

  useEffect(() => {
    if (currQuestion.type !== "multiple-choice") return;

    if (!selectedMultyAnswerIds || selectedMultyAnswerIds.length === 0) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [setButtonDisabled, selectedMultyAnswerIds, currQuestion.type]);

  const handleInputAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputAnswer(e.target.value);
    if (e.target.value === "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  };

  let renderOptions = null;

  // Single ------------------------------------------------
  if (currQuestion.type === "one-choice") {
    renderOptions = (
      <section className="answers-container">
        {currQuestion?.options.map((option) => {
          return (
            <div
              className="answer answer-radio"
              data-answer-id={option.id}
              key={option.id}
            >
              <input
                checked={option.id === selectedSingleAnswerId}
                type="radio"
                id={"ans" + option.id}
                name="radio-group"
                onChange={(e) => handleSingleAnswerChange(e, option)}
              />
              <label htmlFor={"ans" + option.id}>{option.text}</label>
            </div>
          );
        })}
      </section>
    ); // Multy  ------------------------------------------------
  } else if (currQuestion.type === "multiple-choice") {
    renderOptions = (
      <section className="answers-container">
        {currQuestion?.options.map((option) => {
          return (
            <div
              className="answer answer-checkbox"
              data-answer-id={option.id}
              key={option.id}
            >
              <input
                checked={
                  selectedMultyAnswerIds
                    ? selectedMultyAnswerIds?.includes(option.id)
                    : false
                }
                onChange={(e) => handleMultyAnswerChange(e, option)}
                type="checkbox"
                id={currQuestion.id + "-" + option.id}
              />
              <label htmlFor={currQuestion.id + "-" + option.id}>
                {option.text}
              </label>
            </div>
          );
        })}
      </section>
    ); // Input  ------------------------------------------------
  } else if (currQuestion.type === "input") {
    renderOptions = (
      <section
        className="answers-container"
        style={{ padding: "20px ", minHeight: 200 }}
      >
        <div className="input-container">
          <label htmlFor="" className="lable">
            Please Enter your Answer Here
          </label>
          <input
            value={inputAnswer}
            onChange={(e) => handleInputAnswerChange(e)}
            style={{ width: "100%" }}
            type="text"
            className="input"
            placeholder="Your Answer is?"
          />
        </div>
      </section>
    );
  } else renderOptions = <p>Invalid Question Type, Please try gain</p>;
  return renderOptions;
};

export default QuizOptions;
