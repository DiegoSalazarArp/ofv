/**
 * Configuración de autenticación usando NextAuth
 * @module auth
 */

import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { generateJWT, getFilter, getInfoUser, getMenu, getSubmenu } from "./lib/auth/mok"

/**
 * Exporta las funciones y handlers de autenticación configurados con NextAuth
 * @type {Object}
 * @property {Function} handlers - Manejadores de rutas de autenticación
 * @property {Function} signIn - Función para iniciar sesión
 * @property {Function} signOut - Función para cerrar sesión
 * @property {Function} auth - Función para obtener el estado de autenticación
 */
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        idSesion: {}, // ID de sesión del usuario
        token: {}, // Token de autenticación
      },
      /**
       * Autoriza las credenciales del usuario
       * @param {Object} credentials - Credenciales del usuario
       * @param {string} credentials.idSesion - ID de sesión
       * @param {string} credentials.token - Token de autenticación
       * @returns {Promise<Object>} Información del usuario autenticado
       */
      authorize: async (credentials) => {
        const jwt = await generateJWT(credentials.idSesion as string, credentials.token as string)
        const infoUser = await getInfoUser(jwt.data)

        const info: any = {
          UsuCodigo: infoUser.data.UsuCodigo,
          UsuNombre: infoUser.data.Usunombre,
          UsuRut: infoUser.data.UsuRut,
          UsuMail: infoUser.data.UsuMail,
          UsuId: infoUser.data.UsuId,
          jwt: jwt.data,
        }

        const finalUser = {
          name: info
        }

        return finalUser
      },
    }),
  ],
  callbacks: {
    /**
     * Callback ejecutado en cada sesión para agregar información adicional
     * @param {Object} params - Parámetros de la sesión
     * @param {Object} params.session - Objeto de sesión actual
     * @returns {Promise<Object>} Sesión actualizada con menú y filtros
     */
    async session({ session }: { session: any, token: any }) {
      session.user.menu = await getMenu(session.user.name.jwt)
      session.user.submenu = await getSubmenu(31, session.user.name.jwt)
      session.user.codcia = await getFilter(process.env.FILTRO_COD!, session.user.name.jwt)
      return session
    },
    /**
     * Callback para manejar la redirección después del login
     * @param {Object} params - Parámetros de redirección
     * @param {string} params.baseUrl - URL base de la aplicación
     * @returns {string} URL de redirección al dashboard
     */
    async redirect({ baseUrl }: { url: string, baseUrl: string }) {
      return `${baseUrl}/dashboard`
    }
  },
})
