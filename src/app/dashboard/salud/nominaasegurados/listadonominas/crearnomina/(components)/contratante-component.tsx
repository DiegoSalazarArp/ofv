'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContratanteComponent() {
  const [broker, setBroker] = useState("")
  const [policy, setPolicy] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ broker, policy })
    // Handle form submission here
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <div className=''>

        <Label htmlFor="broker">Contratante</Label>
        <Select onValueChange={setBroker} value={broker}>
          <SelectTrigger id="broker">
            <SelectValue placeholder="Seleccionar corredor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="agencias-briner">
              AGENCIAS BRINER CORREDORES DE SEGUROS SPA
            </SelectItem>
          </SelectContent>
        </Select>

      </div>
      <div>

        <Label htmlFor="policy">Póliza</Label>
        <Input
          id="policy"
          placeholder="Ingrese número de póliza"
          value={policy}
          onChange={(e) => setPolicy(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full">
        Buscar
      </Button>
    </form>
  )
}

