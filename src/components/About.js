import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
// import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#161b33]">
      {/* Container */}
      <div className="max-w-[550px] lg:max-w-[800px] mx-auto flex flex-col justify-center h-full px-5">
        <p className="text-[#da627d]">Hi, my name is</p>
        <div className="flex items-baseline">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#ccd6f6]">
            SIMEON
          </h1>
          <p className="text-[#da627d] py-4 pl-2">I am a UK based</p>
        </div>
        <div className="flex items-baseline">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#3772ff]">
            Software Devel
          </h2>
          <img
            className="w-10 h-10 rounded-full border border-[#3772ff]"
            src={Logo}
            alt="o"
          />
          <h2 className="text-5xl lg:text-7xl font-bold text-[#3772ff]">per</h2>
        </div>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          with a passion for exploring and creating.
        </p>
        <div>
          <Link to="/projects">
            <button className="bg-[#161b33] text-white border-2 border-white px-8 py-2 m-8 text-lg hover:bg-[#0d0c1d] mx-auto flex items-center">
              View Work
            </button>
          </Link>
        </div>
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
