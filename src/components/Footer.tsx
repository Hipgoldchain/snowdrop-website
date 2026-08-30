import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="bg-[#151A20] text-snow pt-16 pb-8 px-8 border-t border-[#2A313B]">
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-12 max-w-[1280px] mx-auto mb-12 footer-grid max-[968px]:grid-cols-1 max-[968px]:gap-8">
        <div>
          <Wordmark size="md" light />
          <p className="text-[#7A848E] text-sm mt-4 max-w-[320px] leading-[1.5]">
            Growth systems for small businesses that work in weeks, not months.
          </p>
        </div>

        <div>
          <h5 className="font-mono text-[11px] lowercase tracking-[0.08em] text-verdant mb-4">
            site
          </h5>
          <ul className="list-none">
            <li className="mb-[10px]">
              <a
                href="#journey"
                className="text-[#A8B2BC] no-underline text-sm transition-colors duration-200 hover:text-verdant"
              >
                The Roadmap
              </a>
            </li>
            <li className="mb-[10px]">
              <a
                href="#audit-experience"
                className="text-[#A8B2BC] no-underline text-sm transition-colors duration-200 hover:text-verdant"
              >
                Our Work
              </a>
            </li>
            <li className="mb-[10px]">
              <a
                href="#about"
                className="text-[#A8B2BC] no-underline text-sm transition-colors duration-200 hover:text-verdant"
              >
                About
              </a>
            </li>
            <li className="mb-[10px]">
              <a
                href="#book"
                className="text-[#A8B2BC] no-underline text-sm transition-colors duration-200 hover:text-verdant"
              >
                Book Free Call
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-mono text-[11px] lowercase tracking-[0.08em] text-verdant mb-4">
            contact
          </h5>
          <ul className="list-none">
            <li className="mb-[10px]">
              <a
                href="mailto:hello@snowdropgrowth.com"
                className="text-[#A8B2BC] no-underline text-sm transition-colors duration-200 hover:text-verdant"
              >
                hello@snowdropgrowth.com
              </a>
            </li>
            <li className="mb-[10px]">
              <a
                href="#"
                rel="noopener"
                className="text-[#A8B2BC] no-underline text-sm transition-colors duration-200 hover:text-verdant"
              >
                LinkedIn (coming soon)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto pt-6 border-t border-[#2A313B] font-mono text-[11px] lowercase tracking-[0.06em] text-[#7A848E] flex justify-between items-center gap-4 flex-wrap">
        <div>&copy; 2026 Snowdrop &middot; Built with intent</div>
        <div className="text-verdant/60">
          founder-led &middot; uk-based &middot; independent
        </div>
      </div>
    </footer>
  );
}
