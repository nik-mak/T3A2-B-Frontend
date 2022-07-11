import React from "react";
import heroimg from "../assets/heroimg.jpg";
import HeartIcon from "./Icons/HeartIcon";

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
      <div className="absolute inset-1/2 translate-y-[-50%] translate-x-[-50%]">
        <HeartIcon className="fill-slate-200" />
      </div>
    </section>
  );
}

export default HeroBanner;
