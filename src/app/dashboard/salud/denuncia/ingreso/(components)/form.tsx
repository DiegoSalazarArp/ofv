"use client"
import HeaderTour from "@/components/ui/header-tour";
import { useTour } from "@/hooks/use-tour";
import Buscador from "./buscador";
import { Separator } from "@/components/ui/separator";
import RemesasForm from "./mostrar-remesas";
import InsuranceForm from "./form-denuncia";

export default function Form() {
  const {startTour} = useTour()

  const handleStartTour = () => {
    console.log("start tour");
  };

  return (
    <div>
      <HeaderTour title="Denuncias" handleStartTour={handleStartTour} />

      <Separator className="my-2" />
      <RemesasForm />

      <InsuranceForm />
      <div className="flex flex-col gap-2">
        <Buscador />
      </div>
    </div>
  );
}
