import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024",
    title: "Frontend Intern",
    company: "Aaryak Solution Pvt Ltd",
    description: "Worked with React.js building dynamic UI components."
  },
  {
    year: "2023",
    title: "Smart Campus Recruitment",
    company: "Final Year Project",
    description: "Built full-stack recruitment portal with role-based access."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen p-20">
      <h2 className="text-4xl font-bold neon-text text-center mb-16">
        Experience Timeline
      </h2>

      <div className="relative border-l-2 border-cyan-500 ml-10">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity:0, x:-50 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.6 }}
            className="mb-12 ml-6"
          >
            <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2 mt-2"></div>

            <h3 className="text-xl font-bold">{exp.title}</h3>
            <p className="text-cyan-400">{exp.company} • {exp.year}</p>
            <p className="text-gray-400 mt-2">{exp.description}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Experience;
