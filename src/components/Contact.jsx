const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black p-10">
      <div className="bg-gray-900 p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
          Contact Me
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-800 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-800 outline-none"
          />

          <textarea
            placeholder="Your Message"
            className="p-3 rounded bg-gray-800 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-cyan-500 text-black font-bold py-3 rounded hover:bg-cyan-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
