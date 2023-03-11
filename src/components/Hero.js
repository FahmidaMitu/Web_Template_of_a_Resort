import "./HeroStyles.css";
import { Component } from "react";
function Hero() {
  return (
    <>
      <div className="hero">
        <div>
          <img
            className="image"
            alt="HeroImg"
            src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80"
          />
          <div>
            <button className="viewpackage">
              <a href="/">VIEW ALL PACKAGES</a>
            </button>
          </div>
        </div>
        <div class="clear-div"></div>
        <div className="footer">
          <h3>RESERVE YOUR STAY</h3>
          <div className="dropdown">
            <select>
              <option>Packages</option>
              <option>Swimming</option>
              <option>Sea View</option>
            </select>
            <select>
              <option>Date</option>
              <option>01.03.23</option>
              <option>29.03.23</option>
            </select>
            <select>
              <option>Guest</option>
              <option>Couple</option>
              <option>Family</option>
            </select>
            <button className="booknow">
              <a href="/">Book Now</a>
            </button>
          </div>
        </div>
      </div>
      <div class="clear-div"></div>
    </>
  );
}
export default Hero;
