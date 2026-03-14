import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = ["home", "about", "experience", "skills", "projects", "contact"];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    navLinks.forEach((id) => {
      const el = document.querySelector(`[name="${id}"]`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60] bg-white/5">
        <div className="h-full bg-red-600 transition-all duration-100" style={{ width: `${progress}%` }} />
      </div>

      <nav className={`fixed top-[2px] left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
        <div className="w-full max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="home" smooth duration={800} className="cursor-pointer group">
            <span className="font-black text-base tracking-tight gradient-text">AS</span>
            <span className="ml-2 text-sm text-[#999] group-hover:text-[#ccc] transition-colors duration-200 hidden sm:inline">Arun Saradgi</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link}>
                <Link to={link} smooth duration={800}
                  className={`relative px-3 py-1.5 text-sm capitalize cursor-pointer rounded-lg transition-all duration-200 ${
                    active === link ? "text-white bg-white/5" : "text-[#999] hover:text-[#ddd] hover:bg-white/3"
                  }`}>
                  {active === link && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-600" />}
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <a href="https://drive.google.com/file/d/1tRkUXlOCqF9ENZZH3wk5JbYAcPkKrTU0/view?usp=sharing"
            target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-red-600/10 border border-red-600/30 text-red-400 hover:bg-red-600/20 transition-all duration-200">
            Resume ↗
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden text-[#555] hover:text-white p-1">
            {open ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-[#080808]/95 backdrop-blur-xl border-t border-white/5">
            <ul className="flex flex-col py-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link to={link} smooth duration={800} onClick={() => setOpen(false)}
                    className={`block px-6 py-3 text-sm capitalize cursor-pointer transition-colors duration-200 ${active === link ? "text-red-400" : "text-[#999] hover:text-white"}`}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
