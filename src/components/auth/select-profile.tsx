import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getSessions } from "@/lib/auth/mok";

export async function SelectProfile({ id }: { id: string }) {
  const sessions = await getSessions(id);
  console.log(sessions);
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Select your profile</CardTitle>
          <CardDescription>
            Bienvenido a Oficina Virtual. Por favor, inicia sesión.
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-auto" style={{ maxHeight: '60vh' }}> {/* Solo el CardContent es desplazable */}
          <div className="grid gap-4 items-center justify-center">
            {sessions.data.map((perfil: any) => (
              <Button key={perfil.IdSesion} className="w-full">
                {perfil.NombrePerfil}
              </Button>
            ))}
          </div>
        </CardContent>
        <div className="my-4 text-center text-sm">
          <Link href="/" className="underline">
            Volver a la página de inicio
          </Link>
        </div>
      </Card>
    </div>
  );
}
