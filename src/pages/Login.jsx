import React, { useRef, useState } from "react";
import bgImage from "../assets/bgimage.jpg";
import { validateSigninForm } from "../utils/validateSigninForm";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const mobile = useRef(null);

  const handleFormValidation = () => {
    const res = validateSigninForm(email.current.value, password.current.value);
    setErrorMessage(res);
    if (res) return;

    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}`);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}`);
        });
    }
  };

  return (
    <div className="relative min-h-screen min-w-screen flex items-center justify-center">
      <img
        src={bgImage}
        alt="background-image"
        className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
      />
      <div className="bg-black/85 w-[30rem] p-12 space-y-4 rounded-sm my-28">
        <h2 className="font-bold text-3xl pb-3 text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {!isSignIn && (
            <>
              <input
                ref={firstName}
                className="w-full py-3 px-2 border-1 rounded-lg bg-neutral-600/60"
                type="text"
                placeholder="First Name"
                required
              />
              <input
                ref={lastName}
                className="w-full py-3 px-2 border-1 rounded-lg bg-neutral-600/60"
                type="text"
                placeholder="Last Name"
                required
              />
              <input
                ref={mobile}
                className="w-full py-3 px-2 border-1 rounded-lg bg-neutral-600/60"
                type="number"
                placeholder="Mobile Number"
                required
              />{" "}
            </>
          )}
          <input
            ref={email}
            className="w-full py-3 px-2 border-1 rounded-lg bg-neutral-600/60"
            type={"email" || "number"}
            placeholder="Email or mobile number"
            required
          />
          <input
            ref={password}
            className="w-full py-3 px-2 border-1 rounded-lg bg-neutral-600/60"
            type="password"
            placeholder="Password"
            required
          />

          <p className="text-red-600 font-semibold">{errorMessage}</p>

          <button
            onClick={handleFormValidation}
            className="w-full py-3 px-2 bg-red-600 hover:bg-red-700 cursor-pointer font-semibold rounded-lg"
          >
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
