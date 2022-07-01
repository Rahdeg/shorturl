import React from 'react'
import { useStateContext } from '../Context/Contextprovider'

const Inputshortner = () => {
  const {setinputvalue,value, setvalue}= useStateContext();

  const handleclick=()=>{
    setinputvalue(value);
    setvalue('');
  }
  return (
    <div className='flex flex-column justify-center items-center blue'>
    <h1 className='ha f-subheadline white'>URL<span className='orange'> SHORTNER</span> </h1>
    <div className='flex mb2'>
    <input type='text'
     placeholder='paste a link to shorten it' 
     className='w-100  f3 measure-wide f5-l b--none pa3 br3 outline-0 br--left bg-white'
     value={value}
     onChange={(e) =>setvalue(e.target.value)}
     />
    <button className='pa3 lh-copy br--right br3 bg-orange pointer b--none'
    onClick={handleclick}
    >Shorten</button>
    </div>
    </div>
  )
}

export default Inputshortner