"use client"
import ButtonTour from "@/components/button-tour";
import HeaderTour from "@/components/ui/header-tour";
import { Separator } from "@/components/ui/separator";
import { useTour } from "@/hooks/use-tour";

export default function Page() {
  const { startTour } = useTour();

  const handleStartTour = () => {
    console.log("Iniciar tour");
  };

  return (
    <div>
      <HeaderTour title="Análisis de casos" handleStartTour={handleStartTour} />
      <Separator className="my-2" />
    </div>
  )
}