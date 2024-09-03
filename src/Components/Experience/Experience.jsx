import timelineElements from "./timeline";
import workIcon from "../../assets/work.svg";
import schoolIcon from "../../assets/school.svg";

import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience({ mode }) {
  let workIconStyles = {
    background: mode ? "#ffffff" : "#000000", // Set background color directly
    border: `1px solid ${mode ? "#ffffff" : "#000000"}`, // Set border color directly
    display: "flex", // Flexbox to center the icon
    justifyContent: "center",
    alignItems: "center",
  };
  let schoolIconStyles = {
    background: mode ? "#ffffff" : "#000000", // Set background color directly
    border: `1px solid ${mode ? "#ffffff" : "#000000"}`, // Set border color directly
    display: "flex", // Flexbox to center the icon
    justifyContent: "center",
    alignItems: "center",
  };

  let iconFilter = mode ? "invert(0)" : "invert(1)";

  return (
    <section
      id="experience"
      className={`w-full ${
        mode ? "bg-[#151515]" : "bg-[#f5f5f5]"
      } py-36 overflow-x-hidden scroll-mt-60`}
    >
      <div className="flex flex-col px-10 py-10 gap-16 md:px-20">
        <div className="w-full flex justify-center">
          <h2 className="font-bold text-5xl">Experience</h2>
        </div>
        <VerticalTimeline lineColor={`${mode ? "white" : "black"}`} animate={true}>
          {timelineElements.map((item) => {
            let isWorkIcon = item.icon === "work";
            return (
              <VerticalTimelineElement
                key={item.id}
                date={<span className="text-2xl">{item.date}</span>}

                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={
                  <img
                    src={isWorkIcon ? workIcon : schoolIcon}
                    className="w-full"
                    alt="icon"
                    style={{ filter: iconFilter, width: "50%", height: "50%" }}
                  />

                }
                contentStyle={{background: "none", border: `1px solid`}}
                contentArrowStyle={{border: "solid", clipPath: "polygon(80% 0%, 10% 50%, 80% 100%)"}}
              >
                <h3
                  className={`${
                    mode ? "text-white" : "text-black"
                  } font-bold vertical-timeline-element-title`}
                >
                  {item.title}
                </h3>
                <h5 className="font-semibold">{item.location}</h5>
                <h4>{item.companyOrSchool}</h4>
                <h6>{item.description}</h6>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
