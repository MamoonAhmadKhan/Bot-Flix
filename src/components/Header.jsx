import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Error from "./Error";

const Header = (props) => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        <Error err={error} />
      });
  };

  return (
    <div className="w-full absolute z-50 bg-gradient-to-b flex justify-between px-40 py-4">
      <div className="flex flex-col items-center justify-center -space-y-4">
        <h1
          className="font-extrabold text-5xl font-mono text-red-600 hover:cursor-pointer"
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
        <h3 className="text-lg text-amber-400 font-serif z-50">
          Stream with AI
        </h3>
      </div>
      {props.btn && (
        <div className="flex items-center justify-center px-2 space-x-5">
          <h2 className="font-bold text-lg">{user?.displayName}</h2>
          <img 
          className="h-13 w-13 rounded-full"
          src={user?.photoURL} 
          alt="user-photo" 
          />
        <button
          onClick={handleSignOut}
          className={`font-semibold rounded-md text-sm h-9 py-0.5 px-4 font-sans bg-red-600 hover:bg-red-700 hover:cursor-pointer`}
        >
          {props?.btn}
        </button>
        </div>
      )}
    </div>
  );
};

export default Header;
