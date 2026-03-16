import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="relative  w-full max-w-md border border-gray-300 shadow-md rounded-2xl p-6">
           <Link
          to="/"
          className="absolute right-4 top-4 text-xl font-bold text-gray-500"
        >
          ✕
        </Link>
        <h3 className="font-bold text-2xl mb-6 e">
          Sign Up
        </h3>
        <div className="mb-4">
          <span className="">Name</span>
          <br />
          <input
            type="text"
            placeholder="Enter Your Name"
            className="px-3 py-2 outline-none border border-gray-300  rounded-md mt-1 w-full "
          />
        </div>
        <div className="mb-4">
          <span className="">Email</span>
          <br />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-3 py-2 outline-none border border-gray-300  rounded-md mt-1 w-full "
          />
        </div>

        <div className="mb-4">
          <span className="">Password</span>
          <br />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="px-3 py-2 outline-none border border-gray-300  rounded-md mt-1 w-full"
          />
        </div>

        <div className="flex justify-between items-center mt-6 gap-4">
          <button className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-200 text-white cursor-pointer">
            Sign Up
          </button>

          <p className="text-sm ">
            Have an account?{" "}
            <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="underline cursor-pointer text-blue-500">
              Login
            </button>
            <Login/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;