import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Why 5 AM hits different when you're sober",
    excerpt:
      "The alarm goes off and for the first time in years you actually get up. Not to regret the night before. Just to lift. This is what that feels like.",
    tag: "Training",
    readTime: "4 min",
    date: "May 14, 2025",
    featured: true,
  },
  {
    id: 2,
    title: "The meeting I skipped to go to the gym (and why it was the right call)",
    excerpt:
      "Recovery isn't linear and neither is training. Some days the barbell is the meeting. I've stopped apologizing for that.",
    tag: "Recovery",
    readTime: "6 min",
    date: "May 8, 2025",
    featured: false,
  },
  {
    id: 3,
    title: "What a PR feels like when you don't drink anymore",
    excerpt:
      "You can actually feel it. Not just the number on the bar. The thing underneath the number.",
    tag: "Training",
    readTime: "3 min",
    date: "Apr 29, 2025",
    featured: false,
  },
  {
    id: 4,
    title: "Sponsorship chips and lifting PRs: counting the same things differently",
    excerpt:
      "One day. Thirty days. Ninety. There's something about marking time that both worlds have in common. The counting matters.",
    tag: "Recovery",
    readTime: "5 min",
    date: "Apr 20, 2025",
    featured: false,
  },
  {
    id: 5,
    title: "Building a program when your head isn't straight",
    excerpt:
      "Early recovery and structured training have a lot in common: both require you to show up when you don't want to.",
    tag: "Training",
    readTime: "7 min",
    date: "Apr 10, 2025",
    featured: false,
  },
  {
    id: 6,
    title: "The folding chair and the squat rack",
    excerpt:
      "Two places I never thought I'd call home. Two communities I didn't know I needed. One life that turned out better than I planned.",
    tag: "Community",
    readTime: "8 min",
    date: "Mar 28, 2025",
    featured: false,
  },
];

const tags = ["All", "Training", "Recovery", "Community", "Nutrition"];

export default function JournalPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Header */}
      <div className="bg-ink text-bone py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-bone/30 text-[11px] tracking-widest uppercase font-sans mb-3">
              Trade The Bar
            </p>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tight">
              Journal
            </h1>
          </div>
          <p className="text-bone/40 text-sm font-sans max-w-xs leading-relaxed">
            Recovery and training stories from the crossover. No inspiration
            porn. Just honest writing about both sides.
          </p>
        </div>
      </div>

      {/* Divider bar */}
      <div
        className="h-[3px] w-full"
        style={{
          background:
            "repeating-linear-gradient(90deg, #A8431F 0, #A8431F 32px, transparent 32px, transparent 40px)",
        }}
      />

      {/* Tag filter (static for now) */}
      <div className="bg-bone border-b border-ink/10 px-5 md:px-10 py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto">
          {tags.map((tag, i) => (
            <button
              key={tag}
              className={`whitespace-nowrap px-4 py-2 text-xs tracking-widest uppercase font-sans transition-colors ${
                i === 0
                  ? "bg-ink text-bone"
                  : "text-charcoal border border-ink/20 hover:border-ink hover:text-ink"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-bone px-5 md:px-10 py-14">
        <div className="max-w-7xl mx-auto">
          {/* Featured post */}
          {featured && (
            <Link
              href="#"
              className="group block md:grid md:grid-cols-2 gap-10 border border-ink/10 hover:border-rust transition-colors mb-12"
            >
              <div
                className="aspect-[16/9] md:aspect-auto"
                style={{ backgroundColor: "#3A3A3A", minHeight: "280px" }}
              >
                <div className="w-full h-full flex items-center justify-center opacity-10">
                  <span className="font-display text-5xl text-bone tracking-widest">
                    TTB
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-rust text-bone text-[9px] tracking-widest uppercase font-sans px-2 py-0.5">
                    Featured
                  </span>
                  <span className="text-sage text-[10px] tracking-widest uppercase font-sans">
                    {featured.tag}
                  </span>
                  <span className="text-charcoal/30 text-[10px] font-sans">
                    {featured.readTime} read
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight leading-tight group-hover:text-rust transition-colors mb-4">
                  {featured.title}
                </h2>
                <p className="font-sans text-charcoal text-base leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-charcoal/40 text-xs font-sans">
                    {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-2 text-rust text-xs tracking-widest uppercase font-sans">
                    Read
                    <span className="inline-block w-4 h-[1px] bg-rust group-hover:w-8 transition-all duration-200" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.id}
                href="#"
                className="group block border border-ink/10 hover:border-rust transition-colors p-6"
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
                <p className="font-sans text-charcoal text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-ink/5">
                  <span className="text-charcoal/30 text-xs font-sans">
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2 text-rust text-xs tracking-widest uppercase font-sans">
                    Read
                    <span className="inline-block w-4 h-[1px] bg-rust group-hover:w-6 transition-all duration-200" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Load more */}
          <div className="mt-14 text-center">
            <button className="border border-ink/20 hover:border-rust hover:text-rust text-charcoal text-xs tracking-widest uppercase font-sans px-10 py-4 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </div>

      {/* Submit your story */}
      <div className="bg-sage py-14 px-5 md:px-10 text-center">
        <h3 className="font-display text-2xl md:text-3xl uppercase text-bone tracking-tight mb-3">
          Got a story to tell?
        </h3>
        <p className="text-bone/60 text-sm font-sans mb-6 max-w-sm mx-auto">
          If you&apos;re living at the crossover and want to write about it, we want to hear from you.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-bone text-ink hover:bg-ink hover:text-bone transition-colors px-8 py-3 text-xs tracking-widest uppercase font-sans font-semibold"
        >
          Pitch a Story
        </Link>
      </div>
    </>
  );
}
