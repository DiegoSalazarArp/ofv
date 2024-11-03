export type AuthResponse = {
    codigo: number
    mensaje: string
    mensajeExtra: null,
    data: string

}

export type BodyLogin = {
    usr: string
    pwd: string
    sitioCod: number
}


export type SessionResponse = {
    IdSesion: number,
    Descripcion: string,
    NombrePerfil: string,
    perfilcod: number
}


export type InfoUserResponse = {
    codigo: number,
    mensaje: string,
    mensajeExtra: string,
    data: {
        UsuCodigo: number,
        Usunombre: string,
        UsuRut: number,
        UsuMail: string,
        UsuId: string
    }
}