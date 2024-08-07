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
