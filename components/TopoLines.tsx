// Generates a bezier-approximated ellipse path
function ellipsePath(cx: number, cy: number, a: number, b: number): string {
  const k = 0.5523; // quarter-circle bezier approximation constant
  const r = (n: number) => Math.round(n * 10) / 10;
  return [
    `M${r(cx - a)},${cy}`,
    `C${r(cx - a)},${r(cy - b * k)} ${r(cx - a * k)},${r(cy - b)} ${cx},${r(cy - b)}`,
    `C${r(cx + a * k)},${r(cy - b)} ${r(cx + a)},${r(cy - b * k)} ${r(cx + a)},${cy}`,
    `C${r(cx + a)},${r(cy + b * k)} ${r(cx + a * k)},${r(cy + b)} ${cx},${r(cy + b)}`,
    `C${r(cx - a * k)},${r(cy + b)} ${r(cx - a)},${r(cy + b * k)} ${r(cx - a)},${cy} Z`,
  ].join(" ");
}

interface Peak {
  cx: number;
  cy: number;
  rings: number;
  startA: number;
  startB: number;
  stepA: number;
  stepB: number;
  rotation?: number;
}

// Elevation peak clusters — each generates nested concentric contour rings
const PEAKS: Peak[] = [
  // Primary peak — upper right, largest cluster
  { cx: 1085, cy: 148, rings: 9, startA: 22, startB: 16, stepA: 55, stepB: 42, rotation: -14 },
  // Secondary peak — lower left
  { cx: 185, cy: 748, rings: 8, startA: 20, startB: 15, stepA: 50, stepB: 38, rotation: 18 },
  // Ridge spur — bottom center
  { cx: 658, cy: 892, rings: 6, startA: 18, startB: 13, stepA: 46, stepB: 35, rotation: -8 },
  // Minor summit — upper left
  { cx: 245, cy: 178, rings: 5, startA: 16, startB: 12, stepA: 42, stepB: 32, rotation: 12 },
  // Distant ridge — far right mid
  { cx: 1380, cy: 580, rings: 5, startA: 18, startB: 14, stepA: 44, stepB: 34, rotation: -20 },
];

// Connecting ridgeline sweeps between peaks
const RIDGES = [
  // Spine from upper-right peak down toward lower-left
  "M1100,300 C1050,380 950,440 820,500 C690,560 540,600 380,660 C260,705 200,720 180,745",
  // Upper saddle connection
  "M248,240 C320,280 480,300 640,340 C800,380 950,380 1060,340",
  // Lower terrain flow
  "M-50,820 C150,790 350,810 550,780 C750,750 900,760 1100,730 C1250,710 1380,715 1490,700",
  // Mid-slope traverse
  "M-50,560 C180,535 400,555 620,525 C840,496 1060,515 1250,490 C1350,478 1440,482 1490,480",
  // High ridge traverse
  "M600,50 C680,30 800,20 920,40 C1020,55 1050,90 1082,148",
  // Low valley sweep
  "M-50,680 C100,660 280,670 420,650 C560,630 650,640 760,620 C900,596 1050,608 1200,585",
];

export default function TopoLines({
  className = "",
  strokeOpacity = 0.09,
  strokeColor = "#EFE9DD",
  strokeWidth = 1,
  showGrid = false,
  gridOpacity = 0.025,
}: {
  className?: string;
  strokeOpacity?: number;
  strokeColor?: string;
  strokeWidth?: number;
  showGrid?: boolean;
  gridOpacity?: number;
}) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Optional coordinate grid overlay */}
      {showGrid && (
        <g fill="none" stroke={strokeColor} strokeOpacity={gridOpacity} strokeWidth={0.5}>
          {[160, 320, 480, 640, 800, 960, 1120, 1280].map((x) => (
            <line key={`vg-${x}`} x1={x} y1={0} x2={x} y2={900} />
          ))}
          {[112, 225, 337, 450, 562, 675, 787].map((y) => (
            <line key={`hg-${y}`} x1={0} y1={y} x2={1440} y2={y} />
          ))}
        </g>
      )}

      {/* Elevation peak clusters — concentric contour rings */}
      {PEAKS.map((peak, pi) => (
        <g
          key={pi}
          transform={peak.rotation ? `rotate(${peak.rotation},${peak.cx},${peak.cy})` : undefined}
          fill="none"
          stroke={strokeColor}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
        >
          {Array.from({ length: peak.rings }, (_, i) => (
            <path
              key={i}
              d={ellipsePath(
                peak.cx,
                peak.cy,
                peak.startA + i * peak.stepA,
                peak.startB + i * peak.stepB
              )}
            />
          ))}
        </g>
      ))}

      {/* Ridgeline sweeps connecting peaks */}
      <g
        fill="none"
        stroke={strokeColor}
        strokeOpacity={strokeOpacity * 0.7}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      >
        {RIDGES.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}
