import {z} from 'zod';

export const UserSchema = z.object({
    username : z.string(),
    age : z.number(),
    notes: z.string().optional()
});