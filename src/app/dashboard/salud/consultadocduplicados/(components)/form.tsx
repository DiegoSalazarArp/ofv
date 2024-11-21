"use client"
import { Separator } from "@/components/ui/separator";

import { useTour } from "@/hooks/use-tour";
import { stepsConsultaDocDuplicados } from "@/lib/steps/tourSteps";

import HeaderTour from "@/components/ui/header-tour";
import { DataTableDemo } from "./tabla-duplicados";
import Buscador from "./buscador";


export default function Page() {
  const { startTour } = useTour();

  const handleStartTour = () => {
    startTour(stepsConsultaDocDuplicados);
  };

  return (
    <div className="">
      <HeaderTour title="Consultar Documentos Duplicados" handleStartTour={handleStartTour} />
      <Separator className="my-2" />
      <Buscador />
      <DataTableDemo />
    </div>
  )
}