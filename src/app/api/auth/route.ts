import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function GET(request: Request) {
    cookies().delete('authjs.session-token')
    // redireccionar a la pagina de inicio
    redirect('/')
}
