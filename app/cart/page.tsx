"use client";

import Link from "next/link";
import { useState } from "react";

const initialItems = [
  {
    id: 1,
    name: "Earned, Not Given Tee",
    variant: "Black / L",
    price: 38,
    qty: 1,
    color: "#3A3A3A",
    accent: "#A8431F",
  },
  {
    id: 2,
    name: "Crossbar Cap",
    variant: "Rust / One Size",
    price: 42,
    qty: 1,
    color: "#A8431F",
    accent: "#EFE9DD",
  },
];

export default function CartPage() {
  const [items, setItems] = useState(initialItems);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 75 ? 0 : 8;
  const total = subtotal + shipping;

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const remove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* Header */}
      <div className="bg-ink text-bone py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-bone/30 text-[11px] tracking-widest uppercase font-sans mb-3">
            Trade The Bar
          </p>
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tight">
            Cart
          </h1>
        </div>
      </div>

      <div className="bg-bone px-5 md:px-10 py-14">
        <div className="max-w-7xl mx-auto">
          {items.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-display text-2xl uppercase text-charcoal/30 mb-6">
                Your cart is empty
              </p>
              <Link
                href="/shop"
                className="bg-rust text-bone hover:bg-rust-dark transition-colors px-10 py-4 text-xs tracking-widest uppercase font-sans font-semibold inline-block"
              >
                Go Shop
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Items */}
              <div className="lg:col-span-7 space-y-0 divide-y divide-ink/10">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-5 py-8">
                    {/* Product image */}
                    <div
                      className="w-24 h-28 shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: item.color }}
                    >
                      <span
                        className="font-display text-xs tracking-widest opacity-20"
                        style={{ color: item.accent }}
                      >
                        TTB
                      </span>
                    </div>
                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-sans font-medium text-base text-ink">
                            {item.name}
                          </h3>
                          <p className="text-charcoal/50 text-xs font-sans mt-0.5">
                            {item.variant}
                          </p>
                        </div>
                        <p className="font-sans font-medium text-base shrink-0">
                          ${(item.price * item.qty).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-5">
                        {/* Qty controls */}
                        <div className="flex items-center border border-ink/20">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="w-9 h-9 flex items-center justify-center text-ink hover:text-rust transition-colors text-lg"
                          >
                            −
                          </button>
                          <span className="w-9 h-9 flex items-center justify-center font-sans text-sm">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="w-9 h-9 flex items-center justify-center text-ink hover:text-rust transition-colors text-lg"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => remove(item.id)}
                          className="text-charcoal/30 hover:text-rust text-xs tracking-widest uppercase font-sans transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order summary */}
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="bg-ink text-bone p-8 sticky top-24">
                  <h2 className="font-display text-lg uppercase tracking-tight mb-8">
                    Order Summary
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm font-sans">
                      <span className="text-bone/50">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-sans">
                      <span className="text-bone/50">Shipping</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-sage">Free</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                  </div>

                  {shipping > 0 && (
                    <p className="text-bone/30 text-xs font-sans mb-6">
                      Free shipping on orders over $75. You&apos;re $
                      {(75 - subtotal).toFixed(2)} away.
                    </p>
                  )}

                  <div className="border-t border-bone/10 pt-4 mb-8">
                    <div className="flex justify-between font-sans font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Promo code */}
                  <div className="flex mb-6">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="flex-1 bg-bone/10 border border-bone/20 px-3 py-2.5 text-sm font-sans text-bone placeholder:text-bone/20 focus:outline-none focus:border-rust"
                    />
                    <button className="bg-bone/10 hover:bg-rust border border-bone/20 border-l-0 px-4 text-bone text-xs tracking-widest uppercase font-sans transition-colors">
                      Apply
                    </button>
                  </div>

                  <button className="w-full bg-rust hover:bg-rust-dark transition-colors text-bone py-4 text-xs tracking-widest uppercase font-sans font-semibold mb-3">
                    Checkout
                  </button>
                  <Link
                    href="/shop"
                    className="block text-center text-bone/30 hover:text-bone text-xs tracking-widest uppercase font-sans transition-colors py-2"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* You might also like */}
      {items.length > 0 && (
        <div className="bg-bone border-t border-ink/5 px-5 md:px-10 py-14">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-2xl uppercase tracking-tight mb-8">
              You might also like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { name: "One Day Hoodie", price: "$88", color: "#141414", accent: "#7A8B6E" },
                { name: "5 AM Club Tee", price: "$38", color: "#EFE9DD", accent: "#141414" },
                { name: "Hash Mark Hat", price: "$42", color: "#3A3A3A", accent: "#A8431F" },
                { name: "TTB Patch", price: "$12", color: "#7A8B6E", accent: "#EFE9DD" },
              ].map(({ name, price, color, accent }) => (
                <Link href="/shop" key={name} className="group">
                  <div
                    className="aspect-square mb-3 flex items-center justify-center"
                    style={{ backgroundColor: color }}
                  >
                    <span
                      className="font-display text-xs tracking-widest opacity-10"
                      style={{ color: accent }}
                    >
                      TTB
                    </span>
                  </div>
                  <p className="font-sans font-medium text-sm group-hover:text-rust transition-colors">
                    {name}
                  </p>
                  <p className="font-sans text-charcoal text-sm">{price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
