import { AsdComponent } from "@/components/charts/asd";
import { BarChartComponent } from "@/components/charts/bar";
import { LineChartComponent } from "@/components/charts/line";
import { PieChartComponent } from "@/components/charts/pie";
import { PieLabelChartComponent } from "@/components/charts/pie-label";
import { RadialChartComponent } from "@/components/charts/radiar";


export default function Page() {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        <PieChartComponent />
        <PieLabelChartComponent />
        <RadialChartComponent />
        <LineChartComponent />
      </div>
      <div className="flex flex-col gap-4">
        <BarChartComponent />
        <AsdComponent />

      </div>
    </>

  );
}
