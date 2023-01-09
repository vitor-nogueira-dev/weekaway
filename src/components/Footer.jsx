import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className='max-w-[1140px] py-8 m-auto border-t-4'>
      <div className='flex item-center m-auto justify-center'>
        <BsChatSquareDots  size={30} className="text-[var(--primary-dark)] mr-2"/>
        <h1 className='text-xl font-bold text-gray-700'>WEEKAWAY</h1>
      </div>
    </div>
  )
}

export default Footer