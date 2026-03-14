import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import useFadeIn from "./useFadeIn";

const Contact = () => {
  useFadeIn();
  return (
    <section name="contact" className="glass-section py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-900/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative w-full max-w-4xl mx-auto px-6 z-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8 fade-in">
          <span className="w-6 h-px bg-red-600" />
          <h2 className="text-5xl font-bold text-white tracking-tight">Contact</h2>
          <span className="w-6 h-px bg-red-600" />
        </div>

        <div className="mb-16 fade-in">
          <p className="text-5xl sm:text-6xl font-black tracking-tighter leading-tight">
            <span className="text-white">Let's build</span><br />
            <a href="mailto:saradgi07@gmail.com" className="gradient-text hover:opacity-80 transition-opacity duration-200 cursor-pointer">
              something great.
            </a>
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10 fade-in">
          {[
            { icon: <FaEnvelope size={13} />, label: "Email",    value: "saradgi07@gmail.com",  href: "mailto:saradgi07@gmail.com" },
            { icon: <FaPhone size={13} />,    label: "Phone",    value: "+91 9353427253",        href: "tel:+919353427253" },
            { icon: <FaMapMarkerAlt size={13} />, label: "Location", value: "Bengaluru, Karnataka", href: null },
          ].map(({ icon, label, value, href }) => (
            <div key={label} className="flex flex-col items-center gap-3 p-5 rounded-xl border border-white/5 bg-white/2 hover:border-red-600/25 transition-colors duration-200">
              <div className="w-9 h-9 rounded-lg bg-red-600/8 border border-red-600/20 flex items-center justify-center text-red-500">{icon}</div>
              <div>
                <p className="text-sm text-[#999] uppercase tracking-widest">{label}</p>
                {href
                  ? <a href={href} className="text-base text-[#ddd] hover:text-red-400 transition-colors duration-200">{value}</a>
                  : <p className="text-base text-[#ddd]">{value}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mb-10 fade-in">
          <a href="https://github.com/arunsaradgi" target="_blank" rel="noreferrer"
            className="w-10 h-10 rounded-xl border border-white/6 bg-white/2 flex items-center justify-center text-[#444] hover:text-white hover:border-white/15 transition-all duration-200">
            <FaGithub size={16} />
          </a>
          <a href="https://www.linkedin.com/in/arunsaradgi/" target="_blank" rel="noreferrer"
            className="w-10 h-10 rounded-xl border border-white/6 bg-white/2 flex items-center justify-center text-[#444] hover:text-white hover:border-white/15 transition-all duration-200">
            <FaLinkedin size={16} />
          </a>
        </div>

        <div className="pt-6 border-t border-white/5 fade-in">
          <p className="text-sm text-[#777] uppercase tracking-widest mb-4">Certifications</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React (Certified)", "FastAPI (Certified)", "Agentic AI (In Progress)"].map((c) => (
              <span key={c} className="inline-flex items-center gap-2 text-sm text-[#aaa] bg-white/3 border border-white/6 px-4 py-2 rounded-full">
                <span className="w-1 h-1 rounded-full bg-red-600" />{c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
