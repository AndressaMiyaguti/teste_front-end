import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="blocoI">
      <div className="blocoI_title">
        <h1>Healthy Food</h1>
      </div>
      <div className="blocoI_ul">
        <ul>
          <li>HEALTHY RECIPES</li>
          <li>BLOG</li>
          <li>JOIN</li>
          <li>
            <Link to="/cadastro">
              {" "}
              <button className="blocoI_button">REGISTER</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
