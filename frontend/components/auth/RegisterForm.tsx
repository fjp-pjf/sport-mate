"use client";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
  lastName: string;
  dob: string;
  email: string;
  phonenumber: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center p-10 bg-green-950 m-auto">
      <div className="flex flex-col gap-10">
        <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="First Name" {...register("firstName")} />
          <input placeholder="Last Name" {...register("lastName")} />
          <input placeholder="Email" {...register("email")} />
          <input placeholder="Phone Number" {...register("phonenumber")} />
          <input placeholder="DOB" {...register("dob")} />
          <label>Gender Selection</label>
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <input placeholder="Password" {...register("password")} />
          <input
            placeholder="Password COnfirmation"
            {...register("confirmPassword")}
          />
          <input type="submit" />
        </form>

        <button>Login with Google</button>
        <button>Login with Facebook</button>
      </div>
      <div>
        <Image src="/soccer.svg" alt="sport" width={400} height={100} />
      </div>
    </div>
  );
};

export default RegisterForm;
