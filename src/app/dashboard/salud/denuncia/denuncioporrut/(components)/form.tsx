"use client";

import { useTour } from "@/hooks/use-tour";
import HeaderTour from "@/components/ui/header-tour";

export default function Form() {
  const {startTour} = useTour()

  const handleStartTour = () => {
    console.log("start tour");
  };

  const calcularAreaCuadrado = (lado: number): number => {
    return lado * lado;
  }

  return (
    <div>
      <HeaderTour title="Denuncias por rut" handleStartTour={handleStartTour} />
    </div>
  );
  
}
