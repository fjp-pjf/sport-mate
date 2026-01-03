import * as z from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(2, "Name is too short"),
    email: z
      .string()
      .regex(
        /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
        {
          message: "Invalid email format",
        }
      ),
    phonenumber: z.string().regex(/^\d{10,15}$/, {
      message: "Invalid phone number format",
    }),
    dob: z
      .date({
        message: "Date of birth is required",
      })
      .transform((val) => new Date(val))
      .refine((date) => !isNaN(date.getTime()), {
        message: "Invalid date",
      })
      .refine(
        (date) => {
          const today = new Date();
          const minAgeDate = new Date(
            today.getFullYear() - 18,
            today.getMonth(),
            today.getDate()
          );
          return date <= minAgeDate;
        },
        {
          message: "You must be at least 18 years old",
        }
      ),

    gender: z.enum(["male", "female", "others"]),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(30, "Password length is too long"),

    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
