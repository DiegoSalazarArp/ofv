"use client"
import { Separator } from "@/components/ui/separator";
import { DataTableDemo } from "./(components)/tabla-duplicados";
import { Button } from "@/components/ui/button";
import { useTour } from "@/hooks/use-tour";
import { Sparkles } from "lucide-react";
import { stepsConsultaDocDuplicados } from "@/lib/steps/tourSteps";
import Buscador from "./(components)/buscador";


export default function Page() {
  const { startTour } = useTour();

  const handleStartTour = () => {
    startTour(stepsConsultaDocDuplicados);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl" id="titulo">Consultar Documentos Duplicados</h1>
        <Button
          className="hover:bg-green-700 hover:text-white"
          variant="outline" 
          onClick={handleStartTour}
        >
          <Sparkles color="yellow" className="h-4 w-4 animate-pulse" />
          Iniciar Tour
        </Button>
      </div>
      <Separator className="my-2" />
      <Buscador />
      <DataTableDemo />
    </div>
  )
}