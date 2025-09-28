import React, { useState } from "react";
import bgImage from "../assets/bgimage.jpg";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-w-full min-h-full">
      <div className="absolute opacity-40">
        <img src={bgImage} alt="background-image" />
      </div>
      <div className="absolute bg-black/85 w-[30rem] p-12 my-28 mx-auto left-0 right-0 space-y-4 rounded-sm">
        <h2 className="font-bold text-3xl pb-3 text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <form className="space-y-4">
          {!isSignIn && (
            <>
              <input
                className="w-full py-3 px-2 border-1 rounded-lg bg-neutral-600/60"
                type="text"
                placeholder="First Name"
                required
              />
              <input
                className="w-full py-3 px-2 border-1 rounded-lg bg-neutral-600/60"
                type="text"
                placeholder="Last Name"
                required
              />
              <input
                className="w-full py-3 px-2 border-1 rounded-lg bg-neutral-600/60"
                type="number"
                placeholder="Mobile Number"
                required
              />{" "}
            </>
          )}
          <input
            className="w-full py-3 px-2 border-1 rounded-lg bg-neutral-600/60"
            type={"email" || "number"}
            placeholder="Email or mobile number"
            required
          />
          <input
            className="w-full py-3 px-2 border-1 rounded-lg bg-neutral-600/60"
            type="password"
            placeholder="Password"
            required
          />
          <button className="w-full py-3 px-2 bg-red-600 hover:bg-red-700 cursor-pointer font-semibold rounded-lg">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="space-y-4">
          {isSignIn && (
            <>
              <p className="w-full py-3 px-2 text-center">OR</p>
              <button className="w-full py-3 px-2 font-semibold rounded-lg cursor-pointer bg-neutral-700 hover:bg-neutral-800">
                Use a sign-in code
              </button>
              <p className="w-full py-3 px-2 text-center cursor-pointer hover:opacity-60 underline">
                Forgot password?
              </p>
            </>
          )}
          <label className="">
            <input type="checkbox" />
            <span className="pl-3">Remember me</span>
          </label>
          <p className="text-gray-400 pt-[12px]">
            {isSignIn ? "New to Botflix? " : "Already Registered? "}
            <span
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-white cursor-pointer hover:underline"
            >
              {isSignIn ? "Sign up now." : "Sign in"}
            </span>
          </p>
          <p className="text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
          <p className="text-blue-600 cursor-pointer">Learn more.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
