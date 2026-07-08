export default function BackgroundScene() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fca5a5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mtnFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="mtnNear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b21b6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#3b0764" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      <ellipse cx="310" cy="470" rx="120" ry="120" fill="url(#sunGlow)" opacity="0.7" />
      <circle cx="310" cy="470" r="40" fill="#fde68a" opacity="0.9" />
      <polygon
        points="0,560 80,420 160,500 240,380 350,460 430,350 530,440 650,370 750,440 870,340 1000,430 1100,360 1200,400 1200,700 0,700"
        fill="url(#mtnFar)"
      />
      <ellipse cx="310" cy="560" rx="200" ry="40" fill="url(#waterGrad)" opacity="0.5" />
      <polygon
        points="0,600 100,500 200,560 300,490 420,580 520,510 650,590 800,520 950,600 1100,530 1200,580 1200,700 0,700"
        fill="url(#mtnNear)"
      />
      <rect x="0" y="650" width="1200" height="50" fill="#2e1065" opacity="0.9" />
      <g transform="translate(110, 560)" opacity="0.95">
        <ellipse cx="50" cy="80" rx="38" ry="18" fill="#1e0a3c" />
        <path d="M30,80 Q50,30 70,80" fill="#1e0a3c" />
        <circle cx="50" cy="24" r="14" fill="#1e0a3c" />
        <path
          d="M30,62 Q10,75 15,85"
          stroke="#1e0a3c"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M70,62 Q90,75 85,85"
          stroke="#1e0a3c"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      <g opacity="0.6">
        <path d="M20,700 Q10,640 30,600 Q40,640 20,700" fill="#5b21b6" />
        <path d="M40,700 Q20,650 50,610 Q60,655 40,700" fill="#6d28d9" />
        <path d="M0,700 Q-5,660 15,630 Q22,665 0,700" fill="#4c1d95" />
      </g>
      <g transform="translate(1100,0)" opacity="0.35">
        <path d="M80,700 Q85,600 100,520 Q115,600 80,700" fill="#7c3aed" />
        <path d="M100,700 Q110,610 130,550 Q145,615 100,700" fill="#8b5cf6" />
        <path d="M60,700 Q55,640 70,580 Q82,645 60,700" fill="#6d28d9" />
      </g>
      <g opacity="0.5" fill="none" stroke="#3b0764" strokeWidth="2" strokeLinecap="round">
        <path d="M460,220 Q465,215 470,220" />
        <path d="M475,210 Q481,204 487,210" />
        <path d="M452,235 Q456,230 460,235" />
      </g>
    </svg>
  );
}
