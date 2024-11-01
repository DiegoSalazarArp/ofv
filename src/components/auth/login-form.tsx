"use client"

import Link from "next/link"

import { authenticate } from "@/app/actions/auth/auth-user"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormState } from "react-dom"

export function LoginForm({ searchParams }: { searchParams: { message: string } }) {

  const [_, formAction] = useFormState(authenticate, null)

  return (
    <div>


      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Bienvenido a Oficina Virtual. Por favor, inicia sesión.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Escriba su nombre de usuario"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/login/recovery" className="ml-auto inline-block text-sm underline">
                    Olvidaste tu contraseña?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" placeholder="Escriba su contraseña" required />
              </div>
              <Button variant={"default"}>
                Login
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            No tienes acceso?{" "}
            <Link href="" className="underline">
              Crear cuenta
            </Link>
          </div>

        </CardContent>
      </Card>
      {
        searchParams?.message && (
          <div className="flex items-center justify-center gap-2 my-2">
            <div className="flex items-center py-2 px-4 w-full rounded-md justify-center bg-red-100">
              <p className="text-red-400">{searchParams?.message}</p>
            </div>
          </div>
        )
      }

    </div>
  )
}
