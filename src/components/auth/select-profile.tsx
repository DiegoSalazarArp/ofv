import { signIn } from "@/auth";
import { getSessions } from "@/lib/auth/mok";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export async function SelectProfile({ searchParams }: { searchParams: { idSession: string } }) {
  const sessions = await getSessions(searchParams.idSession);

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Select your profile</CardTitle>
          <CardDescription>
            Bienvenido a Oficina Virtual. Por favor, inicia sesión.
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-auto max-h-[60vh]">
          <form action={async (formData) => {
            'use server'
            const idSesion = formData.get('idSesion') as string
            await signIn('credentials', { idSesion, token: searchParams.idSession })
          }}>

            <div className="grid gap-4 items-center justify-center">
              {sessions.map((perfil: any) => (
                <div key={perfil.IdSesion}>
                  <Button key={perfil.IdSesion} name="idSesion" value={perfil.IdSesion} type="submit" className="w-full">
                    {perfil.NombrePerfil}
                  </Button>
                </div>
              ))}
            </div>
          </form>
        </CardContent>
        <div className="flex items-center justify-center my-4 text-center text-sm">
          <Link href="/" className="underline">
            Volver a la página de inicio
          </Link>
        </div>
      </Card>
    </div>
  );
}
