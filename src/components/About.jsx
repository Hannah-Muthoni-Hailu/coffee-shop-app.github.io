import React from 'react'
import coffee from '../assets/coffe-cup.jpg'

function About() {
  return (
    <div className='max-w-full h-[100vh] md:h-[500px] mb-16 md:flex md:justify-center p-4 md:p-0'>
      <div className='flex flex-col md:flex-row md:justify-between gap-10'>
        <img className='w-full h-auto md:w-[60%] md:h-full rounded-xl'
         src={coffee} alt="" />
        <div className='flex flex-col gap-4 md:gap-10 py-4'>
          <h2 className='text-orange-600 cursor-pointer text-3xl font-bold text-center md:text-left'>
            CoffeeMate
          </h2>
          <p className='text-md text-gray-600 font-light'>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Convallis class mus mattis, posuere vulputate lectus torquent. Quisque non curabitur nec potenti urna lectus sociosqu. Elit congue et adipiscing tellus maximus suspendisse. Feugiat cubilia id torquent, leo interdum aenean. Integer magnis magna sapien scelerisque senectus rhoncus elementum. Himenaeos maximus vitae ex ridiculus himenaeos.
          </p>
          <div className='flex  flex-col md:flex-row justify-center items-center md:justify-start gap-4 md:gap-10'>
            <button className='px-2 md:px-6 py-1 rounded-lg cursor-pointer bg-orange-400 text-black hover:text-orange-400 hover:bg-black'><a href='/menu'>Get Started</a></button>
            <button className='px-2 md:px-6 py-1 rounded-lg cursor-pointer hover:bg-orange-400 hover:text-black text-orange-400 bg-black'><a href='/menu'>Shop</a> </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About