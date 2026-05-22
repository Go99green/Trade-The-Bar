export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-ink text-bone py-16 px-5 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-bone/30 text-[11px] tracking-widest uppercase font-sans mb-3">
            Trade The Bar
          </p>
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tight">
            Contact
          </h1>
        </div>
      </div>

      <div className="bg-bone px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-14">
          {/* Left col */}
          <div className="md:col-span-4 space-y-10">
            <div>
              <p className="font-display text-xl uppercase tracking-tight mb-4">
                Get in touch
              </p>
              <p className="font-sans text-charcoal text-sm leading-relaxed">
                For wholesale inquiries, gym partnerships, press, or general
                questions. We read every email. We answer most of them.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  label: "General",
                  value: "hello@tradethebar.com",
                },
                {
                  label: "Wholesale",
                  value: "wholesale@tradethebar.com",
                },
                {
                  label: "Press",
                  value: "press@tradethebar.com",
                },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-charcoal/40 text-[10px] tracking-widest uppercase font-sans mb-1">
                    {label}
                  </p>
                  <a
                    href={`mailto:${value}`}
                    className="font-sans text-ink hover:text-rust transition-colors text-sm"
                  >
                    {value}
                  </a>
                </div>
              ))}
            </div>

            <div>
              <p className="text-charcoal/40 text-[10px] tracking-widest uppercase font-sans mb-3">
                Follow
              </p>
              <div className="flex gap-4">
                {["Instagram", "TikTok"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-charcoal hover:text-rust text-sm font-sans transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Response time note */}
            <div className="border-l-2 border-sage pl-4">
              <p className="font-sans text-charcoal/60 text-xs leading-relaxed">
                We typically respond within 48 hours. Wholesale inquiries may
                take a bit longer.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-7 md:col-start-6">
            <form className="space-y-6">
              {/* Subject selector */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase font-sans text-charcoal/50 mb-2">
                  Subject
                </label>
                <select className="w-full bg-transparent border border-ink/20 focus:border-rust px-4 py-3 text-sm font-sans text-ink appearance-none focus:outline-none">
                  <option>General Inquiry</option>
                  <option>Wholesale / Partnership</option>
                  <option>Press & Media</option>
                  <option>Order Support</option>
                  <option>Pitch a Journal Story</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Name row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] tracking-widest uppercase font-sans text-charcoal/50 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First"
                    className="w-full bg-transparent border border-ink/20 focus:border-rust px-4 py-3 text-sm font-sans text-ink placeholder:text-ink/20 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-widest uppercase font-sans text-charcoal/50 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last"
                    className="w-full bg-transparent border border-ink/20 focus:border-rust px-4 py-3 text-sm font-sans text-ink placeholder:text-ink/20 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase font-sans text-charcoal/50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border border-ink/20 focus:border-rust px-4 py-3 text-sm font-sans text-ink placeholder:text-ink/20 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase font-sans text-charcoal/50 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Say what you need to say."
                  className="w-full bg-transparent border border-ink/20 focus:border-rust px-4 py-3 text-sm font-sans text-ink placeholder:text-ink/20 focus:outline-none resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full md:w-auto bg-rust hover:bg-rust-dark transition-colors text-bone px-12 py-4 text-xs tracking-widest uppercase font-sans font-semibold"
              >
                Send It
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Wholesale CTA strip */}
      <div className="bg-charcoal py-14 px-5 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Gym & Box Wholesale",
              body: "Carrying TTB in your space? Minimum orders, wholesale pricing, and co-branded options available.",
              cta: "Inquire",
            },
            {
              title: "Influencer & Ambassador",
              body: "If you live the crossover and have a community that does too, we want to build something together.",
              cta: "Apply",
            },
            {
              title: "Press & Media",
              body: "Editorial, podcasts, documentary work — we're open to the right conversations.",
              cta: "Pitch",
            },
          ].map(({ title, body, cta }) => (
            <div key={title} className="border-t border-bone/10 pt-6">
              <h3 className="font-display text-lg uppercase text-bone tracking-tight mb-3">
                {title}
              </h3>
              <p className="font-sans text-bone/40 text-sm leading-relaxed mb-4">
                {body}
              </p>
              <button className="text-rust text-xs tracking-widest uppercase font-sans hover:text-bone transition-colors">
                {cta} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
