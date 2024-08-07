export type Quiz = {
  title: string;
  questions: Question[];
};

export type Question =
  | OneChoiceQuestion
  | MultipleChoiceQuestion
  | InputQuestion;

export type Navigation = {
  [key: string]: number;
};

export type BaseQuestion = {
  id: number;
  type: string;
  question: string;
  navigation?: Navigation;
};

export type OneChoiceQuestion = BaseQuestion & {
  type: "one-choice";
  options: Option[];
  correctAnswer: string;
};

export type MultipleChoiceQuestion = BaseQuestion & {
  type: "multiple-choice";
  options: Option[];
  correctAnswers: string[];
};

export type InputQuestion = BaseQuestion & {
  type: "input";
  correctAnswer: string;
};

export type Option = {
  id: string;
  text: string;
};

// const obj: Question = {
//   type: "multiple-choice",
//   correctAnswer: "fdf"
// }

export const quiz2: Quiz = {
  title: "General Knowledge Quiz",
  questions: [
    {
      id: 1,
      type: "one-choice",
      question: "What is the capital of France?",
      options: [
        { id: "a", text: "Berlin" },
        { id: "b", text: "Madrid" },
        { id: "c", text: "Paris" },
        { id: "d", text: "Rome" },
      ],
      correctAnswer: "c",
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Which of the following are programming languages?",
      options: [
        { id: "a", text: "Python" },
        { id: "b", text: "HTML" },
        { id: "c", text: "JavaScript" },
        { id: "d", text: "CSS" },
      ],
      correctAnswers: ["a", "c"],
    },
    {
      id: 3,
      type: "input",
      question: "What is the square root of 64?",
      correctAnswer: "8",
    },
    {
      id: 4,
      type: "one-choice",
      question: "Who wrote 'Hamlet'?",
      options: [
        { id: "a", text: "Charles Dickens" },
        { id: "b", text: "William Shakespeare" },
        { id: "c", text: "Mark Twain" },
        { id: "d", text: "Jane Austen" },
      ],
      correctAnswer: "b",
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "Which of the following are prime numbers?",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "4" },
        { id: "d", text: "5" },
      ],
      correctAnswers: ["a", "b", "d"],
    },
    // {
    //   id: 6,
    //   type: "input",
    //   question: "Who is known as the 'Father of Computers'?",
    //   correctAnswer: "Charles Babbage",
    // },
    // {
    //   id: 7,
    //   type: "one-choice",
    //   question: "What is the chemical symbol for gold?",
    //   options: [
    //     { id: "a", text: "Au" },
    //     { id: "b", text: "Ag" },
    //     { id: "c", text: "Pb" },
    //     { id: "d", text: "Fe" },
    //   ],
    //   correctAnswer: "a",
    // },
    // {
    //   id: 8,
    //   type: "multiple-choice",
    //   question: "Which of the following are elements?",
    //   options: [
    //     { id: "a", text: "Oxygen" },
    //     { id: "b", text: "Water" },
    //     { id: "c", text: "Nitrogen" },
    //     { id: "d", text: "Carbon Dioxide" },
    //   ],
    //   correctAnswers: ["a", "c"],
    // },
  ],
};

export const quiz3: Quiz = {
  title: "General Knowledge Quiz",
  questions: [
    {
      id: 1,
      type: "one-choice",
      question: "What is the capital of France?",
      options: [
        { id: "a", text: "Berlin" },
        { id: "b", text: "Madrid" },
        { id: "c", text: "Paris" },
        { id: "d", text: "Rome" },
      ],
      correctAnswer: "c",
      navigation: {
        a: 2,
        b: 3,
        c: 4,
        d: 5,
      },
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Which of the following are programming languages?",
      options: [
        { id: "a", text: "Python" },
        { id: "b", text: "HTML" },
        { id: "c", text: "JavaScript" },
        { id: "d", text: "CSS" },
      ],
      correctAnswers: ["a", "c"],
      navigation: {
        a: 6,
        b: 7,
        c: 8,
        d: 1,
      },
    },
    {
      id: 3,
      type: "input",
      question: "What is the square root of 64?",
      correctAnswer: "8",
      navigation: {
        "8": 4,
        default: 1,
      },
    },
    {
      id: 4,
      type: "one-choice",
      question: "Who wrote 'Hamlet'?",
      options: [
        { id: "a", text: "Charles Dickens" },
        { id: "b", text: "William Shakespeare" },
        { id: "c", text: "Mark Twain" },
        { id: "d", text: "Jane Austen" },
      ],
      correctAnswer: "b",
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "Which of the following are prime numbers?",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "4" },
        { id: "d", text: "5" },
      ],
      correctAnswers: ["a", "b", "d"],
    },
    {
      id: 6,
      type: "input",
      question: "Who is known as the 'Father of Computers'?",
      correctAnswer: "Charles Babbage",
    },
    {
      id: 7,
      type: "one-choice",
      question: "What is the chemical symbol for gold?",
      options: [
        { id: "a", text: "Au" },
        { id: "b", text: "Ag" },
        { id: "c", text: "Pb" },
        { id: "d", text: "Fe" },
      ],
      correctAnswer: "a",
    },
    {
      id: 8,
      type: "multiple-choice",
      question: "Which of the following are elements?",
      options: [
        { id: "a", text: "Oxygen" },
        { id: "b", text: "Water" },
        { id: "c", text: "Nitrogen" },
        { id: "d", text: "Carbon Dioxide" },
      ],
      correctAnswers: ["a", "c"],
    },
  ],
};
