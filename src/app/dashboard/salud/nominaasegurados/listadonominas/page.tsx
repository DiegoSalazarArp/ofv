"use client"
import ButtonTour from "@/components/button-tour";
import { Separator } from "@/components/ui/separator";
import { useTour } from "@/hooks/use-tour";
import { DataTable } from "./(components)/data-table";
import { columns, Nomina } from "./(components)/columns";

async function getData(): Promise<Nomina[]> {
  // Fetch data from your API here.
  return [
    {
      id: "NOM001",
      poliza: "POL-2024-001",
      estado: "pendiente",
      cantidadAsegurados: 150,
      fecha: "2024-03-01"
    },
    {
      id: "NOM002", 
      poliza: "POL-2024-002",
      estado: "procesando", 
      cantidadAsegurados: 75,
      fecha: "2024-03-05"
    },
    {
      id: "NOM003",
      poliza: "POL-2024-001",
      estado: "cerrada",
      cantidadAsegurados: 200,
      fecha: "2024-02-28"
    },
    {
      id: "NOM004",
      poliza: "POL-2024-003",
      estado: "pendiente",
      cantidadAsegurados: 50,
      fecha: "2024-03-10"
    },
    {
      id: "NOM005",
      poliza: "POL-2024-002", 
      estado: "cerrada",
      cantidadAsegurados: 125,
      fecha: "2024-02-15"
    },
    {
      id: "NOM006",
      poliza: "POL-2024-004",
      estado: "procesando",
      cantidadAsegurados: 300,
      fecha: "2024-03-12"
    },
    {
      id: "NOM007",
      poliza: "POL-2024-003",
      estado: "pendiente",
      cantidadAsegurados: 175,
      fecha: "2024-03-15"
    },
    {
      id: "NOM008",
      poliza: "POL-2024-001",
      estado: "cerrada",
      cantidadAsegurados: 225,
      fecha: "2024-02-20"
    },
    {
      id: "NOM009",
      poliza: "POL-2024-004",
      estado: "pendiente",
      cantidadAsegurados: 100,
      fecha: "2024-03-18"
    },
    {
      id: "NOM010",
      poliza: "POL-2024-002",
      estado: "procesando",
      cantidadAsegurados: 250,
      fecha: "2024-03-20"
    },
    {
      id: "NOM011",
      poliza: "POL-2024-005",
      estado: "pendiente",
      cantidadAsegurados: 180,
      fecha: "2024-03-22"
    },
    {
      id: "NOM012",
      poliza: "POL-2024-003",
      estado: "cerrada",
      cantidadAsegurados: 275,
      fecha: "2024-02-25"
    },
    {
      id: "NOM013",
      poliza: "POL-2024-005",
      estado: "procesando",
      cantidadAsegurados: 90,
      fecha: "2024-03-25"
    },
    {
      id: "NOM014",
      poliza: "POL-2024-004",
      estado: "cerrada",
      cantidadAsegurados: 325,
      fecha: "2024-02-10"
    },
    {
      id: "NOM015",
      poliza: "POL-2024-005",
      estado: "pendiente",
      cantidadAsegurados: 150,
      fecha: "2024-03-28"
    }
  ]
}
 


export default async function Page() {
  const { startTour } = useTour();

  const handleStartTour = () => {
  };


  const data = await getData();


  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl" id="titulo">Listado de nominas</h1>
        <ButtonTour handleStartTour={handleStartTour} />
      </div>
      <Separator className="my-2" />
      <DataTable columns={columns} data={data} />
    </div>
  )
}