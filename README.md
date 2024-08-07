[Live](https://quiz-7wqv-git-master-hardy333s-projects.vercel.app/)

![Website preview](https://github.com/hardy333/quiz/blob/master/preview.png)
## Used Technologies 
- React
- Typescript
- React-router-dom
- Vite

  
<small>No libraries used for quiz logic and animations</small>


## how to run the application locally?
- Clone the repo, or donwload the zip file (unarchive it )
- npm i
- npm run dev

#### If you want to build the project
1. npm run build
2. npm run dev


# Json structure 
```js
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
  title?: string;
  description?: string;
  image?: string;
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

```
## Small Description of quiz renderer component
- Quiz consists of a title and questions.
- Every question can have optional title, description, and image properties which render on the page based on their existence.
= (Important) Every question needs a type attribute; there are three types: 1) "multiple-choice", 2) "one-choice", 3) "input".
-Type values are crucial for quiz rendering and logic. If they are not provided in JSON, the quiz component will fail.
-Options and correct answer(s) are included; the number of options and correct answers is not limited in the case of a multiple-choice question.

  ## Aditional features
  - Json viewer
  - Quiz result viewer, after completing it. (quiz remembers and keeps trak of every answerd question cronologically)
  - Timer
  - Quiz Result preview

## ToDo
- [] Use CSS Modules and create components with them, such as buttons, inputs, and so on.
- [] Create additional pages for the quiz end screen and quiz result preview page.
Use Context API for quiz data management (for switching quizzes).
Clean up Quiz Component code; rewrite them in custom hooks.
Optimize the Preview Component render.
Improve TypeScript types so that the as keyword is not needed.
