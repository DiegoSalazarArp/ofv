import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SelectProfile() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Select your profile</CardTitle>
        <CardDescription>
          Bienvenido a Oficina Virtual. Por favor, inicia sesión.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Button type="submit" className="w-full">
            Administrador SURA
          </Button>
          <Button type="submit" className="w-full">
            Administrador Compañía BCI
          </Button>
          <Button type="submit" className="w-full">
            Caja los Andes - Compañía
          </Button>

        </div>
        <div className="mt-4 text-center text-sm">
          <Link href="/" className="underline">
            Volver a la página de inicio
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
