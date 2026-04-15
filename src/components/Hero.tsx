import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

const SLIDES = [
  "/end-of-school-bro.svg",
  "/Seamstress-bro.svg",
  "/tiler-bro.svg",
  "/makeup-artist-bro.svg",
  "/pastry-chef-bro.svg",
  "/online-learning-bro.svg",
  "/restorer-bro.svg",
  "/manicurist-bro.svg",
  "/female-chef-bro.svg",
];

const INTERVAL = 5000; // 5 seconds

const BackgroundCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 300);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <>
      {/* Slide images */}
      <div className="absolute inset-y-0 left-1/3 right-0 z-0" aria-hidden="true">
        {SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-contain object-right transition-opacity duration-500"
            style={{ opacity: i === current ? (fading ? 0 : 1) : 0, pointerEvents: "none" }}
          />
        ))}
      </div>

      {/* Gradient edge */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/40 via-40% to-transparent pointer-events-none" />

      {/* Controls — sitting over the right panel */}
      <div className="absolute z-10 right-6 bottom-6 flex items-center gap-3">
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-8 h-8 rounded-full bg-background/80 border border-border flex items-center justify-center shadow-sm hover:bg-background transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-foreground" />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "20px" : "8px",
                height: "8px",
                background: i === current ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / 0.4)",
              }}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-8 h-8 rounded-full bg-background/80 border border-border flex items-center justify-center shadow-sm hover:bg-background transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-foreground" />
        </button>
      </div>
    </>
  );
};

const SkillSwapIllustration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 540"
    fill="none"
    className="w-full h-auto"
    aria-label="Two people exchanging skills — one teaching guitar"
  >
    <defs>
      <linearGradient id="guitarBodyG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F5C07A" />
        <stop offset="60%" stopColor="#E8A84A" />
        <stop offset="100%" stopColor="#C47A28" />
      </linearGradient>
      <linearGradient id="guitar2G" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#C1623A" />
        <stop offset="60%" stopColor="#A84828" />
        <stop offset="100%" stopColor="#8B3A1E" />
      </linearGradient>
    </defs>

    {/* White background */}
    <rect width="900" height="540" fill="white" />

    {/* ── FLOOR LINE ── */}
    <line x1="60" y1="490" x2="840" y2="490" stroke="#E5E7EB" strokeWidth="2" />

    {/* ═══════════════════════════════════════════════════
        PLANT FAR LEFT — tall red-leaf plant
    ═══════════════════════════════════════════════════ */}
    {/* pot */}
    <path d="M52 490 L60 460 L88 460 L96 490Z" fill="#E8845C" />
    <rect x="56" y="456" width="36" height="8" rx="3" fill="#D4704C" />
    {/* stem */}
    <line x1="74" y1="458" x2="74" y2="402" stroke="#4A7C59" strokeWidth="4" strokeLinecap="round" />
    {/* red leaves */}
    <path d="M74 440 C74 440 94 426 100 412 C88 420 74 440 74 440Z" fill="#E05252" />
    <path d="M74 434 C74 434 54 420 48 406 C60 414 74 434 74 434Z" fill="#EF6060" />
    <path d="M74 422 C74 422 92 408 96 394 C84 404 74 422 74 422Z" fill="#E05252" />
    <path d="M74 416 C74 416 56 404 50 390 C62 400 74 416 74 416Z" fill="#EF6060" />
    <path d="M74 406 C74 406 88 394 90 380 C80 392 74 406 74 406Z" fill="#C43A3A" />
    {/* small green accent leaf */}
    <path d="M74 428 C74 428 84 434 92 430 C84 426 74 428 74 428Z" fill="#5AAA70" />

    {/* ── PLANT LEFT SMALL — shorter green plant ── */}
    <path d="M118 490 L124 468 L146 468 L152 490Z" fill="#F0945A" />
    <rect x="121" y="464" width="28" height="7" rx="3" fill="#DC7A46" />
    <line x1="135" y1="463" x2="135" y2="430" stroke="#4A7C59" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M135 450 C135 450 150 440 155 430 C144 436 135 450 135 450Z" fill="#5AAA70" />
    <path d="M135 444 C135 444 120 434 115 424 C126 430 135 444 135 444Z" fill="#48986A" />
    <path d="M135 438 C135 438 148 430 152 422 C142 428 135 438 135 438Z" fill="#5AAA70" />

    {/* ═══════════════════════════════════════════════════
        PLANT CENTRE — medium terracotta plant
    ═══════════════════════════════════════════════════ */}
    <path d="M418 490 L425 464 L451 464 L458 490Z" fill="#E8845C" />
    <rect x="421" y="460" width="32" height="7" rx="3" fill="#D4704C" />
    <line x1="438" y1="460" x2="438" y2="420" stroke="#4A7C59" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M438 438 C438 438 454 426 460 414 C448 422 438 438 438 438Z" fill="#EF6060" />
    <path d="M438 432 C438 432 422 420 416 408 C428 416 438 432 438 432Z" fill="#E05252" />
    <path d="M438 444 C438 444 452 436 456 428 C446 434 438 444 438 444Z" fill="#5AAA70" />

    {/* ═══════════════════════════════════════════════════
        PLANT RIGHT SMALL
    ═══════════════════════════════════════════════════ */}
    <path d="M740 490 L746 468 L768 468 L774 490Z" fill="#F0945A" />
    <rect x="743" y="464" width="28" height="7" rx="3" fill="#DC7A46" />
    <line x1="757" y1="463" x2="757" y2="428" stroke="#4A7C59" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M757 448 C757 448 772 436 776 426 C765 434 757 448 757 448Z" fill="#EF6060" />
    <path d="M757 442 C757 442 742 432 736 422 C748 428 757 442 757 442Z" fill="#E05252" />
    <path d="M757 438 C757 438 770 430 774 422 C764 428 757 438 757 438Z" fill="#5AAA70" />

    {/* ── PLANT FAR RIGHT — tall green plant ── */}
    <path d="M800 490 L808 460 L836 460 L844 490Z" fill="#E8845C" />
    <rect x="804" y="456" width="36" height="8" rx="3" fill="#D4704C" />
    <line x1="822" y1="456" x2="822" y2="398" stroke="#4A7C59" strokeWidth="4" strokeLinecap="round" />
    <path d="M822 436 C822 436 842 422 848 408 C836 416 822 436 822 436Z" fill="#5AAA70" />
    <path d="M822 430 C822 430 802 416 796 402 C808 410 822 430 822 430Z" fill="#48986A" />
    <path d="M822 420 C822 420 838 408 842 396 C830 404 822 420 822 420Z" fill="#5AAA70" />
    <path d="M822 414 C822 414 806 402 800 390 C812 398 822 414 822 414Z" fill="#48986A" />
    <path d="M822 440 C822 440 836 432 840 424 C830 430 822 440 822 440Z" fill="#EF6060" />

    {/* ═══════════════════════════════════════════════════
        LEFT FIGURE — BEARDED TEACHER (standing, white apron)
        centre ~x=230
    ═══════════════════════════════════════════════════ */}

    {/* shadow */}
    <ellipse cx="230" cy="492" rx="85" ry="8" fill="#D1D5DB" fillOpacity="0.5" />

    {/* SHOES */}
    <path d="M196 476 Q188 476 184 484 Q180 490 196 490 L226 490 Q234 488 234 482 Q232 474 224 474Z" fill="#2A2A2A" />
    <path d="M240 474 Q232 474 230 482 Q228 488 236 490 L266 490 Q278 490 278 484 Q278 476 268 476Z" fill="#2A2A2A" />

    {/* DARK TROUSERS with coloured cuffs */}
    {/* left leg */}
    <path d="M200 350 L196 476 Q210 482 224 476 L228 350Z" fill="#2C3E50" />
    {/* right leg */}
    <path d="M236 350 L240 476 Q254 482 268 476 L264 350Z" fill="#2C3E50" />
    {/* teal/green cuffs at ankle */}
    <rect x="196" y="462" width="30" height="14" rx="4" fill="#3D8F6E" />
    <rect x="240" y="462" width="28" height="14" rx="4" fill="#3D8F6E" />

    {/* WHITE APRON over body */}
    {/* apron body */}
    <path d="M190 240 Q188 218 230 212 Q272 218 270 240 L264 360 Q230 372 196 360Z" fill="#F5F5F0" stroke="#E0E0D8" strokeWidth="1.5" />
    {/* apron bib */}
    <path d="M208 212 L210 256 Q230 264 250 256 L252 212 Q240 204 230 204 Q220 204 208 212Z" fill="#EEEDE8" stroke="#D8D7D0" strokeWidth="1" />
    {/* apron ties at waist */}
    <path d="M190 292 Q162 286 148 278 Q138 270 140 260" stroke="#DDDDD5" strokeWidth="8" strokeLinecap="round" fill="none" />
    <path d="M270 292 Q298 286 312 278 Q322 270 320 260" stroke="#DDDDD5" strokeWidth="8" strokeLinecap="round" fill="none" />
    {/* apron pocket */}
    <rect x="215" y="316" width="30" height="24" rx="4" fill="#E8E8E0" stroke="#D0D0C8" strokeWidth="1" />

    {/* NECK */}
    <rect x="218" y="202" width="24" height="16" rx="8" fill="#D4956A" />

    {/* HEAD */}
    <ellipse cx="230" cy="172" rx="38" ry="40" fill="#D4956A" />

    {/* EAR */}
    <ellipse cx="192" cy="174" rx="8" ry="11" fill="#C4855A" />
    <ellipse cx="268" cy="174" rx="8" ry="11" fill="#C4855A" />

    {/* DARK HAIR */}
    <path d="M192 172 Q192 130 230 124 Q268 130 268 172 Q260 148 230 146 Q200 148 192 172Z" fill="#2D1A0E" />
    <rect x="192" y="168" width="12" height="20" rx="6" fill="#2D1A0E" />
    <rect x="266" y="168" width="12" height="20" rx="6" fill="#2D1A0E" />

    {/* BEARD */}
    <path d="M193 190 Q194 214 212 224 Q230 230 248 224 Q266 214 267 190 Q254 202 230 204 Q206 202 193 190Z" fill="#2D1A0E" />
    <path d="M210 218 Q230 228 250 218 Q238 232 230 234 Q222 232 210 218Z" fill="#221308" />

    {/* EYES */}
    <ellipse cx="216" cy="166" rx="7" ry="7.5" fill="white" />
    <ellipse cx="244" cy="166" rx="7" ry="7.5" fill="white" />
    <ellipse cx="217" cy="167" rx="5" ry="5.5" fill="#3A2010" />
    <ellipse cx="245" cy="167" rx="5" ry="5.5" fill="#3A2010" />
    <circle cx="219" cy="165" r="2" fill="white" />
    <circle cx="247" cy="165" r="2" fill="white" />
    {/* SMILE */}
    <path d="M214 182 Q230 194 246 182" stroke="#A0622A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* BROWS */}
    <path d="M207 156 Q215 150 223 155" stroke="#2D1A0E" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M237 155 Q245 150 253 156" stroke="#2D1A0E" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* LEFT ARM raised — holding mug */}
    <path d="M190 248 Q162 234 148 218 Q138 206 144 192" stroke="#C4855A" strokeWidth="22" strokeLinecap="round" fill="none" />
    {/* MUG in left hand */}
    <rect x="120" y="176" width="36" height="30" rx="8" fill="#E8F4F8" stroke="#B0CCD8" strokeWidth="2" />
    <path d="M156 184 Q170 184 170 196 Q170 208 156 208" stroke="#B0CCD8" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* red liquid in mug */}
    <rect x="122" y="195" width="32" height="9" rx="0 0 6 6" fill="#E05252" fillOpacity="0.7" />

    {/* RIGHT ARM — reaching toward guitar neck */}
    <path d="M270 248 Q340 226 400 220 Q430 218 454 226" stroke="#C4855A" strokeWidth="22" strokeLinecap="round" fill="none" />
    {/* right hand near guitar neck */}
    <ellipse cx="458" cy="228" rx="16" ry="12" fill="#C4855A" />
    {[450, 456, 462, 468].map(x => (
      <rect key={x} x={x} y="218" width="8" height="16" rx="4" fill="#C4855A" />
    ))}

    {/* ═══════════════════════════════════════════════════
        ACOUSTIC GUITAR (held between the two figures)
        neck points left toward teacher, body below student
    ═══════════════════════════════════════════════════ */}

    {/* GUITAR NECK — angled from ~x=460,y=228 down to ~x=550,y=310 */}
    {/* Straight neck, rotated */}
    <g transform="rotate(-18, 510, 290)">
      {/* neck board */}
      <rect x="442" y="218" width="140" height="28" rx="10" fill="#8B4513" />
      <rect x="444" y="220" width="136" height="24" rx="8" fill="#7C3A10" />
      {/* frets */}
      {[460, 475, 490, 505, 520, 535, 548, 561, 572].map(x => (
        <line key={x} x1={x} y1="220" x2={x} y2="244" stroke="#C9942A" strokeWidth="2" strokeOpacity="0.8" />
      ))}
      {/* dot markers */}
      <circle cx="497" cy="231" r="3.5" fill="#C9942A" fillOpacity="0.55" />
      <circle cx="525" cy="231" r="3.5" fill="#C9942A" fillOpacity="0.55" />
      {/* 6 strings */}
      {[225, 228, 231, 234, 237, 240].map(y => (
        <line key={y} x1="444" y1={y} x2="582" y2={y} stroke={y < 230 ? "#B8860B" : "#D4A853"} strokeWidth={y < 230 ? 2 : 1.2} strokeOpacity="0.9" />
      ))}
      {/* nut */}
      <rect x="440" y="218" width="7" height="28" rx="3" fill="#FDE68A" />
      {/* headstock */}
      <path d="M432 218 Q428 210 434 204 L448 204 Q454 210 450 218Z" fill="#7C3A10" />
      {/* tuning pegs */}
      {[208, 216, 224].map(y => (
        <g key={y}>
          <rect x="418" y={y - 4} width="14" height="8" rx="4" fill="#A05C1A" />
          <circle cx="416" cy={y} r="6" fill="#C47A28" />
          <circle cx="416" cy={y} r="3" fill="#FDE68A" />
        </g>
      ))}
      {[208, 216, 224].map(y => (
        <g key={y}>
          <rect x="450" y={y - 4} width="14" height="8" rx="4" fill="#A05C1A" />
          <circle cx="465" cy={y} r="6" fill="#C47A28" />
          <circle cx="465" cy={y} r="3" fill="#FDE68A" />
        </g>
      ))}
    </g>

    {/* GUITAR BODY — large, centred around x=590, y=390 */}
    {/* upper bout */}
    <ellipse cx="588" cy="360" rx="72" ry="78" fill="url(#guitarBodyG)" />
    {/* waist */}
    <rect x="520" y="396" width="136" height="32" rx="15" fill="url(#guitarBodyG)" />
    {/* lower bout */}
    <ellipse cx="588" cy="440" rx="84" ry="90" fill="url(#guitarBodyG)" />
    {/* binding edge */}
    <ellipse cx="588" cy="360" rx="72" ry="78" stroke="#C47A28" strokeWidth="3" strokeOpacity="0.5" />
    <ellipse cx="588" cy="440" rx="84" ry="90" stroke="#C47A28" strokeWidth="3" strokeOpacity="0.5" />
    {/* sheen */}
    <ellipse cx="570" cy="348" rx="26" ry="30" fill="white" fillOpacity="0.14" />
    {/* sound hole */}
    <circle cx="588" cy="400" r="34" fill="#2A1000" />
    <circle cx="588" cy="400" r="30" fill="#1A0800" />
    <circle cx="588" cy="400" r="34" stroke="#C47A28" strokeWidth="3.5" strokeOpacity="0.75" />
    <circle cx="588" cy="400" r="39" stroke="#A05C1A" strokeWidth="1.5" strokeOpacity="0.35" />
    {/* strings over body */}
    {[578, 582, 586, 590, 594, 598].map(x => (
      <line key={x} x1={x} y1="290" x2={x} y2="490" stroke={x < 583 ? "#B8860B" : "#D4A853"} strokeWidth={x < 583 ? 2 : 1.2} strokeOpacity="0.85" />
    ))}
    {/* bridge */}
    <rect x="564" y="466" width="50" height="12" rx="5" fill="#5C2D0A" />
    <rect x="564" y="468" width="50" height="5" rx="2.5" fill="#FBBF24" />
    {[0, 1, 2, 3, 4, 5].map(i => (
      <circle key={i} cx={570 + i * 8} cy={466} r="3" fill="#7C3A10" />
    ))}

    {/* ═══════════════════════════════════════════════════
        RIGHT FIGURE — STUDENT GUITARIST (seated, coral shirt)
        centre ~x=680
    ═══════════════════════════════════════════════════ */}

    {/* shadow */}
    <ellipse cx="688" cy="492" rx="90" ry="8" fill="#D1D5DB" fillOpacity="0.5" />

    {/* STOOL */}
    <rect x="646" y="390" width="88" height="16" rx="8" fill="#D97706" />
    <rect x="651" y="405" width="12" height="84" rx="6" fill="#B45309" />
    <rect x="718" y="405" width="12" height="84" rx="6" fill="#B45309" />
    <line x1="657" y1="448" x2="726" y2="448" stroke="#92400E" strokeWidth="10" strokeLinecap="round" />

    {/* SHOES */}
    <path d="M570 476 Q560 476 556 484 Q552 490 568 490 L606 490 Q616 488 616 482 Q614 474 604 474Z" fill="#2A2A2A" />
    {/* sneaker detail */}
    <line x1="560" y1="484" x2="608" y2="484" stroke="#444" strokeWidth="1.5" />
    <path d="M786 476 Q796 476 800 484 Q804 490 788 490 L756 490 Q746 488 746 482 Q748 474 758 474Z" fill="#2A2A2A" />
    <line x1="754" y1="484" x2="800" y2="484" stroke="#444" strokeWidth="1.5" />

    {/* JEANS — light blue, seated */}
    {/* left thigh + lower leg */}
    <path d="M636 400 Q616 420 598 444 Q582 462 578 476" stroke="#6B9FD4" strokeWidth="34" strokeLinecap="round" fill="none" />
    {/* right thigh + lower leg */}
    <path d="M744 400 Q764 420 778 444 Q790 462 792 476" stroke="#6B9FD4" strokeWidth="34" strokeLinecap="round" fill="none" />
    {/* lap bridge */}
    <rect x="634" y="386" width="112" height="28" rx="14" fill="#6B9FD4" />

    {/* BODY — coral/salmon shirt */}
    <path d="M630 270 Q624 246 688 238 Q752 246 746 270 L740 398 Q688 412 636 398Z" fill="#E8785A" />
    {/* shirt details — v-neck */}
    <path d="M672 244 L688 276 L704 244 Q696 238 688 238 Q680 238 672 244Z" fill="#D4604A" />
    {/* shirt collar / neck opening */}
    <path d="M672 244 Q680 250 688 252 Q696 250 704 244 Q696 236 688 236 Q680 236 672 244Z" fill="#F0F0EE" />

    {/* NECK */}
    <rect x="676" y="232" width="24" height="17" rx="8" fill="#C8956C" />
    {/* necklace chain */}
    <path d="M678 238 Q688 244 698 238" stroke="#E5C57A" strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* HEAD */}
    <ellipse cx="690" cy="198" rx="40" ry="42" fill="#C8956C" />

    {/* EARS */}
    <ellipse cx="650" cy="200" rx="8" ry="11" fill="#B8845C" />
    <ellipse cx="730" cy="200" rx="8" ry="11" fill="#B8845C" />

    {/* SHORT DARK HAIR */}
    <path d="M650 196 Q650 152 690 146 Q730 152 730 196 Q722 168 690 166 Q658 168 650 196Z" fill="#2D1A0E" />
    <rect x="650" y="192" width="12" height="18" rx="6" fill="#2D1A0E" />
    <rect x="728" y="192" width="12" height="18" rx="6" fill="#2D1A0E" />

    {/* EYES */}
    <ellipse cx="674" cy="194" rx="8" ry="8.5" fill="white" />
    <ellipse cx="706" cy="194" rx="8" ry="8.5" fill="white" />
    <ellipse cx="675" cy="195" rx="6" ry="6.5" fill="#3A2010" />
    <ellipse cx="707" cy="195" rx="6" ry="6.5" fill="#3A2010" />
    <circle cx="677" cy="192" r="2.2" fill="white" />
    <circle cx="709" cy="192" r="2.2" fill="white" />
    {/* SMILE friendly */}
    <path d="M671 212 Q688 226 706 213" stroke="#A0622A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* BROWS */}
    <path d="M663 183 Q672 177 681 182" stroke="#2D1A0E" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M699 182 Q708 177 717 183" stroke="#2D1A0E" strokeWidth="3" fill="none" strokeLinecap="round" />

    {/* LEFT ARM — reaching forward to guitar neck (upper frets) */}
    <path d="M630 278 Q574 258 528 244 Q502 236 482 232" stroke="#C8956C" strokeWidth="22" strokeLinecap="round" fill="none" />
    {/* left hand fingering frets */}
    <ellipse cx="476" cy="232" rx="16" ry="12" fill="#C8956C" />
    {[468, 474, 480, 486].map(x => (
      <rect key={x} x={x} y="222" width="8" height="16" rx="4" fill="#C8956C" />
    ))}

    {/* RIGHT ARM — strumming over sound hole */}
    <path d="M746 278 Q772 294 796 330 Q810 356 810 380" stroke="#C8956C" strokeWidth="22" strokeLinecap="round" fill="none" />
    {/* strumming hand */}
    <ellipse cx="810" cy="388" rx="18" ry="14" fill="#C8956C" />
    {[800, 807, 814, 821].map(x => (
      <rect key={x} x={x} y="378" width="9" height="18" rx="4.5" fill="#C8956C" />
    ))}
    {/* pick */}
    <path d="M797 392 Q806 402 814 390 Q806 380 797 392Z" fill="#FCD34D" />

    {/* ── SMALL CHILD watching from behind right side ── */}
    {/* body */}
    <ellipse cx="826" cy="280" rx="22" ry="24" fill="#6DD4B4" />
    {/* head */}
    <ellipse cx="826" cy="248" rx="22" ry="23" fill="#C8956C" />
    {/* teal hair */}
    <path d="M804 248 Q804 222 826 218 Q848 222 848 248 Q842 232 826 230 Q810 232 804 248Z" fill="#4ABFA0" />
    <rect x="804" y="244" width="10" height="14" rx="5" fill="#4ABFA0" />
    {/* tiny eyes + smile */}
    <ellipse cx="818" cy="246" rx="4.5" ry="5" fill="white" />
    <ellipse cx="834" cy="246" rx="4.5" ry="5" fill="white" />
    <ellipse cx="819" cy="247" rx="3" ry="3.5" fill="#3A2010" />
    <ellipse cx="835" cy="247" rx="3" ry="3.5" fill="#3A2010" />
    <path d="M816 258 Q826 266 836 259" stroke="#A0622A" strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* MUSIC NOTES floating */}
    <text x="350" y="148" fontSize="22" fill="#F97316" fillOpacity="0.75">&#9835;</text>
    <text x="376" y="128" fontSize="17" fill="#FB923C" fillOpacity="0.65">&#9834;</text>
    <text x="510" y="138" fontSize="24" fill="#F97316" fillOpacity="0.72">&#9833;</text>
    <text x="538" y="116" fontSize="18" fill="#FDBA74" fillOpacity="0.6">&#9835;</text>
  </svg>
);

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <BackgroundCarousel />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-xl space-y-6">
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
      </div>
    </section>
  );
};

export default Hero;
