import React from 'react'

import RioDeJaneiro from '../assets/images/rio02.jpg'

const Contato = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700'>Solicite nosso contato</h2>
      <p className='text-center italic text-gray-700 py-2'>Teremos o maior prazer em lhe atender !!!</p>
      <div className='grid md:grid-cols-2'>
        <img className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' src={RioDeJaneiro} alt="Rio de Janeiro" />
        <form>
          <div className='grid grid-cols-2'>
            <input className='border m-2 p-2' type="text" placeholder='Nome' />
            <input className='border m-2 p-2' type="text" placeholder='Sobrenome' />
            <input className='border m-2 p-2' type="email" placeholder='E-mail' />
            <input className='border m-2 p-2' type="tel" placeholder='Telefone' />
            <input className='border col-span-2 p-2 m-2' type="text" placeholder='Endereço' />
            <textarea className='border col-span-2 m-2 p-2' cols="30" rows="10"></textarea>
            <button className='col-span-2 m-2 '>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contato