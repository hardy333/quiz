import { Quiz } from "./data";

// Only input
export const quiz4: Quiz = {
  title: "Math and Science Quiz",
  questions: [
    {
      id: 1,
      type: "input",
      question: "What is the sum of 5 and 3?",
      correctAnswer: "8",
      navigation: {
        "8": 2,
        default: 3,
      },
    },
    {
      id: 2,
      type: "input",
      question: "What is the chemical symbol for water?",
      correctAnswer: "H2O",
      navigation: {
        H2O: 3,
        default: 1,
      },
    },
    {
      id: 3,
      type: "input",
      question: "What planet is known as the Red Planet?",
      correctAnswer: "Mars",
      navigation: {
        Mars: 1,
        default: 2,
      },
    },
  ],
};

// Only one choice
export const quiz5: Quiz = {
  title: "History and Geography Quiz",
  questions: [
    {
      id: 1,
      type: "one-choice",
      question: "What is the capital of Japan?",
      options: [
        { id: "a", text: "Beijing" },
        { id: "b", text: "Seoul" },
        { id: "c", text: "Tokyo" },
        { id: "d", text: "Bangkok" },
      ],
      correctAnswer: "c",
      navigation: {
        a: 2,
        b: 2,
        c: 3,
        d: 2,
      },
    },
    {
      id: 2,
      type: "one-choice",
      question: "Which year did World War II end?",
      options: [
        { id: "a", text: "1945" },
        { id: "b", text: "1939" },
        { id: "c", text: "1941" },
        { id: "d", text: "1950" },
      ],
      correctAnswer: "a",
      navigation: {
        a: 3,
        b: 3,
        c: 3,
        d: 3,
      },
    },
    {
      id: 3,
      type: "one-choice",
      question: "Who was the first President of the United States?",
      options: [
        { id: "a", text: "Thomas Jefferson" },
        { id: "b", text: "Abraham Lincoln" },
        { id: "c", text: "George Washington" },
        { id: "d", text: "John Adams" },
      ],
      correctAnswer: "c",
      navigation: {
        a: 4,
        b: 4,
        c: 4,
        d: 4,
      },
    },
    {
      id: 4,
      type: "one-choice",
      question: "Which continent is known as the 'Dark Continent'?",
      options: [
        { id: "a", text: "Asia" },
        { id: "b", text: "Africa" },
        { id: "c", text: "South America" },
        { id: "d", text: "Australia" },
      ],
      correctAnswer: "b",
      navigation: {
        a: 1,
        b: 1,
        c: 1,
        d: 1,
      },
    },
  ],
};

// Only multy choice
export const quiz6: Quiz = {
  title: "Science and Technology Quiz",
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      question: "Which of the following are planets in our solar system?",
      options: [
        { id: "a", text: "Mars" },
        { id: "b", text: "Sun" },
        { id: "c", text: "Earth" },
        { id: "d", text: "Moon" },
      ],
      correctAnswers: ["a", "c"],
      navigation: {
        a: 2,
        b: 3,
        c: 4,
        d: 2,
      },
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Which of the following are programming languages?",
      options: [
        { id: "a", text: "Python" },
        { id: "b", text: "HTML" },
        { id: "c", text: "CSS" },
        { id: "d", text: "JavaScript" },
      ],
      correctAnswers: ["a", "d"],
      navigation: {
        a: 3,
        b: 4,
        c: 1,
        d: 3,
      },
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "Which of the following are mammals?",
      options: [
        { id: "a", text: "Whale" },
        { id: "b", text: "Shark" },
        { id: "c", text: "Dolphin" },
        { id: "d", text: "Octopus" },
      ],
      correctAnswers: ["a", "c"],
      navigation: {
        a: 4,
        b: 1,
        c: 2,
        d: 4,
      },
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "Which of the following are renewable energy sources?",
      options: [
        { id: "a", text: "Solar" },
        { id: "b", text: "Wind" },
        { id: "c", text: "Coal" },
        { id: "d", text: "Hydroelectric" },
      ],
      correctAnswers: ["a", "b", "d"],
      navigation: {
        a: 1,
        b: 3,
        c: 2,
        d: 1,
      },
    },
  ],
};

// Example usage
export const quiz7: Quiz = {
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
      question: "Which of the following are fruits?",
      options: [
        { id: "a", text: "Apple" },
        { id: "b", text: "Carrot" },
        { id: "c", text: "Banana" },
        { id: "d", text: "Potato" },
      ],
      correctAnswers: ["a", "c"],
      navigation: {
        a: 3,
        b: 4,
        c: 5,
        d: 6,
      },
    },
    {
      id: 3,
      type: "input",
      question: "What is the square root of 16?",
      correctAnswer: "4",
      navigation: {
        "4": 4,
        default: 5,
      },
    },
    {
      id: 4,
      type: "one-choice",
      question: "Which planet is known as the Red Planet?",
      options: [
        { id: "a", text: "Earth" },
        { id: "b", text: "Mars" },
        { id: "c", text: "Jupiter" },
        { id: "d", text: "Saturn" },
      ],
      correctAnswer: "b",
      navigation: {
        a: 5,
        b: 6,
        c: 1,
        d: 2,
      },
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "Which of the following are programming languages?",
      options: [
        { id: "a", text: "Python" },
        { id: "b", text: "HTML" },
        { id: "c", text: "CSS" },
        { id: "d", text: "JavaScript" },
      ],
      correctAnswers: ["a", "d"],
      navigation: {
        a: 6,
        b: 1,
        c: 2,
        d: 3,
      },
    },
    {
      id: 6,
      type: "input",
      question: "What is the chemical symbol for water?",
      correctAnswer: "H2O",
      navigation: {
        H2O: 1,
        default: 2,
      },
    },
  ],
};
