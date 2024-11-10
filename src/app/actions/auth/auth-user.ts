"use server"

import { login } from "@/lib/auth/mok";
import { redirect } from "next/navigation";
import { z } from "zod";


export async function recoveryPassword(
  prevState: any,
  formData: FormData
): Promise<void> {
  const username = formData.get('username') as string


  redirect(`/login/recovery?message=${encodeURIComponent('Se ha enviado un correo con el enlace para recuperar tu contraseña.')}`)
}


export async function authenticate(
  prevState: any,
  formData: FormData
): Promise<void> {

  // Generar el schema de validación de los datos del formulario
  const loginSchema = z.object({
    usr: z.string().min(1, "El usuario es requerido"),
    pwd: z.string().min(1, "La contraseña es requerida"),
    sitioCod: z.number()
  });

  try {
    const usr = formData.get('username') as string;
    const pwd = formData.get('password') as string;

    const body = loginSchema.parse({
      usr,
      pwd,
      sitioCod: Number(process.env.SITIO_COD)
    });

    const res = await login(body);

    // Verificar si la respuesta es válida
    if (!res || !res.data || res.codigo !== 0) {
      redirect(`/login?message=${encodeURIComponent(res.mensaje || 'Usuario o contraseña incorrectos.')}`);
    }

    const queryParams = new URLSearchParams(res.data).toString();
    redirect(`/login/user-profile?idSession=${encodeURIComponent(queryParams)}`);

  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors.map(err => err.message).join(', ');
      redirect(`/login?message=${encodeURIComponent(errorMessage)}`);
    }
    redirect(`/login?message=${encodeURIComponent('Error al iniciar sesión')}`);
  }
}