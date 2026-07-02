import { authorInfo } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0D0A1A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF4FA3]/40 to-transparent"></div>

      {/* Multiple glowing orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#B45CFF]/8 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-80 h-80 bg-[#FF4FA3]/6 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-[#B45CFF]/5 rounded-full blur-[90px]"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-[#FF4FA3]/4 rounded-full blur-[60px]"></div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#FF4FA3 1px, transparent 1px), linear-gradient(90deg, #FF4FA3 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          {/* Decorative top line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#FF4FA3]/50"></div>
            <div className="w-2 h-2 bg-[#FF4FA3] rounded-full rotate-45"></div>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#B45CFF]/50"></div>
          </div>

          <div className="inline-flex items-center gap-2 border border-[#FF4FA3]/20 text-[#FF4FA3] px-5 py-2 mb-6 text-xs font-inter font-bold tracking-[0.25em] uppercase bg-[#FF4FA3]/8 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-[#FF4FA3] rounded-full animate-pulse"></span>
            The Author Behind the Words
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FA3] via-[#FF6FB7] to-[#B45CFF] mb-4 tracking-wider font-bold drop-shadow-[0_0_30px_rgba(255,79,163,0.4)]">
            {authorInfo.penName}
          </h2>

          {/* Subtitle with decorative brackets */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#FF4FA3]/30 text-lg">❰</span>
            <p className="text-white/40 font-inter text-sm tracking-wider uppercase">
              {authorInfo.name}
            </p>
            <span className="text-[#FF4FA3]/30 text-lg">❱</span>
          </div>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[#FF4FA3] via-[#B45CFF] to-[#FF4FA3] mx-auto rounded-full"></div>
        </div>

        {/* Bio Cards — Staggered Layout */}
        <div className="max-w-6xl mx-auto space-y-8 mb-12">
          {/* Row 1 - Academic Career (full width, featured) */}
          <div className="bg-gradient-to-r from-[#FF4FA3]/5 to-[#B45CFF]/5 backdrop-blur-sm p-8 rounded-2xl border border-[#FF4FA3]/15 hover:border-[#FF4FA3]/40 transition-all duration-500 animate-fade-up group relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF4FA3]/10 to-transparent rounded-bl-3xl"></div>

            <div className="flex items-start gap-4 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF4FA3] to-[#B45CFF] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FF4FA3]/20 group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <div>
                <span className="text-[#FF4FA3] font-inter font-bold text-sm tracking-wider uppercase block mb-2">
                  Distinguished Academic Career
                </span>
                <p className="text-white/60 leading-relaxed font-inter text-sm">
                  {authorInfo.bio1}
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 - Two cards side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Early Years */}
            <div className="bg-white/[0.03] backdrop-blur-sm p-7 rounded-2xl border border-[#B45CFF]/10 hover:border-[#B45CFF]/40 transition-all duration-500 animate-fade-up-delayed group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#B45CFF]/10 to-transparent rounded-br-3xl"></div>

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-10 h-10 bg-[#B45CFF]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#B45CFF]/20">
                  <svg
                    className="w-5 h-5 text-[#B45CFF]"
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
                <span className="text-[#B45CFF] font-inter font-bold text-xs tracking-wider uppercase">
                  Foundations & Service
                </span>
              </div>
              <p className="text-white/50 leading-relaxed font-inter text-sm relative z-10">
                {authorInfo.bio2}
              </p>
            </div>

            {/* Career & Leadership */}
            <div
              className="bg-white/[0.03] backdrop-blur-sm p-7 rounded-2xl border border-[#FF4FA3]/10 hover:border-[#FF4FA3]/40 transition-all duration-500 animate-fade-up-delayed group relative overflow-hidden"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FF4FA3]/10 to-transparent rounded-bl-3xl"></div>

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-10 h-10 bg-[#FF4FA3]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#FF4FA3]/20">
                  <svg
                    className="w-5 h-5 text-[#FF4FA3]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-[#FF4FA3] font-inter font-bold text-xs tracking-wider uppercase">
                  Career & Leadership
                </span>
              </div>
              <p className="text-white/50 leading-relaxed font-inter text-sm relative z-10">
                {authorInfo.bio3}
              </p>
            </div>
          </div>

          {/* Row 3 - Writing (featured card) */}
          <div className="bg-gradient-to-r from-[#B45CFF]/5 to-[#FF4FA3]/5 backdrop-blur-sm p-8 rounded-2xl border border-[#B45CFF]/15 hover:border-[#B45CFF]/40 transition-all duration-500 animate-fade-up-delayed-2 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#B45CFF]/10 to-transparent rounded-br-3xl"></div>

            <div className="flex items-start gap-4 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#B45CFF] to-[#FF4FA3] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#B45CFF]/20 group-hover:scale-110 transition-transform duration-500">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <div>
                <span className="text-[#B45CFF] font-inter font-bold text-sm tracking-wider uppercase block mb-2">
                  Post-Retirement Writing & Publications
                </span>
                <p className="text-white/60 leading-relaxed font-inter text-sm">
                  {authorInfo.bio4}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Highlights — Staggered Grid */}
        <div className="max-w-5xl mx-auto mb-10 animate-fade-up-delayed-2">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[#FF4FA3]/40"></div>
            <h3 className="text-xl font-cinzel text-[#FF4FA3] tracking-wider">
              Career Highlights
            </h3>
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[#B45CFF]/40"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Served as the Executive Secretary of the National Council for Geographic Education",
              "Served on a variety of committees for the University, the College of Arts and Science, and the Department of Geography",
              "Received a National Science Foundation Institute grant on Applied Statistics in Geography",
              "Received a grant from the National Endowment for the Humanities on Race and Class in an Urban Context",
              "Received a grant from the President's Venture Fund for the Improvement of Undergraduate Teaching",
              "Directed seventeen Master's degrees in the Department of Geography",
              "Published thirty-four refereed articles or chapters",
              "Published one hundred and eleven abstracts, reviews, reports, and rejoinders",
              "Published thirty-one miscellaneous papers in journals",
              "Presented one-hundred and thirty-nine papers at professional conferences",
              "Engaged in hundreds of miscellaneous professional activities: reviewed articles for journals, organized paper sessions, paper discussant, gave lectures, etc.",
            ].map((item, i) => (
              <div
                key={i}
                className={`group bg-white/[0.02] backdrop-blur-sm p-5 rounded-xl border border-[#FF4FA3]/8 hover:border-[#FF4FA3]/30 transition-all duration-300 flex items-start gap-3 hover:bg-white/[0.04] ${
                  i === 10 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="w-6 h-6 bg-[#FF4FA3]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#FF4FA3]/20 transition-all">
                  <span className="text-[#FF4FA3] text-xs">◆</span>
                </div>
                <p className="text-white/45 font-inter text-xs leading-relaxed group-hover:text-white/60 transition-all">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Roles */}
        <div className="flex flex-wrap gap-3 justify-center mt-12">
          {authorInfo.roles.map((role, i) => (
            <span
              key={i}
              className="px-6 py-3 bg-gradient-to-r from-[#FF4FA3]/10 to-[#B45CFF]/10 backdrop-blur-sm text-[#FF4FA3] text-sm font-inter font-bold border border-[#FF4FA3]/20 hover:border-[#FF4FA3]/50 hover:from-[#FF4FA3]/20 hover:to-[#B45CFF]/20 hover:scale-105 transition-all rounded-full shadow-lg shadow-[#FF4FA3]/5 cursor-default"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
