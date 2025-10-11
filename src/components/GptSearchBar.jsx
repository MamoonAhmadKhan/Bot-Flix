import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GptSearchBar = () => {
  return (
    <div>
        <div className='absolute -z-10 w-dvw h-dvh bg-slate-900'>
        </div>
        <div className='py-80 flex items-center justify-center'>
        <form className='bg-black pl-4 rounded-full shadow-md shadow-purple-900 font-semibold font-mono px-2 py-4 w-1/2 grid grid-cols-12'>
            <input className='outline-none col-span-11' type="text" placeholder='What would you like to watch Today ?' />
            <button onClick={(e) => e.preventDefault()} className='col-span-1 cursor-pointer' ><FontAwesomeIcon icon={faMagnifyingGlass} size='xl' fade /></button>
        </form>
        </div>
    </div>
  )
}

export default GptSearchBar