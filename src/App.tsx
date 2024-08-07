// Css
import "./css/App.css";
import "./css/radio-input.css";
import "./css/checkbox.css";
import "./css/quiz.css";
import "./css/button.css";
import "./css/input.css";

// Data
import RoutesComponent from "./routes/RoutesComponent.tsx";
import Navbar from "./components/navbar/Navbar.tsx";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />

        <input type="checkbox" checked readOnly />

        {/* <input type="radio" id="x" disabled checked />
        <label htmlFor="x"></label> */}

        <RoutesComponent />
      </div>
    </>
  );
};

export default App;
