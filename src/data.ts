// interface Answer {
//   id: string;
//   answer: string;
//   is_correct: boolean;
// }

// export interface Question {
//   id: number;
//   question: string;
//   answers: Answer[];
// }

// interface Quiz {
//   title: string;
//   questions: Question[];
// }

// export interface QuizData {
//   quiz: Quiz;
// }

// export const quiz1 = {
//   quiz: {
//     title: "General Knowledge Quiz",
//     questions: [
//       {
//         id: 1,
//         question: "What is the capital of France?",
//         answers: [
//           {
//             id: "a",
//             answer: "Paris",
//             is_correct: true,
//           },
//           {
//             id: "b",
//             answer: "London",
//             is_correct: false,
//           },
//           {
//             id: "c",
//             answer: "Berlin",
//             is_correct: false,
//           },
//           {
//             id: "d",
//             answer: "Madrid",
//             is_correct: false,
//           },
//         ],
//       },
//       {
//         id: 2,
//         question: "What is the largest planet in our solar system?",
//         answers: [
//           {
//             id: "a",
//             answer: "Earth",
//             is_correct: false,
//           },
//           {
//             id: "b",
//             answer: "Jupiter",
//             is_correct: true,
//           },
//           {
//             id: "c",
//             answer: "Saturn",
//             is_correct: false,
//           },
//           {
//             id: "d",
//             answer: "Mars",
//             is_correct: false,
//           },
//         ],
//       },
//       {
//         id: 3,
//         question: "Who wrote 'To Kill a Mockingbird'?",
//         answers: [
//           {
//             id: "a",
//             answer: "Harper Lee",
//             is_correct: true,
//           },
//           {
//             id: "b",
//             answer: "Mark Twain",
//             is_correct: false,
//           },
//           {
//             id: "c",
//             answer: "Ernest Hemingway",
//             is_correct: false,
//           },
//           {
//             id: "d",
//             answer: "F. Scott Fitzgerald",
//             is_correct: false,
//           },
//         ],
//       },
//       {
//         id: 4,
//         question: "What is the smallest prime number?",
//         answers: [
//           {
//             id: "a",
//             answer: "0",
//             is_correct: false,
//           },
//           {
//             id: "b",
//             answer: "1",
//             is_correct: false,
//           },
//           {
//             id: "c",
//             answer: "2",
//             is_correct: true,
//           },
//           {
//             id: "d",
//             answer: "3",
//             is_correct: false,
//           },
//         ],
//       },
//       {
//         id: 5,
//         question: "Which element has the chemical symbol 'O'?",
//         answers: [
//           {
//             id: "a",
//             answer: "Gold",
//             is_correct: false,
//           },
//           {
//             id: "b",
//             answer: "Oxygen",
//             is_correct: true,
//           },
//           {
//             id: "c",
//             answer: "Osmium",
//             is_correct: false,
//           },
//           {
//             id: "d",
//             answer: "Oxide",
//             is_correct: false,
//           },
//         ],
//       },
//     ],
//   },
// };

export type Quiz = {
  title: string;
  questions: Question[];
};

export type Question =
  | OneChoiceQuestion
  | MultipleChoiceQuestion
  | InputQuestion;

export type BaseQuestion = {
  id: number;
  question: string;
};

type OneChoiceQuestion = {
  id: number;
  question: string;
  type: "one-choice";
  options: Option[];
  correctAnswer: string;
};

export type MultipleChoiceQuestion = {
  id: number;
  question: string;
  type: "multiple-choice";
  options: Option[];
  correctAnswers: string[];
};

type InputQuestion = {
  id: number;
  question: string;
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

export const quiz2: { quiz: Quiz } = {
  quiz: {
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
  },
};
