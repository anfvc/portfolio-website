import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "./projects.js";

function Projects({ mode }) {
  return (
    <section
      id="projects"
      className={`w-full ${
        mode ? "bg-[#151515]" : " bg-[#f5f5f5]"
      } py-36 overflow-x-hidden overflow-y-hidden scroll-mt-60`}
    >
      <div className="w-full flex flex-col gap-16 px-10 md:px-20 mx-auto max-w-screen-xl">
        <div className="w-full flex justify-center mx-auto">
          <h2 className="font-bold text-5xl">Projects</h2>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10">
          {projects.map((project, i) => (
            <div
              className={`w-full flex h-full flex-col gap-6 md:gap-8  md:flex-row-reverse md:items-center border py-8 px-8 border-y rounded-3xl ${
                mode
                  ? "first:border-t border-[#f5f5f5] "
                  : "first:border-t border-[#121212] shadow-lg"
              } py-10`}
              key={i}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="w-full">
                <img
                  src={project.image}
                  alt={"Image of" + " " + project.name}
                  className="w-full object-cover rounded-3xl grayscale brightness-80 hover:grayscale-0 hover:duration-700 hover:ease-in-out p-3"
                />
              </div>
              <div className="w-full flex flex-col gap-9 p-4">
                <h3 className="font-semibold text-3xl">{project.name}</h3>
                <p>{project.description}</p>

                <div className="flex flex-wrap items-center gap-3.5 font-semibold justify-start md:justify-start">
                  {project.techUsed.map((language, i) => (
                    <div
                      className={`flex px-3 py-1 gap-2 justify-center items-center border ${
                        mode
                          ? "hover:bg-[#f5f5f5] hover:text-[#151515] border-[#f5f5f5]"
                          : "hover:bg-[#151515] hover:text-[#f5f5f5] border-[#151515]"
                      } transition-all ease-linear rounded-md`}
                      key={i}
                      //   data-aos="fade-left"
                      //   data-aos-offset="300"
                      //   data-aos-easing="ease-in-cubic
                      // "
                    >
                      <img
                        src={language.image}
                        alt={`Icon of ${language.name}`}
                        className="w-12 grayscale brightness-80 hover:grayscale-0 hover:duration-700 hover:ease-in-out"
                        title={language.name}
                      />
                      <p className="">{language.name}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="flex gap-4 justify-start items-center"
                  data-aos="fade-down"
                >
                  <a
                    className={`flex items-center gap-2 text-2xl p-3 border ${
                      mode
                        ? "hover:bg-[#f5f5f5] hover:text-[#151515] border-[#f5f5f5]"
                        : "hover:bg-[#151515] hover:text-[#f5f5f5] border-[#151515]"
                    } rounded-lg`}
                    href={project.link}
                    target="_blank"
                  >
                    <FiExternalLink /> Demo
                  </a>
                  {project.github !== "" && (
                    <a
                      className={`flex items-center gap-2 text-2xl p-3 border ${
                        mode
                          ? "hover:bg-[#f5f5f5] hover:text-[#151515] border-[#f5f5f5]"
                          : "hover:bg-[#151515] hover:text-[#f5f5f5] border-[#151515]"
                      } rounded-lg `}
                      href={project.github}
                      target="_blank"
                    >
                      <FiGithub /> Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
