import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import Logo from "../images/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[50px] flex justify-end items-center px-4 bg-[#0d0c1d] text-white">
      {/* <img src={Logo} alt="Logo Image" style={{ width: "50px" }} /> */}

      {/* menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        {/* <li>About</li> */}
        {/* <li>Skills</li> */}
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0d0c1d] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        {/* <li className="py-6 text-4xl">About</li> */}
        <li className="py-6 text-4xl">Works</li>
        <li className="py-6 text-4xl">LinkedIn</li>
        <li className="py-6 text-4xl">GitHub</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3772ff]">
            <a
              className="flex justify-between items-center w-full text-[#fdfffc]"
              href="https://linkedin.com/in/simeonbikov"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-[#fdfffc]"
              href="https://github.com/simeonbikov"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#da627d]">
            <a
              className="flex justify-between items-center w-full text-[#fdfffc]"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
