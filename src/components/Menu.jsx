import React from 'react'
import coffee_example from '../assets/coffee-example.jpg';

function Menu() {
  return (
    <div className='px-6 py-10'>
        <div>
            <h1 className='uppercase text-2xl text-orange-600 font-bold cursor-pointer text-center py-2'>Best Selling</h1>
            <div className='py-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='bg-white border-2 border-solid border-red-950 rounded-md w-[250px] h-[200px] md:w-[400px] md:h-[300px] pt-0 pb-4 hover:scale-105 duration-300'>
                    <img className='w-[250px] h-[120px] md:w-[400px] md:h-[200px] cursor-pointer object-cover rounded-md' src={coffee_example} alt="" />
                    <p className='text-center py-6 font-semibold'>Quantity <span className='text-red-400 font-bold'>200+</span></p>
                </div>
                <div className='bg-white border-2 border-solid border-red-950 rounded-md w-[250px] h-[200px] md:w-[400px] md:h-[300px] pt-0 pb-4 hover:scale-105 duration-300'>
                    <img className='w-[250px] h-[120px] md:w-[400px] md:h-[200px] cursor-pointer object-cover rounded-md' src={coffee_example} alt="" />
                    <p className='text-center py-6 font-semibold'>Quantity <span className='text-red-400 font-bold'>200+</span></p>
                </div>
                <div className='bg-white border-2 border-solid border-red-950 rounded-md w-[250px] h-[200px] md:w-[400px] md:h-[300px] pt-0 pb-4 hover:scale-105 duration-300'>
                    <img className='w-[250px] h-[120px] md:w-[400px] md:h-[200px] cursor-pointer object-cover rounded-md' src={coffee_example} alt="" />
                    <p className='text-center py-6 font-semibold'>Quantity <span className='text-red-400 font-bold'>200+</span></p>
                </div>
                <div className='bg-white border-2 border-solid border-red-950 rounded-md w-[250px] h-[200px] md:w-[400px] md:h-[300px] pt-0 pb-4 hover:scale-105 duration-300'>
                    <img className='w-[250px] h-[120px] md:w-[400px] md:h-[200px] cursor-pointer object-cover rounded-md' src={coffee_example} alt="" />
                    <p className='text-center py-6 font-semibold'>Quantity <span className='text-red-400 font-bold'>200+</span></p>
                </div>
                <div className='bg-white border-2 border-solid border-red-950 rounded-md w-[250px] h-[200px] md:w-[400px] md:h-[300px] pt-0 pb-4 hover:scale-105 duration-300'>
                    <img className='w-[250px] h-[120px] md:w-[400px] md:h-[200px] cursor-pointer object-cover rounded-md' src={coffee_example} alt="" />
                    <p className='text-center py-6 font-semibold'>Quantity <span className='text-red-400 font-bold'>200+</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu