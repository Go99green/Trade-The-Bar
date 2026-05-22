import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      {/* Newsletter */}
      <div className="border-b border-bone/10 py-14 px-5 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-display text-2xl md:text-3xl tracking-widest uppercase text-bone">
              Stay in it.
            </p>
            <p className="text-bone/50 text-sm mt-2 font-sans">
              New drops, journal entries, and nothing else.
            </p>
          </div>
          <form className="flex gap-0 w-full md:w-auto max-w-md">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-bone/10 border border-bone/20 px-4 py-3 text-bone placeholder:text-bone/30 text-sm font-sans focus:outline-none focus:border-rust"
            />
            <button
              type="submit"
              className="bg-rust hover:bg-rust-dark transition-colors px-6 py-3 text-bone text-xs tracking-widest uppercase font-sans font-semibold whitespace-nowrap"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex flex-col items-start leading-none mb-4">
            <span className="font-display text-[10px] tracking-[0.25em] uppercase text-bone">
              Trade
            </span>
            <span
              className="block w-full h-[2px] my-[3px]"
              style={{
                background:
                  "repeating-linear-gradient(90deg, #A8431F 0, #A8431F 6px, transparent 6px, transparent 9px)",
              }}
            />
            <span className="font-display text-[10px] tracking-[0.25em] uppercase text-bone">
              The Bar
            </span>
          </div>
          <p className="text-bone/40 text-xs leading-relaxed font-sans max-w-[180px]">
            For athletes who traded one obsession for another.
          </p>
        </div>

        {/* Shop */}
        <div>
          <p className="text-bone/30 text-[10px] tracking-widest uppercase font-sans mb-4">
            Shop
          </p>
          <ul className="space-y-2">
            {["Tees", "Hoodies", "Hats", "Accessories", "All Products"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="/shop"
                    className="text-bone/60 hover:text-bone text-sm font-sans transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-bone/30 text-[10px] tracking-widest uppercase font-sans mb-4">
            Company
          </p>
          <ul className="space-y-2">
            {[
              { label: "Our Story", href: "/story" },
              { label: "Journal", href: "/journal" },
              { label: "Contact", href: "/contact" },
              { label: "Wholesale", href: "/contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-bone/60 hover:text-bone text-sm font-sans transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="text-bone/30 text-[10px] tracking-widest uppercase font-sans mb-4">
            Follow
          </p>
          <ul className="space-y-2">
            {["Instagram", "TikTok", "YouTube"].map((platform) => (
              <li key={platform}>
                <a
                  href="#"
                  className="text-bone/60 hover:text-rust text-sm font-sans transition-colors"
                >
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-bone/10 px-5 md:px-10 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-bone/30 text-xs font-sans">
            © {new Date().getFullYear()} Trade The Bar. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Returns"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-bone/30 hover:text-bone/60 text-xs font-sans transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
