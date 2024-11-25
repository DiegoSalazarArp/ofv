import { driver } from "driver.js";
import "driver.js/dist/driver.css";

interface TourStep {
  element: string;
  popover: {
    title: string;
    description: string;
    position?: string;
  };
}

interface TourOptions {
  showProgress?: boolean;
  nextBtnText?: string;
  prevBtnText?: string;
  doneBtnText?: string;
}

export const useTour = () => {
  const startTour = (steps: TourStep[], options: TourOptions = {}) => {
    const driverObj = driver({
      showProgress: true,
      nextBtnText: 'Siguiente',
      prevBtnText: 'Anterior',
      doneBtnText: 'Finalizar',
      ...options,
      steps,

      
    });

    driverObj.drive();
  };

  return { startTour };
};