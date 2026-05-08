import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username minimal 3 karakter")
    .max(32, "Username terlalu panjang")
    .regex(/^[a-z0-9]+$/, "Username hanya boleh huruf kecil dan angka"),
  password: z
    .string()
    .trim()
    .min(6, "Password minimal 6 karakter")
    .max(64, "Password terlalu panjang")
    .regex(/^[0-9]+$/, "Password hanya boleh angka"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
