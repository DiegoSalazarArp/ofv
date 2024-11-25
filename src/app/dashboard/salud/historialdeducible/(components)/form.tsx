"use client";

import HeaderTour from "@/components/ui/header-tour";
import { useTour } from "@/hooks/use-tour";


export default function Form() {
  
  const {startTour} = useTour()

  const handleStartTour = () => {
    console.log("start tour");
  };


  return (
    <div>
      <HeaderTour title="Historial deducible" handleStartTour={handleStartTour} />
    </div>
  )
}
