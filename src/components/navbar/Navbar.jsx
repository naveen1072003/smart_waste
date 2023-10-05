import {  NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from '../images/l1.png'

function Navbar() {
  // const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <NavLink className="cart-nav" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="location"
              to="/trackLocation"
            >
              Bin Locations
            </NavLink>
          </li>
          <li>
            <NavLink
              className="location"
              to="/employeeDetails"
            >
             Employee Details
            </NavLink>
          </li>
          <li>Contact Us</li>
          {/* <li>
            <button className="logout" type="submit">
              Log out
            </button>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
