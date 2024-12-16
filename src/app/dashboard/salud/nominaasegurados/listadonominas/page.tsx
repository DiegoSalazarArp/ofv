"use client"
import ButtonTour from "@/components/button-tour";
import { Separator } from "@/components/ui/separator";
import { useTour } from "@/hooks/use-tour";
import { DataTable } from "./(components)/data-table";
import { columns, Payment } from "./(components)/columns";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m.brown@example.com",
    },
    {
      id: "489e1d42",
      amount: 125.50,
      status: "processing", 
      email: "j.smith@example.com",
    },
    {
      id: "63d12af9",
      amount: 75.25,
      status: "success",
      email: "sarah.wilson@example.com", 
    },
    {
      id: "92b45e78",
      amount: 250,
      status: "failed",
      email: "robert.jones@example.com",
    },
    {
      id: "15f89c3a",
      amount: 180.75,
      status: "success",
      email: "emily.davis@example.com",
    },
    {
      id: "37d46b2c",
      amount: 95.99,
      status: "pending",
      email: "david.miller@example.com",
    },
    {
      id: "84c91fe5",
      amount: 310.25,
      status: "processing",
      email: "lisa.taylor@example.com",
    },
    {
      id: "56a23d8b",
      amount: 150,
      status: "success",
      email: "chris.anderson@example.com",
    },
    {
      id: "91h67m4k",
      amount: 200.50,
      status: "pending",
      email: "jennifer.white@example.com",
    },
    {
      id: "45p89q2r",
      amount: 175.25,
      status: "processing",
      email: "michael.lee@example.com",
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