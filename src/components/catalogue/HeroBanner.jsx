import React from "react";
import HeroImage from "./HeroImage";
import HeartIcon from "../Icons/HeartIcon";

// Heart svg styling to position it correctly.
const heartStyle = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

// Mission Statement styling to position it correctly.
const missionStyle = {
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

/**
 * HeroBanner is a component that handles rendering the hero banner at the top of the website
 *
 * @return {HTML} a relatively positioned hero section for the desperate housewares website
 */
function HeroBanner() {
  return (
    <section className="relative">
      <HeroImage />
      <div className="absolute z-20" style={heartStyle}>
        <HeartIcon className="w-14 fill-white hover:fill-rose-700 sm:w-24 xl:w-28" />
      </div>
      <div className="absolute flex w-4/5 md:w-2/5 flex-col space-y-4 rounded-lg bg-ghost-white py-11 text-center drop-shadow-lg z-10" style={missionStyle}>
        <h2 className="inline font-oswald text-2xl md:text-3xl xl:text-4xl">Our Mission</h2>
        <p className="inline font-oswald text-xl md:text-xl xl:text-2xl font-light">
          Shining light on community-driven op shops so you can thrive on your
          next thrift!
        </p>
      </div>
    </section>
  );
}

export default HeroBanner;
