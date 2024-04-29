import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="w-full text-5xl font-extrabold">
      <div className="flex gap-2">
        <h1>Hello! I'm Andrés,</h1>
        <h2>a </h2>
        <ReactTyped
          strings={[
            "Web Developer",
            "Frontend Developer",
            "Frontend Enthusiast",
          ]}
          typeSpeed={50}
          backSpeed={80}
          loop
        ></ReactTyped>
      </div>
    </div>
  );
}

export default Hero;
