"use client";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { registerSchema } from "@/lib/schema/register.schema";

// shadcn dependencies
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Calendar } from "../ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const RegisterForm = () => {
  type RegisterFormData = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => console.log(data);

  const [date, setDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false);

  console.log("errors: ", errors);

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center m-20 py-2">
        <div className="flex flex-row">
          <div className="flex justify-center items-center flex-col px-8 py-4 gap-2">
            <form
              className="flex flex-col gap-1 items-center text-white justify-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Field className="gap-1 pb-2 pb-2">
                <FieldLabel htmlFor="fullName">Full name</FieldLabel>
                <Input
                  id="fullName"
                  autoComplete="off"
                  placeholder="Jensen Ackles"
                  {...register("fullName")}
                />
                <FieldError>{errors.fullName?.message}</FieldError>
              </Field>

              <Field className="gap-1 pb-2">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  autoComplete="off"
                  placeholder="Your@email.com"
                  {...register("email")}
                />
                <FieldError>{errors.email?.message}</FieldError>
              </Field>

              <Field className="gap-1 pb-2">
                <FieldLabel htmlFor="phonenumber">Phone number</FieldLabel>
                <Input
                  id="phonenumber"
                  autoComplete="off"
                  placeholder="123-(456)-7890"
                  {...register("phonenumber")}
                />
                <FieldError>{errors.phonenumber?.message}</FieldError>
              </Field>

              <Field className="gap-1 pb-2">
                <FieldLabel htmlFor="dob">Date of birth</FieldLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="date"
                      className="w-48 justify-between font-normal"
                    >
                      {date ? date.toLocaleDateString() : "Select date"}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <Calendar
                      id="dob"
                      mode="single"
                      selected={date}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        if (!date) return;

                        setDate(date);
                        setValue("dob", date, {
                          shouldValidate: true,
                          shouldDirty: true,
                        });
                        setOpen(false);
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <FieldError>{errors.dob?.message}</FieldError>
              </Field>

              <Field className="gap-1 pb-2">
                <FieldLabel htmlFor="gender">Select your gender</FieldLabel>
                <Select
                  onValueChange={(value) =>
                    setValue("gender", value as "male" | "female" | "others", {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <FieldError>{errors.gender?.message}</FieldError>
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

              <Field className="gap-1 pb-2">
                <FieldLabel htmlFor="confirmPassword">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirmPassword"
                  autoComplete="off"
                  placeholder="@wer!**123"
                  {...register("confirmPassword")}
                />
                <FieldError>{errors.confirmPassword?.message}</FieldError>
              </Field>

              <button className="font-bold bg-[#db504a] p-2 border-1 border-[#db504a] rounded-md cursor-pointer w-80">
                Register
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center p-2">
            <div className="h-60 w-[1px] bg-gray-600"></div>
            <div className="font-black">Or</div>
            <div className="h-60 w-[1px] bg-gray-600"></div>
          </div>

          <div className="flex flex-col gap-2 px-5">
            <h1 className="pb-2 text-5xl font-black text-center">
              Sports Buddy
            </h1>
            <Image src="/sport-mate.svg" alt="sport" width={394} height={100} />
            <button className="flex justify-center items-center gap-2 font-medium bg-[#db504a] p-2 border-1 border-[#db504a] rounded-md cursor-pointer w-100">
              <FaGoogle />
              Login with Google
            </button>
            <button className="flex justify-center items-center gap-2 font-medium bg-[#db504a] p-2 border-1 border-[#db504a] rounded-md cursor-pointer w-100">
              <FaFacebookSquare />
              Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
