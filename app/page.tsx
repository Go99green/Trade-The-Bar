import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Earned, Not Given Tee",
    price: "$38",
    category: "Tee",
    color: "#3A3A3A",
    accent: "#A8431F",
    tag: "New Drop",
  },
  {
    id: 2,
    name: "One Day Hoodie",
    price: "$88",
    category: "Hoodie",
    color: "#141414",
    accent: "#7A8B6E",
    tag: "Bestseller",
  },
  {
    id: 3,
    name: "Crossbar Cap",
    price: "$42",
    category: "Hat",
    color: "#A8431F",
    accent: "#EFE9DD",
    tag: null,
  },
];

const journalPreviews = [
  {
    id: 1,
    title: "Why 5 AM hits different when you're sober",
    excerpt:
      "The alarm goes off and for the first time in years you actually get up. Not to regret the night before. Just to lift.",
    tag: "Training",
    readTime: "4 min",
  },
  {
    id: 2,
    title: "The meeting I skipped to go to the gym",
    excerpt:
      "Recovery isn't linear and neither is training. Some days the barbell is the meeting.",
    tag: "Recovery",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "What a PR feels like when you don't drink anymore",
    excerpt:
      "You can actually feel it. Not just the number on the bar. The thing underneath the number.",
    tag: "Training",
    readTime: "3 min",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-ink text-bone min-h-[92vh] flex flex-col justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, #EFE9DD 2px, #EFE9DD 3px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-24 w-full">
          <div className="flex items-center gap-3 mb-10">
            <span className="inline-block w-6 h-[1px] bg-rust" />
            <span className="text-rust text-[11px] tracking-[0.3em] uppercase font-sans">
              Spring Drop — 2025
            </span>
          </div>

          <div className="mb-10">
            <h1 className="font-display text-[clamp(4rem,14vw,14rem)] leading-[0.85] tracking-tight uppercase text-bone block">
              Trade
            </h1>
            <div className="flex items-center my-4 md:my-6">
              <div
                className="h-[6px] md:h-[8px] flex-1 max-w-[clamp(16rem,56vw,56rem)]"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, #A8431F 0, #A8431F 24px, transparent 24px, transparent 30px)",
                }}
              />
            </div>
            <h1 className="font-display text-[clamp(4rem,14vw,14rem)] leading-[0.85] tracking-tight uppercase text-bone block">
              The Bar
            </h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-14">
            <p className="text-bone/50 text-base md:text-lg font-sans leading-relaxed max-w-xs">
              For athletes who walked out of one room
              <br />
              and into another.
            </p>
            <div className="flex gap-4">
              <Link
                href="/shop"
                className="bg-rust hover:bg-rust-dark transition-colors text-bone px-8 py-4 text-xs tracking-widest uppercase font-sans font-semibold"
              >
                Shop Now
              </Link>
              <Link
                href="/story"
                className="border border-bone/30 hover:border-bone transition-colors text-bone px-8 py-4 text-xs tracking-widest uppercase font-sans font-semibold"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-bone text-[10px] tracking-widest uppercase font-sans">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-bone animate-pulse" />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-rust overflow-hidden py-3.5">
        <div className="marquee-track flex whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 px-6 text-bone font-display text-sm tracking-widest uppercase"
            >
              For Athletes Who Traded One Obsession For Another
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-bone/50" />
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURED DROP ── */}
      <section className="bg-bone py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-charcoal/40 text-[11px] tracking-[0.3em] uppercase font-sans">
                Featured
              </span>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mt-2">
                The Drop
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:flex items-center gap-2 text-charcoal hover:text-rust transition-colors text-xs tracking-widest uppercase font-sans"
            >
              View All
              <span className="inline-block w-6 h-[1px] bg-current" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION STRIP ── */}
      <section className="bg-ink text-bone py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block w-8 h-[2px] mb-8"
            style={{
              background:
                "repeating-linear-gradient(90deg, #A8431F 0, #A8431F 4px, transparent 4px, transparent 7px)",
            }}
          />
          <blockquote className="font-serif italic text-2xl md:text-4xl leading-snug text-bone/90 mb-8">
            &ldquo;The barbell is the new ritual.
            <br />
            The gym is the new meeting.&rdquo;
          </blockquote>
          <p className="text-bone/40 text-sm font-sans tracking-widest uppercase">
            Trade The Bar — Built for the crossover
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-bone py-20 md:py-28 px-5 md:px-10 border-t border-ink/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
            {[
              {
                num: "01",
                title: "Walk out of one room",
                body: "You made a decision. It wasn't easy. Nobody said it would be.",
              },
              {
                num: "02",
                title: "Walk into another",
                body: "The gym became the place. The barbell became the thing you held onto.",
              },
              {
                num: "03",
                title: "Wear what you earned",
                body: "Gear built for the overlap. No slogans. No inspiration porn. Just the work.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="border-t-2 border-rust pt-6">
                <span className="font-display text-5xl text-rust/20 block mb-4">
                  {num}
                </span>
                <h3 className="font-display text-xl uppercase tracking-tight mb-3">
                  {title}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed font-sans">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAGE BADGE STRIP ── */}
      <div className="bg-sage py-6 px-5 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-3">
          {[
            "Sober-Founded",
            "Athlete-Designed",
            "No Fluff",
            "Earned Wear",
            "Community First",
          ].map((badge) => (
            <span
              key={badge}
              className="text-bone text-[11px] tracking-[0.25em] uppercase font-sans"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* ── JOURNAL PREVIEW ── */}
      <section className="bg-bone py-20 md:py-28 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-charcoal/40 text-[11px] tracking-[0.3em] uppercase font-sans">
                From The
              </span>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight mt-2">
                Journal
              </h2>
            </div>
            <Link
              href="/journal"
              className="hidden md:flex items-center gap-2 text-charcoal hover:text-rust transition-colors text-xs tracking-widest uppercase font-sans"
            >
              All Posts
              <span className="inline-block w-6 h-[1px] bg-current" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journalPreviews.map((post) => (
              <Link
                key={post.id}
                href="/journal"
                className="group block border border-ink/10 p-6 hover:border-rust transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-widest uppercase font-sans text-sage">
                    {post.tag}
                  </span>
                  <span className="text-ink/20">·</span>
                  <span className="text-[10px] tracking-widest uppercase font-sans text-ink/30">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display text-xl uppercase tracking-tight leading-tight mb-3 group-hover:text-rust transition-colors">
                  {post.title}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed font-sans">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 mt-4 text-rust text-xs tracking-widest uppercase font-sans">
                  Read
                  <span className="inline-block w-4 h-[1px] bg-rust group-hover:w-8 transition-all duration-200" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── IG STRIP PLACEHOLDER ── */}
      <section className="bg-ink py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-bone/30 text-[11px] tracking-widest uppercase font-sans mb-1">
              Follow Along
            </p>
            <a
              href="#"
              className="font-display text-2xl text-bone hover:text-rust transition-colors uppercase tracking-widest"
            >
              @tradethebar
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-square"
                style={{
                  background: `hsl(${i * 18 + 15}, 30%, ${10 + i * 4}%)`,
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({
  product,
}: {
  product: (typeof featuredProducts)[0];
}) {
  return (
    <Link href="/shop" className="group block">
      <div
        className="aspect-[3/4] w-full mb-4 relative overflow-hidden"
        style={{ backgroundColor: product.color }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display text-4xl tracking-[0.3em] uppercase opacity-10"
            style={{ color: product.accent }}
          >
            TTB
          </span>
        </div>
        {product.tag && (
          <div className="absolute top-4 left-4">
            <span className="bg-rust text-bone text-[10px] tracking-widest uppercase font-sans px-2.5 py-1">
              {product.tag}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-bone p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
          <button className="w-full bg-ink text-bone text-xs tracking-widest uppercase font-sans py-2.5 hover:bg-rust transition-colors">
            Quick Add
          </button>
        </div>
      </div>
      <div>
        <span className="text-charcoal/50 text-[10px] tracking-widest uppercase font-sans">
          {product.category}
        </span>
        <h3 className="font-sans font-medium text-base mt-1 group-hover:text-rust transition-colors">
          {product.name}
        </h3>
        <p className="font-sans text-charcoal text-sm mt-1">{product.price}</p>
      </div>
    </Link>
  );
}
