import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SkillSwapIllustration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 860 480"
    fill="none"
    className="w-full h-auto"
    aria-label="A photographer shooting a photo and an organist playing piano — exchanging skills"
  >
    <defs>
      <filter id="sh" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="#00000016" />
      </filter>
      <filter id="sh2" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="#00000020" />
      </filter>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#EDFDF8" />
        <stop offset="100%" stopColor="#F5F0FF" />
      </linearGradient>
      <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="keys" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F8FAFC" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
    </defs>

    {/* ── Background ── */}
    <rect width="860" height="480" rx="32" fill="url(#bg)" />
    <circle cx="155" cy="290" r="210" fill="#2D9F88" fillOpacity="0.06" />
    <circle cx="705" cy="290" r="210" fill="#7C3AED" fillOpacity="0.06" />
    {/* floor */}
    <line x1="40" y1="430" x2="820" y2="430" stroke="#E2E8F0" strokeWidth="2" />

    {/* ════════════════════════════════════════════ */}
    {/*  LEFT — PHOTOGRAPHER shooting, eye to camera */}
    {/* ════════════════════════════════════════════ */}
    <ellipse cx="178" cy="432" rx="70" ry="9" fill="#2D9F88" fillOpacity="0.13" />
    {/* legs — standing, slight forward lean */}
    <rect x="158" y="360" width="22" height="70" rx="11" fill="#1E3A5F" />
    <rect x="186" y="360" width="22" height="70" rx="11" fill="#1E3A5F" />
    <ellipse cx="169" cy="428" rx="20" ry="8" fill="#0F172A" />
    <ellipse cx="197" cy="428" rx="20" ry="8" fill="#0F172A" />
    {/* body — teal jacket, leaning fwd */}
    <path d="M140 252 Q138 228 178 222 Q218 228 216 252 L212 362 Q178 372 144 362 Z" fill="url(#tg)" />
    {/* jacket lapels */}
    <path d="M165 228 L170 260 L178 242 L186 260 L191 228" fill="white" fillOpacity="0.2" />
    {/* neck */}
    <rect x="168" y="218" width="20" height="16" rx="6" fill="#FDDBB4" />
    {/* head — tilted slightly right toward camera */}
    <ellipse cx="184" cy="192" rx="30" ry="32" fill="#FDDBB4" />
    {/* hair (male, short, dark) */}
    <path d="M154 192 Q154 162 184 158 Q214 162 214 192 Q207 174 184 172 Q161 174 154 192 Z" fill="#2D1700" />
    {/* RIGHT eye — closed/squinted, looking through viewfinder */}
    <path d="M192 191 Q196 188 200 191" stroke="#2C2C2C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* left eye open */}
    <ellipse cx="172" cy="191" rx="5" ry="5" fill="#2C2C2C" />
    <circle cx="174" cy="189" r="2" fill="white" />
    {/* concentration brow furrow */}
    <path d="M168 183 Q172 180 176 183" stroke="#9B7548" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M190 183 Q194 180 198 183" stroke="#9B7548" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* RIGHT ARM — raised up, holding camera to eye */}
    <path d="M216 248 Q248 235 258 218 Q265 207 258 200" stroke="#FDDBB4" strokeWidth="15" strokeLinecap="round" fill="none" />
    {/* LEFT ARM — under camera, supporting */}
    <path d="M140 252 Q108 255 96 248 Q84 240 86 224" stroke="#FDDBB4" strokeWidth="15" strokeLinecap="round" fill="none" />

    {/* ── DSLR CAMERA raised to face ── */}
    {/* camera body in shooting position — at eye level */}
    <rect x="86" y="192" width="172" height="56" rx="10" fill="#1E293B" filter="url(#sh2)" />
    {/* grip right side */}
    <rect x="240" y="192" width="28" height="56" rx="9" fill="#0F172A" />
    {/* shutter on top-right */}
    <circle cx="254" cy="192" r="8" fill="#E74C3C" />
    <circle cx="254" cy="192" r="5" fill="#C0392B" />
    {/* viewfinder bump on top */}
    <rect x="148" y="180" width="24" height="14" rx="5" fill="#334155" />
    {/* flash bump */}
    <rect x="106" y="182" width="20" height="10" rx="4" fill="#475569" />
    {/* lens — big, prominent */}
    <circle cx="162" cy="220" r="26" fill="#0F172A" />
    <circle cx="162" cy="220" r="21" fill="#1E3A5F" />
    <circle cx="162" cy="220" r="14" fill="#2563EB" fillOpacity="0.55" />
    <circle cx="162" cy="220" r="8"  fill="#3B82F6" fillOpacity="0.8" />
    <circle cx="162" cy="220" r="3.5" fill="#93C5FD" />
    {/* lens shine highlights */}
    <circle cx="153" cy="211" r="4" fill="white" fillOpacity="0.22" />
    <circle cx="158" cy="209" r="1.8" fill="white" fillOpacity="0.4" />
    {/* lens barrel rings */}
    <circle cx="162" cy="220" r="26" stroke="#334155" strokeWidth="3" />
    <circle cx="162" cy="220" r="21" stroke="#1D4ED8" strokeWidth="1.5" strokeOpacity="0.4" />
    {/* mode dial */}
    <circle cx="228" cy="197" r="8" fill="#334155" />
    <circle cx="228" cy="197" r="5" fill="#475569" />
    {/* top rail */}
    <rect x="116" y="185" width="50" height="8" rx="3" fill="#334155" />
    {/* focus ring */}
    <rect x="88" y="200" width="10" height="40" rx="5" fill="#475569" />
    {/* strap hint */}
    <path d="M96 200 Q82 180 88 164" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M258 200 Q272 180 266 164" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" fill="none" />

    {/* ════════════════════════════════════════════ */}
    {/*  RIGHT — ORGANIST seated, playing keyboard   */}
    {/* ════════════════════════════════════════════ */}
    <ellipse cx="674" cy="432" rx="80" ry="9" fill="#7C3AED" fillOpacity="0.13" />

    {/* ── STOOL ── */}
    <rect x="648" y="370" width="52" height="10" rx="5" fill="#94A3B8" />
    {/* stool legs */}
    <rect x="652" y="380" width="8" height="48" rx="4" fill="#94A3B8" />
    <rect x="688" y="380" width="8" height="48" rx="4" fill="#94A3B8" />
    <line x1="652" y1="408" x2="696" y2="408" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />

    {/* ── SEATED FIGURE (organist, female) ── */}
    {/* legs seated */}
    <path d="M648 372 Q636 380 620 390 Q612 396 612 406" stroke="#374151" strokeWidth="18" strokeLinecap="round" fill="none" />
    <path d="M700 372 Q712 380 726 390 Q734 396 734 406" stroke="#374151" strokeWidth="18" strokeLinecap="round" fill="none" />
    {/* shoes */}
    <ellipse cx="612" cy="411" rx="16" ry="8" fill="#1F2937" />
    <ellipse cx="734" cy="411" rx="16" ry="8" fill="#1F2937" />
    {/* body — purple top */}
    <path d="M634 258 Q630 238 674 232 Q718 238 714 258 L710 372 Q674 380 638 372 Z" fill="url(#pg)" />
    {/* blouse detail */}
    <path d="M658 240 L662 272 L674 254 L686 272 L690 240" fill="white" fillOpacity="0.18" />
    {/* neck */}
    <rect x="664" y="228" width="20" height="16" rx="6" fill="#F5C28A" />
    {/* head — looking down at keys, slight tilt */}
    <ellipse cx="676" cy="200" rx="30" ry="32" fill="#F5C28A" />
    {/* long wavy hair */}
    <path d="M646 200 Q645 168 676 163 Q707 168 706 200 Q699 180 676 178 Q653 180 646 200 Z" fill="#7B3F00" />
    <path d="M646 200 Q638 228 640 252 Q650 244 652 225 Z" fill="#7B3F00" />
    <path d="M706 200 Q714 228 712 252 Q702 244 700 225 Z" fill="#7B3F00" />
    {/* bangs */}
    <path d="M652 174 Q664 168 676 170 Q688 168 700 174 Q694 178 676 176 Q658 178 652 174 Z" fill="#7B3F00" />
    {/* eyes — looking slightly down, focused */}
    <ellipse cx="665" cy="199" rx="5" ry="4.5" fill="#2C2C2C" />
    <ellipse cx="687" cy="199" rx="5" ry="4.5" fill="#2C2C2C" />
    <circle cx="667" cy="198" r="1.8" fill="white" />
    <circle cx="689" cy="198" r="1.8" fill="white" />
    {/* focused/serene expression */}
    <path d="M665 212 Q676 219 687 212" stroke="#C87941" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* LEFT ARM — extended to keys, slightly in */}
    <path d="M634 262 Q608 268 592 290 Q582 308 584 336" stroke="#F5C28A" strokeWidth="15" strokeLinecap="round" fill="none" />
    {/* RIGHT ARM — extended to keys other side */}
    <path d="M714 262 Q740 268 756 290 Q766 308 764 336" stroke="#F5C28A" strokeWidth="15" strokeLinecap="round" fill="none" />

    {/* ── KEYBOARD / ORGAN ── */}
    {/* keyboard body */}
    <rect x="560" y="320" width="228" height="64" rx="10" fill="#1E293B" filter="url(#sh2)" />
    {/* keyboard top panel */}
    <rect x="560" y="320" width="228" height="18" rx="8" fill="#0F172A" />
    {/* brand light strip */}
    <rect x="582" y="325" width="80" height="5" rx="2.5" fill="#7C3AED" fillOpacity="0.7" />
    {/* power indicator */}
    <circle cx="762" cy="327" r="4" fill="#34D399" />
    {/* WHITE KEYS */}
    {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
      <rect key={i} x={566 + i * 17} y="342" width="15" height="36" rx="3" fill="url(#keys)" stroke="#CBD5E1" strokeWidth="0.8" />
    ))}
    {/* BLACK KEYS */}
    {[0,1,3,4,5,7,8,10,11].map(i => (
      <rect key={i} x={576 + i * 17} y="342" width="9" height="22" rx="2" fill="#1E293B" />
    ))}
    {/* music notes floating up */}
    <text x="586" y="306" fontSize="20" fill="#7C3AED" fillOpacity="0.7">♩</text>
    <text x="616" y="290" fontSize="16" fill="#A78BFA" fillOpacity="0.6">♪</text>
    <text x="648" y="300" fontSize="22" fill="#7C3AED" fillOpacity="0.8">♫</text>
    <text x="682" y="285" fontSize="15" fill="#A78BFA" fillOpacity="0.5">♬</text>
    <text x="710" y="296" fontSize="18" fill="#7C3AED" fillOpacity="0.65">♩</text>
    {/* hands on keys (left) */}
    <ellipse cx="600" cy="342" rx="18" ry="9" fill="#F5C28A" fillOpacity="0.9" />
    {/* left fingers */}
    {[590,598,606,614,622].map(x => (
      <rect key={x} x={x} y="336" width="6" height="12" rx="3" fill="#F5C28A" />
    ))}
    {/* hands on keys (right) */}
    <ellipse cx="748" cy="342" rx="18" ry="9" fill="#F5C28A" fillOpacity="0.9" />
    {/* right fingers */}
    {[726,734,742,750,758].map(x => (
      <rect key={x} x={x} y="336" width="6" height="12" rx="3" fill="#F5C28A" />
    ))}

    {/* ════════════════════════════════════════════════════ */}
    {/*  FLOATING SKILL ICONS — scattered around the hub    */}
    {/* ════════════════════════════════════════════════════ */}

    {/* TOP-LEFT — paintbrush (art/design) */}
    <g transform="translate(92, 100)">
      <circle r="24" fill="#FEF3C7" filter="url(#sh2)" />
      <rect x="-4" y="-13" width="8" height="20" rx="3" fill="#F59E0B" transform="rotate(-35)" />
      <path d="-8 12 Q0 18 8 12" stroke="#F59E0B" strokeWidth="2" fill="#FCD34D" />
      <circle cx="0" cy="13" r="5" fill="#FDE68A" />
    </g>

    {/* TOP-RIGHT — music note (toward photographer) */}
    <g transform="translate(768, 96)">
      <circle r="24" fill="#EDE9FE" filter="url(#sh2)" />
      <text x="-9" y="9" fontSize="22" fill="#7C3AED">♫</text>
    </g>

    {/* MID-LEFT floating — camera mini icon (skill being taught) */}
    <g transform="translate(58, 240)">
      <circle r="22" fill="#ECFDF5" filter="url(#sh2)" />
      <rect x="-11" y="-7" width="22" height="14" rx="3" fill="#059669" />
      <circle r="5" fill="#ECFDF5" />
      <circle r="2.5" fill="#059669" fillOpacity="0.5" />
      <rect x="-3" y="-12" width="7" height="5" rx="2" fill="#059669" />
    </g>

    {/* MID-RIGHT floating — piano keys mini icon */}
    <g transform="translate(802, 240)">
      <circle r="22" fill="#EDE9FE" filter="url(#sh2)" />
      <rect x="-14" y="-4" width="28" height="14" rx="3" fill="#7C3AED" />
      {[0,1,2,3].map(i => (
        <rect key={i} x={-12 + i * 7} y="-4" width="5" height="14" rx="1.5" fill="white" fillOpacity={i % 2 === 0 ? 0.9 : 0.2} />
      ))}
    </g>

    {/* BOTTOM-LEFT — code/dev icon */}
    <g transform="translate(100, 388)">
      <circle r="22" fill="#FFF7ED" filter="url(#sh2)" />
      <text x="-10" y="7" fontSize="15" fontFamily="monospace" fontWeight="bold" fill="#EA580C">&lt;/&gt;</text>
    </g>

    {/* BOTTOM-RIGHT — star/rating icon */}
    <g transform="translate(760, 388)">
      <circle r="22" fill="#FEF9C3" filter="url(#sh2)" />
      <text x="-9" y="8" fontSize="20" fill="#EAB308">★</text>
    </g>

    {/* Curved arc path showing skill flow (dotted) */}
    <path d="M140 380 Q280 150 430 148 Q580 150 720 380"
      stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="6 5"
      fill="none" strokeOpacity="0.35" />

    {/* ════════════════════════════════════════ */}
    {/*   CENTER SWAP HUB                       */}
    {/* ════════════════════════════════════════ */}
    {/* outer glow */}
    <circle cx="430" cy="240" r="82" fill="#2D9F88" fillOpacity="0.09" />
    {/* main circle */}
    <circle cx="430" cy="240" r="70" fill="white" filter="url(#sh)" />
    <circle cx="430" cy="240" r="64" fill="#F0FDF9" />
    {/* BOLD top arrow → teal */}
    <path d="M390 221 Q430 203 470 221" stroke="#2D9F88" strokeWidth="7"
      strokeLinecap="round" fill="none" />
    <path d="M460 210 L471 221 L460 232" stroke="#2D9F88" strokeWidth="7"
      strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* BOLD bottom arrow ← purple */}
    <path d="M470 259 Q430 277 390 259" stroke="#7C3AED" strokeWidth="7"
      strokeLinecap="round" fill="none" />
    <path d="M400 270 L389 259 L400 248" stroke="#7C3AED" strokeWidth="7"
      strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* FREE badge */}
    <rect x="388" y="293" width="84" height="26" rx="13" fill="#2D9F88" filter="url(#sh2)" />
    <text x="430" y="310" textAnchor="middle"
      fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif"
      fontSize="11" fontWeight="800" fill="white" letterSpacing="0.5">FREE · $0</text>
  </svg>
);

    {/* ── Background ── */}
    <rect width="860" height="480" rx="32" fill="url(#bg)" />
    {/* soft glows */}
    <circle cx="160" cy="280" r="200" fill="#2D9F88" fillOpacity="0.07" />
    <circle cx="700" cy="280" r="200" fill="#F97316" fillOpacity="0.07" />
    {/* floor line */}
    <line x1="60" y1="420" x2="800" y2="420" stroke="#E2E8F0" strokeWidth="2" />

    {/* ════════════════════════════════════════ */}
    {/*   LEFT FIGURE — Photographer (female)   */}
    {/* ════════════════════════════════════════ */}
    {/* ground shadow */}
    <ellipse cx="190" cy="422" rx="72" ry="10" fill="#2D9F88" fillOpacity="0.12" />
    {/* legs */}
    <rect x="163" y="355" width="22" height="65" rx="11" fill="#374151" />
    <rect x="193" y="355" width="22" height="65" rx="11" fill="#374151" />
    {/* shoes */}
    <ellipse cx="174" cy="419" rx="22" ry="9" fill="#1F2937" />
    <ellipse cx="204" cy="419" rx="22" ry="9" fill="#1F2937" />
    {/* body — teal top */}
    <path d="M148 240 Q145 220 190 215 Q235 220 232 240 L228 360 Q190 370 152 360 Z" fill="url(#tg)" />
    {/* apron-style detail */}
    <path d="M168 230 Q168 222 190 220 Q212 222 212 230 L210 320 Q190 326 170 320 Z" fill="white" fillOpacity="0.3" />
    {/* neck */}
    <rect x="180" y="212" width="20" height="18" rx="6" fill="#FDDBB4" />
    {/* head */}
    <ellipse cx="190" cy="185" rx="34" ry="36" fill="#FDDBB4" />
    {/* long hair — female */}
    <path d="M156 186 Q155 160 190 155 Q225 160 224 186 Q215 170 190 168 Q165 170 156 186 Z" fill="#3B1F0A" />
    <path d="M156 186 Q150 215 152 235 Q162 228 162 210 Z" fill="#3B1F0A" />
    <path d="M224 186 Q230 215 228 235 Q218 228 218 210 Z" fill="#3B1F0A" />
    {/* eyes */}
    <ellipse cx="179" cy="183" rx="5" ry="5.5" fill="#2C2C2C" />
    <ellipse cx="201" cy="183" rx="5" ry="5.5" fill="#2C2C2C" />
    <circle cx="181" cy="181" r="2" fill="white" />
    <circle cx="203" cy="181" r="2" fill="white" />
    {/* smile */}
    <path d="M179 197 Q190 206 201 197" stroke="#C87941" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* LEFT ARM holding camera */}
    <path d="M152 248 Q118 258 112 286 Q108 305 122 315" stroke="#FDDBB4" strokeWidth="16" strokeLinecap="round" fill="none" />
    {/* RIGHT ARM */}
    <path d="M228 248 Q262 258 268 286 Q272 305 258 315" stroke="#FDDBB4" strokeWidth="16" strokeLinecap="round" fill="none" />
    {/* ── CAMERA ── */}
    {/* body */}
    <rect x="118" y="295" width="144" height="86" rx="12" fill="#1E293B" filter="url(#sh2)" />
    {/* grip */}
    <rect x="118" y="295" width="30" height="86" rx="10" fill="#0F172A" />
    {/* shutter button */}
    <circle cx="133" cy="295" r="9" fill="#E74C3C" />
    <circle cx="133" cy="295" r="5" fill="#C0392B" />
    {/* lens mount ring */}
    <circle cx="205" cy="338" r="32" fill="#0F172A" />
    <circle cx="205" cy="338" r="26" fill="#1E3A5F" />
    <circle cx="205" cy="338" r="18" fill="#2563EB" fillOpacity="0.5" />
    <circle cx="205" cy="338" r="10" fill="#3B82F6" fillOpacity="0.7" />
    <circle cx="205" cy="338" r="4" fill="#60A5FA" />
    {/* lens shine */}
    <circle cx="197" cy="330" r="4" fill="white" fillOpacity="0.25" />
    {/* hot shoe rail */}
    <rect x="155" y="287" width="34" height="10" rx="4" fill="#334155" />
    {/* viewfinder */}
    <rect x="148" y="288" width="18" height="12" rx="3" fill="#334155" />
    {/* mode dial */}
    <circle cx="238" cy="300" r="7" fill="#334155" />
    <circle cx="238" cy="300" r="4" fill="#475569" />

    {/* ════════════════════════════════════════ */}
    {/*   RIGHT FIGURE — Chef (male)            */}
    {/* ════════════════════════════════════════ */}
    {/* ground shadow */}
    <ellipse cx="668" cy="422" rx="72" ry="10" fill="#F97316" fillOpacity="0.12" />
    {/* legs */}
    <rect x="642" y="355" width="22" height="65" rx="11" fill="#374151" />
    <rect x="672" y="355" width="22" height="65" rx="11" fill="#374151" />
    {/* shoes */}
    <ellipse cx="653" cy="419" rx="22" ry="9" fill="#1F2937" />
    <ellipse cx="683" cy="419" rx="22" ry="9" fill="#1F2937" />
    {/* body — orange chef jacket */}
    <path d="M628 240 Q625 220 668 215 Q712 220 710 240 L706 360 Q668 370 630 360 Z" fill="url(#og)" />
    {/* apron overlay */}
    <path d="M648 228 Q648 220 668 218 Q688 220 688 228 L686 330 Q668 336 650 330 Z" fill="white" fillOpacity="0.55" />
    {/* apron strings */}
    <path d="M648 230 Q638 238 634 255" stroke="white" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
    <path d="M688 230 Q698 238 702 255" stroke="white" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" />
    {/* neck */}
    <rect x="658" y="212" width="20" height="18" rx="6" fill="#C8956C" />
    {/* head */}
    <ellipse cx="668" cy="185" rx="34" ry="36" fill="#C8956C" />
    {/* short hair */}
    <path d="M634 185 Q634 152 668 148 Q702 152 702 185 Q694 165 668 163 Q642 165 634 185 Z" fill="#2D1700" />
    {/* short sideburns */}
    <rect x="634" y="185" width="10" height="22" rx="5" fill="#2D1700" />
    <rect x="692" y="185" width="10" height="22" rx="5" fill="#2D1700" />
    {/* eyes */}
    <ellipse cx="657" cy="184" rx="5" ry="5.5" fill="#2C2C2C" />
    <ellipse cx="679" cy="184" rx="5" ry="5.5" fill="#2C2C2C" />
    <circle cx="659" cy="182" r="2" fill="white" />
    <circle cx="681" cy="182" r="2" fill="white" />
    {/* smile / slight smirk */}
    <path d="M657 198 Q668 207 678 200" stroke="#8B5E3C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* ── CHEF HAT ── */}
    {/* brim */}
    <rect x="642" y="153" width="52" height="14" rx="5" fill="white" filter="url(#sh2)" />
    {/* dome */}
    <path d="M646 165 Q644 126 668 122 Q692 126 690 165 Z" fill="white" filter="url(#sh2)" />
    {/* dome crease details */}
    <path d="M658 130 Q657 145 658 162" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
    <path d="M668 128 L668 162" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
    <path d="M678 130 Q679 145 678 162" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
    {/* ARMS */}
    <path d="M630 248 Q596 258 590 286 Q586 305 600 316" stroke="#C8956C" strokeWidth="16" strokeLinecap="round" fill="none" />
    <path d="M706 248 Q742 258 748 286 Q752 305 738 316" stroke="#C8956C" strokeWidth="16" strokeLinecap="round" fill="none" />
    {/* ── FRYING PAN ── */}
    {/* handle */}
    <rect x="734" y="308" width="52" height="16" rx="8" fill="#4B5563" filter="url(#sh2)" />
    <rect x="734" y="310" width="52" height="12" rx="6" fill="#6B7280" />
    {/* pan body */}
    <ellipse cx="668" cy="333" rx="72" ry="34" fill="#1F2937" filter="url(#sh2)" />
    <ellipse cx="668" cy="328" rx="64" ry="28" fill="#374151" />
    {/* food in pan */}
    <ellipse cx="652" cy="325" rx="14" ry="9" fill="#FDE68A" />
    <ellipse cx="672" cy="323" rx="16" ry="10" fill="#FDE68A" />
    <ellipse cx="690" cy="326" rx="12" ry="8" fill="#FCA5A5" />
    <circle cx="652" cy="323" r="5" fill="#FCD34D" />
    <circle cx="673" cy="320" r="6" fill="#FBBF24" />
    {/* sizzle steam */}
    <path d="M650 310 Q647 300 651 292" stroke="#CBD5E1" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M668 307 Q665 296 669 288" stroke="#CBD5E1" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M686 311 Q683 300 687 292" stroke="#CBD5E1" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* ════════════════════════════════════════ */}
    {/*   FLOATING EXCHANGE ICONS               */}
    {/* ════════════════════════════════════════ */}
    {/* Curved exchange path (dotted) */}
    <path d="M295 335 Q430 160 565 335" stroke="#94A3B8" strokeWidth="1.5"
      strokeDasharray="6 5" fill="none" strokeOpacity="0.5" />

    {/* Camera icon floating toward chef (right side of arc) */}
    <g transform="translate(510, 118)">
      <circle r="28" fill="#FFF7ED" filter="url(#sh2)" />
      <rect x="-12" y="-8" width="24" height="16" rx="4" fill="#F97316" />
      <circle r="5.5" fill="#EA580C" />
      <circle r="3" fill="#FFF7ED" fillOpacity="0.5" />
      <rect x="-4" y="-13" width="8" height="6" rx="2" fill="#EA580C" />
      <circle cx="9" cy="-10" r="3" fill="#FCD34D" />
      {/* small teal arrow showing direction */}
      <path d="M18 4 L25 -2" stroke="#2D9F88" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 -5 L25 -2 L22 1" stroke="#2D9F88" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Chef hat icon floating toward photographer (left side of arc) */}
    <g transform="translate(348, 118)">
      <circle r="28" fill="#ECFDF5" filter="url(#sh2)" />
      {/* mini chef hat */}
      <rect x="-13" y="3" width="26" height="7" rx="3" fill="#2D9F88" />
      <path d="M-10 8 Q-11 -8 0 -11 Q11 -8 10 8 Z" fill="#2D9F88" />
      <path d="M-4 -6 L-4 6" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M0 -7 L0 6" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 -6 L4 6" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />
      {/* small orange arrow showing direction */}
      <path d="M-18 4 L-25 -2" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M-22 -5 L-25 -2 L-22 1" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* ════════════════════════════════════════ */}
    {/*   CENTER SWAP HUB                       */}
    {/* ════════════════════════════════════════ */}
    {/* outer glow */}
    <circle cx="430" cy="240" r="82" fill="#2D9F88" fillOpacity="0.08" />
    {/* main circle */}
    <circle cx="430" cy="240" r="70" fill="white" filter="url(#sh)" />
    <circle cx="430" cy="240" r="64" fill="#F0FDF9" />
    {/* BOLD top arrow → teal */}
    <path d="M390 221 Q430 204 470 221" stroke="#2D9F88" strokeWidth="7"
      strokeLinecap="round" fill="none" />
    <path d="M460 211 L471 221 L460 231" stroke="#2D9F88" strokeWidth="7"
      strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* BOLD bottom arrow ← orange */}
    <path d="M470 259 Q430 276 390 259" stroke="#F97316" strokeWidth="7"
      strokeLinecap="round" fill="none" />
    <path d="M400 269 L389 259 L400 249" stroke="#F97316" strokeWidth="7"
      strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* FREE badge */}
    <rect x="388" y="292" width="84" height="26" rx="13" fill="#2D9F88" filter="url(#sh2)" />
    <text x="430" y="309" textAnchor="middle"
      fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif"
      fontSize="11" fontWeight="800" fill="white" letterSpacing="0.5">FREE · $0</text>
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
