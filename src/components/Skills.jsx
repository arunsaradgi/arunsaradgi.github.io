import useFadeIn from "./useFadeIn";

const skillGroups = [
  { label: "Languages", skills: ["JavaScript","TypeScript","HTML","Python"] },
  { label: "Frameworks & Libraries", skills: ["React.js","Redux / RTK","RTK Query","React Router","Tailwind CSS","Chakra UI","Node.js","Express","FastAPI"] },
  { label: "Backend & Infra", skills: ["REST APIs","Firebase Analytics","Firebase Messaging","CI/CD"] },
  { label: "Tools & Others", skills: ["Git & GitHub","Webpack","Core Web Vitals","Performance Optimization","Analytics Integration","Cross-browser Testing","AI / Agentic AI"] },
];

const Skills = () => {
  useFadeIn();
  return (
    <section name="skills" className="glass-section py-32">
      <div className="w-full max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-16 fade-in">
          <span className="w-6 h-px bg-red-600" />
          <h2 className="text-5xl font-bold text-white tracking-tight">Skills</h2>
          <span className="w-6 h-px bg-red-600" />
        </div>
        <div className="space-y-10">
          {skillGroups.map(({ label, skills }) => (
            <div key={label} className="fade-in">
              <p className="text-sm text-[#777] uppercase tracking-widest mb-4">{label}</p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {skills.map((name) => (
                  <span key={name}
                    className="px-4 py-2 rounded-full text-base font-medium text-[#bbb] bg-white/3 border border-white/6 hover:border-red-600/40 hover:text-white hover:bg-red-600/5 transition-all duration-200 cursor-default">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
