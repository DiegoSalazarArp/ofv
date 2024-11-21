"use client"
import { Separator } from "@/components/ui/separator";
import { DataTableDemo } from "./(components)/tabla-duplicados";
import { Button } from "@/components/ui/button";
import { useTour } from "@/hooks/use-tour";
import { Sparkles } from "lucide-react";
import { stepsConsultaDocDuplicados } from "@/lib/steps/tourSteps";
import Buscador from "./(components)/buscador";
import ButtonTour from "@/components/button-tour";


export default function Page() {
  const { startTour } = useTour();

  const handleStartTour = () => {
    startTour(stepsConsultaDocDuplicados);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl" id="titulo">Consultar Documentos Duplicados</h1>
        <ButtonTour handleStartTour={handleStartTour} />
      </div>
      <Separator className="my-2" />
      <Buscador />
      <DataTableDemo />
    </div>
  )
}