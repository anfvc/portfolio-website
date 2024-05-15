import { FaGithub, FaLinkedin } from "react-icons/fa";
import Andres from "../../assets/Andres.png";

function Footer({ mode }) {
  return (
    <footer className="w-full px-5 md:px-20 ">
      <div className="w-full gap-5 flex flex-col items-center border-t md:flex-row md:justify-between md:items-center sticky pt-20 pb-10 mx-auto max-w-screen-2xl">
        <div className="w-full flex items-center justify-center gap-2 md:justify-start px-5">
          <a
            className={`text-5xl p-4 rounded-full ${
              mode
                ? "bg-black hover:bg-[#f0f0f0] hover:text-[#121212]"
                : "bg-white hover:bg-[#121212] hover:text-[#f0f0f0]"
            } transition-all ease-linear`}
            href="https://github.com/anfvc"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className={`text-5xl p-4 rounded-full ${
              mode
                ? "bg-black hover:bg-[#f0f0f0] hover:text-[#121212]"
                : "bg-white hover:bg-[#121212] hover:text-[#f0f0f0]"
            } transition-all ease-linear`}
            href="https://linkedin.com/in/avillay"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="w-full flex justify-center">
          Developed by Andrés Villay &copy; {new Date().getFullYear()}
        </div>
        <div className="w-full flex flex-col items-center  md:flex-row md:justify-end px-5">
          <a href="#">
            <img
              className="w-16 rounded-full object-cover"
              src={Andres}
              alt="avatar-image"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
