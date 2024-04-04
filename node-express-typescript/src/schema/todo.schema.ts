import { z } from "zod";
export const createTodoSchema = z.object({
  text: z.string().min(8),
});

export const updateTodoSchema = z.object({
  text: z.string().min(8),
});

export type UpdateTodoType = z.infer<typeof updateTodoSchema>;
export type CreateTodoType = z.infer<typeof createTodoSchema>;
