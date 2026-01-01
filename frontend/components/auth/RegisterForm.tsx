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
      <div className="flex justify-center items-center m-20 py-2">
        <div className="flex flex-row">
          <div className="flex justify-center items-center flex-col px-8 py-4 gap-2">
            <form
              className="flex flex-col gap-1 items-center text-white justify-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="px-[10px] py-[8px] border-1 rounded-md border-[#db504a] bg-black text-white w-80"
                placeholder="First name"
                {...register("firstName")}
              />
              <input
                className="px-[10px] py-[8px] border-1 rounded-md border-[#db504a] bg-black text-white w-80"
                placeholder="Last name"
                {...register("lastName")}
              />
              <input
                className="px-[10px] py-[8px] border-1 rounded-md border-[#db504a] bg-black text-white w-80"
                placeholder="Email"
                {...register("email")}
              />
              <input
                className="px-[10px] py-[8px] border-1 rounded-md border-[#db504a] bg-black text-white w-80"
                placeholder="Phone number"
                {...register("phonenumber")}
              />
              <input
                className="px-[10px] py-[8px] border-1 rounded-md border-[#db504a] bg-black text-white w-80"
                placeholder="DOB"
                {...register("dob")}
              />
              <select
                className="px-[10px] py-[8px] border-1 rounded-md border-[#db504a] bg-black text-white w-80"
                {...register("gender")}
              >
                <option value="female">Gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
              <input
                className="px-[10px] py-[8px] border-1 rounded-md border-[#db504a] bg-black text-white w-80"
                placeholder="Password"
                {...register("password")}
              />
              <input
                className="px-[10px] py-[8px] border-1 rounded-md border-[#db504a] bg-black text-white w-80"
                placeholder="Password Confirmation"
                {...register("confirmPassword")}
              />
              <button className="font-bold bg-[#db504a] p-2 border-1 border-[#db504a] rounded-md cursor-pointer w-80">
                Register
              </button>
            </form>

            <p className="font-black">Or</p>

            <button className="flex justify-center items-center gap-2 font-medium bg-[#db504a] p-2 border-1 border-[#db504a] rounded-md cursor-pointer w-80">
              <FaGoogle />
              Login with Google
            </button>
            <button className="flex justify-center items-center gap-2 font-medium bg-[#db504a] p-2 border-1 border-[#db504a] rounded-md cursor-pointer w-80">
              <FaFacebookSquare />
              Login with Facebook
            </button>
          </div>

          <div className="flex flex-col gap-10 px-5">
            <h1 className="pb-6 text-5xl font-black text-center">
              Sports Buddy
            </h1>
            <Image src="/sport-mate.svg" alt="sport" width={400} height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
