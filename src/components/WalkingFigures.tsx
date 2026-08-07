"use client";

export default function WalkingFigures() {
  return (
    <div className="absolute inset-0 z-0 max-[600px]:hidden overflow-hidden">
      <style jsx>{`
        @keyframes walkLeft {
          from {
            transform: translateX(120vw);
          }
          to {
            transform: translateX(-120px);
          }
        }

        .walking-figure {
          position: absolute;
          opacity: 0.55;
          animation: walkLeft 40s linear infinite;
        }

        .walking-figure.figure-1 {
          top: 25%;
          animation-delay: 0s;
        }

        .walking-figure.figure-2 {
          top: 60%;
          animation-delay: -15s;
        }

        .walking-figure.figure-3 {
          top: 40%;
          animation-delay: -28s;
        }

        @media (prefers-reduced-motion: reduce) {
          .walking-figure {
            animation: none;
            opacity: 0.55;
          }
          .walking-figure.figure-1 {
            left: 20%;
          }
          .walking-figure.figure-2 {
            left: 15%;
          }
          .walking-figure.figure-3 {
            right: 25%;
          }
        }
      `}</style>

      {/* Figure 1 - Left side */}
      <div className="walking-figure figure-1">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body - isometric cube */}
          <g transform="translate(20, 18)">
            {/* Left face */}
            <polygon points="-8,0 0,4 0,12 -8,8" fill="#1b753a" />
            {/* Right face */}
            <polygon points="8,0 0,4 0,12 8,8" fill="#0b4f30" />
            {/* Top face */}
            <polygon points="0,-4 8,0 0,4 -8,0" fill="#2BB85C" />
          </g>

          {/* Head - circle */}
          <circle cx="20" cy="10" r="5" fill="#E8C9A8" />

          {/* Simple legs - walking pose */}
          <g transform="translate(20, 30)">
            <line x1="-3" y1="0" x2="-3" y2="6" stroke="#1b753a" strokeWidth="2" />
            <line x1="3" y1="0" x2="3" y2="5" stroke="#1b753a" strokeWidth="2" />
          </g>
        </svg>
      </div>

      {/* Figure 2 - Left side */}
      <div className="walking-figure figure-2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body - isometric cube */}
          <g transform="translate(20, 18)">
            {/* Left face */}
            <polygon points="-8,0 0,4 0,12 -8,8" fill="#1b753a" />
            {/* Right face */}
            <polygon points="8,0 0,4 0,12 8,8" fill="#0b4f30" />
            {/* Top face */}
            <polygon points="0,-4 8,0 0,4 -8,0" fill="#2BB85C" />
          </g>

          {/* Head - circle */}
          <circle cx="20" cy="10" r="5" fill="#E8C9A8" />

          {/* Simple legs - walking pose (alternate) */}
          <g transform="translate(20, 30)">
            <line x1="-3" y1="0" x2="-3" y2="5" stroke="#1b753a" strokeWidth="2" />
            <line x1="3" y1="0" x2="3" y2="6" stroke="#1b753a" strokeWidth="2" />
          </g>
        </svg>
      </div>

      {/* Figure 3 - Right side */}
      <div className="walking-figure figure-3">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body - isometric cube */}
          <g transform="translate(20, 18)">
            {/* Left face */}
            <polygon points="-8,0 0,4 0,12 -8,8" fill="#1b753a" />
            {/* Right face */}
            <polygon points="8,0 0,4 0,12 8,8" fill="#0b4f30" />
            {/* Top face */}
            <polygon points="0,-4 8,0 0,4 -8,0" fill="#2BB85C" />
          </g>

          {/* Head - circle */}
          <circle cx="20" cy="10" r="5" fill="#E8C9A8" />

          {/* Simple legs - walking pose */}
          <g transform="translate(20, 30)">
            <line x1="-3" y1="0" x2="-3" y2="6" stroke="#1b753a" strokeWidth="2" />
            <line x1="3" y1="0" x2="3" y2="5" stroke="#1b753a" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}
