import React from "react";
import heroimg from "../assets/heroimg.jpg";
import HeartIcon from "./Icons/HeartIcon";

const style={
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

function HeroBanner() {
  return (
    <section className="relative">
      <div className="relative h-96 w-full">
        <div className="absolute z-10 h-full w-full bg-black opacity-25"></div>
        <img
          src={heroimg}
          alt="clothing rack being opened"
          className="absolute z-0 h-full w-full object-cover"
        ></img>
      </div>
      <div className="absolute z-20" style={style}>
        <HeartIcon className="fill-white" />
      </div>
    </section>
  );
}

export default HeroBanner;
