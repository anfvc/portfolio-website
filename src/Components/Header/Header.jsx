import { useState } from "react";
import avatar from "../../assets/avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Switch } from "@mui/material";

function Header({ mode, handleChange }) {
  const [hamburger, setHamburger] = useState(false);

  function handleMenu() {
    setHamburger(!hamburger);
  }

  return (
    <header
      className={`sticky top-0 w-full z-50 shadow-md ${
        mode ? "bg-black" : "bg-white"
      }`}
    >
      <nav className="flex justify-between items-center w-full mx-auto max-w-screen-2xl p-8 border-solid">
        <div className="flex items-center gap-4 text-3xl font-bold">
          <div>
            <a href="#">
              <img
                className="w-16 rounded-full"
                src={avatar}
                alt="avatar-img"
              />
            </a>
          </div>
          <h2>Andrés Villay</h2>
          <Switch
            checked={mode}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            size="small"
          />
        </div>
        <ul className="items-center hidden gap-8 text-3xl font-semibold md:flex">
          <a className="relative inline-block" href="#" target="_self">
            <li className="py-1 border-transparent hover:border-solid hover:border-black hover:border-b-4 transition-all duration-75 ">
              Home
            </li>
          </a>
          <a className="relative inline-block" href="#about" target="_self">
            <li className="py-1 border-transparent hover:border-solid hover:border-black hover:border-b-4 transition-all duration-75">
              About
            </li>
          </a>
          <a className="relative inline-block" href="#projects" target="_self">
            <li className="py-1 border-transparent hover:border-solid hover:border-black hover:border-b-4 transition-all duration-75">
              Projects
            </li>
          </a>
          <a className="relative inline-block" href="#contact" target="_self">
            <li className="py-1 border-transparent hover:border-solid hover:border-black hover:border-b-4 transition-all duration-75">
              Contact
            </li>
          </a>
        </ul>
        <div className="block text-5xl md:hidden" onClick={handleMenu}>
          {hamburger ? (
            <AiOutlineClose className="text-6xl" />
          ) : (
            <GiHamburgerMenu />
          )}
        </div>
        <div
          className={
            hamburger
              ? "absolute left-0 right-0 bg-black top-[100%] opacity-100 w-screen py-1 ease-in-out duration-500"
              : "absolute top-[100%] left-[-100%] right-[100%] opacity-0 ease-in-out duration-500"
          }
        >
          <ul className="flex flex-col justify-center gap-14 font-semibold px-10 py-16 text-white h-full">
            <a
              className="snap-normal"
              href="#"
              target="_self"
              onClick={handleMenu}
            >
              <li className="">Home</li>
            </a>
            <a className="" href="#about" target="_self" onClick={handleMenu}>
              <li className="">About</li>
            </a>
            <a
              className=""
              href="#projects"
              target="_self"
              onClick={handleMenu}
            >
              <li className="">Projects</li>
            </a>
            <a className="" href="#contact" target="_self" onClick={handleMenu}>
              <li className="">Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
