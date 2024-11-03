
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { generateJWT, getInfoUser, getMenu, getSubmenu } from "./lib/auth/mok"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        idSesion: {},
        token: {},
      },
      authorize: async (credentials) => {

        const jwt = await generateJWT(credentials.idSesion as string, credentials.token as string)

        const infoUser = await getInfoUser(jwt.data)

        const info: any = {
          UsuCodigo: infoUser.data.UsuCodigo,
          UsuNombre: infoUser.data.Usunombre,
          UsuRut: infoUser.data.UsuRut,
          UsuMail: infoUser.data.UsuMail,
          UsuId: infoUser.data.UsuId,
          jwt: jwt.data
        }


        const finalUser = {
          name: info
        }

        return finalUser


      },
    }),
  ],
  callbacks: {
    async session({ session }: { session: any, token: any }) {
      session.user.menu = await getMenu(session.user.name.jwt)
      session.user.submenu = await getSubmenu(31, session.user.name.jwt)
      return session
    },
    async redirect({ baseUrl }: { url: string, baseUrl: string }) {
      return `${baseUrl}/dashboard`
    }
  },
})
