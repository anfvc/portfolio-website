import { projects } from "../../projects.js";
import { useState } from "react";

function Projects() {
  const [isHovering, setIsHovering] = useState(-1);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setCursor({ x: e.clientX, y: e.clientY });
  }

  return (
    <section id="projects" className="w-full py-24 scroll-mt-20">
      <div className="w-full flex flex-col gap-16 px-5 md:px-20 mx-auto max-w-screen-2xl">
        <div className="w-full flex justify-center mx-auto">
          <h2 className="font-bold text-5xl">Projects</h2>
        </div>
        <div className="w-full flex flex-col justify-center gap-8" onMouseMove={handleMouseMove}>
          {projects.map((project, i) => (
            <div
              className="w-full relative flex flex-col gap-4 border-x-none border-y border-t-0 first:border-t border-black py-10 text-justify"
              key={i}
              onMouseEnter={() => setIsHovering(i)}
              onMouseLeave={() => setIsHovering(-1)}
            >
              <h3 className="font-semibold">{project.name}</h3>
              <p>{project.description}</p>
              <p>
                Language:{" "}
                <span className="font-semibold">
                  {project.techUsed.join(", ")}.
                </span>
              </p>
              <a href={project.link}>
                <p>Demo</p>
              </a>
              {isHovering === i ? (
                <img
                  className="object-cover w-1/5 absolute transition-all duration-200"
                  src={project.image}
                  alt={project.name}
                  style={{ left: `${cursor.x}px`, top: `${50}px`, right: `${cursor.x}` }}
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
