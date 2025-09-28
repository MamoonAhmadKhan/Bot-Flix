import React from 'react'

const Header = () => {
  return (
    <div className='absolute z-50 bg-gradient-to-b flex px-40 py-4'>
        <div className='flex flex-col items-center justify-center'>
        <h1 className='font-extrabold text-5xl font-mono text-red-600 hover:cursor-pointer'>BOTFLIX</h1>
        <h3 className='text-lg text-amber-400 font-serif'>Stream with AI</h3>
        </div>
    </div>
  )
}

export default Header