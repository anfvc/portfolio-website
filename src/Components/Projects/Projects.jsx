import { projects } from "../../projects.js";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

function Projects({ mode }) {
  return (
    <section
      id="projects"
      className={`w-full ${
        mode ? "bg-[#121212]" : " bg-[#f5f5f5]"
      } py-24 scroll-mt-20`}
    >
      <div className="w-full flex flex-col gap-16 px-5 md:px-20 mx-auto max-w-screen-2xl">
        <div className="w-full flex justify-center mx-auto">
          <h2 className="font-bold text-5xl">Projects</h2>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          {projects.map((project, i) => (
            <div
              className={`w-full flex flex-col gap-8 border-x-none border-y border-t-0 ${
                mode
                  ? "first:border-t border-[#f5f5f5]"
                  : "first:border-t border-[#121212]"
              } py-10 text-justify`}
              key={i}
            >
              <h3 className="font-semibold">{project.name}</h3>
              <p>{project.description}</p>

              <div className="flex flex-wrap items-center gap-3 font-semibold">
                {project.techUsed.map((language, i) => (
                  <div
                    className={`border ${
                      mode
                        ? "hover:bg-[#f5f5f5] hover:text-[#151515] border-[#f5f5f5]"
                        : "hover:bg-[#151515] hover:text-[#f5f5f5] border-[#151515]"
                    } transition-all ease-linear rounded-md`}
                    key={i}
                  >
                    <p className="py-1 px-2">{language}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  className="flex items-center gap-8 text-blue-900 text-3xl p-1"
                  href={project.link}
                  target="_blank"
                >
                  <FiExternalLink />
                </a>
                <a
                  className="flex items-center gap-8 text-blue-900 text-3xl p-1"
                  href={project.github}
                  target="_blank"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
