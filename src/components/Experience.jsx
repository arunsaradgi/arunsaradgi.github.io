import useFadeIn from "./useFadeIn";

const experiences = [
  {
    company: "Saranyu Technologies",
    role: "Software Engineer",
    period: "Aug 2023 – Present",
    projects: ["ShemarooME", "DangalPlay", "ETV Win", "Hello Meghalaya", "Ratri", "MyFinTV"],
    points: [
      "Developed reusable UI components, reducing development time by 30%.",
      "Optimised API interactions and state management with Redux & RTK for faster load times.",
      "Improved Core Web Vitals (FCP, LCP, FID, CLS) via async loading & network optimisation.",
      "Integrated Google Firebase Analytics for user activity tracking and reporting.",
      "Optimised performance for 90k+ active users, improving load times and engagement.",
      "Resolved bugs across Ratri & MyFinTV, enhancing responsiveness by 30%.",
      "Improved TTI by 25% on DangalPlay; reduced load time by 20% on ETV Win via RTK refactor.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Assistant System Engineer",
    period: "April 2021 – July 2022",
    projects: [],
    points: [
      "Built dynamic React dashboards with API-driven configs, reducing dev effort by 40%.",
      "Developed 20+ reusable UI components across 5+ enterprise applications.",
      "Reduced rendering bottlenecks and debugged memory leaks.",
      "Integrated RESTful APIs and used Git for version control within agile teams.",
    ],
  },
];

const Experience = () => {
  useFadeIn();
  return (
    <section name="experience" className="py-32">
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-16 fade-in">
          <span className="w-6 h-px bg-red-600" />
          <h2 className="text-5xl font-bold text-white tracking-tight">Experience</h2>
          <span className="w-6 h-px bg-red-600" />
        </div>

        <div className="space-y-5">
          {experiences.map(({ company, role, period, projects, points }) => (
            <div key={company} className="glow-card rounded-2xl p-8 fade-in text-left">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{company}</h3>
                  <p className="text-red-500 text-base mt-1 font-medium">{role}</p>
                </div>
                <span className="text-sm font-mono text-[#999] bg-white/3 px-3 py-1.5 rounded-full border border-white/5 shrink-0 self-start">
                  {period}
                </span>
              </div>

              {projects.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects.map((p) => (
                    <span key={p} className="text-sm px-3 py-1 rounded-full bg-red-600/8 text-red-400 border border-red-600/20 font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              )}

              <ul className="space-y-3 border-l border-white/8 pl-6">
                {points.map((pt, i) => (
                  <li key={i} className="relative text-[#bbb] text-base leading-relaxed">
                    <span className="absolute -left-[25px] top-2 w-1.5 h-1.5 rounded-full bg-red-600/50" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
