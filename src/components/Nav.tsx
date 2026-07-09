import Wordmark from "./Wordmark";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[68px] bg-snow/85 backdrop-blur-[12px] border-b border-ink/6 z-100 flex items-center px-8 max-[600px]:px-5">
      <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between">
        <a href="#" className="no-underline">
          <Wordmark size="sm" />
        </a>
        <div className="flex gap-9 items-center">
          <a
            href="#audit-offer"
            className="text-ink no-underline font-medium text-sm transition-colors duration-200 hover:text-verdant-deep hidden md:inline"
          >
            The Roadmap
          </a>
          <a
            href="#case-studies"
            className="text-ink no-underline font-medium text-sm transition-colors duration-200 hover:text-verdant-deep hidden md:inline"
          >
            Our Work
          </a>
          <a
            href="#about"
            className="text-ink no-underline font-medium text-sm transition-colors duration-200 hover:text-verdant-deep hidden md:inline"
          >
            About
          </a>
          <a
            href="#book"
            className="bg-verdant text-ink px-[22px] py-[10px] rounded-lg font-semibold text-sm no-underline transition-all duration-200 inline-block border-none cursor-pointer hover:bg-verdant-deep hover:text-snow hover:-translate-y-px"
          >
            Book Free Call
          </a>
        </div>
      </div>
    </nav>
  );
}
