import { technologies } from "./technologies.js";

function Tech() {
  return (
    <section id="stack" className="w-full flex justify-center py-20">
      <div className="flex flex-col px-5 gap-16 md:px-20">
        <div className="w-full flex justify-center">
          <h2 className="font-bold text-5xl">Tech Stack</h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full grid grid-cols-4 items-center gap-6 max:sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10">
            {technologies.map((tech, i) => {
              return (
                <div key={i} className="flex justify-center p-2 hover:scale-105 transition ease-in-out cursor-pointer">
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
