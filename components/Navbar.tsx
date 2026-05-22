import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-bone/[0.08]"
      style={{ backgroundColor: "#1C2416" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center">
        <Link href="/" className="flex flex-col items-start leading-none">
          <span className="font-display text-[11px] tracking-[0.25em] text-bone uppercase leading-tight">
            Trade
          </span>
          <span className="block w-full h-[1px] my-[3px] bg-rust" />
          <span className="font-display text-[11px] tracking-[0.25em] text-bone uppercase leading-tight">
            The Bar
          </span>
        </Link>
      </div>
    </header>
  );
}
