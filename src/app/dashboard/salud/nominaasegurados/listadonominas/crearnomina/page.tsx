"use client"

import ButtonTour from "@/components/button-tour";
import { Separator } from "@/components/ui/separator";
import { useTour } from "@/hooks/use-tour";
import CrearNomina from "./(components)/crear-nomina";


export default function Page() {
  const { startTour } = useTour();

  const handleStartTour = () => {
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl" id="titulo">Ingreso Nómina de Asegurados</h1>
        <ButtonTour handleStartTour={handleStartTour} />
      </div>
      <Separator className="my-2" />
      <div className="py-4">
        <CrearNomina />
      </div>

    </div>
  )
}
