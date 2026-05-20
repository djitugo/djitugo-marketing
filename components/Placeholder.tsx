import { cn } from "@/lib/cn";

type Kind =
  | "digital-marketing"
  | "social-media"
  | "web-development"
  | "performance-marketing"
  | "branding-design"
  | "commercial-photography"
  | "hospitality"
  | "mobility"
  | "healthcare"
  | "beauty"
  | "recruitment"
  | "default";

type Props = {
  kind: string;
  className?: string;
  label?: string;
};

const VIEW = "0 0 600 450";

const ART: Record<Kind, React.ReactNode> = {
  "digital-marketing": (
    <g stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round">
      <circle cx="180" cy="170" r="14" />
      <circle cx="330" cy="120" r="14" />
      <circle cx="450" cy="220" r="14" />
      <circle cx="270" cy="310" r="14" />
      <circle cx="400" cy="350" r="14" />
      <line x1="180" y1="170" x2="330" y2="120" />
      <line x1="330" y1="120" x2="450" y2="220" />
      <line x1="450" y1="220" x2="400" y2="350" />
      <line x1="180" y1="170" x2="270" y2="310" />
      <line x1="270" y1="310" x2="400" y2="350" />
      <line x1="330" y1="120" x2="270" y2="310" />
      <polyline points="100,400 140,360 180,380 220,330 260,350 300,290 340,310" strokeWidth="1.2" opacity="0.5" />
    </g>
  ),
  "social-media": (
    <g stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round">
      <circle cx="120" cy="120" r="32" />
      <circle cx="200" cy="120" r="32" />
      <circle cx="280" cy="120" r="32" />
      <circle cx="360" cy="120" r="32" />
      <circle cx="440" cy="120" r="32" />
      <path d="M 100 220 L 100 320 Q 100 332 112 332 L 240 332 Q 252 332 252 320 L 252 240 L 240 220 L 112 220 Q 100 220 100 232 Z" />
      <line x1="120" y1="260" x2="220" y2="260" opacity="0.5" />
      <line x1="120" y1="285" x2="200" y2="285" opacity="0.5" />
      <line x1="120" y1="310" x2="180" y2="310" opacity="0.5" />
      <path d="M 320 280 L 320 380 Q 320 392 332 392 L 480 392 Q 492 392 492 380 L 492 300 L 480 280 L 332 280 Q 320 280 320 292 Z" />
      <line x1="340" y1="320" x2="450" y2="320" opacity="0.5" />
      <line x1="340" y1="345" x2="430" y2="345" opacity="0.5" />
    </g>
  ),
  "web-development": (
    <g stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="square">
      <rect x="80" y="80" width="440" height="290" rx="6" />
      <line x1="80" y1="118" x2="520" y2="118" />
      <circle cx="100" cy="100" r="4" fill="currentColor" />
      <circle cx="115" cy="100" r="4" fill="currentColor" />
      <circle cx="130" cy="100" r="4" fill="currentColor" />
      <line x1="110" y1="160" x2="200" y2="160" strokeWidth="4" />
      <line x1="130" y1="190" x2="290" y2="190" strokeWidth="4" />
      <line x1="150" y1="220" x2="270" y2="220" strokeWidth="4" />
      <line x1="130" y1="250" x2="220" y2="250" strokeWidth="4" />
      <line x1="110" y1="295" x2="240" y2="295" strokeWidth="4" />
      <line x1="130" y1="325" x2="320" y2="325" strokeWidth="4" />
    </g>
  ),
  "performance-marketing": (
    <g stroke="currentColor" fill="none" strokeLinecap="round">
      <line x1="80" y1="60" x2="80" y2="390" strokeWidth="1" opacity="0.4" />
      <line x1="80" y1="390" x2="540" y2="390" strokeWidth="1" opacity="0.4" />
      {[110, 170, 230, 290, 350].map((y) => (
        <line key={y} x1="84" y1={y} x2="540" y2={y} strokeDasharray="2,6" strokeWidth="0.7" opacity="0.25" />
      ))}
      <polyline
        points="100,360 180,330 260,310 340,260 420,180 500,90"
        strokeWidth="2.5"
      />
      <circle cx="500" cy="90" r="6" fill="currentColor" />
      <circle cx="500" cy="90" r="14" strokeWidth="1" opacity="0.4" />
    </g>
  ),
  "branding-design": (
    <g stroke="currentColor" fill="none" strokeWidth="1.4">
      <rect x="100" y="100" width="100" height="100" />
      <text x="135" y="160" fontFamily="sans-serif" fontSize="46" fontWeight="600" fill="currentColor" stroke="none">D</text>
      <circle cx="270" cy="150" r="50" />
      <line x1="270" y1="115" x2="270" y2="185" />
      <polygon points="380,100 440,200 320,200" />
      <rect x="100" y="240" width="100" height="100" rx="50" />
      <rect x="240" y="240" width="100" height="100" />
      <line x1="265" y1="270" x2="320" y2="270" strokeWidth="3" />
      <line x1="265" y1="285" x2="320" y2="285" strokeWidth="3" />
      <line x1="265" y1="300" x2="305" y2="300" strokeWidth="3" />
      <line x1="265" y1="315" x2="315" y2="315" strokeWidth="3" />
      <g transform="translate(380 240)">
        <rect width="100" height="100" />
        <line x1="20" y1="35" x2="80" y2="35" strokeWidth="3" />
        <line x1="20" y1="55" x2="60" y2="55" strokeWidth="3" />
        <line x1="20" y1="75" x2="80" y2="75" strokeWidth="3" />
      </g>
    </g>
  ),
  "commercial-photography": (
    <g stroke="currentColor" fill="none" strokeWidth="1.4">
      <rect x="120" y="160" width="360" height="220" rx="10" />
      <circle cx="300" cy="270" r="70" />
      <circle cx="300" cy="270" r="50" />
      <circle cx="300" cy="270" r="28" />
      <line x1="300" y1="200" x2="300" y2="240" opacity="0.5" />
      <line x1="370" y1="270" x2="328" y2="270" opacity="0.5" />
      <line x1="300" y1="340" x2="300" y2="298" opacity="0.5" />
      <line x1="232" y1="270" x2="272" y2="270" opacity="0.5" />
      <rect x="200" y="125" width="80" height="35" rx="3" />
      <circle cx="420" cy="195" r="6" fill="currentColor" />
      <text x="135" y="200" fontFamily="monospace" fontSize="10" fill="currentColor" stroke="none" opacity="0.6">f/2.8</text>
    </g>
  ),
  "hospitality": (
    <g stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round">
      <rect x="240" y="160" width="200" height="220" />
      <rect x="265" y="190" width="36" height="48" />
      <rect x="316" y="190" width="36" height="48" />
      <rect x="367" y="190" width="36" height="48" />
      <rect x="265" y="258" width="36" height="48" />
      <rect x="316" y="258" width="36" height="48" />
      <rect x="367" y="258" width="36" height="48" />
      <rect x="316" y="326" width="48" height="54" />
      <path d="M 130 380 L 130 270" strokeWidth="3" />
      <path d="M 130 270 Q 100 250 70 260" />
      <path d="M 130 270 Q 110 245 85 230" />
      <path d="M 130 270 Q 130 240 120 215" />
      <path d="M 130 270 Q 150 248 175 232" />
      <path d="M 130 270 Q 160 250 185 255" />
      <line x1="40" y1="380" x2="560" y2="380" />
      <path d="M 470 380 Q 480 360 500 360 Q 520 360 530 380" />
    </g>
  ),
  "mobility": (
    <g stroke="currentColor" fill="none" strokeWidth="1.4">
      <circle cx="170" cy="300" r="48" />
      <circle cx="170" cy="300" r="20" />
      <circle cx="430" cy="300" r="48" />
      <circle cx="430" cy="300" r="20" />
      <path d="M 170 252 L 220 165 L 280 165" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 280 165 L 310 130 L 350 130" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 220 165 Q 280 175 320 195 L 380 215 Q 410 230 430 252" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="260" y="195" width="120" height="35" rx="4" />
      <line x1="40" y1="348" x2="560" y2="348" strokeDasharray="8,12" opacity="0.5" />
    </g>
  ),
  "healthcare": (
    <g stroke="currentColor" fill="none" strokeWidth="1.4">
      <rect x="270" y="100" width="60" height="260" />
      <rect x="170" y="200" width="260" height="60" />
      <circle cx="300" cy="230" r="135" strokeWidth="0.8" opacity="0.3" />
      {[140, 200, 260, 320].map((y) => (
        <line key={y} x1="80" y1={y} x2="520" y2={y} strokeWidth="0.5" opacity="0.15" />
      ))}
    </g>
  ),
  "beauty": (
    <g stroke="currentColor" fill="none" strokeWidth="1.4">
      <rect x="282" y="80" width="36" height="40" rx="2" />
      <path d="M 270 120 L 270 140 L 254 156 L 250 360 Q 250 380 270 380 L 330 380 Q 350 380 350 360 L 346 156 L 330 140 L 330 120" />
      <line x1="262" y1="220" x2="338" y2="220" />
      <line x1="262" y1="240" x2="338" y2="240" />
      <line x1="270" y1="262" x2="330" y2="262" opacity="0.6" />
      <line x1="270" y1="278" x2="325" y2="278" opacity="0.6" />
      <line x1="270" y1="293" x2="315" y2="293" opacity="0.6" />
      <line x1="270" y1="308" x2="320" y2="308" opacity="0.6" />
      <circle cx="450" cy="120" r="4" fill="currentColor" />
      <circle cx="480" cy="180" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="150" cy="160" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="130" cy="220" r="2" fill="currentColor" opacity="0.4" />
    </g>
  ),
  "recruitment": (
    <g stroke="currentColor" fill="none" strokeWidth="1.4">
      <rect x="160" y="180" width="280" height="180" rx="8" />
      <rect x="240" y="140" width="120" height="50" rx="4" />
      <line x1="160" y1="260" x2="440" y2="260" />
      <rect x="285" y="250" width="30" height="22" rx="3" />
      <circle cx="200" cy="220" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="220" cy="220" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="240" cy="220" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="120" cy="320" r="28" />
      <path d="M 80 380 Q 80 350 120 350 Q 160 350 160 380" />
      <circle cx="480" cy="320" r="28" />
      <path d="M 440 380 Q 440 350 480 350 Q 520 350 520 380" />
    </g>
  ),
  default: (
    <g stroke="currentColor" fill="currentColor">
      {Array.from({ length: 7 }).flatMap((_, i) =>
        Array.from({ length: 9 }).map((_, j) => (
          <circle
            key={`${i}-${j}`}
            cx={70 + j * 60}
            cy={70 + i * 50}
            r="2"
            opacity={0.25 + Math.sin(i + j) * 0.2}
          />
        ))
      )}
      <circle cx="300" cy="225" r="100" fill="none" strokeWidth="1.4" />
    </g>
  )
};

export function Placeholder({ kind, className, label }: Props) {
  const key = (kind in ART ? kind : "default") as Kind;
  return (
    <div
      className={cn(
        "relative size-full overflow-hidden bg-ink-1",
        className
      )}
      aria-label={label ?? `${kind} placeholder`}
      role="img"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--ink-2) 1px, transparent 0)",
          backgroundSize: "18px 18px"
        }}
      />
      <svg
        viewBox={VIEW}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 size-full text-paper/75"
        aria-hidden
      >
        {ART[key]}
      </svg>
      <div className="absolute bottom-3 left-3 font-mono text-mono-label uppercase tracking-[0.06em] opacity-50">
        {kind.replace(/-/g, " ")}
      </div>
      <div className="absolute right-3 top-3 font-mono text-mono-label uppercase tracking-[0.06em] opacity-40">
        Djitugo
      </div>
    </div>
  );
}
