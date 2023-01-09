import React from 'react'

import Resort from '../assets/images/resort.jpg'
import Cruises from '../assets/images/cruises.jpg'
import Excursions from '../assets/images/excursions.jpg'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold '>Resorts</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg ' src={Resort} alt="" />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruzeiros</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={Cruises} alt="" />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Aventura</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={Excursions} alt="" />
      </div>
    </div>
  )
}

export default Activities