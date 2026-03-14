import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center flex-col md:flex-row container px-4 md:px-0">
        <div className="w-full md:w-[50%] mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              soluta quam odit maxime sequi debitis distinctio consectetur
              maiores, similique dolores ?
            </p>
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="Enter your Email to login"
                required
              />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Login</button>
        </div>
        <div className="w-full md:w-[50%]">hdfleurowrciwtwruiworel</div>
      </div>
    </div>
  );
};

export default Banner;
