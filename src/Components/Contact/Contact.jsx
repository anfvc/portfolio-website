import { MdOutlineEmail } from "react-icons/md";
import { useState, useEffect } from "react";

function Contact() {
  const formInitialDetails = {
    fullName: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  function handleChange(e) {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }

  return (
    <section
      id="contact"
      className="w-full scroll-mt-20 pt-36 pb-36 overflow-x-hidden"
    >
      <div className="w-full flex flex-col px-10 gap-10 md:px-20 mx-auto max-w-screen-2xl">
        <div className="w-full flex justify-center">
          <h2 className="font-bold text-6xl">Contact</h2>
        </div>
        <div className="w-full flex flex-col gap-5 items-center justify-center text-5xl font-semibold">
          <div className="w-full flex flex-col items-center justify-center py-5">
            <h2 className="text-5xl text-center">Get in touch via email</h2>
          </div>
          <div className="w-full flex flex-col px-5 items-center justify-center gap-20 py-5 md:flex-row">
            <div className="w-full text-3xl font-normal leading-loose">
              I'd delighted to hear from you! Whether you have a project idea, a
              collaboration opportunity, or just want to connect, feel free to
              drop me a message. I'm always open to exploring new ideas and
              exploring exciting challenges in web development. Let's create
              something great together!
            </div>
            <div className="w-full">
              <form className="w-full flex flex-col gap-3 font-normal text-4xl">
                <label htmlFor="name" className="py-2">
                  Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="border border-black rounded-xl p-3"
                  onChange={handleChange}
                  value={formDetails.fullName}
                />
                <label htmlFor="email" className="py-2">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border border-black rounded-xl p-3"
                  onChange={handleChange}
                  value={formDetails.email}
                />
                <label htmlFor="message" className="py-2">
                  Message
                </label>
                <textarea
                  name="message"
                  className="border border-black rounded-xl p-4"
                  onChange={handleChange}
                  value={formDetails.message}
                ></textarea>
                <div className="w-full flex mt-4">
                  <button className="w-full p-4 border border-black rounded-xl">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
