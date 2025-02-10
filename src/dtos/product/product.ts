import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  price: z.number().positive('Price must be greater than 0'),
  stock: z.number().nonnegative(),
  description: z.string().optional(),
  imageUrl: z.string().url().optional(),
});

export type CreateProductDto = z.infer<typeof productSchema>;
export type UpdateProductDto = z.infer<typeof productSchema>;

