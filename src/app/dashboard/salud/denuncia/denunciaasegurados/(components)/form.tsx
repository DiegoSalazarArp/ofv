"use client";

import { useTour } from "@/hooks/use-tour";
import HeaderTour from "@/components/ui/header-tour";

export default function Form() {
  const {startTour} = useTour()

  const handleStartTour = () => {
    console.log("start tour");
  };

  return (
    <div>
      <HeaderTour title="Denuncias asegurados" handleStartTour={handleStartTour} />
    </div>
  );
}
