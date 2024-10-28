import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getSessions } from "@/lib/auth/mok";
import { redirect } from "next/navigation";

export async function SelectProfile({ id }: { id: string }) {
  const sessions = await getSessions(id);

  if (sessions.Message) redirect(`/login?message=${sessions.Message}: sesiones`)

  return (
    <div className="flex items-center justify-center h-screen"> {/* Centro la card en la pantalla */}
      <Card className="mx-auto max-w-sm overflow-auto" style={{ maxHeight: '80vh' }}> {/* Añado scroll y limito la altura */}
        <CardHeader>
          <CardTitle className="text-2xl">Select your profile</CardTitle>
          <CardDescription>
            Bienvenido a Oficina Virtual. Por favor, inicia sesión.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 items-center justify-center">
            {sessions.data.map((perfil: any) => (
              <Button key={perfil.IdSesiond} className="w-full">
                {perfil.NombrePerfil}
              </Button>
            ))}
          </div>
          <div className="mt-4 text-center text-sm">
            <Link href="/" className="underline">
              Volver a la página de inicio
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
