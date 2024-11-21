"use client"

import { Sparkles } from "lucide-react";
import { Button } from "./ui/button"


interface ButtonTourProps {
  handleStartTour: () => void;
}

export default function ButtonTour({ handleStartTour }: ButtonTourProps) {
    return (
        <Button
            className="hover:bg-green-700 hover:text-white"
            variant="outline"
            onClick={handleStartTour}
        >
            <Sparkles color="yellow" className="h-4 w-4 animate-pulse" />
            Iniciar Tour
        </Button>
    )
}
