import { ReactTyped } from "react-typed";
import profile3 from "../../assets/profile3.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
              I'm a tech enthusiast making a transition into the Web Development
              industry. Aiming to become the best developer I can be, I have a
              keen interest in bringing innovative ideas to life and crafting
              impactful products and experiences for end-users, I'm always eager
              to continue growing professionally and advance as a developer.
            </p>
            <div className="w-full flex justify-center gap-6 md:justify-normal">
              <a href="mailto:andresvillay2@gmail.com">
                <button
                  className={`inline-flex items-center rounded-full px-4 py-2 md:px-8 md:py-5 text-xl font-semibold text-white ${
                    mode ? "border-white" : ""
                  } bg-black border-black  hover:text-black border-2
              hover:bg-white transition ease-in-out delay-90 hover:-translate-y-1 duration-500 focus:bg-white focus:text-black`}
                >
                  Reach Out
                </button>
              </a>
              <a href="#stack">
                <button
                  className="inline-flex items-center rounded-full px-4 py-2 md:px-8 md:py-5 text-xl font-semibold text-black bg-white border-black hover:text-white border-2
              hover:bg-black hover:border-white transition ease-in-out delay-90 hover:-translate-y-1 duration-500 focus:bg-black focus:text-white"
                >
                  Tech Stack
                </button>
              </a>
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
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <img
            className="w-full object-cover"
            src={profile3}
            alt="hero-picture"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
