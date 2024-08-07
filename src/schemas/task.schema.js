import {z} from 'zod';

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'Title is required'
    }),
    description: z.string({
        required_error: 'Description is required'
    }),
    category: z.string().default('other').optional(),
    done: z.boolean().default(false),
    date: z.string().datetime().optional(),
    active: z.boolean().default(true)
   
});