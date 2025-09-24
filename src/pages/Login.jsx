import React from 'react';
import bgImage from '../assets/bgimage.jpg';

const Login = () => {
  return (
    <div>
    <div className='absolute opacity-40'>
        <img src={bgImage} alt="background-image" />
    </div>
    <div className='absolute bg-black/85 w-[30rem] p-12 my-28 mx-auto left-0 right-0 space-y-4 rounded-sm'>
        <h2 className='font-bold text-3xl pb-3 text-white'>Sign In</h2>
            <form className='space-y-4'>
                <input className='w-full py-3 px-2 border-1 rounded-lg' type={"email" || "number"} placeholder='Email or mobile number' />
                <input className='w-full py-3 px-2 border-1 rounded-lg' type="password" placeholder='Password' />
                <button className='w-full py-3 px-2 bg-red-600 hover:bg-red-700 cursor-pointer font-semibold rounded-lg'>Sign In</button>
            </form>
            <div className='space-y-4'>
                <p className='w-full py-3 px-2 text-center'>OR</p>
                <button className='w-full py-3 px-2 font-semibold rounded-lg cursor-pointer bg-neutral-700 hover:bg-neutral-800'>Use a sign-in code</button>
                <p className='w-full py-3 px-2 text-center cursor-pointer hover:opacity-60 underline'>Forgot password?</p>
                <label className=''>
                <input type="checkbox" />
                <span className='pl-3'>Remember me</span>
                </label>
                <p className='text-gray-400 pt-[12px]'>New to Botflix? <span className='text-white cursor-pointer hover:underline'>Sign up now.</span></p>
                <p className='text-xs text-gray-500'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                <p className='text-blue-600'>Learn more.</p>
            </div>
        </div>
    </div>
  );
};

export default Login;