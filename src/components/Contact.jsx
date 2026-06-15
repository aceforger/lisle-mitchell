import { contactInfo, authorInfo } from "../data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#4A1F6F]/10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF4FA3]/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#B45CFF]/5 rounded-full blur-[100px]"></div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#FF4FA3]/20 text-[#FF4FA3] px-4 py-2 mb-8 text-xs font-inter font-medium tracking-[0.2em] uppercase bg-[#FF4FA3]/5 rounded-full">
          Contact
        </div>
        <h2 className="text-5xl font-cinzel text-[#FF4FA3] mb-6 tracking-wider animate-fade-up drop-shadow-[0_0_20px_rgba(255,79,163,0.3)]">
          Get in Touch
        </h2>
        <p className="text-white/30 text-lg mb-10 max-w-md mx-auto font-inter animate-fade-up-delayed">
          Reach out to {authorInfo.firstName} directly
        </p>

        <div className="bg-white/5 backdrop-blur-sm p-10 border border-[#FF4FA3]/10 rounded-3xl animate-fade-up-delayed-2 hover-lift max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto mb-6 bg-[#FF4FA3]/10 rounded-full flex items-center justify-center border border-[#FF4FA3]/20 animate-neon-pulse">
            <svg
              className="w-8 h-8 text-[#FF4FA3]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="space-y-4">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-[#FF4FA3] to-[#B45CFF] text-white font-inter font-bold hover:from-[#FF8ACD] hover:to-[#FF4FA3] transition-all tracking-wider uppercase text-sm rounded-full shadow-[0_0_30px_rgba(255,79,163,0.3)]"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center justify-center gap-3 w-full px-8 py-4 border border-[#FF4FA3]/20 text-[#FF4FA3] font-inter font-bold hover:border-[#FF4FA3] hover:bg-[#FF4FA3]/5 transition-all tracking-wider uppercase text-sm rounded-full"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {contactInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
