import { useEffect, useRef, useState } from "react";
import useFadeIn from "./useFadeIn";

const services = [
  { icon: "⚛️", title: "React Engineering",       desc: "Scalable component systems, Redux/RTK state architectures, and reusable design systems across enterprise OTT platforms.", tags: ["React.js","Redux","RTK Query","TypeScript"] },
  { icon: "⚡", title: "Performance Optimization", desc: "Core Web Vitals (LCP, FID, CLS), async loading, memory leak debugging, and reducing TTI for high-traffic applications.",  tags: ["Core Web Vitals","Webpack","Async Loading","Profiling"] },
  { icon: "🔗", title: "Full Stack Development",   desc: "End-to-end with Node.js, Express, FastAPI backends, Firebase integrations, REST APIs, and CI/CD pipeline setup.",         tags: ["Node.js","FastAPI","Firebase","REST APIs"] },
];

const useCountUp = (target, duration = 1800) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = target / (duration / 16);
      const tick = () => { start += step; if (start < target) { setCount(Math.floor(start)); requestAnimationFrame(tick); } else setCount(target); };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return [count, ref];
};

const StatItem = ({ num, suffix, label }) => {
  const [count, ref] = useCountUp(num);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-black text-red-500">{count}{suffix}</p>
      <p className="text-sm text-[#999] mt-2 uppercase tracking-widest">{label}</p>
    </div>
  );
};

const WhatIDo = () => {
  useFadeIn();
  return (
    <section className="glass-section py-28">
      <div className="w-full max-w-4xl mx-auto px-6 text-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-24 fade-in">
          <StatItem num={4}  suffix="+"  label="Years Experience" />
          <StatItem num={90} suffix="k+" label="Active Users" />
          <StatItem num={30} suffix="%"  label="Dev Time Saved" />
          <StatItem num={1000} suffix="+"  label="Issues Resolved" />
        </div>

        <div className="flex items-center justify-center gap-3 mb-12 fade-in">
          <span className="w-6 h-px bg-red-600" />
          <h2 className="text-5xl font-bold text-white tracking-tight">What I Do</h2>
          <span className="w-6 h-px bg-red-600" />
        </div>

        <div className="grid md:grid-cols-3 gap-5 text-left">
          {services.map(({ icon, title, desc, tags }) => (
            <div key={title} className="glow-card rounded-2xl p-7 fade-in">
              <div className="w-11 h-11 rounded-xl bg-red-600/8 border border-red-600/20 flex items-center justify-center text-xl mb-5">{icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-[#aaa] text-base leading-relaxed mb-5">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => <span key={t} className="text-sm px-2.5 py-1 rounded-full bg-red-600/8 text-red-400/80 border border-red-600/15 font-medium">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
