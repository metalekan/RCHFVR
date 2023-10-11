import React, { useContext } from "react";
import { ProjectContext } from "../App";

import { IoMdClose, IoMdMenu } from "react-icons/io";

import world from "../assets/worldcoin.png";

const Header = () => {
  const { toggle, setToggle } = useContext(ProjectContext);
  const openClose = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="px-[1rem] py-2 flex justify-between items-center font-roboto text-offWhite glass">
        <div className="flex items-center">
          <h3 className="font-header tracking-[4px] text-lg md:text-[2.5rem]">
            Metalekan
          </h3>
          <img
            src={world}
            className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
          />
        </div>
        <ul className="menu hidden xl:flex lg:gap-[4rem] gap-[2rem] text-sm xl:text-md">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1DQObdblXeZDTH-HlmLihFn2k-1c5l980/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <ul
          className={`${
            toggle ? "grid" : "hidden"
          } xl:hidden mobile__menu menu h-screen w-full place-content-center gap-[4rem] text-center text-sm xl:text-md z-[20] fixed top-0 right-0 rounded-tl-lg animate__animated animate__slideInLeft`}
        >
          <li>
            <a onClick={openClose} href="/">
              Home
            </a>
          </li>
          <li>
            <a onClick={openClose} href="#project">
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={openClose}
              href="https://drive.google.com/file/d/1U9KK6Fhf5sVpXokq0BlpZ52Hh5bw1GPk/view?usp=drivesdk"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li>
            <a onClick={openClose} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
        {toggle ? (
          <IoMdClose
            onClick={openClose}
            className="text-lg hover:scale-125 duration-800 md:hidden z-50 cursor-pointer"
          />
        ) : (
          <IoMdMenu
            onClick={openClose}
            className="text-lg hover:scale-125 md:hidden z-50 cursor-pointer"
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
