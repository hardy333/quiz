import { Route, Routes } from "react-router-dom";
import Quiz from "../pages/quiz/Quiz";
import Home from "../pages/home/Home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:quizIndex" element={<Quiz />} />
    </Routes>
  );
};

export default RoutesComponent;
