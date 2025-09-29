import React from 'react'

const Error = ({ error }) => {
  return (
    <div className='text-3xl flex items-center justify-center'>
        <h1>{error}</h1>
    </div>
  )
}

export default Error