import { ReactTyped } from "react-typed";
import profile from "../../assets/profile.png";

function Hero() {
  return (
    <section className="w-full pb-20">
      <div className="flex w-full text-5xl">
        <div className="w-full flex flex-col items-center justify-center gap-2 border-stone-950 py-5">
          <div className="flex flex-col gap-5">
            <h1 className="font-extrabold text-8xl">Hello! I'm Andrés</h1>
            <div className="flex font-extrabold">
              <h2 className="pr-2.5">A</h2>
              <ReactTyped
                strings={[
                  "Web Developer",
                  "Frontend Developer",
                  "Frontend Enthusiast",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop
              ></ReactTyped>
            </div>
            <p className="text-3xl">I'm aspiring to become a passionate web developer!</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center object-cover">
          <img className="w-full" src={profile} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
