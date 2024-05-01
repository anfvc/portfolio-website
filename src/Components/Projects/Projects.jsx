import { projects } from "../../projects.js";

function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="w-full mx-auto">
        <div className="w-full flex justify-center mx-auto">
          <h2 className="font-bold text-5xl">Projects</h2>
        </div>
        {projects.map((project, i) => (
          <div className="project" key={i}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Language used: {project.techUsed.join(", ")}</p>
            <a className="text-blue-700" href={project.link} target="_blank">
              {" "}
              {/* Need to remove link color late */}
              Link to the Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
