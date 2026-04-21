import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100"
    >
      {/* Animated Background Blob */}
      <div className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bottom-20 right-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
          Hi, I'm <span className="text-blue-600">Aditya Shinde</span>
        </h1>

        <h2 className="text-2xl md:text-3xl mt-4 text-gray-600 font-medium">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "Frontend Specialist",
              "Full Stack Engineer",
              "React Enthusiast"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="mt-6 text-gray-500 max-w-xl mx-auto">
          I build scalable, responsive and modern web applications with
          performance and clean design in mind.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:scale-105 hover:bg-blue-700 transition duration-300"
          >
            See My Resume
          </a>

          <a
            href="#projects"
            className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
