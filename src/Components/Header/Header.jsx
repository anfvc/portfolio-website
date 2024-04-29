import avatar from "../../assets/avatar.png"

function Header() {
  return (
    <header className="sticky top-0 border w-full border-black">
      <nav className="flex justify-between items-center w-full mx-auto p-8">
        <div className="flex items-center gap-4 text-3xl font-bold">
          <div>
            <a href="#"><img className="w-16 rounded-full" src={avatar} alt="avatar-img" /></a>
          </div>
          <h2>Andrés Villay</h2>
        </div>
        <ul className="flex items-center gap-8 text-3xl">
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>Contact</li>
          </a>
          <a href="">
            <li>Projects</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
