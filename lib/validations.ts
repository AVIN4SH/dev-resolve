import { z } from "zod";

export const QuestionsSchema = z.object({
  title: z.string().min(5).max(130),
  explaination: z.string().min(20).max(1000),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});
