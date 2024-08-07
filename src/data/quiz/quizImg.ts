import { Quiz } from "./data";

// Example usage
export const quizWithImg: Quiz = {
  title: "Enhanced General Knowledge Quiz",
  questions: [
    {
      id: 1,
      type: "one-choice",
      title: "Capital Cities",
      description: "Identify the capital city of France.",
      image:
        "https://plus.unsplash.com/premium_photo-1722686516461-46770349c814?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      title: "Fruits and Vegetables",
      description: "Select all the items that are fruits.",
      image:
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
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
        d: 1,
      },
    },
    {
      id: 3,
      type: "input",
      title: "Mathematics",
      description: "Provide the correct answer for the mathematical question.",
      image:
        "https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      title: "Planets",
      description: "Identify the planet known as the Red Planet.",
      image:
        "https://images.unsplash.com/photo-1722863909009-bfdbc9eb3fb8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        b: 1,
        c: 2,
        d: 3,
      },
    },
    {
      id: 5,
      type: "multiple-choice",
      title: "Programming Languages",
      description: "Select all the programming languages from the list.",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
      question: "Which of the following are programming languages?",
      options: [
        { id: "a", text: "Python" },
        { id: "b", text: "HTML" },
        { id: "c", text: "CSS" },
        { id: "d", text: "JavaScript" },
      ],
      correctAnswers: ["a", "d"],
      navigation: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      },
    },
  ],
};
