import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h2>
        <p className="text-gray-300 leading-7">
          I am an MCA graduate passionate about building scalable web applications.
          I developed projects like Smart Campus Recruitment System and GetUrCake
          using MERN stack.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
