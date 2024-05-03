import about from "../../assets/about.png";

function About() {
  return (
    <section id="about" className="w-full flex justify-center py-20">
      <div className="w-full flex flex-col gap-16 px-10 py-5 md:px-20">
        <div className="flex justify-center">
          <h2 className="font-bold text-5xl">About</h2>
        </div>
        <div className="w-full flex flex-col items-center gap-16 lg:flex-row lg:justiy-center lg:gap-12">
          <div className="w-full h-full flex justify-center">
            <img src={about} className="w-5/5 md:w-8/8 lg:w-full rounded-2xl object-cover" alt="about-picture" />
          </div>
          <div className="w-full flex flex-col justify-start text-justify">
            <p>
              I hold a degree in International Business and have a strong
              passion for Web Development. Originally from Colombia, I relocated
              to Germany in 2017, where I currently reside.
            </p><br />
            <p>
              My professional journey began in the logistics industry, where I
              accumulated over 5 years of valuable experience. During this time,
              I developed a diverse skill set and honed my professional
              abilities.{" "}
            </p><br />
            <p>
              With the onset of the COVID-19 pandemic, my interest in Web
              Development intensified. I sought out various Udemy courses to
              deepen my understanding of both theoretical concepts and practical
              skills. This enabled me to grasp the fundamentals of designing and
              developing user-friendly interfaces. However, my desire for
              learning even further only grew stronger, as I became increasingly
              convinced that I wanted to pursue a career in this field.
            </p><br />
            <p>
              Subsequently, I seized the opportunity to enroll in a one-year,
              full-time Full Stack Web Development training program. My aim is
              to become a well-rounded developer equipped with the necessary
              skills to excel in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
