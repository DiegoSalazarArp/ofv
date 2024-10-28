import { redirect } from "next/navigation";

export function authenticateUserMOK() {
  redirect("/login?message=Usuario autenticado")
}