import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SkillSwapIllustration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 860 500"
    fill="none"
    className="w-full h-auto"
    aria-label="Photographer shooting with camera and guitarist playing guitar, exchanging skills"
  >
    <defs>
      <filter id="sh" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="#00000018" />
      </filter>
      <filter id="sh2" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#00000022" />
      </filter>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#EDFDF8" />
        <stop offset="100%" stopColor="#F5F0FF" />
      </linearGradient>
      <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="og" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FB923C" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="guitar-body" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#D97706" />
        <stop offset="100%" stopColor="#92400E" />
      </linearGradient>
      <linearGradient id="keys-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F8FAFC" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
    </defs>

    {/* ── Background card ── */}
    <rect width="860" height="500" rx="32" fill="url(#bg)" />
    <circle cx="155" cy="300" r="220" fill="#2D9F88" fillOpacity="0.06" />
    <circle cx="705" cy="300" r="220" fill="#F97316" fillOpacity="0.06" />
    {/* floor shadow line */}
    <line x1="30" y1="450" x2="830" y2="450" stroke="#E2E8F0" strokeWidth="2" />

    {/* ══════════════════════════════════════════════════════════ */}
    {/*  LEFT — PHOTOGRAPHER standing, camera pressed to eye      */}
    {/* ══════════════════════════════════════════════════════════ */}
    <ellipse cx="175" cy="452" rx="72" ry="10" fill="#2D9F88" fillOpacity="0.14" />

    {/* Shoes */}
    <ellipse cx="158" cy="447" rx="22" ry="9" fill="#111827" />
    <ellipse cx="193" cy="447" rx="22" ry="9" fill="#111827" />
    {/* Trousers */}
    <rect x="148" y="372" width="22" height="76" rx="11" fill="#1E3A5F" />
    <rect x="182" y="372" width="22" height="76" rx="11" fill="#1E3A5F" />
    {/* Body — teal jacket, slight forward lean */}
    <path d="M136 262 Q133 236 175 229 Q217 236 215 262 L210 376 Q175 387 140 376 Z" fill="url(#tg)" />
    {/* Jacket zip/detail */}
    <path d="M168 235 L170 268 L175 250 L180 268 L182 235" fill="white" fillOpacity="0.22" />
    {/* Neck */}
    <rect x="165" y="223" width="20" height="16" rx="7" fill="#FDDBB4" />
    {/* Head — male, tilted slightly toward camera */}
    <ellipse cx="180" cy="196" rx="31" ry="33" fill="#FDDBB4" />
    {/* Short dark hair */}
    <path d="M149 196 Q149 163 180 159 Q211 163 211 196 Q204 177 180 175 Q156 177 149 196 Z" fill="#2D1700" />
    {/* RIGHT eye — squinted shut (looking through viewfinder) */}
    <path d="M187 195 Q192 192 197 195" stroke="#2C2C2C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* LEFT eye — wide open, alert */}
    <ellipse cx="168" cy="194" rx="5.5" ry="5.5" fill="#2C2C2C" />
    <circle cx="170" cy="192" r="2" fill="white" />
    {/* Concentration brows */}
    <path d="M163 185 Q168 181 173 185" stroke="#8B6347" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <path d="M185 185 Q190 181 195 184" stroke="#8B6347" strokeWidth="2.2" strokeLinecap="round" fill="none" />

    {/* RIGHT arm raised — hand gripping camera right side / shutter */}
    <path d="M215 262 Q250 246 262 226 Q270 212 263 203" stroke="#FDDBB4" strokeWidth="16" strokeLinecap="round" fill="none" />
    {/* LEFT arm raised — hand under lens supporting */}
    <path d="M136 262 Q100 257 88 244 Q78 232 82 218" stroke="#FDDBB4" strokeWidth="16" strokeLinecap="round" fill="none" />

    {/* ── DSLR CAMERA — raised to eye level ── */}
    {/* Camera body */}
    <rect x="80" y="196" width="184" height="60" rx="11" fill="#1E293B" filter="url(#sh2)" />
    {/* Right grip */}
    <rect x="244" y="196" width="30" height="60" rx="10" fill="#0F172A" />
    {/* Shutter button */}
    <circle cx="259" cy="196" r="9" fill="#DC2626" />
    <circle cx="259" cy="196" r="5.5" fill="#991B1B" />
    {/* Top viewfinder hump */}
    <rect x="144" y="183" width="28" height="15" rx="6" fill="#334155" />
    {/* Pop-up flash */}
    <rect x="104" y="185" width="22" height="11" rx="4" fill="#475569" />
    {/* Hot shoe rail */}
    <rect x="112" y="188" width="55" height="8" rx="3" fill="#374151" />
    {/* LENS — large, detailed, facing viewer */}
    <circle cx="160" cy="226" r="28" fill="#0F172A" />
    <circle cx="160" cy="226" r="22" fill="#1E3A5F" />
    <circle cx="160" cy="226" r="15" fill="#2563EB" fillOpacity="0.55" />
    <circle cx="160" cy="226" r="9"  fill="#3B82F6" fillOpacity="0.75" />
    <circle cx="160" cy="226" r="4"  fill="#93C5FD" />
    {/* Lens barrel ring */}
    <circle cx="160" cy="226" r="28" stroke="#334155" strokeWidth="3.5" />
    <circle cx="160" cy="226" r="22" stroke="#1D4ED8" strokeWidth="1.5" strokeOpacity="0.45" />
    {/* Glass shine */}
    <circle cx="150" cy="217" r="5" fill="white" fillOpacity="0.2" />
    <circle cx="155" cy="214" r="2" fill="white" fillOpacity="0.4" />
    {/* Focus ring texture */}
    <rect x="82" y="204" width="10" height="42" rx="5" fill="#475569" />
    {/* Mode dial */}
    <circle cx="232" cy="201" r="9" fill="#334155" />
    <circle cx="232" cy="201" r="5.5" fill="#475569" />
    {/* Neck strap */}
    <path d="M90 205 Q74 182 80 162" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M264 205 Q280 182 274 162" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" fill="none" />

    {/* ══════════════════════════════════════════════════════════ */}
    {/*  RIGHT — GUITARIST seated, playing acoustic guitar        */}
    {/* ══════════════════════════════════════════════════════════ */}
    <ellipse cx="678" cy="452" rx="80" ry="10" fill="#F97316" fillOpacity="0.14" />

    {/* ── STOOL ── */}
    {/* seat */}
    <rect x="646" y="374" width="66" height="13" rx="6" fill="#B45309" />
    {/* 4 legs */}
    <rect x="650" y="386" width="9" height="62" rx="4" fill="#92400E" />
    <rect x="700" y="386" width="9" height="62" rx="4" fill="#92400E" />
    <rect x="650" y="386" width="9" height="62" rx="4" fill="#92400E" transform="skewX(-5)" />
    <rect x="700" y="386" width="9" height="62" rx="4" fill="#92400E" transform="skewX(5)" />
    {/* rung */}
    <line x1="654" y1="422" x2="706" y2="422" stroke="#92400E" strokeWidth="7" strokeLinecap="round" />

    {/* Legs seated — hang down from stool */}
    <path d="M652 380 Q640 396 622 410 Q614 418 612 430" stroke="#374151" strokeWidth="20" strokeLinecap="round" fill="none" />
    <path d="M708 380 Q720 396 738 410 Q746 418 748 430" stroke="#374151" strokeWidth="20" strokeLinecap="round" fill="none" />
    {/* Feet / shoes */}
    <ellipse cx="612" cy="435" rx="18" ry="9" fill="#111827" />
    <ellipse cx="748" cy="435" rx="18" ry="9" fill="#111827" />

    {/* Body — warm orange top */}
    <path d="M630 268 Q626 244 678 237 Q730 244 726 268 L720 380 Q678 390 636 380 Z" fill="url(#og)" />
    {/* Shirt collar v-neck */}
    <path d="M662 246 L678 272 L694 246" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
    {/* Neck */}
    <rect x="668" y="232" width="20" height="16" rx="7" fill="#C8956C" />
    {/* Head — male, slight downward tilt looking at fretboard */}
    <ellipse cx="680" cy="204" rx="32" ry="34" fill="#C8956C" />
    {/* Short dark hair */}
    <path d="M648 204 Q648 170 680 166 Q712 170 712 204 Q705 184 680 182 Q655 184 648 204 Z" fill="#2D1700" />
    <rect x="648" y="204" width="10" height="24" rx="5" fill="#2D1700" />
    <rect x="702" y="204" width="10" height="24" rx="5" fill="#2D1700" />
    {/* Eyes — looking slightly down at guitar */}
    <ellipse cx="668" cy="203" rx="5.5" ry="5" fill="#2C2C2C" />
    <ellipse cx="692" cy="203" rx="5.5" ry="5" fill="#2C2C2C" />
    <circle cx="670" cy="201" r="2" fill="white" />
    <circle cx="694" cy="201" r="2" fill="white" />
    {/* Content smile */}
    <path d="M666 217 Q680 226 693 218" stroke="#8B5E3C" strokeWidth="2.5" fill="none" strokeLinecap="round" />

    {/* LEFT ARM — around guitar neck, fretting */}
    <path d="M630 272 Q600 270 582 260 Q566 250 558 238" stroke="#C8956C" strokeWidth="16" strokeLinecap="round" fill="none" />
    {/* RIGHT ARM — strumming arm across guitar body */}
    <path d="M726 272 Q752 280 762 306 Q768 322 762 340" stroke="#C8956C" strokeWidth="16" strokeLinecap="round" fill="none" />

    {/* ── ACOUSTIC GUITAR ── */}
    {/* Guitar body — figure-8 shape */}
    {/* Lower bout (larger) */}
    <ellipse cx="694" cy="360" rx="58" ry="68" fill="url(#guitar-body)" />
    {/* Upper bout (smaller) */}
    <ellipse cx="686" cy="272" rx="44" ry="52" fill="url(#guitar-body)" />
    {/* Body edge highlight */}
    <ellipse cx="694" cy="360" rx="58" ry="68" stroke="#F59E0B" strokeWidth="3" strokeOpacity="0.5" />
    <ellipse cx="686" cy="272" rx="44" ry="52" stroke="#F59E0B" strokeWidth="3" strokeOpacity="0.5" />
    {/* Sound hole */}
    <circle cx="690" cy="330" r="22" fill="#1C0A00" />
    <circle cx="690" cy="330" r="20" fill="#2D1300" />
    {/* Rosette ring around sound hole */}
    <circle cx="690" cy="330" r="22" stroke="#F59E0B" strokeWidth="2.5" strokeOpacity="0.6" />
    <circle cx="690" cy="330" r="25" stroke="#B45309" strokeWidth="1.5" strokeOpacity="0.4" />
    {/* Strings — 6 strings across body */}
    {[0,1,2,3,4,5].map(i => (
      <line key={i} x1={676 + i * 4} y1="220" x2={676 + i * 4} y2="418"
        stroke={i < 2 ? "#D4A853" : "#E8C870"} strokeWidth={i < 2 ? 2 : 1.2} strokeOpacity="0.9" />
    ))}
    {/* Bridge */}
    <rect x="672" y="388" width="40" height="8" rx="3" fill="#5C2D0A" />
    {/* Bridge saddle */}
    <rect x="672" y="390" width="40" height="3" rx="1.5" fill="#FBBF24" />
    {/* Nut at neck join */}
    <rect x="674" y="218" width="36" height="5" rx="2" fill="#FDE68A" />
    {/* Guitar NECK */}
    <rect x="676" y="160" width="28" height="62" rx="8" fill="#92400E" />
    {/* Neck wood grain */}
    <line x1="682" y1="162" x2="682" y2="220" stroke="#7C3416" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="690" y1="162" x2="690" y2="220" stroke="#7C3416" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="698" y1="162" x2="698" y2="220" stroke="#7C3416" strokeWidth="1" strokeOpacity="0.5" />
    {/* Frets */}
    {[170,182,194,206,216].map(y => (
      <line key={y} x1="676" y1={y} x2="704" y2={y} stroke="#FDE68A" strokeWidth="2" strokeOpacity="0.7" />
    ))}
    {/* Headstock */}
    <rect x="672" y="138" width="36" height="26" rx="6" fill="#7C3416" />
    {/* Tuning pegs — 3 each side */}
    {[142,152,162].map(y => (
      <g key={y}>
        <rect x="662" y={y-3} width="12" height="6" rx="3" fill="#B45309" />
        <circle cx="659" cy={y} r="4" fill="#D97706" />
      </g>
    ))}
    {[142,152,162].map(y => (
      <g key={y}>
        <rect x="706" y={y-3} width="12" height="6" rx="3" fill="#B45309" />
        <circle cx="721" cy={y} r="4" fill="#D97706" />
      </g>
    ))}
    {/* Left hand fingers on frets */}
    {[0,1,2,3].map(i => (
      <ellipse key={i} cx={560 + i * 0} cy={242 + i * 6} rx="6" ry="5" fill="#C8956C" />
    ))}
    {/* Strumming right hand */}
    <ellipse cx="762" cy="344" rx="14" ry="10" fill="#C8956C" />
    {[756,761,766,771].map(x => (
      <rect key={x} x={x} y="338" width="5" height="11" rx="2.5" fill="#C8956C" />
    ))}
    {/* Pick */}
    <path d="M756 344 Q759 348 762 344 Q759 338 756 344 Z" fill="#FCD34D" />

    {/* Music notes floating from guitar */}
    <text x="610" y="225" fontSize="22" fill="#F97316" fillOpacity="0.75">♪</text>
    <text x="642" y="200" fontSize="18" fill="#FB923C" fillOpacity="0.65">♫</text>
    <text x="724" y="195" fontSize="24" fill="#F97316" fillOpacity="0.7">♩</text>
    <text x="752" y="218" fontSize="16" fill="#FDBA74" fillOpacity="0.6">♬</text>

    {/* ══════════════════════════════════════════════════════════════════ */}
    {/*  FLOATING SKILL ICONS — 6 badges scattered around centre hub     */}
    {/* ══════════════════════════════════════════════════════════════════ */}

    {/* TOP-LEFT — Camera mini badge */}
    <g transform="translate(90,108)">
      <circle r="26" fill="#ECFDF5" filter="url(#sh2)" />
      <rect x="-12" y="-8" width="24" height="16" rx="4" fill="#059669" />
      <circle r="5.5" fill="#ECFDF5" fillOpacity="0.8" />
      <circle r="3" fill="#059669" fillOpacity="0.5" />
      <rect x="-4" y="-13" width="9" height="6" rx="2" fill="#059669" />
    </g>

    {/* TOP-CENTRE-LEFT — Paintbrush badge */}
    <g transform="translate(300,62)">
      <circle r="24" fill="#FEF3C7" filter="url(#sh2)" />
      <rect x="-3" y="-14" width="7" height="21" rx="3" fill="#D97706" transform="rotate(-30)" />
      <circle cx="0" cy="11" r="6" fill="#FDE68A" />
    </g>

    {/* TOP-CENTRE-RIGHT — Music notes badge */}
    <g transform="translate(560,62)">
      <circle r="24" fill="#EDE9FE" filter="url(#sh2)" />
      <text x="-10" y="9" fontSize="22" fill="#7C3AED">♫</text>
    </g>

    {/* TOP-RIGHT — Guitar pick badge */}
    <g transform="translate(770,108)">
      <circle r="26" fill="#FFF7ED" filter="url(#sh2)" />
      <path d="M0,-14 Q12,0 0,14 Q-12,0 0,-14 Z" fill="#F97316" />
      <circle r="3" fill="white" fillOpacity="0.6" />
    </g>

    {/* BOTTOM-LEFT — Code badge */}
    <g transform="translate(96,388)">
      <circle r="24" fill="#F0F9FF" filter="url(#sh2)" />
      <text x="-11" y="7" fontSize="14" fontFamily="monospace" fontWeight="bold" fill="#0369A1">&lt;/&gt;</text>
    </g>

    {/* BOTTOM-RIGHT — Star badge */}
    <g transform="translate(764,388)">
      <circle r="24" fill="#FEF9C3" filter="url(#sh2)" />
      <text x="-10" y="9" fontSize="22" fill="#CA8A04">★</text>
    </g>

    {/* Subtle arc flow path */}
    <path d="M142 410 Q300 160 430 155 Q560 160 718 410"
      stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="7 5"
      fill="none" strokeOpacity="0.3" />

    {/* ══════════════════════════════════════════════════════════════════ */}
    {/*  CENTRE — BOLD SKILL SWAP HUB                                    */}
    {/* ══════════════════════════════════════════════════════════════════ */}

    {/* Outermost pulse ring */}
    <circle cx="430" cy="248" r="96" fill="#2D9F88" fillOpacity="0.06" />
    {/* Outer ring */}
    <circle cx="430" cy="248" r="84" fill="#2D9F88" fillOpacity="0.1" />
    {/* Main hub white circle */}
    <circle cx="430" cy="248" r="74" fill="white" filter="url(#sh)" />
    {/* Inner tinted fill */}
    <circle cx="430" cy="248" r="68" fill="#ECFDF5" />

    {/* BOLD TOP ARROW → teal (teach photography) */}
    <path d="M382 228 Q430 208 478 228"
      stroke="#2D9F88" strokeWidth="9" strokeLinecap="round" fill="none" />
    <path d="M466 216 L480 228 L466 240"
      stroke="#2D9F88" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* BOLD BOTTOM ARROW ← orange (teach guitar) */}
    <path d="M478 268 Q430 288 382 268"
      stroke="#F97316" strokeWidth="9" strokeLinecap="round" fill="none" />
    <path d="M394 280 L380 268 L394 256"
      stroke="#F97316" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* SkillSwap wordmark inside hub */}
    <text x="430" y="244" textAnchor="middle"
      fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif"
      fontSize="13" fontWeight="800" fill="#059669" letterSpacing="1">SKILL</text>
    <text x="430" y="260" textAnchor="middle"
      fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif"
      fontSize="13" fontWeight="800" fill="#EA580C" letterSpacing="1">SWAP</text>

    {/* FREE badge pill below hub */}
    <rect x="388" y="304" width="84" height="28" rx="14" fill="#2D9F88" filter="url(#sh2)" />
    <text x="430" y="322" textAnchor="middle"
      fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif"
      fontSize="12" fontWeight="800" fill="white" letterSpacing="0.8">FREE · $0</text>

    {/* Connecting dashed lines from hub to figures */}
    <line x1="356" y1="248" x2="278" y2="238"
      stroke="#2D9F88" strokeWidth="2" strokeDasharray="5 4" strokeOpacity="0.4" />
    <line x1="504" y1="248" x2="586" y2="268"
      stroke="#F97316" strokeWidth="2" strokeDasharray="5 4" strokeOpacity="0.4" />
  </svg>
);

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              🤝 No money. Just skills.
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-balance leading-tight">
              Swap skills,
              <br />
              <span className="text-primary">grow together</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md text-balance">
              Teach what you know, learn what you love. Connect with people who
              want to exchange skills — no money needed.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-full text-base px-8 gap-2"
                onClick={() => navigate("/my-skills")}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base px-8"
                onClick={() => navigate("/browse")}
              >
                Browse Skills
              </Button>
            </div>
          </div>
          <div className="relative">
            <SkillSwapIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
