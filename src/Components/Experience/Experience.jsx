import timelineElements from "./timeline";
import school from "../../assets/school.svg";
import work from "../../assets/work.svg";

function Experience({ mode }) {
  return (
    <section
      id="experience"
      className={`w-full ${
        mode ? "bg-[#151515]" : " bg-[#f5f5f5]"
      } py-36 overflow-x-hidden scroll-mt-60`}
    >
      <div className="flex flex-col px-10 py-10 gap-16 md:px-20">
        <div className="w-full flex justify-center">
          <h2 className="font-bold text-5xl">Experience</h2>
        </div>
        <div className="w-full bg-red-600 flex flex-col items-center justify-center">
          {timelineElements.map((item) => {
            return (
              <div key={item.id} className="flex m-4 relative">
                <div></div>
                <div></div>
                <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
                  <div className="w-4/5">{item.date}</div>
                  <div></div>
                  <img
                    src={item.icon === "school" ? school : work}
                    alt={item.title}
                    className="w-10 p-1 rounded-lg z-20"
                  />
                  <div></div>
                </div>
                <div>
                  <div>{item.title}</div>
                  <div>
                    {item.location}{" "}
                    <span className="sm:hidden">| {item.date}</span>
                  </div>
                  <div>{item.description}</div>
                  <div></div>
                  <img src={item.icon === "school" ? school : work} alt={item.title} className="w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden" />
                  <a href=""></a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
