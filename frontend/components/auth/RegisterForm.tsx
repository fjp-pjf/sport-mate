"use client";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

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
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center m-20 border-2 bg-[#e56b6f] border-[#e56b6f] rounded-md">
        <div className="flex justify-center items-center flex-col p-8 gap-2 border-[#e56b6f] w-100 rounded-l">
          <form
            className="flex flex-col gap-1 items-center text-black justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="px-[6px] py-[2px] border-2 rounded-md text-black bg-white  border-[#e56b6f] w-60"
              placeholder="First name"
              {...register("firstName")}
            />
            <input
              className="px-[6px] py-[2px] border-2 rounded-md border-[#e56b6f] bg-white text-black w-60"
              placeholder="Last name"
              {...register("lastName")}
            />
            <input
              className="px-[6px] py-[2px] border-2 rounded-md border-[#e56b6f] bg-white text-black w-60"
              placeholder="Email"
              {...register("email")}
            />
            <input
              className="px-[6px] py-[2px] border-2 rounded-md border-[#e56b6f] bg-white text-black w-60"
              placeholder="Phone number"
              {...register("phonenumber")}
            />
            <input
              className="px-[6px] py-[2px] border-2 rounded-md border-[#e56b6f] bg-white text-black w-60"
              placeholder="DOB"
              {...register("dob")}
            />
            <select
              className="px-[6px] py-[2px] border-2 rounded-md border-[#e56b6f] bg-white text-black w-60"
              {...register("gender")}
            >
              <option value="female">Gender</option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            <input
              className="px-[6px] py-[2px] border-2 rounded-md border-[#e56b6f] bg-white text-black w-60"
              placeholder="Password"
              {...register("password")}
            />
            <input
              className="px-[6px] py-[2px] border-2 rounded-md border-[#e56b6f] bg-white text-black w-60"
              placeholder="Password Confirmation"
              {...register("confirmPassword")}
            />
            <button className="font-bold bg-black p-2 text-[#e56b6f] rounded-md cursor-pointer w-60">
              Register
            </button>
          </form>

          <p className="text-black font-black">Or</p>

          <button className="flex justify-center items-center gap-2 font-medium bg-black p-2 text-[#e56b6f] rounded-md cursor-pointer w-60">
            <FaGoogle />
            Login with Google
          </button>
          <button className="flex justify-center items-center gap-2 font-medium bg-black p-2 text-[#e56b6f] rounded-md cursor-pointer w-60">
            <FaFacebookSquare />
            Login with Facebook
          </button>
        </div>
        <div className="px-5">
          <Image src="/sport-mate.svg" alt="sport" width={400} height={100} />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
