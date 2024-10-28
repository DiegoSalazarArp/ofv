"use server"

import { login as Login } from "@/lib/auth/mok";
import { redirect } from "next/navigation";

export async function authenticateUserMOK(prevState: any, formData: FormData) {

  // get the values from the form
  const { username, password } = Object.fromEntries(formData) as { username: string, password: string };

  // 1.- Fetch the user data from the API
  const login = await Login(username, password)

  if (login.codigo === -1) redirect(`/login?message=${login.mensaje}`)

  // 2.- Redirect to the user profile page with the data id token 
  redirect(`/login/user-profile?id=${login.data}`)
}

