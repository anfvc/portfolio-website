import { projects } from "../../projects.js";

function Projects() {
  return (
    <div>
      {projects.map((project, i) => (
        <div className="project" key={i}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>Language used: {project.techUsed.join(", ")}</p>
          <a href={project.link} target="_blank">
            Link to the Project
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
