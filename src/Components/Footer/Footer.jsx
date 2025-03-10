import { FaGithub, FaLinkedin } from "react-icons/fa";
import Andres from "../../assets/Andres-compress.webp";

function Footer({ mode }) {
  return (
    <footer className="w-full px-10 pt-40 md:px-20 overflow-x-hidden mt-auto">
      <div
        className={`w-full flex justify-center items-center border-t pt-20 pb-10 ${
          mode ? "" : "border-black"
        } mx-auto max-w-screen-2xl`}
      >
        <div className="w-full flex items-center gap-2">
          <a
            className={`text-4xl p-3 rounded-full border ${
              mode
                ? "bg-black border-white hover:bg-[#f0f0f0] hover:text-[#121212]"
                : "bg-white border-black hover:bg-[#121212] hover:text-[#f0f0f0]"
            } transition-all ease-linear md:text-5xl`}
            href="https://github.com/anfvc"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className={`text-4xl p-3 rounded-full border ${
              mode
                ? "bg-black border-white hover:bg-[#f0f0f0] hover:text-[#121212]"
                : "bg-white border-black hover:bg-[#121212] hover:text-[#f0f0f0]"
            } transition-all ease-linear md:text-5xl`}
            href="https://linkedin.com/in/avillay"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="w-full flex justify-center items-center text-center">
          Andrés Villay &copy; {new Date().getFullYear()}
        </div>
        <div className="w-full flex items-center justify-end">
          <a href="#">
            <img
              className="w-12 rounded-full object-cover md:w-16"
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
