import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="border-t border-white/5 py-8">
    <div className="w-full max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-base text-[#888]">© 2024 <span className="gradient-text font-semibold">Arun Saradgi</span>. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <a href="https://github.com/arunsaradgi" target="_blank" rel="noreferrer" className="text-[#777] hover:text-white transition-colors duration-200"><FaGithub size={16} /></a>
        <a href="https://www.linkedin.com/in/arunsaradgi/" target="_blank" rel="noreferrer" className="text-[#777] hover:text-white transition-colors duration-200"><FaLinkedin size={16} /></a>
        <a href="mailto:saradgi07@gmail.com" className="text-sm text-[#777] hover:text-white transition-colors duration-200">saradgi07@gmail.com</a>
      </div>
    </div>
  </footer>
);

export default Footer;
