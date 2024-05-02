import { useState } from "react";
import avatar from "../../assets/avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [hamburger, setHamburger] = useState(false);

  function handleNav() {
    setHamburger(!hamburger);
  }

  return (
    <header className="sticky top-0 w-full z-50 bg-white">
      <nav className="flex justify-between items-center w-full mx-auto p-8 border-b border-solid shadow-sm">
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
        </div>
        <ul className="items-center hidden gap-8 text-3xl font-semibold md:flex">
          <a className="relative inline-block" href="#" target="_self">
            <li className="py-1 border-transparent hover:border-solid hover:border-black hover:border-b-4 transition-all duration-75">
              Home
            </li>
          </a>
          <a className="relative inline-block" href="#projects" target="_self">
            <li className="py-1 border-transparent hover:border-solid hover:border-black hover:border-b-4 transition-all duration-75">
              Projects
            </li>
          </a>
          <a className="relative inline-block" href="#about" target="_self">
            <li className="py-1 border-transparent hover:border-solid hover:border-black hover:border-b-4 transition-all duration-75">
              About
            </li>
          </a>
          <a className="relative inline-block" href="#contact" target="_self">
            <li className="py-1 border-transparent hover:border-solid hover:border-black hover:border-b-4 transition-all duration-75">
              Contact
            </li>
          </a>

        </ul>
        <div className="block text-5xl md:hidden" onClick={handleNav}>
            {hamburger ? <GiHamburgerMenu /> : <IoCloseSharp />}
          </div>
      </nav>
    </header>
  );
}

export default Header;
