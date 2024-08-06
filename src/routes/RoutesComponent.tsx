import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export default RoutesComponent;
