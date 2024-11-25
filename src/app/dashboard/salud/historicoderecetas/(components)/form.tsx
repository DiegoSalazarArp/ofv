"use client"

import HeaderTour from "@/components/ui/header-tour";
import { Separator } from "@/components/ui/separator";
import { useTour } from "@/hooks/use-tour";

export default function Form() {
  const { startTour } = useTour();

  const handleStartTour = () => {
    console.log("Iniciar tour")
  }

    return (
    <div>
      <HeaderTour title="Histórico de recetas" handleStartTour={handleStartTour} />
      <Separator className="my-2" />
    </div>
  )
}


