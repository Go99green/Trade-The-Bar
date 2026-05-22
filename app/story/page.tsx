import Link from "next/link";

export default function StoryPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-ink text-bone pt-20 pb-0 px-5 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-bone/30 text-[11px] tracking-widest uppercase font-sans mb-3">
            Trade The Bar
          </p>
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-none mb-16">
            Our
            <br />
            Story
          </h1>
          {/* Decorative bar */}
          <div
            className="h-[3px] w-full mb-0"
            style={{
              background:
                "repeating-linear-gradient(90deg, #A8431F 0, #A8431F 32px, transparent 32px, transparent 40px)",
            }}
          />
        </div>
      </div>

      {/* Main story */}
      <section className="bg-bone px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="md:col-span-3">
            <div className="sticky top-24 space-y-8">
              <div>
                <p className="text-charcoal/40 text-[10px] tracking-widest uppercase font-sans mb-2">
                  Founded
                </p>
                <p className="font-display text-2xl text-ink uppercase">2024</p>
              </div>
              <div>
                <p className="text-charcoal/40 text-[10px] tracking-widest uppercase font-sans mb-2">
                  Based in
                </p>
                <p className="font-sans text-ink text-sm">San Diego, CA</p>
              </div>
              <div>
                <p className="text-charcoal/40 text-[10px] tracking-widest uppercase font-sans mb-2">
                  Built for
                </p>
                <p className="font-sans text-ink text-sm leading-relaxed">
                  Athletes in recovery.
                  <br />
                  Recovered athletes.
                  <br />
                  Everyone at the crossover.
                </p>
              </div>
            </div>
          </div>

          {/* Story content */}
          <div className="md:col-span-7 md:col-start-5 space-y-10">
            <p className="font-sans text-charcoal text-lg leading-relaxed">
              Trade The Bar started where most good things start. At rock
              bottom, looking for something to hold onto. For a lot of us that
              something turned out to be a barbell. Not because it fixed
              anything, but because it gave us somewhere to put the work that
              used to go nowhere good.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-rust pl-6 py-2">
              <p className="font-serif italic text-2xl text-ink leading-snug">
                &ldquo;This is apparel for the crossover. For the people who
                know that 5 AM at the gym and a folding chair at a meeting are
                closer than they look.&rdquo;
              </p>
            </blockquote>

            <p className="font-sans text-charcoal text-lg leading-relaxed">
              We don&apos;t preach and we don&apos;t hide. We make gear
              you&apos;d actually wear, designed by someone who walked the same
              road. Not a recovery brand with a barbell glued on. Not a CrossFit
              brand pretending to care about sobriety. The whole point is that
              it lives at the overlap — not on either side of it.
            </p>

            <p className="font-sans text-charcoal text-lg leading-relaxed">
              The name says it all. You traded one obsession for another. And
              somehow, this one is keeping you alive. The barbell is the new
              ritual. The gym is the new meeting. The work is the same — it just
              points somewhere different now.
            </p>

            <div className="pt-6 border-t border-ink/10">
              <p className="font-sans text-charcoal text-lg leading-relaxed">
                If you caught the sage in the palette, you know. If you
                didn&apos;t, it doesn&apos;t matter. That&apos;s kind of the whole point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink text-bone py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight mb-14">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Honest, Not Inspirational",
                body: "We don't do stock phrases or sunrise quotes. The work is the message. Wear it if you've done it.",
              },
              {
                title: "Low Ego, High Standards",
                body: "You already know what you've been through. We don't need to remind you or celebrate it. Just make good gear.",
              },
              {
                title: "Built at the Overlap",
                body: "Not a recovery brand. Not an athletic brand. The intersection is the whole point. Live where both are true.",
              },
              {
                title: "Community Without the Performance",
                body: "No hashtag recovery. No gym-bro posturing. Just people doing the work in both rooms.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="border border-bone/10 p-8 hover:border-rust/50 transition-colors"
              >
                <h3 className="font-display text-xl uppercase tracking-tight text-bone mb-3">
                  {title}
                </h3>
                <p className="font-sans text-bone/50 text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder note */}
      <section className="bg-bone py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-charcoal/40 text-[11px] tracking-widest uppercase font-sans block mb-6">
            Founder Note
          </span>
          <p className="font-serif italic text-xl md:text-2xl text-ink leading-relaxed mb-8">
            &ldquo;I didn&apos;t start TTB because I had a great business idea.
            I started it because I couldn&apos;t find anything to wear that
            felt like both things at once. Turns out a lot of people felt the
            same way.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <span
              className="inline-block h-[1px] w-12"
              style={{
                background:
                  "repeating-linear-gradient(90deg, #A8431F 0, #A8431F 3px, transparent 3px, transparent 6px)",
              }}
            />
            <span className="font-display text-sm uppercase tracking-widest text-charcoal">
              — Founder, Trade The Bar
            </span>
            <span
              className="inline-block h-[1px] w-12"
              style={{
                background:
                  "repeating-linear-gradient(90deg, #A8431F 0, #A8431F 3px, transparent 3px, transparent 6px)",
              }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-rust py-14 px-5 md:px-10 text-center">
        <h3 className="font-display text-3xl md:text-4xl uppercase text-bone tracking-tight mb-6">
          Wear what you earned.
        </h3>
        <Link
          href="/shop"
          className="inline-block bg-bone text-ink hover:bg-ink hover:text-bone transition-colors px-10 py-4 text-xs tracking-widest uppercase font-sans font-semibold"
        >
          Shop The Drop
        </Link>
      </div>
    </>
  );
}
