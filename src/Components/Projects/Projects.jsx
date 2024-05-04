import { projects } from "../../projects.js";
import { useState } from "react";

function Projects() {
  const [isHovering, setIsHovering] = useState(-1);

  // function handleMouseEnter(e) {
  //   setIsHovering(true);
  // }

  // function handleMouseLeave(e) {
  //   setIsHovering(false);
  // }

  return (
    <section id="projects" className="w-full py-24 scroll-mt-20">
      <div className="w-full flex flex-col gap-16 px-5 md:px-20 mx-auto max-w-screen-2xl">
        <div className="w-full flex justify-center mx-auto">
          <h2 className="font-bold text-5xl">Projects</h2>
        </div>
        <div className="w-full flex flex-col justify-center gap-8">
          {projects.map((project, i) => (
            <div
              className="w-full flex flex-col gap-4 border-x-none border-y border-t-0 first:border-t border-black py-10 text-justify"
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
              {isHovering === i ? ( //I have to the same but with an <img>
                <a
                  className="text-blue-700 block"
                  href={project.link}
                  target="_blank"
                >
                  {" "}
                  {/* Need to remove link color late */}
                  Link to the Project
                </a>
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
