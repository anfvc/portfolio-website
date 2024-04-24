import { useState, useEffect } from "react";

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchingRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/anfvc/repos"
        );
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
          console.log(data);
        } else {
          throw new Error("Repos could not be fetched");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    // console.log(repos); checking if my variable was updated
    fetchingRepos();
  }, []);

  return (
    <div>
      <h2>Here I'm gonna use gitHub API to get my projects</h2>
      {repos.map(repo =>
      <div className="project" key={repo.id}>
        <h3>{repo.name}</h3>
        <p>Language used: {repo.language}</p>
      </div>

      )}
    </div>
  );
}

export default Projects;
