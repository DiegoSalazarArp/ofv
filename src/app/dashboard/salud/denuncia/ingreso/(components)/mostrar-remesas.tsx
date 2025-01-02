"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function RemesasForm() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Remesas Abiertas</CardTitle>
        <Link href="#" className="text-sm text-blue-600 hover:underline">
          Mostrar remesas abiertas
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">

        <div className="grid gap-2 w-full">
          <Label htmlFor="contratante">Contratante</Label>
          <Input
            id="contratante"
            defaultValue="SEGUROS DE VIDA SURA S.A."
            readOnly
            className="bg-muted"
            />
        </div>
        <div className="grid gap-2 w-full">
          <Label htmlFor="poliza">Póliza</Label>
          <Input
            id="poliza"
            defaultValue="6519"
            readOnly
            className="bg-muted"
            />
        </div>
            </div>
        <div className="grid gap-2">
          <Label htmlFor="tipo-pago">Tipo de Pago</Label>
          <Select defaultValue="ASEGURADO">
            <SelectTrigger id="tipo-pago">
              <SelectValue placeholder="Seleccionar tipo de pago" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ASEGURADO">ASEGURADO</SelectItem>
              {/* Add more options as needed */}
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="remesa-numero">Remesa Número</Label>
            <Input
              id="remesa-numero"
              type="number"
              defaultValue="0"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="fecha-remesa">Fecha Remesa</Label>
            <Input
              id="fecha-remesa"
              type="date"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

