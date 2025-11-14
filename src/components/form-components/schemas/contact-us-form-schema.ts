import z from "zod";

export type ContactUsFormSchemaData = z.infer<typeof ContactUsFormSchema>;
export const ContactUsFormSchema = z.object({
  name: z.string().min(1, { message: "Please provide your name" }),
  email: z.email({ message: "Please provide a valid email" }),
  contactNumber: z
    .string()
    .min(8, { message: "Please provide a valid phone number" })
    .optional(),
  howDidYouFindUs: z.enum(["SOCIAL", "FRIEND", "AD", "OTHERS"]),
  description: z.string().min(1, { message: "Please provide a description" }),
});
