import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-20">
        <div className="relative  w-full max-w-md border border-gray-300 shadow-md rounded-2xl p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link
            to="/"
            className="absolute right-4 top-4 text-xl font-bold text-gray-500"
          >
            ✕
          </Link>
          <h3 className="font-bold text-2xl mb-6 e">Sign Up</h3>
          <div className="mb-4">
            <span className="">Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter Your Name"
              className="px-3 py-2 outline-none border border-gray-300  rounded-md mt-1 w-full "
              {...register("name", { required: true })}
            />
             <br />
              {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="mb-4">
            <span className="">Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-3 py-2 outline-none border border-gray-300  rounded-md mt-1 w-full "
              {...register("email", { required: true })}
            />
             <br />
              {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <div className="mb-4">
            <span className="">Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="px-3 py-2 outline-none border border-gray-300  rounded-md mt-1 w-full"
              {...register("password", { required: true })}
            />
             <br />
              {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
          </div>

          <div className="flex justify-between items-center mt-6 gap-4">
            <button className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-200 text-white cursor-pointer">
              Sign Up
            </button>

            <div className="text-sm ">
              Have an account?{" "}
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="underline cursor-pointer text-blue-500"
              >
                Login
              </button>
              <Login />
            </div>
          </div>
    </form>
        </div>
      </div>
  );
};

export default Signup;
