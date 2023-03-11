import "./AboutStyle.css";
import { Component } from "react";
function About() {
  return (
    <>
      <div className="choose">
        <div>
          <h1>Why Choose Dhaka Resort?</h1>
          <p>Dhaka Resort Is A Place Where Modern Amenities </p>
          <p>Maintain Strong Rapport With Nature</p>
        </div>
        <div className="div-left">
          <div className="div-img-left">
            <img
              className="image1"
              alt="HeroImg"
              src="https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <img
              className="image1"
              alt="HeroImg"
              src="https://images.unsplash.com/photo-1589550506544-8bc215113f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </div>
          <div className="div-img-right">
            <img
              className="image2"
              alt="HeroImg"
              src="https://images.unsplash.com/photo-1602281807778-ef209a1318d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
            <img
              className="image2"
              alt="HeroImg"
              src="https://images.unsplash.com/photo-1548983615-9e5c3349b637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
            />
          </div>
        </div>
        <div className="div-right">
          <p className="description">
            We Offer Organic Foods Produced In Our Own Yard. We Also Feel
            Honored To Host Your Events Like Wedding, Anniversary, Birthday
            Party And Many More. For Our Corporate Clients We Are Ready To
            Shoulder The Responsibility Of Arranging AGM, Corporate Day Out,
            Corporate Picnic And So Many.
          </p>
          <ul>
            <li>Different Type Of Cottages.</li>
            <li>Family Picnic Zone.</li>
            <li>Swimming Pool.</li>
            <li>Shooting Zone.</li>
            <li>Kids Play Ground.</li>
            <li>Eco Park.</li>
          </ul>
          <button className="discover">
            <a href="/">DISCOVER NOW</a>
          </button>
        </div>
        <div class="clear-div"></div>
      </div>
    </>
  );
}
export default About;
