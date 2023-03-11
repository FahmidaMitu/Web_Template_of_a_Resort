import "./FooterStyle.css";
import { Component } from "react";
function Footer() {
  return (
    <>
      <div className="footer">
        <div1>
          <div>
            <h1 className="footer-logo">Dhaka Resort</h1>
            <p className="logo">
              Hotel,Resort,Resturant,Picnic and Sports Zone
            </p>
          </div>
          <div className="div-3">
            <a className="tel" href="tel:+8801762554444">
              <i class="fa-solid fa-phone"></i>+8801762554444
            </a>
            <a className="mail" href="mailto:dhakadreamlandpark@gmail.com">
              <i class="fa-sharp fa-regular fa-envelope"></i>
              dhakadreamlandpark@gmail.com
            </a>
            <p className="spanL">Location: Gazipur, Dhaka</p>
          </div>
          <hr />
          <p className="spaceup">
            Copyright &copy; 2022 <span className="bold1">Dhaka Resort</span>{" "}
            All rights reserved
          </p>
        </div1>
      </div>
    </>
  );
}
export default Footer;
