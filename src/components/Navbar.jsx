import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, authorInfo } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0D0A1A]/95 backdrop-blur-xl border-b-2 border-[#FF4FA3]/15 shadow-2xl shadow-[#FF4FA3]/5"
          : "bg-gradient-to-b from-[#0D0A1A]/60 to-transparent"
      }`}
    >
      {/* Top glow line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF4FA3]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-22">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-3"
          >
            {/* Animated logo mark */}
            <div className="relative w-9 h-9 md:w-10 md:h-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-[#FF4FA3]/30"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-1 rounded-full border border-[#B45CFF]/20"
              ></motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#FF4FA3] text-sm font-cinzel font-bold">
                  S
                </span>
              </div>
            </div>

            {/* Name */}
            <span
              className="font-cinzel text-xl sm:text-2xl md:text-3xl text-white group-hover:text-[#FF8ACD] transition-all duration-300 tracking-wider font-bold"
              style={{
                textShadow:
                  "0 0 20px rgba(255,79,163,0.4), 0 0 40px rgba(255,79,163,0.2)",
              }}
            >
              {authorInfo.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-5 py-3 text-sm font-inter font-bold transition-all tracking-[0.1em] uppercase rounded-lg ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#FF4FA3]"
                    : "text-white/50 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-gradient-to-r from-[#FF4FA3] to-[#B45CFF] rounded-full shadow-[0_0_10px_rgba(255,79,163,0.6)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 text-[#FF4FA3] hover:bg-[#FF4FA3]/10 rounded-xl transition-all border border-[#FF4FA3]/15"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-[#0D0A1A]/98 backdrop-blur-xl border-2 border-[#FF4FA3]/15 mt-3 p-6 rounded-2xl shadow-2xl shadow-[#FF4FA3]/5">
                {/* Mobile glowing line */}
                <div className="w-full h-[2px] bg-gradient-to-r from-[#FF4FA3] via-[#B45CFF] to-[#FF4FA3] mb-6 rounded-full opacity-50"></div>

                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-5 py-4 font-inter font-bold text-lg uppercase tracking-[0.1em] rounded-xl transition-all ${
                      activeSection === link.href.replace("#", "")
                        ? "text-[#FF4FA3] bg-[#FF4FA3]/10 border-l-4 border-[#FF4FA3] shadow-[inset_0_0_20px_rgba(255,79,163,0.05)]"
                        : "text-white/50 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[#FF4FA3]/40 text-sm">◆</span>
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
