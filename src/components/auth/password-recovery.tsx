"use client"

import Link from "next/link"

import { recoveryPassword } from "@/app/actions/auth/auth-user"
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

export function PasswordRecoveryForm({ searchParams }: { searchParams: { message: string } }) {
    const [state, formAction] = useFormState(recoveryPassword, null)

    return (
        <div>
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Recuperar Contraseña</CardTitle>
                    <CardDescription>
                        Ingresa tu nombre de usuario para recuperar tu contraseña.
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
                            <Button variant="default" type="submit">
                                Recuperar Contraseña
                            </Button>
                        </div>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        Recordaste tu contraseña?{" "}
                        <Link href="/login" className="underline">
                            Volver al login
                        </Link>
                    </div>
                </CardContent>

            </Card>
            <div className="mt-2 mx-auto max-w-sm ">
                {searchParams?.message && (
                    <div className="flex items-center justify-center gap-2 my-2">
                        <div className="flex items-center py-4 px-4 w-full rounded-lg justify-center bg-green-200">
                            <p className="text-sm text-green-600"> {searchParams.message}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}