import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile3comp from "../../assets/profile3comp.webp";

function Hero({ mode }) {
  return (
    <section
      id="home"
      className={`w-full ${mode ? "bg-[#151515]" : " bg-[#f5f5f5]"} `}
    >
      <div className="flex gap-5 flex-col-reverse mb-20 w-full text-5xl mx-auto max-w-screen-2xl lg:gap-10 lg:flex-row">
        <div className="w-full flex justify-center py-32 px-14 pb-10">
          <div className="flex flex-col justify-center gap-16">
            <h1 className="font-extrabold text-center text-4xl md:text-6xl lg:text-7xl md:text-left">
              Hey, I'm Andrés
            </h1>
            <div className="flex flex-col items-center font-extrabold md:flex-row">
              <h2 className="font-extrabold text-4xl pr-2.5 md:text-4xl xl:text-5xl">
                An integral
              </h2>
              <ReactTyped
                className="text-4xl md:text-4xl xl:text-5xl"
                strings={[
                  "Web Developer.",
                  "Frontend Developer.",
                  "Professional.",
                ]}
                typeSpeed={80}
                backSpeed={70}
                loop
              ></ReactTyped>
            </div>
            <p className="text-3xl text-center md:text-4xl md:text-left ">
              I'm a dedicated web developer with a full-stack foundation,
              focused on crafting innovative, user-centered digital experiences.
              With a strategic mindset from logistics, I prioritize scalable,
              high-quality solutions that drive engagement. Eager to grow
              technically and contribute to impactful development teams.
            </p>
            <div className="w-full flex justify-center gap-6 md:justify-normal">
              <a href="#contact">
                <button
                  className={`inline-flex items-center rounded-full py-4 px-6 text-xl font-semibold text-white ${
                    mode ? "border-white" : ""
                  } bg-black border-black  hover:text-black border-2
              hover:bg-white transition ease-in-out delay-90 hover:-translate-y-1 duration-500 focus:bg-white focus:text-black`}
                >
                  Reach Out
                </button>
              </a>
              {/* <a href={cv} target="_blank">
                <button
                  className="inline-flex items-center rounded-full py-4 px-6 text-xl font-semibold text-black bg-white border-black hover:text-white border-2
              hover:bg-black hover:border-white transition ease-in-out delay-90 hover:-translate-y-1 duration-500 focus:bg-black focus:text-white"
                >
                  Resume
                </button>
              </a> */}
            </div>
            <div className="w-full flex items-center justify-center pt-16 gap-8 md:justify-start lg:justify-start">
              <a
                className={`text-5xl p-4 rounded-full border-2 ${
                  mode
                    ? "bg-black border-white hover:bg-[#f0f0f0] hover:text-[#121212]"
                    : "bg-white border-black hover:bg-[#121212] hover:text-[#f0f0f0]"
                } transition-all ease-linear`}
                href="https://github.com/anfvc"
                target="_blank"
                aria-label="Please click here to go to my GitHub profile"
              >
                <FaGithub />
              </a>
              <a
                className={`text-5xl p-4 rounded-full border-2 ${
                  mode
                    ? "bg-black border-white hover:bg-[#f0f0f0] hover:text-[#121212]"
                    : "bg-white border-black hover:bg-[#121212] hover:text-[#f0f0f0]"
                } transition-all ease-linear`}
                href="https://linkedin.com/in/avillay"
                target="_blank"
                aria-label="Please click here to go to my LinkedIn profile"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <img
            className="w-full object-cover"
            src={profile3comp}
            alt="hero-picture"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
