const steps = [
  {
    number: "01",
    title: "Отправьте ссылку",
    description: "Скопируйте ссылку на товар с Taobao, 1688 или любой другой китайской площадки и оставьте заявку на сайте.",
  },
  {
    number: "02",
    title: "Мы выкупаем товар",
    description: "Связываемся с продавцом, оплачиваем товар и проверяем его качество перед отправкой.",
  },
  {
    number: "03",
    title: "Доставка в Россию",
    description: "Отправляем товар на наш склад в России от 15 кг. Вы получаете трек-номер и отслеживаете посылку.",
  },
  {
    number: "04",
    title: "Получите товар",
    description: "Забираете заказ удобным способом — курьером или в пункте выдачи.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative z-10 py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-4">
            Процесс
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Как это <i className="font-light">работает</i>
          </h2>
          <p className="font-mono text-sm text-foreground/50 mt-4 max-w-md mx-auto">
            Всего 4 шага — от ссылки до товара в ваших руках
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-8 group">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors duration-300">
                  <span className="font-mono text-xs text-foreground/40 group-hover:text-primary transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-white/10 my-3" />
                )}
              </div>

              <div className={`pb-10 ${i === steps.length - 1 ? "" : ""}`}>
                <h3 className="font-sentient text-xl mb-2">{step.title}</h3>
                <p className="font-mono text-sm text-foreground/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}