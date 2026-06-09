const platforms = [
  {
    name: "Poizon",
    tag: "Кроссовки и одежда",
    description: "Крупнейший маркетплейс брендовых кроссовок и streetwear с верификацией оригинальности.",
    highlight: true,
  },
  {
    name: "Pinduoduo",
    tag: "Оптовые цены",
    description: "Лучшие цены на массовые товары — одежда, электроника, товары для дома и быта.",
    highlight: true,
  },
  {
    name: "Taobao",
    tag: "Огромный выбор",
    description: "Главная розничная площадка Китая с миллионами товаров от тысяч продавцов.",
  },
  {
    name: "1688",
    tag: "Оптом от производителя",
    description: "Прямые поставки от заводов и производителей — минимальные цены без посредников.",
  },
];

export function Platforms() {
  return (
    <section id="platforms" className="relative z-10 py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-4">
            Площадки
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Работаем с <i className="font-light">лучшими</i>
          </h2>
          <p className="font-mono text-sm text-foreground/50 mt-4 max-w-md mx-auto">
            Выкупаем с любых китайских платформ — вам не нужно разбираться как это работает
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {platforms.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-8 transition-all duration-300 ${
                p.highlight
                  ? "border-primary/40 bg-primary/5 hover:border-primary/60"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-sentient text-3xl">{p.name}</h3>
                <span
                  className={`font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full ${
                    p.highlight
                      ? "bg-primary/20 text-primary"
                      : "bg-white/5 text-foreground/40"
                  }`}
                >
                  {p.tag}
                </span>
              </div>
              <p className="font-mono text-sm text-foreground/50 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
