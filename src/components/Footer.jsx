import { authorInfo, navLinks } from "../data";

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-[#160D22] text-white border-t border-[#FF4FA3]/10">
      <div className="bg-[#100820] border-b border-[#FF4FA3]/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-cinzel text-[#FF4FA3] mb-1 tracking-wider">
                Ready to Publish?
              </h3>
              <p className="text-white/30 text-sm font-inter">
                Access the go-live portal for your book
              </p>
            </div>
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#FF4FA3] to-[#B45CFF] text-white font-inter font-bold text-sm tracking-wider uppercase py-4 px-10 rounded-full hover:shadow-[0_0_30px_rgba(255,79,163,0.4)] transition-all"
            >
              Launch & Go-Live Portal
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="font-cinzel text-2xl text-[#FF4FA3] tracking-wider drop-shadow-[0_0_15px_rgba(255,79,163,0.3)]">
              {authorInfo.penName}
            </span>
            <p className="text-white/20 text-sm font-inter mt-2">
              {authorInfo.name}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-inter font-bold mb-4 text-[#FF4FA3] uppercase tracking-[0.2em]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-white/30 hover:text-[#FF4FA3] transition-colors text-sm font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-inter font-bold mb-4 text-[#FF4FA3] uppercase tracking-[0.2em]">
              Contact
            </h4>
            <a
              href={`mailto:${authorInfo.email}`}
              className="text-white/30 hover:text-[#FF4FA3] transition-colors text-sm font-inter block"
            >
              {authorInfo.email}
            </a>
          </div>
        </div>
        <div className="border-t border-[#FF4FA3]/10 mt-12 pt-8 text-center">
          <p className="text-white/10 text-xs font-inter">
            &copy; {new Date().getFullYear()} {authorInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
