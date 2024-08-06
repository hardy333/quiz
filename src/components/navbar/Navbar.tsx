import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/quiz">Static Quiz</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
