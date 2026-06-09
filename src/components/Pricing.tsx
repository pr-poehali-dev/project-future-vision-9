interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: "Старт",
    price: "5%",
    description: "от суммы заказа",
    features: [
      "Выкуп с Taobao и 1688",
      "Проверка товара перед отправкой",
      "Фото товара по запросу",
      "Доставка до склада в России",
      "Поддержка в Telegram",
    ],
  },
  {
    name: "Бизнес",
    price: "3%",
    description: "от суммы заказа",
    badge: "Популярный",
    highlight: true,
    features: [
      "Выкуп с любых площадок Китая",
      "Детальная проверка и фото/видео",
      "Перемаркировка и упаковка",
      "Консолидация нескольких заказов",
      "Приоритетная поддержка 24/7",
      "Персональный менеджер",
    ],
  },
  {
    name: "PRO",
    price: "2%",
    description: "от суммы заказа · от 500 000 ₽",
    features: [
      "Всё из тарифа Бизнес",
      "Переговоры с поставщиком",
      "Оптовые закупки и скидки",
      "Таможенное оформление",
      "Выделенный аккаунт-менеджер",
      "Индивидуальные условия",
    ],
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
            Тарифы
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Простые и <i className="font-light">прозрачные</i> цены
          </h2>
          <p className="font-mono text-sm text-foreground/50 mt-4 max-w-md mx-auto">
            Никаких скрытых платежей — платите только процент от суммы выкупа
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "border-primary/60 bg-white/5 shadow-glow shadow-primary/10"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-black text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-3">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-sentient">{plan.price}</span>
                </div>
                <p className="font-mono text-xs text-foreground/40 mt-1">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-mono text-sm text-foreground/70">
                    <span className="text-primary mt-0.5 shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3 rounded-lg font-mono text-sm uppercase tracking-widest transition-all duration-200 ${
                  plan.highlight
                    ? "bg-primary text-black hover:bg-primary/80"
                    : "border border-white/20 text-foreground/70 hover:border-white/50 hover:text-foreground"
                }`}
              >
                [Выбрать тариф]
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
