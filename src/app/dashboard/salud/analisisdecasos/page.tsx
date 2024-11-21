"use client"
import ButtonTour from "@/components/button-tour";
import { Separator } from "@/components/ui/separator";
import { useTour } from "@/hooks/use-tour";

export default function Page() {
  const { startTour } = useTour();

  const handleStartTour = () => {
    
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl" id="titulo">Análisis de casos</h1>
        <ButtonTour handleStartTour={handleStartTour} />
      </div>
      <Separator className="my-2" />

    </div>
  )
}