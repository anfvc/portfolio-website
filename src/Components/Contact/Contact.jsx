function Contact({ mode }) {
  return (
    <section
      id="contact"
      className={`${
        mode ? "bg-[#151515]" : " bg-[#f5f5f5]"
      } w-full scroll-mt-20`}
    >
      <div className="w-full mx-auto max-w-screen-2xl">
        <div className="w-full flex justify-center">
          <h2 className="font-bold text-5xl">Contact</h2>
        </div>
      </div>
    </section>
  );
}

export default Contact;
