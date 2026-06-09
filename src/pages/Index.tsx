import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { OrderForm } from "@/components/OrderForm";

export default function Index() {
  const [selectedTariff, setSelectedTariff] = useState("");

  const handleSelectPlan = (name: string) => {
    setSelectedTariff(name);
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <Hero />
      <Pricing onSelectPlan={handleSelectPlan} />
      <OrderForm selectedTariff={selectedTariff} />
    </>
  );
}
