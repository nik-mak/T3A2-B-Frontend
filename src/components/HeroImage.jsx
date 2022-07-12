import React from "react";
import heroimg from "../assets/heroimg.jpg";

/**
 * HeroImage is a component that handles rendering the hero image for the website
 *
 * @return {HTML} a relatively positioned hero images for the desperate housewares website
 */
function HeroImage() {
  return (
    <div className="relative h-96 w-full">
      <div className="absolute z-10 h-full w-full bg-black opacity-25"></div>
      <img
        src={heroimg}
        alt="clothing rack being opened"
        className="absolute z-0 h-full w-full object-cover"
      ></img>
    </div>
  );
}

export default HeroImage;
