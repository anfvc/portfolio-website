import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Switch } from "@mui/material";
import Andres from "../../assets/Andres.png";

function Header({ mode, handleChange }) {
  const [hamburger, setHamburger] = useState(false);

  function handleMenu() {
    setHamburger(!hamburger);
  }

  return (
    <header
      className={`sticky top-0 w-full z-50  ${
        mode ? "bg-[#121212] shadow-zinc-900 shadow-md" : "bg-[#fff] shadow-md"
      }`}
    >
      <nav className="flex justify-between items-center w-full mx-auto max-w-screen-2xl p-8 border-solid">
        <div className="flex items-center gap-4 text-3xl font-bold">
          <div>
            <a href="#">
              <img
                className="w-16 rounded-full"
                src={Andres}
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
            color="default"
          />
        </div>
        <ul className="items-center hidden gap-8 text-3xl font-semibold md:flex">
          <a className="relative inline-block" href="#" target="_self">
            <li
              className={`py-1 border-transparent hover:border-solid ${
                mode ? "hover:border-[#f5f5f5]" : "hover:border-[#151515]"
              } hover:border-b-4 transition-all duration-75`}
            >
              Home
            </li>
          </a>
          <a className="relative inline-block" href="#about" target="_self">
            <li
              className={`py-1 border-transparent hover:border-solid ${
                mode ? "hover:border-[#f5f5f5]" : "hover:border-[#151515]"
              } hover:border-b-4 transition-all duration-75`}
            >
              About
            </li>
          </a>
          <a className="relative inline-block" href="#experience" target="_self">
            <li
              className={`py-1 border-transparent hover:border-solid ${
                mode ? "hover:border-[#f5f5f5]" : "hover:border-[#151515]"
              } hover:border-b-4 transition-all duration-75`}
            >
              Experience
            </li>
          </a>
          <a className="relative inline-block" href="#projects" target="_self">
            <li
              className={`py-1 border-transparent hover:border-solid ${
                mode ? "hover:border-[#f5f5f5]" : "hover:border-[#151515]"
              } hover:border-b-4 transition-all duration-75`}
            >
              Projects
            </li>
          </a>
          <a className="relative inline-block" href="#contact" target="_self">
            <li
              className={`py-1 border-transparent hover:border-solid ${
                mode ? "hover:border-[#f5f5f5]" : "hover:border-[#151515]"
              } hover:border-b-4 transition-all duration-75`}
            >
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
              ? "absolute left-0 right-0 bg-black top-[100%] opacity-100 py-1 ease-in-out duration-500"
              : "absolute top-[100%] left-[-100%] right-[100%] opacity-0 ease-in-out duration-500"
          }
        >
          <ul className="flex flex-col justify-center font-semibold px-10 py-28 text-white h-full overflow-x-hidden">
            <a
              className="py-10 border-b border-t border-[#f5f5f5]"
              href="#"
              target="_self"
              onClick={handleMenu}
            >
              <li>Home</li>
            </a>
            <a
              className="py-10 border-b border-[#f5f5f5]"
              href="#about"
              target="_self"
              onClick={handleMenu}
            >
              <li>About</li>
            </a>
            <a
              className="py-10 border-b border-[#f5f5f5]"
              href="#experience"
              target="_self"
              onClick={handleMenu}
            >
              <li>Experience</li>
            </a>
            <a
              className="py-10 border-b border-[#f5f5f5]"
              href="#projects"
              target="_self"
              onClick={handleMenu}
            >
              <li>Projects</li>
            </a>
            <a
              className="py-10 border-b border-[#f5f5f5]"
              href="#contact"
              target="_self"
              onClick={handleMenu}
            >
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
