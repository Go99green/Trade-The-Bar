"use client";

import { useEffect, useState } from "react";

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

export default function CountdownPage() {
  const [time, setTime] = useState(getTimeLeft());
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-ink flex flex-col items-center justify-center px-5 relative overflow-hidden">
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #EFE9DD 2px, #EFE9DD 3px)",
        }}
      />

      {/* Rust accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "repeating-linear-gradient(90deg, #A8431F 0, #A8431F 32px, transparent 32px, transparent 40px)",
        }}
      />

      <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-12">

        {/* Logo */}
        <div className="flex flex-col items-center leading-none">
          <span className="font-display text-[clamp(2.5rem,10vw,7rem)] tracking-[0.15em] uppercase text-bone leading-none">
            Trade
          </span>
          <div
            className="h-[5px] md:h-[7px] my-3 md:my-4"
            style={{
              width: "100%",
              background:
                "repeating-linear-gradient(90deg, #A8431F 0, #A8431F 20px, transparent 20px, transparent 26px)",
            }}
          />
          <span className="font-display text-[clamp(2.5rem,10vw,7rem)] tracking-[0.15em] uppercase text-bone leading-none">
            The Bar
          </span>
        </div>

        {/* Tagline */}
        <p className="text-bone/40 text-sm md:text-base font-sans tracking-widest uppercase">
          For athletes who traded one obsession for another.
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-4 md:gap-8 w-full">
          {[
            { label: "Days", value: time.days },
            { label: "Hours", value: time.hours },
            { label: "Mins", value: time.minutes },
            { label: "Secs", value: time.seconds },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="font-display text-[clamp(2.5rem,8vw,6rem)] text-bone leading-none tabular-nums">
                {String(value).padStart(2, "0")}
              </span>
              <span className="text-bone/30 text-[10px] tracking-[0.3em] uppercase font-sans">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-[1px] bg-bone/10" />
          <span className="text-bone/20 text-[10px] tracking-widest uppercase font-sans whitespace-nowrap">
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
              className="flex-1 bg-bone/10 border border-bone/20 px-5 py-4 text-bone placeholder:text-bone/25 text-sm font-sans focus:outline-none focus:border-rust transition-colors"
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
              <span
                className="inline-block h-[1px] w-8"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, #7A8B6E 0, #7A8B6E 3px, transparent 3px, transparent 6px)",
                }}
              />
              <span className="text-sage text-xs tracking-widest uppercase font-sans">
                You&apos;re on the list
              </span>
              <span
                className="inline-block h-[1px] w-8"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, #7A8B6E 0, #7A8B6E 3px, transparent 3px, transparent 6px)",
                }}
              />
            </div>
            <p className="text-bone/30 text-xs font-sans">
              We&apos;ll hit you when we drop.
            </p>
          </div>
        )}
      </div>

      {/* Bottom rust line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "repeating-linear-gradient(90deg, #A8431F 0, #A8431F 32px, transparent 32px, transparent 40px)",
        }}
      />
    </div>
  );
}
