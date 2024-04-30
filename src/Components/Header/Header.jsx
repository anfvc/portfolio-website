import avatar from "../../assets/avatar.png"

function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-white">
      <nav className="flex justify-between items-center w-full mx-auto p-8">
        <div className="flex items-center gap-4 text-3xl font-bold">
          <div>
            <a href="#"><img className="w-16 rounded-full" src={avatar} alt="avatar-img" /></a>
          </div>
          <h2>Andrés Villay</h2>
        </div>
        <ul className="flex items-center gap-8 text-3xl">
          <a href="#" target="_self">
            <li>Home</li>
          </a>
          <a href="#projects" target="_self">
            <li>Projects</li>
          </a>
          <a href="#about" target="_self">
            <li>About</li>
          </a>
          <a href="#contact" target="_self">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
