const techs = [
  "React.js", "TypeScript", "Redux Toolkit", "RTK Query", "Node.js",
  "FastAPI", "Tailwind CSS", "Firebase", "REST APIs", "Core Web Vitals",
  "Webpack", "CI/CD", "Chakra UI", "React Router", "Git", "Agentic AI",
  "React.js", "TypeScript", "Redux Toolkit", "RTK Query", "Node.js",
  "FastAPI", "Tailwind CSS", "Firebase", "REST APIs", "Core Web Vitals",
  "Webpack", "CI/CD", "Chakra UI", "React Router", "Git", "Agentic AI",
];

const Marquee = () => (
  <div className="relative py-5 border-y border-white/7 overflow-hidden bg-white/[0.015]">
    {/* Fade edges */}
    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#06060e] to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#06060e] to-transparent z-10 pointer-events-none" />

    <div className="flex gap-10 animate-marquee whitespace-nowrap">
      {techs.map((t, i) => (
        <span key={i} className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-violet-300 transition-colors duration-200 cursor-default shrink-0">
          <span className="w-1 h-1 rounded-full bg-red" />
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
