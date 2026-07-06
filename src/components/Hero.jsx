import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { authorInfo } from "../data";

export default function Hero() {
  const [displayWords, setDisplayWords] = useState([]);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [burstParticles, setBurstParticles] = useState([]);
  const [burstSide, setBurstSide] = useState("center");

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Word-by-word typewriter
  useEffect(() => {
    const fullText = authorInfo.penName;
    let charIndex = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (charIndex < fullText.length) {
          setDisplayWords(fullText.slice(0, charIndex + 1).split(""));
          charIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setShowSubtitle(true);
            triggerNeonBurst("center");
          }, 400);
        }
      }, 100);
      return () => clearInterval(interval);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Continuous bursts every 2 seconds alternating sides
  useEffect(() => {
    if (!showSubtitle) return;

    const sides = ["left", "right"];
    let index = 0;

    const interval = setInterval(() => {
      triggerNeonBurst(sides[index]);
      index = (index + 1) % 2;
    }, 2000);

    return () => clearInterval(interval);
  }, [showSubtitle]);

  // Neon burst
  const triggerNeonBurst = (side) => {
    setBurstSide(side);
    const particles = [];
    const count = side === "center" ? 50 : 25;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * 360;
      const distance =
        side === "center"
          ? 150 + Math.random() * 400
          : 80 + Math.random() * 250;
      particles.push({
        id: Date.now() + i,
        x: Math.cos((angle * Math.PI) / 180) * distance,
        y: Math.sin((angle * Math.PI) / 180) * distance,
        size: 2 + Math.random() * 6,
        color: Math.random() > 0.5 ? "#FF4FA3" : "#B45CFF",
        glowColor: Math.random() > 0.5 ? "#FF8ACD" : "#D4A5FF",
        delay: Math.random() * 0.2,
        duration: 1 + Math.random() * 1.5,
        shape: Math.random() > 0.5 ? "circle" : "diamond",
      });
    }
    setBurstParticles((prev) => [...prev, ...particles]);

    // Cleanup old particles
    setTimeout(() => {
      setBurstParticles((prev) => prev.filter((p) => !particles.includes(p)));
    }, 2500);
  };

  // Side positions
  const getBurstPosition = (side) => {
    switch (side) {
      case "left":
        return "top-[50%] left-[25%]";
      case "right":
        return "top-[50%] right-[25%]";
      default:
        return "top-[45%] left-1/2";
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#160D22]"
    >
      {/* ===== VITAL SIGN / ECG - BOTTOM ===== */}
      <div className="absolute bottom-0 left-0 w-full h-[50px] z-[4] overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 50"
        >
          {[...Array(24)].map((_, i) => (
            <line
              key={i}
              x1={i * 50}
              y1="5"
              x2={i * 50}
              y2="45"
              stroke="#B45CFF"
              strokeWidth="0.3"
              opacity="0.1"
            />
          ))}
          {[...Array(4)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={10 + i * 10}
              x2="1200"
              y2={10 + i * 10}
              stroke="#B45CFF"
              strokeWidth="0.3"
              opacity="0.08"
            />
          ))}

          <motion.path
            d="M 0,25 L 100,25 L 110,25 L 115,5 L 120,45 L 125,25 L 135,25 L 140,25 L 145,10 L 150,40 L 155,25 L 220,25 L 230,25 L 235,5 L 240,45 L 245,25 L 255,25 L 260,25 L 265,8 L 270,42 L 275,25 L 340,25 L 350,25 L 355,5 L 360,45 L 365,25 L 375,25 L 380,25 L 385,15 L 390,35 L 395,25 L 460,25 L 470,25 L 475,5 L 480,45 L 485,25 L 495,25 L 500,25 L 505,12 L 510,38 L 515,25 L 580,25 L 590,25 L 595,5 L 600,45 L 605,25 L 615,25 L 620,25 L 625,18 L 630,32 L 635,25 L 700,25 L 710,25 L 715,5 L 720,45 L 725,25 L 735,25 L 740,25 L 745,10 L 750,40 L 755,25 L 820,25 L 830,25 L 835,5 L 840,45 L 845,25 L 855,25 L 860,25 L 865,8 L 870,42 L 875,25 L 940,25 L 950,25 L 955,5 L 960,45 L 965,25 L 975,25 L 980,25 L 985,15 L 990,35 L 995,25 L 1060,25 L 1070,25 L 1075,5 L 1080,45 L 1085,25 L 1095,25 L 1100,25 L 1105,12 L 1110,38 L 1115,25 L 1180,25 L 1190,25 L 1195,5 L 1200,45"
            fill="none"
            stroke="#B45CFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5,
              times: [0, 0.4, 0.7, 1],
            }}
          />

          <motion.path
            d="M 0,25 L 100,25 L 110,25 L 115,5 L 120,45 L 125,25 L 135,25 L 140,25 L 145,10 L 150,40 L 155,25 L 220,25 L 230,25 L 235,5 L 240,45 L 245,25 L 255,25 L 260,25 L 265,8 L 270,42 L 275,25 L 340,25 L 350,25 L 355,5 L 360,45 L 365,25 L 375,25 L 380,25 L 385,15 L 390,35 L 395,25 L 460,25 L 470,25 L 475,5 L 480,45 L 485,25 L 495,25 L 500,25 L 505,12 L 510,38 L 515,25 L 580,25 L 590,25 L 595,5 L 600,45 L 605,25 L 615,25 L 620,25 L 625,18 L 630,32 L 635,25 L 700,25 L 710,25 L 715,5 L 720,45 L 725,25 L 735,25 L 740,25 L 745,10 L 750,40 L 755,25 L 820,25 L 830,25 L 835,5 L 840,45 L 845,25 L 855,25 L 860,25 L 865,8 L 870,42 L 875,25 L 940,25 L 950,25 L 955,5 L 960,45 L 965,25 L 975,25 L 980,25 L 985,15 L 990,35 L 995,25 L 1060,25 L 1070,25 L 1075,5 L 1080,45 L 1085,25 L 1095,25 L 1100,25 L 1105,12 L 1110,38 L 1115,25 L 1180,25 L 1190,25 L 1195,5 L 1200,45"
            fill="none"
            stroke="#B45CFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.25"
            filter="blur(3px)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5,
              times: [0, 0.4, 0.7, 1],
            }}
          />

          <line
            x1="0"
            y1="25"
            x2="1200"
            y2="25"
            stroke="#B45CFF"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </svg>
      </div>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#160D22]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4FA3]/8 via-transparent to-[#B45CFF]/8"></div>
      </div>

      {/* Initial central burst glow */}
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#FF4FA3]/30 via-[#B45CFF]/20 to-transparent rounded-full blur-[120px] pointer-events-none z-[1]"
      ></motion.div>

      {/* ===== NEON BURST PARTICLES ===== */}
      <AnimatePresence>
        {burstParticles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              x: 0,
              y: 0,
              scale: 0,
              opacity: 1,
              rotate: 0,
            }}
            animate={{
              x: p.x,
              y: p.y,
              scale: [0, 1.2, 0],
              opacity: [1, 0.9, 0],
              rotate: p.shape === "diamond" ? 180 : 0,
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: "easeOut",
            }}
            className={`absolute ${getBurstPosition(burstSide)} pointer-events-none z-[3]`}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              borderRadius: p.shape === "circle" ? "50%" : "2px",
              boxShadow: `0 0 ${p.size * 2}px ${p.glowColor}, 0 0 ${p.size * 4}px ${p.color}`,
              transform: `translate(-50%, -50%) ${p.shape === "diamond" ? "rotate(45deg)" : ""}`,
            }}
          ></motion.div>
        ))}
      </AnimatePresence>

      {/* Animated neon gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-br from-[#FF4FA3]/25 via-[#B45CFF]/8 to-transparent rounded-full blur-[150px] animate-neon-pulse pointer-events-none z-[1]"></div>
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-gradient-to-tl from-[#FF8ACD]/15 via-[#FF4FA3]/20 to-transparent rounded-full blur-[130px] animate-purple-glow pointer-events-none z-[1]"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 -left-20 w-[500px] h-[400px] bg-gradient-to-r from-[#B45CFF]/10 via-[#FF4FA3]/8 to-transparent rounded-full blur-[100px] animate-purple-glow pointer-events-none z-[1]"
        style={{ animationDelay: "2.5s" }}
      ></div>

      {/* Floating neon particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [-20, -150],
            x: [0, (Math.random() - 0.5) * 60],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 5,
            repeat: Infinity,
            delay: 0.5 + Math.random() * 4,
            ease: "easeOut",
          }}
          className="absolute rounded-full pointer-events-none z-[2]"
          style={{
            width: `${1.5 + Math.random() * 4}px`,
            height: `${1.5 + Math.random() * 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: Math.random() > 0.5 ? "#FF4FA3" : "#B45CFF",
            boxShadow:
              Math.random() > 0.5
                ? "0 0 8px #FF4FA3, 0 0 16px #FF4FA3"
                : "0 0 8px #B45CFF, 0 0 16px #B45CFF",
          }}
        ></motion.div>
      ))}

      {/* Top and bottom neon lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF4FA3]/50 to-transparent animate-neon-pulse z-[1]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B45CFF]/40 to-transparent animate-purple-glow z-[1]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT - Text Content */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 border border-[#FF4FA3]/30 text-[#FF4FA3] px-4 py-2 mb-8 text-xs font-inter font-medium tracking-[0.2em] uppercase bg-[#FF4FA3]/8 backdrop-blur-sm rounded-full"
            >
              <span className="w-1.5 h-1.5 bg-[#FF4FA3] rounded-full animate-neon-pulse"></span>
              Erotic Fiction Author
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-5xl md:text-7xl lg:text-7xl font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FA3] via-[#FF8ACD] to-[#B45CFF] mb-2 leading-tight tracking-wider drop-shadow-[0_0_50px_rgba(255,79,163,0.5)]"
            >
              {authorInfo.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="text-lg text-white/30 font-inter mb-2 tracking-wider"
            >
              writing as
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
              className="text-3xl md:text-4xl font-cinzel text-[#FF8ACD] tracking-wider mb-4 min-h-[48px] flex"
              style={{
                textShadow:
                  "0 0 30px rgba(255,138,205,0.5), 0 0 60px rgba(255,79,163,0.3)",
              }}
            >
              {displayWords.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="inline-block w-[3px] h-8 bg-[#FF8ACD] ml-1"
              ></motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={showSubtitle ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm text-[#B45CFF]/40 font-inter uppercase tracking-[0.3em] mb-6"
            >
              Distinguished Professor Emeritus • Author • Geographer
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={showSubtitle ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="w-24 h-[1px] bg-gradient-to-r from-[#FF4FA3] to-[#B45CFF] mb-8 mx-auto md:mx-0 origin-left"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={showSubtitle ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-white/50 mb-6 font-playfair italic max-w-lg"
            >
              "Elegant. Seductive. Unforgettable."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showSubtitle ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 my-8 justify-center md:justify-start"
            >
              {authorInfo.roles.map((role, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/3 backdrop-blur-sm text-white/50 text-sm font-inter font-medium border border-[#FF4FA3]/20 hover:border-[#FF4FA3]/50 hover:text-[#FF4FA3] hover:bg-[#FF4FA3]/10 hover:shadow-[0_0_20px_rgba(255,79,163,0.2)] hover-lift transition-all rounded-full"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showSubtitle ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="px-8 py-4 bg-gradient-to-r from-[#FF4FA3] to-[#B45CFF] text-white font-inter font-bold hover:from-[#FF8ACD] hover:to-[#FF4FA3] transition-all text-center hover-lift tracking-wider uppercase text-sm rounded-full shadow-[0_0_30px_rgba(255,79,163,0.4)] hover:shadow-[0_0_50px_rgba(255,79,163,0.6)]"
              >
                About the Author
              </a>
              <a
                href="#books"
                onClick={(e) => handleScroll(e, "#books")}
                className="px-8 py-4 border border-[#FF4FA3]/40 text-[#FF4FA3] font-inter font-bold hover:border-[#FF8ACD] hover:text-[#FF8ACD] hover:bg-[#FF4FA3]/10 hover:shadow-[0_0_25px_rgba(255,79,163,0.2)] transition-all text-center hover-lift tracking-wider uppercase text-sm rounded-full backdrop-blur-sm"
              >
                View Books
              </a>
            </motion.div>
          </div>

          {/* RIGHT - Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="relative mx-auto flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-12 bg-gradient-to-br from-[#FF4FA3]/15 via-[#B45CFF]/10 to-transparent rounded-full blur-3xl"
              ></motion.div>
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -inset-6 bg-gradient-to-tr from-[#FF8ACD]/10 via-[#FF4FA3]/8 to-transparent rounded-full blur-2xl"
              ></motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 border-2 border-[#FF4FA3]/15 rounded-full"
              ></motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-72 h-72 md:w-80 md:h-80 bg-white/3 backdrop-blur-md shadow-2xl border border-[#FF4FA3]/15 rounded-full flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4FA3]/10 via-transparent to-[#B45CFF]/10 animate-purple-glow"></div>
                <div className="text-center p-8 relative z-10">
                  <motion.div
                    animate={{
                      textShadow: [
                        "0 0 30px rgba(255,79,163,0.4)",
                        "0 0 60px rgba(255,79,163,0.8)",
                        "0 0 30px rgba(255,79,163,0.4)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-8xl font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FA3] to-[#FF8ACD] mb-3 tracking-wider"
                  >
                    S
                  </motion.div>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-[#FF4FA3] to-[#B45CFF] mx-auto mb-3"></div>
                  <p className="text-sm font-inter text-white/50 uppercase tracking-[0.3em]">
                    {authorInfo.penName}
                  </p>
                  <p className="text-xs font-inter text-[#FF8ACD]/60 mt-2 italic">
                    {authorInfo.name}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
