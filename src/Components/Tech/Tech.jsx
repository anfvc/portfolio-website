import { technologies } from "./technologies.js";

function Tech() {
  return (
    <section id="stack">
      <div className="w-full flex justify-center">
        <h2 className="font-bold text-5xl">Tech Stack</h2>
      </div>
      <div className="w-full flex justify-center">
        {technologies.map((tech, i) => {
          <div key={i}>
            <img src={tech.image} alt={tech.name} loading="lazy" />
          </div>;
        })}
      </div>
    </section>
  );
}

export default Tech;
