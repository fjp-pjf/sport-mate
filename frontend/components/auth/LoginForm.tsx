"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { SubmitHandler, useForm } from "react-hook-form";

// shadcn dependencies
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/schema/login.schema";

export default function LoginForm() {
  type LoginFormSchema = z.infer<typeof loginSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="p-10 flex-col">
        <h1 className="text-3xl font-black py-5 text-center">Sport Buddy</h1>
        <form
          className="flex flex-col gap-2 items-center text-white justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Field className="gap-1 pb-2">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              autoComplete="off"
              placeholder="your@email.com"
              {...register("email")}
            />
            <FieldError>{errors.email?.message}</FieldError>
          </Field>

          <Field className="gap-1 pb-2">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              autoComplete="off"
              placeholder="@wer!**123"
              {...register("password")}
            />
            <FieldError>{errors.password?.message}</FieldError>
          </Field>
          <button className="bg-[#db504a] font-bold p-2 border-1 border-[#db504a] rounded-md cursor-pointer w-80">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
