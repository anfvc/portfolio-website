import about4 from "../../assets/profilepiccomp.webp"


function About({ mode }) {
  return (
    <section
      id="about"
      className={`w-full flex justify-center py-20 scroll-mt-20 ${mode ? "bg-[#151515]" : " bg-[#f5f5f5]"} overflow-x-hidden`}
    >
      <div className="w-full flex flex-col gap-16 px-10 py-16 md:px-20 mx-auto max-w-screen-xl">
        <div className="flex justify-center">
          <h2 className="font-bold text-5xl">About</h2>
        </div>
        <div className="w-full flex flex-col items-center gap-16 lg:flex-row lg:justiy-center lg:gap-12">
          <div className="w-full h-full flex justify-center" data-aos="zoom-out-right">
            <img
              src={about4}
              className="w-5/5 md:w-8/8 lg:w-full rounded-2xl object-cover"
              alt="about-picture"
              loading="lazy"
            />
          </div>
          <div className="w-full flex flex-col gap-8 text-left" data-aos="zoom-out-left" data-aos-easing="ease">
            <h2 className="font-semibold text-4xl">Get to know me</h2>
            <p>
              I hold a degree in International Business and have a strong
              passion for Web Development. Originally from Colombia, I relocated
              to Germany in 2017, where I currently reside.
            </p>
            <p>
              My professional journey began in the logistics industry, where I
              accumulated over 5 years of valuable experience. During this time,
              I developed a diverse skill set and refined my professional
              abilities.{" "}
            </p>
            <p>
              With the onset of the COVID-19 pandemic, my interest in Web
              Development intensified. I sought out various Udemy courses to
              deepen my understanding of both theoretical concepts and practical
              skills. This enabled me to grasp the fundamentals of designing and
              developing user-friendly interfaces. However, my desire for
              learning only grew stronger, as I became increasingly
              convinced that I wanted to pursue a career in this field.
            </p>
            <p>
              Subsequently, I had the opportunity to enroll in a one-year,
              Full Stack Web Development program at the <a href="https://digitalcareerinstitute.org/" target="_blank">Digital Career Institute GmbH</a>, which I have successfully completed. My aim is
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
