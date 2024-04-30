import { ReactTyped } from "react-typed";
import profile3 from "../../assets/profile3.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="w-full pb-20">
      <div className="flex w-full text-5xl gap-16">
        <div className="w-full flex justify-center px-20 gap-2 pb-20">
          <div className="flex flex-col justify-center gap-16">
            <h1 className="font-extrabold text-8xl">Hi there, I'm Andrés</h1>
            <div className="flex font-extrabold">
              <h2 className="font-extrabold pr-2.5">An integral</h2>
              <ReactTyped
                strings={[
                  "Web Developer.",
                  "Frontend Developer.",
                  "Professional.",
                ]}
                typeSpeed={100}
                backSpeed={70}
                loop
              ></ReactTyped>
            </div>
            <p className="text-3xl text-justify">
              I'm a tech enthusiast making a transition into the Web Development
              industry, aiming to become the best developer I can be. With a
              keen interest in bringing innovative ideas to life and crafting
              impactful products and experiences for end-users, I'm always eager
              to continue growing professionally and advance as a developer.
            </p>
            <div className="w-full flex gap-8">
              <button className="bg-black text-white border rounded-full px-8 py-6 text-2xl hover:bg-white hover:text-black hover:border-black hover:transition-all hover:ease-in-out duration-600">
                Reach Out
              </button>
              <button className="bg-white border border-black rounded-full px-8 py-6 text-2xl hover:bg-black hover:transition-all hover:ease-in-out duration-600 hover:text-white hover:border-white">
                See my experience
              </button>
            </div>
            <div className="w-full flex items-center pt-16 gap-8">
              <a
                className="text-5xl border p-4 rounded-full bg-white"
                href="https://github.com/anfvc"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className="text-5xl border p-4 rounded-full bg-white"
                href="https://linkedin.com/in/avillay" target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center object-cover">
          <img className="w-full" src={profile3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
