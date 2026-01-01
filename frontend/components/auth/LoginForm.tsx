"use client";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="p-10 flex-col">
        <h1 className="text-3xl font-black py-5 text-center">Sport Buddy</h1>
        <form
          className="flex flex-col gap-2 items-center text-white justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="px-[10px] py-[8px] border-1 rounded-md border-[#db504a] bg-black text-white w-80"
            placeholder="Email"
            {...register("email")}
          />
          <input
            className="px-[10px] py-[8px] border-1 rounded-md border-[#db504a] bg-black text-white w-80"
            placeholder="Password"
            {...register("password")}
          />
          <button className="bg-[#db504a] font-bold p-2 border-1 border-[#db504a] rounded-md cursor-pointer w-80">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
