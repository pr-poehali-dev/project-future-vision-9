import { useState } from "react";

const SEND_ORDER_URL = "https://functions.poehali.dev/e5aab1f0-4992-4139-97bf-e08e6942a971";

interface OrderFormProps {
  selectedTariff?: string;
}

export function OrderForm({ selectedTariff }: OrderFormProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    link: "",
    tariff: selectedTariff || "",
    comment: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", link: "", tariff: "", comment: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/60 transition-colors duration-200";

  return (
    <section id="contact" className="relative z-10 py-24 md:py-32">
      <div className="container">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-4">
              Контакты
            </p>
            <h2 className="text-4xl md:text-5xl font-sentient">
              Оформить <i className="font-light">заказ</i>
            </h2>
            <p className="font-mono text-sm text-foreground/50 mt-4">
              Оставьте заявку — свяжемся в течение 30 минут
            </p>
          </div>

          {status === "success" ? (
            <div className="text-center py-16 border border-primary/30 rounded-2xl bg-primary/5">
              <p className="text-4xl mb-4">✓</p>
              <p className="font-sentient text-2xl mb-2">Заявка отправлена!</p>
              <p className="font-mono text-sm text-foreground/50">
                Свяжемся с вами в ближайшее время
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 font-mono text-xs uppercase tracking-widest text-foreground/40 hover:text-foreground transition-colors"
              >
                [Отправить ещё]
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-foreground/40 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-foreground/40 mb-2">
                    Телефон *
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+7 900 000 00 00"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-foreground/40 mb-2">
                  Тариф
                </label>
                <select
                  name="tariff"
                  value={form.tariff}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Не знаю / уточним позже</option>
                  <option value="До 3 000 ₽ — 10%">До 3 000 ₽ — 10%</option>
                  <option value="3 000–15 000 ₽ — 8%">3 000–15 000 ₽ — 8%</option>
                  <option value="15 000–50 000 ₽ — 5%">15 000–50 000 ₽ — 5%</option>
                  <option value="От 50 000 ₽ — 3%">От 50 000 ₽ — 3%</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-foreground/40 mb-2">
                  Ссылка на товар
                </label>
                <input
                  name="link"
                  value={form.link}
                  onChange={handleChange}
                  placeholder="https://item.taobao.com/..."
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-foreground/40 mb-2">
                  Комментарий
                </label>
                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  placeholder="Размер, цвет, количество или любые пожелания..."
                  rows={3}
                  className={inputClass + " resize-none"}
                />
              </div>

              {status === "error" && (
                <p className="font-mono text-xs text-red-400">
                  Ошибка отправки. Попробуйте ещё раз или напишите нам в Telegram.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-primary text-black font-mono text-sm uppercase tracking-widest rounded-lg hover:bg-primary/80 transition-colors duration-200 disabled:opacity-50"
              >
                {status === "loading" ? "[Отправляем...]" : "[Отправить заявку]"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}