

function Projects() {

  console.log(projects);
  return (
    <div>
      <h2>Here I'm gonna use gitHub API to get my projects</h2>
      {repos.map((repo) => (
        <div className="project" key={repo.id}>
          <h3>{repo.name}</h3>
          <p>Language used: {repo.language}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
