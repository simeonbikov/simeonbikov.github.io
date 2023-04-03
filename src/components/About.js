import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const About = () => {
  return (
    <div id="home" className="w-full h-screen bg-dark2">
      <div className="max-w-[550px] lg:max-w-[800px] mx-auto flex flex-col justify-center h-full px-5">
        <p className="text-primary3">Hi, my name is</p>
        <div className="flex items-baseline">
          <h1 className="text-4xl lg:text-6xl font-bold text-light1">
            SIMEON
          </h1>
          <p className="text-primary3 py-4 pl-2">I am a UK based</p>
        </div>
        <div className="flex items-baseline">
          <h2 className="text-5xl lg:text-7xl font-bold text-primary1">
            Software Devel
          </h2>
          <img
            className="w-10 h-10 rounded-full border border-primary3"
            src={Logo}
            alt="o"
          />
          <h2 className="text-5xl lg:text-7xl font-bold text-primary1">per</h2>
        </div>
        <p className="text-primary2 py-4 max-w-[700px]">
          with a passion for exploring and creating.
        </p>
        <div>
          <Link to="/projects">
            <button className="bg-dark2 text-light1 border-2 border-light1 px-8 py-2 m-8 text-lg hover:bg-dark1 mx-auto flex items-center">
              View Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
