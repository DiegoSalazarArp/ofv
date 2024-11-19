"use client"
import "driver.js/dist/driver.css";
import { Separator } from "@/components/ui/separator";
import { DataTableDemo } from "./(components)/tabla-duplicados";
import Buscador from "./(components)/buscador";
import { Button } from "@/components/ui/button";
import { tourSteps } from "./tourSteps";
import { useTour } from "@/hooks/use-tour";
import { Sparkles } from "lucide-react";

export default function Page() {
  const { startTour } = useTour();

  const handleStartTour = () => {
    startTour(tourSteps);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl" id="titulo">Consultar Documentos Duplicados</h1>
        <Button
          variant="outline"
          onClick={handleStartTour}
        >
          <Sparkles className="h-4 w-4" />
          Iniciar Tour
        </Button>
      </div>
      <Separator className="my-2" />
      <Buscador />
      <DataTableDemo />
    </div>
  )
}