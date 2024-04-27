import { projects } from "../../projects.js";

function Projects() {
  return (
    <div>
      <h2>Here I'm gonna use gitHub API to get my projects</h2>
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
