import { authorInfo } from "../data";

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#160D22]"
    >
      {/* Background GIF */}
      <div className="absolute inset-0">
        <img
          src="/images/bg2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-[#160D22]/75"></div>
        {/* Neon tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4FA3]/8 via-transparent to-[#B45CFF]/8"></div>
      </div>

      {/* Animated neon gradient orbs on top of GIF */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-br from-[#FF4FA3]/25 via-[#B45CFF]/8 to-transparent rounded-full blur-[150px] animate-neon-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-gradient-to-tl from-[#FF8ACD]/15 via-[#FF4FA3]/20 to-transparent rounded-full blur-[130px] animate-purple-glow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 -left-20 w-[500px] h-[400px] bg-gradient-to-r from-[#B45CFF]/10 via-[#FF4FA3]/8 to-transparent rounded-full blur-[100px] animate-purple-glow"
        style={{ animationDelay: "2.5s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[300px] bg-gradient-to-tr from-[#FF4FA3]/20 via-[#FF8ACD]/5 to-transparent rounded-full blur-[90px] animate-neon-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Floating neon particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: Math.random() > 0.5 ? "#FF4FA3" : "#B45CFF",
            opacity: 0,
            animation: `floatUp ${4 + Math.random() * 6}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            boxShadow:
              Math.random() > 0.5
                ? "0 0 8px #FF4FA3, 0 0 16px #FF4FA3"
                : "0 0 8px #B45CFF, 0 0 16px #B45CFF",
          }}
        ></div>
      ))}

      {/* Top and bottom neon lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF4FA3]/50 to-transparent animate-neon-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B45CFF]/40 to-transparent animate-purple-glow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 border border-[#FF4FA3]/30 text-[#FF4FA3] px-4 py-2 mb-8 text-xs font-inter font-medium tracking-[0.2em] uppercase bg-[#FF4FA3]/8 backdrop-blur-sm rounded-full animate-fade-up">
              <span className="w-1.5 h-1.5 bg-[#FF4FA3] rounded-full animate-neon-pulse"></span>
              Erotic Fiction Author
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FA3] via-[#FF8ACD] to-[#B45CFF] mb-2 leading-tight animate-fade-up tracking-wider drop-shadow-[0_0_50px_rgba(255,79,163,0.5)]">
              {authorInfo.name}
            </h1>
            <p className="text-lg text-white/30 font-inter mb-6 animate-fade-up-delayed tracking-wider">
              {authorInfo.penName}
            </p>
            <div className="w-24 h-[1px] bg-gradient-to-r from-[#FF4FA3] to-[#B45CFF] mb-8 mx-auto md:mx-0 animate-fade-up-delayed"></div>
            <p className="text-xl text-white/50 mb-6 font-playfair italic animate-fade-up-delayed max-w-lg">
              "Elegant. Seductive. Unforgettable."
            </p>
            <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start animate-fade-up-delayed-2">
              {authorInfo.roles.map((role, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/3 backdrop-blur-sm text-white/50 text-sm font-inter font-medium border border-[#FF4FA3]/20 hover:border-[#FF4FA3]/50 hover:text-[#FF4FA3] hover:bg-[#FF4FA3]/10 hover:shadow-[0_0_20px_rgba(255,79,163,0.2)] hover-lift transition-all rounded-full"
                >
                  {role}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up-delayed-2">
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
            </div>
          </div>

          <div className="relative mx-auto animate-fade-up flex justify-center">
            <div className="relative">
              {/* Neon glow rings */}
              <div className="absolute -inset-12 bg-gradient-to-br from-[#FF4FA3]/15 via-[#B45CFF]/10 to-transparent rounded-full blur-3xl animate-neon-pulse"></div>
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#FF8ACD]/10 via-[#FF4FA3]/8 to-transparent rounded-full blur-2xl animate-purple-glow"></div>
              <div className="absolute -inset-2 border-2 border-[#FF4FA3]/10 rounded-full animate-neon-pulse"></div>

              {/* Glass circle */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 bg-white/3 backdrop-blur-md shadow-2xl border border-[#FF4FA3]/15 rounded-full flex items-center justify-center overflow-hidden">
                {/* Inner neon glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4FA3]/10 via-transparent to-[#B45CFF]/10 animate-purple-glow"></div>

                <div className="text-center p-8 relative z-10">
                  <div className="text-7xl font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FA3] to-[#FF8ACD] mb-3 tracking-wider drop-shadow-[0_0_30px_rgba(255,79,163,0.6)]">
                    S
                  </div>
                  <div className="w-12 h-[1px] bg-gradient-to-r from-[#FF4FA3] to-[#B45CFF] mx-auto mb-3"></div>
                  <p className="text-sm font-inter text-white/50 uppercase tracking-[0.3em]">
                    {authorInfo.penName}
                  </p>
                  <p className="text-xs font-inter text-[#FF8ACD]/60 mt-2 italic">
                    {authorInfo.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
