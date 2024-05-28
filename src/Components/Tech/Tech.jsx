import { technologies } from "./technologies.js";

function Tech() {
  return (
    <section id="stack" className="w-full flex justify-center py-24 scroll-m-20 ">
      <div className="flex flex-col px-10 py-10 gap-16 md:px-20">
        <div className="w-full flex justify-center">
          <h2 className="font-bold text-5xl">Tech Stack</h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full grid grid-cols-3 items-center gap-8 md:grid-cols-6 lg:grid-cols-12">
            {technologies.map((tech, i) => {
              return (
                <div key={i} className="flex justify-center p-2 hover:scale-110 hover:transition hover:ease-in-out cursor-pointer">
                  <img src={tech.image} alt={tech.name} loading="lazy" className="grayscale brightness-80 hover:grayscale-0 hover:duration-700 hover:ease-in-out" />
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
