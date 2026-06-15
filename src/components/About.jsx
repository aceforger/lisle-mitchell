import { authorInfo } from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#4A1F6F]/10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF4FA3]/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B45CFF]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#FF4FA3]/5 rounded-full blur-[80px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#FF4FA3]/20 text-[#FF4FA3] px-4 py-2 mb-6 text-xs font-inter font-medium tracking-[0.2em] uppercase bg-[#FF4FA3]/5 rounded-full">
            The Author
          </div>
          <h2 className="text-5xl md:text-6xl font-cinzel text-[#FF4FA3] mb-4 tracking-wider drop-shadow-[0_0_20px_rgba(255,79,163,0.3)]">
            {authorInfo.penName}
          </h2>
          <p className="text-white/30 font-inter">{authorInfo.name}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-[#FF4FA3]/10 hover:border-[#FF4FA3]/30 transition-all animate-fade-up">
            <div className="w-10 h-10 bg-[#FF4FA3]/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-[#FF4FA3]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-white/50 leading-relaxed font-inter text-sm">
              {authorInfo.bio}
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-[#B45CFF]/10 hover:border-[#B45CFF]/30 transition-all animate-fade-up-delayed">
            <div className="w-10 h-10 bg-[#B45CFF]/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-[#B45CFF]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <p className="text-white/50 leading-relaxed font-inter text-sm">
              {authorInfo.bio2}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {authorInfo.roles.map((role, i) => (
            <span
              key={i}
              className="px-6 py-3 bg-white/5 backdrop-blur-sm text-[#FF4FA3] text-sm font-inter font-medium border border-[#FF4FA3]/15 hover:border-[#FF4FA3]/40 hover:bg-[#FF4FA3]/10 hover-lift transition-all rounded-full"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
