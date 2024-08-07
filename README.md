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
- Quiz Consists of title and questions
- Every question can have optional title, description and img propertios which render on the page based on they exist or not
- !!! (Important) every question needs type atribute, there three types. 1) "multiple-choice", 2) "one-choice" 3) "input";
- Types values are very important in quiz rendering and working logic, if they are not provided in json, quiz component will fail.
- Obviously we have options and correct answer(s), number of options is not limited and number of correct answers is not limited if kase of multy choice question

  ## Aditional features
  -- Json viewer
  -- Quiz result viewer, after completing it. (quiz remembers and keeps trak of every answerd question cronologically)
  -- Timer
  -- Quiz Result preview

## ToDo
[x] Use Css Modules and create Components with them such es buttons inputs and so on
[x] create additional pages for Quiz end screen and quiz result preview page
[x] Use Context Api for quiz data management (for switching quizes)
[x] Clean Up Quiz Component code, revirete them in custom hooks 
[x] Preview Component render optimization
  
