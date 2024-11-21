"use client"


import { useTour } from "@/hooks/use-tour";
import ButtonTour from "../button-tour";

interface HeaderTourProps {
  title: string;
  handleStartTour: () => void;
}

export default function HeaderTour({ title, handleStartTour }: HeaderTourProps) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl" id="titulo">{title}</h1>
      <ButtonTour handleStartTour={handleStartTour} />
    </div>
  )
}