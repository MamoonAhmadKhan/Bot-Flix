import React, { useRef, useState } from "react";
import bgImage from "../assets/bgimage.jpg";
import { validateSigninForm } from "../utils/validateSigninForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../toolkit/userSlice";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const mobile = useRef(null);
  const dispatch = useDispatch();

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
          updateProfile(user, {
            displayName: `${firstName.current.value} ${lastName.current.value}`,
            photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  return (
    <div className="relative max-md:bg-black min-h-screen min-w-screen flex items-center justify-center">
      <img
        src={bgImage}
        alt="background-image"
        className="max-md:hidden absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
      />
      <div className="bg-black/80 w-[30rem] max-md:bg-black max-md:w-full p-12 space-y-4 max-md:p-8 max-md:space-y-3 rounded-sm my-28 max-md:my-10 max-sm:my-9">
        <h2 className="font-bold text-3xl pb-3 max-md:text-2xl text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 max-md:space-y-3">
          {!isSignIn && (
            <>
              <input
                ref={firstName}
                className="w-full py-3 px-2 max-md:py-2 max-md:px-1 border-1 rounded-lg bg-neutral-600/60"
                type="text"
                placeholder="First Name"
                required
              />
              <input
                ref={lastName}
                className="w-full py-3 px-2 max-md:py-2 max-md:px-1 border-1 rounded-lg bg-neutral-600/60"
                type="text"
                placeholder="Last Name"
                required
              />
              <input
                ref={mobile}
                className="w-full py-3 px-2 max-md:py-2 max-md:px-1 border-1 rounded-lg bg-neutral-600/60"
                type="number"
                placeholder="Mobile Number"
                required
              />{" "}
            </>
          )}
          <input
            ref={email}
            className="w-full py-3 px-2 max-md:py-2 max-md:px-1 border-1 rounded-lg bg-neutral-600/60"
            type={"email" || "number"}
            placeholder="Email or mobile number"
            required
          />
          <input
            ref={password}
            className="w-full py-3 px-2 max-md:py-2 max-md:px-1 border-1 rounded-lg bg-neutral-600/60"
            type="password"
            placeholder="Password"
            required
          />

          <p className="text-red-600 font-semibold max-md:font-normal">{errorMessage}</p>

          <button
            onClick={handleFormValidation}
            className="w-full py-3 px-2 max-md:py-2 max-md:px-1 max-md:font-medium bg-red-600 hover:bg-red-700 cursor-pointer font-semibold rounded-lg"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="space-y-4 max-md:space-y-3">
          {isSignIn && (
            <>
              <p className="w-full py-3 px-2 max-md:py-2 max-md:px-1 text-center">OR</p>
              <button className="w-full py-3 px-2 max-md:py-2 max-md:px-1 max-md:font-medium font-semibold rounded-lg cursor-pointer bg-neutral-700 hover:bg-neutral-800">
                Use a sign-in code
              </button>
              <p className="w-full py-3 px-2 max-md:py-2 max-md:px-1 text-center cursor-pointer hover:opacity-60 underline">
                Forgot password?
              </p>
            </>
          )}
          <label className="">
            <input type="checkbox" />
            <span className="pl-3 max-md:pl-2">Remember me</span>
          </label>
          <p className="text-gray-400 pt-[12px] max-md:pt-[8px]">
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
