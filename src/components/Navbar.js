import React, { useState } from "react";
// import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[50px] flex justify-end items-center px-4 bg-[#0d0c1d] text-white">
      {/* <img src={Logo} alt="Logo Image" style={{ width: "30px" }} /> */}

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          {/* <Link to="/home" smooth={true} duration={500}>
            Home
          </Link> */}
          <HashLink smooth to="/#home">
            Home
          </HashLink>
        </li>
        <li>
          {/* <Link to="/work" smooth={true} duration={500}>
            Work
          </Link> */}
          <HashLink smooth to="/#projects">
            Work
          </HashLink>
        </li>
        <li>
          {/* <Link to="/contact" smooth={true} duration={500}>
            Contact
          </Link> */}
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </li>
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
        <li className="py-6 text-4xl">
          <HashLink smooth to="/#home">
            Home
          </HashLink>
        </li>
        <li className="py-6 text-4xl">
          <HashLink smooth to="/#projects">
            Work
          </HashLink>
        </li>
        <li className="py-6 text-4xl">
          <a href="https://linkedin.com/in/simeonbikov">Linkedin</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="https://github.com/simeonbikov">Github</a>
        </li>
        <li className="py-6 text-4xl">
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </li>
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
            <HashLink
              smooth
              to="/#contact"
              className="flex justify-between items-center w-full text-[#fdfffc]"
            >
              Contact <HiOutlineMail size={30} />
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
