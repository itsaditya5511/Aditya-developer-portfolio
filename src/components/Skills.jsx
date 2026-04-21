const skills = ["React", "Node.js", "MongoDB", "Tailwind", "Express", "JavaScript"];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen p-10">
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">Skills</h2>
      <div className="grid grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-xl hover:scale-105 transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
