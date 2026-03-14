import useFadeIn from "./useFadeIn";

const currently = [
  { label: "Working at", value: "Saranyu Technologies", accent: true },
  { label: "Building",   value: "OTT platforms for 90k+ users" },
  { label: "Exploring",  value: "Agentic AI & FastAPI" },
  { label: "Based in",   value: "Bengaluru, Karnataka 🇮🇳" },
];

const values = [
  { icon: "🎯", title: "Impact-driven",   desc: "I care about metrics — TTI, LCP, load time. Code that ships fast and runs faster." },
  { icon: "🧩", title: "Systems thinker", desc: "I design component systems and state architectures that scale across teams and products." },
  { icon: "📖", title: "Always learning", desc: "Tech blogs, AI research, new frameworks — staying current is part of the job." },
  { icon: "🤝", title: "Team player",     desc: "Agile teams, code reviews, pair programming — I thrive in collaborative environments." },
];

const About = () => {
  useFadeIn();
  return (
    <section name="about" className="glass-section py-32">
      <div className="w-full max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-16 fade-in">
          <span className="w-6 h-px bg-red-600" />
          <h2 className="text-5xl font-bold text-white tracking-tight">About</h2>
          <span className="w-6 h-px bg-red-600" />
        </div>

        <div className="fade-in mb-16">
          <p className="text-3xl font-light text-white leading-relaxed mb-4">
            I turn complex problems into{" "}
            <span className="hero-gradient font-semibold">clean, fast interfaces</span>.
          </p>
          <p className="text-[#aaa] text-lg leading-relaxed max-w-2xl mx-auto">
            Started at TCS building enterprise dashboards, now shipping OTT products at Saranyu Technologies
            watched by millions daily. I obsess over performance, accessibility, and the tiny details that make a product feel premium.
          </p>
        </div>

        <div className="glow-card rounded-2xl p-6 mb-10 fade-in text-left">
          <p className="text-sm text-[#888] uppercase tracking-widest mb-5 text-center flex items-center justify-center gap-2"><span className="pulse-dot" /> Currently</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {currently.map(({ label, value, accent }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-sm text-[#777] w-24 shrink-0">{label}</span>
                <span className={`text-base font-medium ${accent ? "text-red-400" : "text-[#ddd]"}`}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10 fade-in">
          {values.map(({ icon, title, desc }) => (
            <div key={title} className="glow-card rounded-xl p-5 text-left flex gap-4">
              <span className="text-xl shrink-0 mt-0.5">{icon}</span>
              <div>
                <p className="text-base font-semibold text-white mb-1">{title}</p>
                <p className="text-sm text-[#999] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in border-t border-white/5 pt-8">
          <p className="text-sm text-[#777] uppercase tracking-widest mb-4">Education</p>
          <div className="inline-flex items-center gap-4 glow-card rounded-xl px-6 py-4">
            <span className="text-xl">🎓</span>
            <div className="text-left">
              <p className="text-base font-semibold text-white">B.E in Computer Science & Engineering</p>
              <p className="text-sm text-[#999] mt-0.5">Government Engineering College, Kushalnagar · 2016 – 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
