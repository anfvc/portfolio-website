import { technologies } from "./technologies.js";

function Tech() {
  return (
    <section id="stack" className="w-full flex justify-center py-20">
      <div className="flex flex-col gap-16 mx-auto">
        <div className="w-full flex justify-center">
          <h2 className="font-bold text-5xl">Tech Stack</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full grid grid-cols-10 items-center gap-6">
            {technologies.map((tech, i) => {
              return (
                <div key={i} className="flex justify-center p-2">
                  <img src={tech.image} alt={tech.name} loading="lazy" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;
