// Client auth input validator

import z from "zod";

export const LoginSchema = z.object({
    email: z.email({ message: "Invalid email"}),
    password: z.string().min(1, { message: "Password required" })
    .refine(val => /[A-Z]/.test(val))
    .refine(val => /[a-z]/.test(val)) 
    .refine(val => /[0-9]/.test(val)) 
    .refine(val => /[^A-Za-z0-9]/.test(val))
});