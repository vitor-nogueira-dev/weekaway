import React from 'react'

import Praia from "../assets/images/bg-praia.jpg";

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img src={Praia} alt="praia" className='w-full h-full object-cover' />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-4xl'>Encontre sua viagem especial</h1>
          <h2 className='text-4xl py-4 italic'>conosco</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit unde commodi nesciunt, itaque ad eligendi fugiat officiis culpa animi incidunt inventore minima quo reprehenderit perspiciatis corporis. Velit, assumenda corrupti!</p>
        </div>
      </div>
    </div>
  )
}

export default Hero