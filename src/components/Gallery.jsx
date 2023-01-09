import React from 'react'

import RiodeJaneiro from '../assets/images/riodejaneiro.jpg';
import Franca from '../assets/images/franca.jpg';
import Maldivas from '../assets/images/maldivas.jpg';
import Neve from '../assets/images/neve.jpg';
import Iguacu from '../assets/images/iguacu.jpg';

const Gallery = () => {
  return (
    <div id='gallery' className='mar-w-[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Galeria</h2>
      <div className='grid sm:grid-cols-5 gap-4 ' >
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <img className='w-full h-full object-cover' src={RiodeJaneiro} alt="Rio de Janeiro" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src={Franca} alt="França" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src={Maldivas} alt="Maldivas" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src={Neve} alt="Neve" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src={Iguacu} alt="Cataratas do Iguaçu" />
        </div>
      </div>
    </div>
  )
}

export default Gallery