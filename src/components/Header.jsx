import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Error from "./Error";

const Header = () => {
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        <Error err={error} />;
      });
  };

  return (
    <div className="w-full absolute z-50 bg-gradient-to-b flex justify-between px-10 py-3 max-sm:px-5 max-sm:py-2">
      <div className="flex flex-col items-center justify-center -space-y-4">
        <h1
          className="font-extrabold text-5xl font-mono text-red-600 hover:cursor-pointer max-md:font-bold max-md:text-3xl"
          style={{
            textShadow: `
      0px 2px 2px rgba(0,0,0,0.3),
      0px 4px 4px rgba(0,0,0,0.3),
      0px 6px 6px rgba(0,0,0,0.3)
    `,
            transform: "perspective(500px) rotateX(10deg)",
          }}
        >
          BOTFLIX
        </h1>
        <h3 className="text-lg text-amber-400 font-serif z-50 max-md:text-sm">
          Stream with AI
        </h3>
      </div>
      {user && (
        <div className="flex items-center justify-center px-2 space-x-5 max-md:px-1 max-lg:space-x-3 max-md:space-x-2">
          <h2 className="font-bold max-md:hidden text-lg max-lg:text-sm max-lg:font-medium">{user?.displayName}</h2>
          <img
            className="h-10 w-10 rounded-sm max-md:h-8 max-md:w-8"
            src={user?.photoURL}
            alt="user-photo"
          />
          <button
            onClick={handleSignOut}
            className="font-semibold max-md:font-medium rounded-md text-sm h-9 max-md:h-7 max-md:px-2 py-0.5 px-4 font-sans bg-red-600 hover:bg-red-700 hover:cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
