export default function TopoLines({
  className = "",
  strokeOpacity = 0.06,
  strokeColor = "#EFE9DD",
  strokeWidth = 1,
}: {
  className?: string;
  strokeOpacity?: number;
  strokeColor?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke={strokeColor}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      >
        {/* Primary sweeping contour lines — full width */}
        <path d="M-60,78 C240,50 490,94 740,65 C985,38 1225,76 1500,52" />
        <path d="M-60,155 C200,126 458,170 718,140 C978,110 1228,152 1500,126" />
        <path d="M-60,242 C218,212 472,258 734,226 C994,194 1238,238 1500,210" />
        <path d="M-60,338 C188,306 454,353 718,318 C978,284 1230,330 1500,302" />
        <path d="M-60,440 C204,406 468,454 734,418 C998,382 1242,428 1500,398" />
        <path d="M-60,546 C212,511 478,558 744,520 C1006,482 1246,530 1500,500" />
        <path d="M-60,654 C222,618 486,666 752,628 C1014,590 1252,638 1500,608" />
        <path d="M-60,765 C218,730 484,778 750,738 C1012,698 1248,748 1500,715" />
        <path d="M-60,878 C215,843 480,892 748,852 C1012,812 1250,860 1500,826" />

        {/* Upper-right nested peak rings */}
        <path d="M1005,118 C1048,72 1122,62 1175,88 C1228,114 1238,182 1204,228 C1170,274 1100,284 1044,260 C988,236 970,176 1005,118" />
        <path d="M1024,136 C1064,93 1133,84 1184,109 C1235,134 1242,200 1209,244 C1176,288 1109,296 1056,273 C1003,250 986,196 1024,136" />
        <path d="M1044,155 C1081,115 1146,107 1195,131 C1244,155 1248,218 1216,261 C1184,304 1119,310 1068,288 C1017,266 1004,218 1044,155" />

        {/* Lower-left nested ridge rings */}
        <path d="M148,636 C184,586 262,572 318,598 C374,624 384,702 348,750 C312,798 236,808 180,780 C124,752 110,690 148,636" />
        <path d="M166,652 C200,604 275,591 329,617 C383,643 391,719 356,766 C321,813 248,822 194,795 C140,768 128,706 166,652" />

        {/* Mid-canvas accent ridge — horizontal partial arc */}
        <path d="M380,480 C480,448 600,465 720,440 C840,415 960,434 1060,410" />
        <path d="M360,500 C462,468 584,484 706,458 C828,432 952,452 1062,426" />

        {/* Upper partial arc — top zone */}
        <path d="M-60,18 C180,-10 440,28 700,-5 C960,-38 1220,8 1500,-18" />

        {/* Lower fill line */}
        <path d="M-60,865 C220,835 480,875 750,842 C1015,808 1255,852 1500,820" />
      </g>
    </svg>
  );
}
