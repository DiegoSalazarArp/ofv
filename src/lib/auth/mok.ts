'use server'

import { AuthResponse, BodyLogin, InfoUserResponse, SessionResponse } from "./auth.d"

/**
 * Envía un correo de recuperación de contraseña al usuario especificado
 * @param username - Nombre de usuario que solicita recuperar contraseña
 * @returns Respuesta de la API indicando si se envió el correo exitosamente
 */
export const recoveryPassword = async (username: string) => {
  try {
    const res = await fetch(`https://apisesiones.grupomok.com/api/sendRecoveryEmail?UsuId=${username}`)
    return await res.json()
  } catch (error) {
    throw new Error('Error al enviar el correo de recuperación')
  }
}

/**
 * Realiza el inicio de sesión del usuario
 * @param body - Datos de autenticación del usuario (username y password)
 * @returns Respuesta con el token y datos de la sesión
 */
export const login = async (body: BodyLogin): Promise<AuthResponse> => {
  try {
    const res = await fetch("https://apisesiones.grupomok.com/api/getLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    return await res.json()
  } catch (error) {
    throw new Error('Error al iniciar sesión: ' + error)
  }
}

/**
 * Obtiene las sesiones activas de un usuario
 * @param id - Token de identificación del usuario
 * @returns Lista de sesiones activas del usuario
 * @throws Error si no se pueden obtener las sesiones
 */
export const getSessions = async (id: string): Promise<SessionResponse[]> => {
  try {
    const response = await fetch(`https://apisesiones.grupomok.com/api/getSesiones?tkn=${id}`, { cache: 'no-store' });
    const data = await response.json();

    if (data) {
      return data.data;
    }

    throw new Error('No se pudieron obtener las sesiones');
  } catch (error) {
    throw new Error('Error al obtener las sesiones')
  }
}

/**
 * Genera un nuevo JWT (JSON Web Token)
 * @param id - ID de la sesión
 * @param token - Token de autenticación
 * @returns Nuevo JWT generado
 */
export const generateJWT = async (idSesion: string, tkn: string): Promise<AuthResponse> => {
  try {
    const res = await fetch(`https://apisesiones.grupomok.com/api/generateJWT`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idSesion,
        tkn
      }),
    })
    return await res.json()
  } catch (error) {
    throw new Error('Error al generar el JWT')
  }
}

/**
 * Obtiene la información del usuario
 * @param token - Token de autenticación
 * @returns Datos del usuario
 */
export const getInfoUser = async (token: string): Promise<InfoUserResponse> => {
  try {
    const res = await fetch(`https://apisesiones.grupomok.com/api/getInfoUser`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
    return await res.json()
  } catch (error) {
    throw new Error('Error al obtener la información del usuario')
  }
}

/**
 * Obtiene el menú principal
 * @param token - Token de autenticación
 * @returns Estructura del menú principal
 * @throws Error si hay problemas al obtener el menú
 */
export const getMenu = async (token: string) => {
  try {
    const response = await fetch(`https://apisesiones.grupomok.com/api/getMenu`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      mode: 'cors',
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error('Error al obtener el menú')
  }
}

/**
 * Obtiene los items de un submenú específico
 * @param menuCod - Código del menú del cual obtener los items
 * @param token - Token de autenticación
 * @returns Items del submenú solicitado
 * @throws Error si hay problemas al obtener el submenú
 */
export async function getSubmenu(menuCod: number, token: string) {
  try {
    const response = await fetch(`https://apisesiones.grupomok.com/api/getMenuItems?menuCod=${menuCod}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      mode: 'cors',
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error('Error al obtener el submenú')
  }
}


export async function getFilter(idFiltro: string, token: string) {
  try {
    const response = await fetch(`https://apisesiones.grupomok.com/api/getFilterValue?idFiltro=${idFiltro}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json()
    return data.data
  } catch (error) {
    throw new Error(`Error al obtener el filtro: ${error}`)
  }
}
