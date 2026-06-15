import { useState } from "react";
import { book } from "../data";

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <section id="books" className="py-24 bg-[#160D22] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF4FA3]/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B45CFF]/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#FF4FA3]/20 text-[#FF4FA3] px-4 py-2 mb-6 text-xs font-inter font-medium tracking-[0.2em] uppercase bg-[#FF4FA3]/5 rounded-full">
            Books
          </div>
          <h2 className="text-5xl md:text-6xl font-cinzel text-[#FF4FA3] mb-4 tracking-wider drop-shadow-[0_0_20px_rgba(255,79,163,0.3)]">
            The Collection
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {book.map((bookItem, i) => (
            <div
              key={bookItem.id}
              className="group animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="bg-white/5 backdrop-blur-sm border border-[#FF4FA3]/10 hover:border-[#FF4FA3]/30 transition-all shadow-lg hover:shadow-xl hover:shadow-[#FF4FA3]/5 h-full flex flex-col overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedBook(bookItem)}
              >
                <div className="bg-gradient-to-b from-[#160D22] to-transparent p-6 flex items-center justify-center relative">
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#FF4FA3] text-white text-xs font-inter font-bold tracking-wider uppercase rounded-full">
                    {bookItem.statusText}
                  </div>
                  <img
                    src={bookItem.coverImage}
                    alt={bookItem.title}
                    className="w-40 h-52 object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  {bookItem.subtitle && (
                    <p className="text-[#FF8ACD] text-[10px] font-inter font-bold tracking-wider uppercase mb-2 line-clamp-1">
                      {bookItem.subtitle}
                    </p>
                  )}
                  <h3 className="text-lg font-cormorant italic text-white mb-2 group-hover:text-[#FF4FA3] transition-colors line-clamp-1">
                    {bookItem.title}
                  </h3>
                  <p className="text-white/30 text-xs font-inter leading-relaxed mb-4 flex-1 line-clamp-3">
                    {bookItem.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {bookItem.themes.slice(0, 2).map((theme, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white/5 text-[#FF8ACD] text-[9px] font-inter font-bold tracking-wider uppercase rounded-full border border-[#FF4FA3]/10"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <button className="flex-1 py-2 border border-[#FF4FA3]/20 text-[#FF4FA3] font-inter font-bold text-xs tracking-wider uppercase rounded-full hover:bg-[#FF4FA3]/10 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="bg-[#1A1030] max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-[#FF4FA3]/20 rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-[#FF4FA3]/10 sticky top-0 bg-[#1A1030] z-10">
              <span className="px-3 py-1 bg-[#FF4FA3] text-white text-xs font-inter font-bold tracking-wider uppercase rounded-full">
                {selectedBook.statusText}
              </span>
              <button
                onClick={() => setSelectedBook(null)}
                className="text-white/40 hover:text-[#FF4FA3] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-2">
                  <div className="bg-white/5 rounded-2xl p-4">
                    <img
                      src={selectedBook.coverImage}
                      alt={selectedBook.title}
                      className="w-full h-auto max-h-[350px] object-contain"
                    />
                  </div>
                </div>
                <div className="md:col-span-3 space-y-5">
                  <div>
                    {selectedBook.subtitle && (
                      <p className="text-[#FF8ACD] text-xs font-inter font-bold tracking-wider uppercase mb-2">
                        {selectedBook.subtitle}
                      </p>
                    )}
                    <h2 className="text-3xl font-cormorant italic text-white">
                      {selectedBook.title}
                    </h2>
                    <div className="w-16 h-[1px] bg-gradient-to-r from-[#FF4FA3] to-[#B45CFF] mt-4"></div>
                  </div>
                  <p className="text-white/50 leading-relaxed font-inter text-sm">
                    {selectedBook.description}
                  </p>
                  {selectedBook.description2 && (
                    <p className="text-white/30 leading-relaxed font-inter text-xs">
                      {selectedBook.description2}
                    </p>
                  )}
                  {selectedBook.description3 && (
                    <p className="text-white/20 leading-relaxed font-inter text-xs italic border-l-2 border-[#FF4FA3]/20 pl-3">
                      {selectedBook.description3}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {selectedBook.themes.map((theme, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 text-[#FF8ACD] text-xs font-inter font-bold tracking-wider uppercase rounded-full border border-[#FF4FA3]/10"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                  {selectedBook.purchaseLinks && (
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-[#FF4FA3]/10">
                      {selectedBook.purchaseLinks.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-gradient-to-r from-[#FF4FA3] to-[#B45CFF] text-white font-inter font-bold text-sm tracking-wider uppercase rounded-full hover:shadow-[0_0_25px_rgba(255,79,163,0.4)] transition-all"
                        >
                          Buy on {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
