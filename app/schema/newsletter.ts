import { z } from "zod";

export const NewsletterFormSchema = z.object({
    email: z.string().email().transform((val) => val.toLowerCase())
  });