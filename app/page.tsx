"use client";

import { useEffect, useState } from "react";
import TopoLines from "@/components/TopoLines";

// ── Change this to your launch date ──────────────────────────────
const LAUNCH_DATE = new Date("2026-07-01T00:00:00");
// ─────────────────────────────────────────────────────────────────

function getTimeLeft() {
  const diff = LAUNCH_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

// Tiny corner targeting mark component
function CornerMarks({ color = "border-rust/40" }: { color?: string }) {
  return (
    <>
      <span className={`absolute top-0 left-0 w-2.5 h-2.5 border-t border-l ${color}`} />
      <span className={`absolute top-0 right-0 w-2.5 h-2.5 border-t border-r ${color}`} />
      <span className={`absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l ${color}`} />
      <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r ${color}`} />
    </>
  );
}

export default function CountdownPage() {
  const [time, setTime] = useState(getTimeLeft());
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    const url =
      "https://mypixieset.us5.list-manage.com/subscribe/post?u=3876823738c83626d889f7861&id=9e139e45d8&f_id=001c88e9f0";

    const script = document.createElement("script");
    const callbackName = `mc_callback_${Date.now()}`;
    const params = new URLSearchParams({ EMAIL: email, c: callbackName });

    (window as unknown as Record<string, unknown>)[callbackName] = () => {
      delete (window as unknown as Record<string, unknown>)[callbackName];
      document.body.removeChild(script);
    };

    script.src = url.replace("/post?", "/post-json?") + "&" + params.toString();
    document.body.appendChild(script);
    setSubmitted(true);
  }

  return (
    <div className="text-bone">

      {/* ── HERO COUNTDOWN ── */}
      <section
        className="min-h-screen flex flex-col items-center justify-center px-5 relative overflow-hidden"
        style={{ backgroundColor: "#1C2416" }}
      >
        {/* Topo lines — dense concentric rings */}
        <TopoLines strokeOpacity={0.10} strokeColor="#EFE9DD" showGrid gridOpacity={0.018} />

        {/* Top rust accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-rust" />

        {/* Coordinate display — top right tactical chrome */}
        <div className="absolute top-5 right-5 text-right opacity-25 select-none">
          <p className="text-bone text-[9px] font-mono tracking-widest">32°42′N · 117°09′W</p>
          <p className="text-bone/60 text-[8px] font-mono tracking-wider mt-0.5">GRID 11S MS · ALT 1,562</p>
        </div>

        {/* Bottom-left grid ref */}
        <div className="absolute bottom-5 left-5 opacity-20 select-none">
          <p className="text-bone text-[8px] font-mono tracking-widest">TTB · FIELD OP · 01 JUL 26</p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-10">

          {/* Logo */}
          <div className="flex flex-col items-center leading-none">
            <span className="font-display text-[clamp(2.5rem,10vw,7rem)] tracking-[0.15em] uppercase text-bone leading-none">
              Trade
            </span>
            <div className="h-[2px] my-3 md:my-4 w-full bg-rust" />
            <span className="font-display text-[clamp(2.5rem,10vw,7rem)] tracking-[0.15em] uppercase text-bone leading-none">
              The Bar
            </span>
          </div>

          {/* Tagline */}
          <p className="text-bone/35 text-sm md:text-base font-sans tracking-widest uppercase">
            For athletes who traded one obsession for another.
          </p>

          {/* Mission clock label */}
          <div className="flex items-center gap-3 -mb-4">
            <span className="inline-block h-[1px] w-8 bg-rust/40" />
            <span className="text-bone/20 text-[9px] font-mono tracking-[0.4em] uppercase">Mission Clock</span>
            <span className="inline-block h-[1px] w-8 bg-rust/40" />
          </div>

          {/* Countdown — tactical instrument tiles */}
          <div className="grid grid-cols-4 gap-3 md:gap-6 w-full">
            {[
              { label: "Days", value: time.days },
              { label: "Hours", value: time.hours },
              { label: "Mins", value: time.minutes },
              { label: "Secs", value: time.seconds },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="relative flex flex-col items-center gap-2 border border-bone/[0.07] px-2 py-4"
              >
                <CornerMarks color="border-rust/35" />
                <span className="font-display text-[clamp(2.5rem,8vw,6rem)] text-bone leading-none tabular-nums">
                  {String(value).padStart(2, "0")}
                </span>
                <span className="text-bone/25 text-[9px] tracking-[0.35em] uppercase font-mono">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 w-full">
            <div className="flex-1 h-[1px] bg-bone/10" />
            <span className="text-bone/20 text-[10px] tracking-widest uppercase font-mono whitespace-nowrap">
              Drop incoming
            </span>
            <div className="flex-1 h-[1px] bg-bone/10" />
          </div>

          {/* Email form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-0 w-full max-w-md"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-bone/[0.07] border border-bone/20 px-5 py-4 text-bone placeholder:text-bone/25 text-sm font-sans focus:outline-none focus:border-rust transition-colors"
              />
              <input
                type="text"
                name="b_3876823738c83626d889f7861_9e139e45d8"
                tabIndex={-1}
                defaultValue=""
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              />
              <button
                type="submit"
                className="bg-rust hover:bg-rust-dark transition-colors text-bone px-8 py-4 text-xs tracking-widest uppercase font-sans font-semibold whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-block h-[1px] w-8 bg-sage" />
                <span className="text-sage text-xs tracking-widest uppercase font-mono">
                  You&apos;re on the list
                </span>
                <span className="inline-block h-[1px] w-8 bg-sage" />
              </div>
              <p className="text-bone/30 text-xs font-mono">
                We&apos;ll hit you when we drop.
              </p>
            </div>
          )}

          {/* Scroll nudge */}
          <div className="flex flex-col items-center gap-2 opacity-20 pt-4">
            <span className="text-bone text-[9px] tracking-widest uppercase font-mono">Our Story</span>
            <div className="w-[1px] h-6 bg-bone animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="bg-bone text-ink px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-10">
            <span className="inline-block w-6 h-[1px] bg-rust" />
            <span className="text-rust text-[11px] tracking-[0.3em] uppercase font-mono">
              Founded by Keegan Holt
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-none mb-10">
            I Traded<br />The Bar.
          </h2>

          <div className="max-w-2xl space-y-6">
            <p className="font-sans text-charcoal text-base leading-relaxed">
              I&apos;m an Army veteran, a CrossFit coach, a husband, an MBA student, and someone who had to get honest about alcohol.
            </p>
            <p className="font-sans text-charcoal text-base leading-relaxed">
              For a while, drinking looked normal enough from the outside. I could still train. I could still coach. I could still tell myself I had it handled.
            </p>
            <p className="font-sans text-charcoal text-base leading-relaxed">
              But I didn&apos;t.
            </p>
            <p className="font-sans text-charcoal text-base leading-relaxed">
              At times, it was dramatic. I lost a job. I almost lost my wife. I was losing my fitness, my direction, and the sense of purpose I had worked so hard to build after the Army. Alcohol was not just taking my nights. It was starting to take the person I wanted to be.
            </p>

            <blockquote className="border-l-2 border-rust pl-6 py-3">
              <p className="font-serif italic text-xl text-ink leading-snug">
                &ldquo;So I traded the bar.&rdquo;
              </p>
            </blockquote>

            <p className="font-sans text-charcoal text-base leading-relaxed">
              I traded the drinks, the excuses, the wasted mornings, and the version of myself that kept pretending things were fine. I traded all of that for the gym, for discipline, for better habits, and for the chance to earn back trust in myself one day at a time.
            </p>
            <p className="font-sans text-charcoal text-base leading-relaxed">
              The gym did not magically fix everything. But it gave me a place to rebuild. It gave me somewhere to put the stress, the anger, the anxiety, and the restlessness. It gave me structure when I needed structure. It reminded me that progress does not happen through one heroic decision. It happens through small choices repeated every day.
            </p>
            <p className="font-sans text-charcoal text-base leading-relaxed">
              When I got sober, my training changed. My coaching changed. My marriage changed. My schoolwork changed. I started showing up differently in every part of my life.
            </p>

            <div className="border-t border-ink/10 pt-6">
              <p className="font-sans text-charcoal text-base leading-relaxed font-medium">
                That is why Trade The Bar exists.
              </p>
              <p className="font-sans text-charcoal text-base leading-relaxed mt-4">
                This brand is for the people who know alcohol is taking more from them than they want to admit. It is for the people who are tired of waking up disappointed in themselves. It is for anyone ready to trade the bottle for the barbell, the hangover for the morning workout, and the old version of themselves for someone they can respect again.
              </p>
              <p className="font-sans text-charcoal text-base leading-relaxed mt-4">
                I traded the bar because I was losing too much. Now I want to help other people make that same trade before alcohol takes any more from them.
              </p>
            </div>

            <div className="pt-4">
              <p className="font-mono text-charcoal/40 text-[10px] tracking-widest uppercase">
                — Keegan Holt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE STAND FOR ── */}
      <section
        className="relative px-5 md:px-10 py-20 md:py-28 overflow-hidden"
        style={{ backgroundColor: "#3D4A20" }}
      >
        <TopoLines strokeOpacity={0.09} strokeColor="#EFE9DD" />
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="inline-block w-6 h-[1px] bg-rust" />
            <span className="text-rust text-[11px] tracking-[0.3em] uppercase font-mono">
              What We Stand For
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-bone mb-14">
            Built at the<br />overlap.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Veteran Owned",
                body: "Built by someone who served. The discipline, the brotherhood, the struggle — it informs everything about how this brand operates.",
                ref: "A1",
              },
              {
                title: "Sober Founded",
                body: "Not a recovery brand with a barbell glued on. The sobriety is real. The training is real. The overlap is where this brand lives.",
                ref: "A2",
              },
              {
                title: "The Trade",
                body: "Alcohol for the gym. The bar for the barbell. One ritual for another. This gear is for the people who made that trade and never looked back.",
                ref: "B1",
              },
              {
                title: "No Performance",
                body: "No inspiration porn. No toxic positivity. Just honest gear for honest people doing the work in both rooms.",
                ref: "B2",
              },
            ].map(({ title, body, ref }) => (
              <div
                key={title}
                className="relative border border-bone/10 p-8 hover:border-rust/50 transition-colors"
                style={{ backgroundColor: "rgba(28,36,22,0.55)" }}
              >
                <CornerMarks color="border-bone/20" />
                {/* Grid reference */}
                <span className="absolute top-2.5 right-3 text-bone/15 font-mono text-[8px] tracking-wider">
                  {ref}
                </span>
                <h3 className="font-display text-xl uppercase tracking-tight text-bone mb-3">
                  {title}
                </h3>
                <p className="font-sans text-bone/50 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WARRIORS HEART ── */}
      <section className="bg-rust px-5 md:px-10 py-20 md:py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-bone/60 text-[11px] tracking-[0.3em] uppercase font-mono mb-4">
              Giving Back
            </p>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-bone leading-none mb-6">
              10% Goes to<br />Warriors Heart.
            </h2>
            <p className="font-sans text-bone/80 text-base leading-relaxed">
              Warriors Heart is the only private treatment program in the US exclusively for warriors — active military, veterans, and first responders battling addiction and PTSD. They treat the people who protected us when nobody else will.
            </p>
            <p className="font-sans text-bone/80 text-base leading-relaxed mt-4">
              Ten percent of every TTB purchase goes directly to Warriors Heart. Not a charity play. Not marketing. The community this brand is built for deserves real support.
            </p>
            <a
              href="https://www.warriorsheart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-bone border border-bone/40 hover:border-bone px-6 py-3 text-xs tracking-widest uppercase font-mono transition-colors"
            >
              Learn about Warriors Heart
              <span className="inline-block w-4 h-[1px] bg-bone" />
            </a>
          </div>

          <div className="space-y-6">
            {[
              {
                stat: "Warriors Only",
                desc: "The only private U.S. program exclusively for active military, veterans & first responders.",
              },
              {
                stat: "Addiction + PTSD",
                desc: "Treating the full picture — chemical dependency alongside the psychological wounds of service.",
              },
              {
                stat: "10% of Every Sale",
                desc: "Built into the business from day one. Not a campaign. A commitment.",
              },
            ].map(({ stat, desc }) => (
              <div key={stat} className="border-t border-bone/20 pt-5">
                <p className="font-display text-lg uppercase text-bone tracking-tight mb-1">
                  {stat}
                </p>
                <p className="font-sans text-bone/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM SIGN OFF ── */}
      <section
        className="relative px-5 py-14 text-center border-t border-bone/5 overflow-hidden"
        style={{ backgroundColor: "#1C2416" }}
      >
        <TopoLines strokeOpacity={0.06} strokeColor="#EFE9DD" />
        <p className="relative font-display text-xl md:text-2xl uppercase text-bone/20 tracking-widest">
          July 1, 2026 — The Drop
        </p>
        <p className="relative font-mono text-bone/10 text-[9px] tracking-widest uppercase mt-2">
          32°42′N · 117°09′W · TRADETHEBAR.ORG
        </p>
      </section>

    </div>
  );
}
