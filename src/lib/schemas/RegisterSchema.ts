import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters',
    })
    .max(50),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
