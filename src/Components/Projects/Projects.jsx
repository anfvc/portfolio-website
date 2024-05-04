import { projects } from "../../projects.js";

function Projects() {
  return (
    <section id="projects" className="w-full py-24 scroll-mt-20">
      <div className="w-full flex flex-col gap-16 px-5 md:px-20 mx-auto max-w-screen-2xl">
        <div className="w-full flex justify-center mx-auto">
          <h2 className="font-bold text-5xl">Projects</h2>
        </div>
        <div>
          {projects.map((project, i) => (
            <div className="w-full border-x-none border-y border-t-0 first:border-t border-black py-10 text-justify" key={i}>
              <h3 className="font-semibold">{project.name}</h3>
              <p>{project.description}</p>
              <p>Language: <span className="font-semibold">{project.techUsed.join(", ")}.</span></p>
              <a className="text-blue-700" href={project.link} target="_blank">
                {" "}
                {/* Need to remove link color late */}
                Link to the Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
