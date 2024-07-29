import React from "react";
import Card from "../components/cards";
import { img1, img2, img3 } from "../images/index";
import "./CardContainer.css";
const CardContainer = () => {
  return (
    <div className="cardContainer">
      <Card
        heading="Developers & Owners"
        content="We're growing rapidly across the country, don’t miss out."
        link="Partner with us"
        img={img1}
      />
      <Card
        heading="Corporate Bookings"
        content="With a Bloom in most major cities, we’re the best hotel partner"
        link="Get in touch"
        img={img2}
      />
      <Card
        heading="Careers @ Bloom"
        content="Work with a team that’s transforming hospitality."
        link="Bloom with us"
        img={img3}
      />
    </div>
  );
};

export default CardContainer;
