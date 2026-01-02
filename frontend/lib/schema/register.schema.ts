import * as z from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(2, "Name is too short"),
    email: z.email({
      pattern:
        /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
    }),
    phonenumber: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Invalid phone number"),
    dob: z.date({
      error: "Date of birth is required",
    }),
    gender: z.enum(["male", "female", "others"]),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(30, "Password length is too long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
