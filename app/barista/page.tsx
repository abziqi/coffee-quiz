import Image from "next/image";

const personalities = [
  {
    key: "bold",
    name: "Bold Adventurer",
    coffee: "Double Espresso",
    tip: "They want intensity — skip the sweet suggestions. Lead with roast strength and origin.",
    upsell: "Offer a second shot or a dark roast cold brew.",
    svg: "/espresso.svg",
    color: "#3D2B1F",
  },
  {
    key: "zen",
    name: "Zen Minimalist",
    coffee: "Black Coffee, Single Origin",
    tip: "Keep it simple. They appreciate quality over complexity — highlight the roast story.",
    upsell: "Mention the single origin of the day. They'll ask questions.",
    svg: "/black-coffee.svg",
    color: "#5C4033",
  },
  {
    key: "sweet",
    name: "Sweet Enthusiast",
    coffee: "Caramel Latte",
    tip: "They love warmth and comfort. Mention seasonal sweet specials first.",
    upsell: "Seasonal syrups, flavored lattes, or a pastry pairing.",
    svg: "/latte.svg",
    color: "#C8813A",
  },
  {
    key: "indulgent",
    name: "Indulgent Treat",
    coffee: "Mocha with Whip",
    tip: "Always offer the add-ons — whip, drizzle, extra shot. They're here to treat themselves.",
    upsell: "Extra toppings, a dessert drink, or the most decadent item on the menu.",
    svg: "/mocha.svg",
    color: "#8B5E3C",
  },
];

export default function BaristaPage() {
  return (
    <main className="min-h-screen bg-cream px-4 py-10">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="text-xs uppercase tracking-widest text-caramel mb-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Basecamp Coffee
          </p>
          <h1
            className="text-3xl text-espresso mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Barista Quick Reference
          </h1>
          <p
            className="text-espresso/60 text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            When a member shares their coffee personality, here&apos;s how to make it count.
          </p>
        </div>

        {/* Personality cards */}
        <div className="flex flex-col gap-5">
          {personalities.map((p) => (
            <div
              key={p.key}
              className="bg-white rounded-2xl shadow-sm p-6 flex gap-5 items-start"
            >
              {/* Icon */}
              <div className="shrink-0">
                <Image src={p.svg} alt={p.name} width={72} height={72} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                  <h2
                    className="text-lg text-espresso"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {p.name}
                  </h2>
                  <span
                    className="text-xs font-semibold text-caramel"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {p.coffee}
                  </span>
                </div>

                <p
                  className="text-espresso/70 text-sm mb-3 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p.tip}
                </p>

                <div className="bg-cream rounded-xl px-4 py-2.5">
                  <span
                    className="text-xs uppercase tracking-wider text-caramel font-semibold mr-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Upsell:
                  </span>
                  <span
                    className="text-espresso/70 text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {p.upsell}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p
          className="text-center text-espresso/30 text-xs mt-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Basecamp Coffee — find your ritual
        </p>
      </div>
    </main>
  );
}
