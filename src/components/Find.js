import "./FindStyle.css";
import { Component } from "react";
function Find() {
  return (
    <>
      <div className="find">
        <img
          className="imagelight"
          alt="HeroImg"
          src="https://images.unsplash.com/photo-1561811358-21aef14f0551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG"
        />

        <div className="pull">
          <h2>FIND OUR POPULAR PACKAGES</h2>

          <div className="div-img">
            <img
              className="imagex"
              alt="HeroImg"
              src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"
            />
            <span>Swimming Package</span>

            <img
              className="imagey"
              alt="HeroImg"
              src="https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <span>Couple Package</span>

            <img
              className="imagez"
              alt="HeroImg"
              src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <span>Villa Package</span>
          </div>
          <div className="clear-div"></div>
          <div>
            <button className="view">
              <a href="/">VIEW ALL PACKAGES & OFFERS</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Find;
