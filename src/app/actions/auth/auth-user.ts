"use server"

import { login } from "@/lib/auth/mok";
import { redirect } from "next/navigation";


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
  const usr = formData.get('username') as string
  const pwd = formData.get('password') as string

  const body = {
    usr,
    pwd,
    sitioCod: Number(process.env.SITIO_COD)
  }

  const res = await login(body)

  // Verificar si la respuesta es válida
  if (!res || !res.data || res.codigo !== 0) {
    redirect(`/login?message=${encodeURIComponent('Usuario o contraseña incorrectos.')}`)
  }

  const queryParams = new URLSearchParams(res.data).toString()
  redirect(`/login/user-profile?idSession=${encodeURIComponent(queryParams)}`)
}