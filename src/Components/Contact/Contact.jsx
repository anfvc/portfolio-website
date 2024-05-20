import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="w-full scroll-mt-20 pt-36 pb-36">
      <div className="w-full flex flex-col px-5 gap-10 md:px-20 mx-auto max-w-screen-2xl">
        <div className="w-full flex justify-center">
          <h2 className="font-bold text-5xl">Contact</h2>
        </div>
        <div className="w-full flex flex-col gap-5 items-center justify-center text-5xl font-semibold">
          <div className="w-full flex flex-col items-center justify-center py-5">
            <h2 className="text-6xl text-center">Get in touch via email</h2>
          </div>
          <div className="w-full flex flex-col px-5 items-center justify-center gap-4 py-5 md:flex-row">
            <span>
              <MdOutlineEmail />
            </span>
            <h3 className="text-4xl text-center md:text-5xl">
              andresvillay2@gmail.com
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
