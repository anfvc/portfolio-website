import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section className="w-full py-20 border border-orange-600">
      <div className="w-full text-5xl font-extrabold">
        <div className="flex gap-2 border border-stone-950 py-5">
          <h1 className="">Hello! I'm Andrés,</h1>
          <h2>a </h2>
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
      </div>
    </section>
  );
}

export default Hero;
