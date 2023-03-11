import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <div className="div-1">
          <div className="div-3">
            <a className="tel" href="tel:+8801762554444">
              <i class="fa-solid fa-phone"></i>+8801762554444
            </a>
            <a className="mail" href="mailto:dhakadreamlandpark@gmail.com">
              <i class="fa-sharp fa-regular fa-envelope"></i>
              dhakadreamlandpark@gmail.com
            </a>
          </div>
          <div className="div-4">
            <a className="icon" href="/">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a className="icon" href="/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a className="icon" href="/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a className="icon" href="/">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <button className="login">
              <a href="/">
                <i class="fa-solid fa-lock"></i>Login
              </a>
            </button>
            <button className="sign">
              <a href="/">
                <i class="fa-solid fa-user"></i>Sign Up
              </a>
            </button>
          </div>
        </div>

        <div className="div-2">
          <div>
            <h1 className="navbar-logo">Dhaka Resort</h1>
            <p className="logo">
              Hotel,Resort,Resturant,Picnic and Sports Zone
            </p>
          </div>

          <ul className="nav-menu">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href="/">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
