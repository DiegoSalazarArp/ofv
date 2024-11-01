"use server"

import { login, recoveryPassword as recoveryPasswordMok } from "@/lib/auth/mok";
import { redirect } from "next/navigation";


export async function recoveryPassword(prevState: any, formData: FormData) {
  const username = formData.get('username') as string
  const res = await recoveryPasswordMok(username)


  console.log({ res })
}


export async function authenticate(prevState: any, formData: FormData) {
  const usr = formData.get('username') as string
  const pwd = formData.get('password') as string

  const body = {
    usr,
    pwd,
    sitioCod: 24
  }

  const res = await login(body)


  // Verificar si la respuesta es válida
  if (!res || !res.data || res.codigo !== 0) {
    return;
  }

  const queryParams = new URLSearchParams(res.data).toString()
  redirect(`/login/user-profile?idSession=${encodeURIComponent(queryParams)}`)

}