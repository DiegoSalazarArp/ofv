import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Search } from 'lucide-react'

export default function InsuranceForm() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <form className="space-y-4">
          {/* Rut Asegurado with Search */}
          <div className="flex gap-2 items-start">
            <div className="grid gap-1.5 flex-1">
              <Label htmlFor="rut">Rut Asegurado</Label>
              <div className="flex gap-2">
                <Input type="number" id="rut" defaultValue="0" className="w-32" />
                <Button variant="secondary" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid gap-1.5 flex-1">
              <Label htmlFor="tipo-pago">Tipo de Pago</Label>
              <Select defaultValue="ASEGURADO">
                <SelectTrigger id="tipo-pago">
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ASEGURADO">ASEGURADO</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Name and Beneficiary */}
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="nombre">Nombre del Asegurado</Label>
              <Input id="nombre" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="beneficiario">Beneficiario</Label>
              <Input id="beneficiario" />
            </div>
          </div>

          {/* Solicitud Number */}
          <div className="flex gap-2 items-end">
            <div className="grid gap-1.5">
              <Label htmlFor="solicitud">Solicitud N°</Label>
              <Input id="solicitud" className="w-48" />
            </div>
            <Button variant="secondary">
              Obtener N° Solicitud
            </Button>
          </div>

          {/* Amounts */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor="monto">Monto Reclamado</Label>
              <Input type="number" id="monto" defaultValue="0" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="documentos">Cantidad de Documentos</Label>
              <Input type="number" id="documentos" defaultValue="0" />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="receta" />
              <Label htmlFor="receta">Receta a Permanencia</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="rx" />
              <Label htmlFor="rx">Rx.</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="examenes" />
              <Label htmlFor="examenes">Exámenes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="fld" />
              <Label htmlFor="fld">FLD</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="autor" />
              <Label htmlFor="autor">Autor. Especial</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="pago" />
              <Label htmlFor="pago">Pago Comercial</Label>
            </div>
          </div>

          {/* Expense Type */}
          <div className="grid gap-1.5">
            <Label htmlFor="tipo-gasto">Tipo de Gasto</Label>
            <Select defaultValue="salud">
              <SelectTrigger id="tipo-gasto">
                <SelectValue placeholder="Seleccionar tipo de gasto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="salud">Salud</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Observations */}
          <div className="grid gap-1.5">
            <Label htmlFor="observacion">Observación</Label>
            <Textarea id="observacion" rows={4} />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 justify-end">
            <Button type="submit">Guardar</Button>
            <Button type="reset" variant="outline">Limpiar</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

