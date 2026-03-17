import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box space-y-4">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="my-4">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
                className="px-3 py-2 outline-none border rounded-md mt-1 w-80"
              />
              <br />
              {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="my-4">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
                className="px-3 py-2 outline-none border rounded-md mt-1 w-80"
              />
              <br />
              {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="flex justify-around items-center mt-6">
              <button className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-200 text-white cursor-pointer">
                Login
              </button>
              <p>
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_3").close()}
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
