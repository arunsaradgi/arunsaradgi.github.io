import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import useFadeIn from "./useFadeIn";

const roles = ["Software Engineer", "React Specialist", "Performance Engineer", "Frontend Architect", "MERN Stack Developer"];

const Typewriter = () => {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = roles[idx]; let t;
    if (!deleting && text.length < current.length) t = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    else if (!deleting && text.length === current.length) t = setTimeout(() => setDeleting(true), 2000);
    else if (deleting && text.length > 0) t = setTimeout(() => setText(current.slice(0, text.length - 1)), 45);
    else { setDeleting(false); setIdx((i) => (i + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [text, deleting, idx]);
  return <span className="text-red-400">{text}<span className="animate-pulse">|</span></span>;
};

const Home = () => {
  useFadeIn();
  return (
    <section name="home" className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Red glow orbs */}
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-red-900/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative w-full max-w-4xl mx-auto px-6 z-10 text-center">
        <div className="fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-600/25 bg-red-600/8 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm text-red-400 font-medium tracking-wide">Available for opportunities</span>
          </div>

          <h1 className="text-7xl sm:text-8xl lg:text-[9rem] font-black leading-none tracking-tighter hero-gradient">
            Arun<br />Saradgi
          </h1>

          <div className="mt-6 h-10 flex items-center justify-center">
            <span className="text-xl text-[#666] font-light"><Typewriter /></span>
          </div>

          <p className="mt-6 text-lg text-[#aaa] max-w-lg mx-auto leading-relaxed">
            4+ years crafting performant web apps at{" "}
            <span className="text-white font-medium">Saranyu Technologies</span>.
            Shipped products to{" "}
            <span className="text-red-400 font-medium">90k+ active users</span>.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link to="projects" smooth duration={800}
              className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-red-500 transition-all duration-200 cursor-pointer shadow-lg shadow-red-900/40">
              View Work
            </Link>
            <Link to="contact" smooth duration={800}
              className="inline-flex items-center gap-2 border border-white/10 text-[#ccc] text-sm font-medium px-6 py-3 rounded-full hover:border-red-600/40 hover:text-white transition-all duration-200 cursor-pointer">
              Get in Touch
            </Link>
            <div className="flex items-center gap-4">
              <a href="https://github.com/arunsaradgi" target="_blank" rel="noreferrer" className="text-[#444] hover:text-white transition-colors duration-200"><FaGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/arunsaradgi/" target="_blank" rel="noreferrer" className="text-[#444] hover:text-white transition-colors duration-200"><FaLinkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-3 gap-8 fade-in">
          {[["4+", "Years Exp."], ["90k+", "Users Reached"], ["30%", "Dev Time Saved"]].map(([num, label]) => (
            <div key={label}>
              <p className="text-2xl font-bold text-red-500">{num}</p>
              <p className="text-sm text-[#999] mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 fade-in flex justify-center">
          <Link to="about" smooth duration={800} className="inline-flex items-center gap-2 text-xs text-[#777] hover:text-red-400 cursor-pointer transition-colors duration-200">
            <FaArrowDown size={12} /> Scroll down
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
