"use client";

import Link from "next/link";
import { useState } from "react";

const categories = ["All", "Tees", "Hoodies", "Hats", "Accessories"];

const products = [
  { id: 1, name: "Earned, Not Given Tee", price: "$38", category: "Tees", color: "#3A3A3A", accent: "#A8431F", tag: "New" },
  { id: 2, name: "One Day Hoodie", price: "$88", category: "Hoodies", color: "#141414", accent: "#7A8B6E", tag: "Best" },
  { id: 3, name: "Crossbar Cap", price: "$42", category: "Hats", color: "#A8431F", accent: "#EFE9DD", tag: null },
  { id: 4, name: "5 AM Club Tee", price: "$38", category: "Tees", color: "#EFE9DD", accent: "#141414", tag: null },
  { id: 5, name: "The Program Hoodie", price: "$94", category: "Hoodies", color: "#7A8B6E", accent: "#EFE9DD", tag: "New" },
  { id: 6, name: "Hash Mark Hat", price: "$42", category: "Hats", color: "#3A3A3A", accent: "#A8431F", tag: null },
  { id: 7, name: "Meeting Minutes Tee", price: "$38", category: "Tees", color: "#A8431F", accent: "#EFE9DD", tag: null },
  { id: 8, name: "One Rep Away Keychain", price: "$18", category: "Accessories", color: "#141414", accent: "#7A8B6E", tag: null },
  { id: 9, name: "TTB Patch", price: "$12", category: "Accessories", color: "#7A8B6E", accent: "#EFE9DD", tag: null },
];

export default function ShopPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* Header */}
      <div className="bg-ink text-bone py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-bone/30 text-[11px] tracking-widest uppercase font-sans mb-3">
            Trade The Bar
          </p>
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tight">
            Shop
          </h1>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-bone border-b border-ink/10 px-5 md:px-10 py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-4 py-2 text-xs tracking-widest uppercase font-sans transition-colors ${
                active === cat
                  ? "bg-ink text-bone"
                  : "text-charcoal hover:text-ink border border-ink/20 hover:border-ink"
              }`}
            >
              {cat}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2 pl-4 border-l border-ink/10 shrink-0">
            <span className="text-charcoal/40 text-xs tracking-widest uppercase font-sans">
              {filtered.length} items
            </span>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="bg-bone px-5 md:px-10 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
            {filtered.map((product) => (
              <div key={product.id} className="group">
                <div
                  className="aspect-[3/4] w-full mb-3 relative overflow-hidden"
                  style={{ backgroundColor: product.color }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-display text-3xl tracking-[0.3em] uppercase opacity-10"
                      style={{ color: product.accent }}
                    >
                      TTB
                    </span>
                  </div>
                  {product.tag && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-rust text-bone text-[9px] tracking-widest uppercase font-sans px-2 py-0.5">
                        {product.tag}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-bone p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                    <button className="w-full bg-ink text-bone text-[10px] tracking-widest uppercase font-sans py-2 hover:bg-rust transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <span className="text-charcoal/40 text-[9px] tracking-widest uppercase font-sans">
                  {product.category.slice(0, -1)}
                </span>
                <h3 className="font-sans font-medium text-sm mt-0.5 group-hover:text-rust transition-colors">
                  {product.name}
                </h3>
                <p className="font-sans text-charcoal text-sm mt-1">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wholesale CTA */}
      <div className="bg-sage px-5 md:px-10 py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl uppercase text-bone tracking-tight">
              Wholesale & Gym Partnerships
            </h3>
            <p className="text-bone/60 text-sm font-sans mt-2">
              Carrying TTB in your box or studio? Let&apos;s talk.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-bone text-ink hover:bg-rust hover:text-bone transition-colors px-8 py-3 text-xs tracking-widest uppercase font-sans font-semibold whitespace-nowrap"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </>
  );
}
