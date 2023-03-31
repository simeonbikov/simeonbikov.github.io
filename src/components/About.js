import React from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#161b33]">
      {/* Container */}
      <div className="max-w-[500px] lg:max-w-[900px] mx-auto flex flex-col justify-center h-full px-5">
        <p className="text-[#da627d]">Hi, my name is</p>
        <h1 className="text-4xl lg:text-6xl font-bold text-[#ccd6f6]">
          SIMEON
        </h1>
        <h2 className="text-4xl lg:text-6xl font-bold text-[#3772ff]">
          I am a Software Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          with a passion for exploring and creating.
        </p>
        {/* <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default About;
