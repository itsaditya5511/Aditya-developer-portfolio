import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen p-20">
      <h2 className="text-4xl font-bold neon-text text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        <motion.div
          whileHover={{ scale:1.05 }}
          className="glass p-8 rounded-xl"
        >
          <h3 className="text-xl font-bold">Smart Campus Recruitment</h3>
          <p className="text-gray-400 mt-4">
            MERN based recruitment portal with resume upload and role system.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
