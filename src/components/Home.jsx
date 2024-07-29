import React from 'react'
import coffee_beans from '../assets/coffee-beans.jpg';

function Home() {
  return (
    <>
        <div className='min-h-screen flex flex-row justify-center lg:flex-row items-center lg:px-32 px-3 gap-10 bg-gradient-to-r from-[#ddbd90] to-[#422204]'>
            <div className='w-[40%] lg:w-2/4 space-y-4 mt-14 lg:mt-0'>
                <h1 className='font-semibold text-3xl md:text-5xl text-center lg:text-start leading-tight'>Start your day with a steaming cup of coffee!</h1>
                <p className='text-lg font-light text-left'>
                    Enjoy our broad range of authentic flavours.
                </p>
                {/* <div className='flex flex-row gap-6'>
                    <button className='px-2 md:px-6 py-1 rounded-lg cursor-pointer bg-orange-400 text-black hover:bg-black hover:text-orange-400'>Add to Cart</button>
                    <button className='px-2 md:px-6 py-1 rounded-lg cursor-pointer hover:bg-orange-400 hover:text-black bg-black text-orange-400'>More Items</button>
                </div> */}
            </div>
            <div className='relative'>
                <img className='w-[250px] h-[250px] md:w-[400px] md:h-[400px] cursor-pointer rounded-full object-cover' src={coffee_beans} alt="Coffee beans" />
                <div className='absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
                    <h2 className='font-semibold lg:text-xl text-lg'>24k</h2>
                </div>
                <div className='absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full'>
                    <h2 className='font-semibold lg:text-xl text-lg'>Cappuccino</h2>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Home