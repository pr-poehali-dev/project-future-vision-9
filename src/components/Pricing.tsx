interface Tier {
  range: string;
  percent: string;
  highlight?: boolean;
}

const tiers: Tier[] = [
  {
    range: "До 3 000 ₽",
    percent: "10%",
  },
  {
    range: "3 000 — 15 000 ₽",
    percent: "8%",
  },
  {
    range: "15 000 — 50 000 ₽",
    percent: "5%",
    highlight: true,
  },
  {
    range: "От 50 000 ₽",
    percent: "3%",
  },
];

interface PricingProps {
  onSelectPlan: (name: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section id="pricing" className="relative z-10 py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-4">
            Стоимость
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Простые и <i className="font-light">прозрачные</i> цены
          </h2>
          <p className="font-mono text-sm text-foreground/50 mt-4 max-w-md mx-auto">
            Комиссия зависит от суммы заказа — чем больше, тем выгоднее
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {tiers.map((tier) => (
            <div
              key={tier.range}
              className={`flex items-center justify-between rounded-xl border px-6 py-5 transition-all duration-300 ${
                tier.highlight
                  ? "border-primary/50 bg-primary/5"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <span className="font-mono text-sm text-foreground/70">
                {tier.range}
              </span>
              <span
                className={`font-sentient text-3xl ${
                  tier.highlight ? "text-primary" : "text-foreground"
                }`}
              >
                {tier.percent}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onSelectPlan("")}
            className="font-mono text-sm uppercase tracking-widest border border-white/20 text-foreground/70 hover:border-primary/50 hover:text-foreground px-8 py-3 rounded-lg transition-all duration-200"
          >
            [Оформить заказ]
          </button>
        </div>
      </div>
    </section>
  );
}
