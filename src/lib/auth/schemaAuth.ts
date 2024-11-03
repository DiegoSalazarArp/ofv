import z from "zod";

export const loginSchema = z.object({
    username: z.string().min(1, "El usuario es requerido"),
    password: z.string().min(1, "La contraseña es requerida")
});

export const loginResponseSchema = z.object({
    codigo: z.number(),
    data: z.string(),
});
