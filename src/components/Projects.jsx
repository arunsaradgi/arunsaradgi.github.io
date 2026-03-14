import { FaExternalLinkAlt } from "react-icons/fa";
import useFadeIn from "./useFadeIn";

const projects = [
  { title: "ShemarooME",     subtitle: "OTT Streaming Platform",   desc: "Built React applications optimising Core Web Vitals and performance for 90k+ active users.",                                          tags: ["React","Redux","Firebase","Core Web Vitals"], demo: "https://www.shemaroome.com/",    metric: "90k+ users"      },
  { title: "DangalPlay",     subtitle: "OTT Streaming Platform",   desc: "Added playback features and analytics. Improved TTI by 25% through async loading and network optimisation.",                          tags: ["React","RTK","Firebase","Performance"],       demo: "https://www.dangalplay.com/",    metric: "↑ 25% TTI"       },
  { title: "ETV Win",        subtitle: "OTT Streaming Platform",   desc: "Refactored state management using Redux Toolkit, reducing load time by 20% and improving app stability.",                              tags: ["React","Redux Toolkit","RTK Query"],          demo: "https://www.etvwin.com/",        metric: "↓ 20% load time" },
  { title: "Hello Meghalaya",subtitle: "Tourism & Travel Platform",desc: "Led front-end development ensuring a seamless, responsive UI with improved accessibility across all devices.",                         tags: ["React","Tailwind CSS","Accessibility"],       demo: "https://hellomeghalaya.com/",    metric: "A11y improved"   },
];

const Projects = () => {
  useFadeIn();
  return (
    <section name="projects" className="py-32">
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-16 fade-in">
          <span className="w-6 h-px bg-red-600" />
          <h2 className="text-5xl font-bold text-white tracking-tight">Projects</h2>
          <span className="w-6 h-px bg-red-600" />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map(({ title, subtitle, desc, tags, demo, metric }) => (
            <a key={title} href={demo} target="_blank" rel="noreferrer"
              className="glow-card group rounded-2xl p-7 block fade-in text-left">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-[#999] uppercase tracking-widest mb-1.5">{subtitle}</p>
                  <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-200">{title}</h3>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <span className="text-xs font-mono text-red-400 bg-red-600/8 border border-red-600/20 px-2.5 py-1 rounded-full whitespace-nowrap">{metric}</span>
                  <FaExternalLinkAlt size={10} className="text-[#333] group-hover:text-red-500 transition-colors duration-200" />
                </div>
              </div>
              <p className="text-[#aaa] text-base leading-relaxed mb-5">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-sm px-3 py-1 rounded-full bg-white/3 text-[#999] border border-white/6 font-medium">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
