import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { IoLocation } from 'react-icons/io5'

function Contact() {
  return (
    <div className='py-8 my-0.5 bg-gradient-to-r from-black to-[#e7750a] text-white rounded-md md:rounded-3xl mt-8 md:mt-0'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-[35px] font-bold cursor-pointer py-4 text-white'>Contact Us</h1>
      </div>
      <div className='md:flex justify-evenly gap-4 py-2'>
        <div className='flex flex-col px-4'>
          <h1 className='md:text-[30px] text-xl font-bold'>Want more info on our services or to place an order online?</h1>
          <p className='text-[15px] font-small py-2 '>You can reach us here</p>
          <div className='flex gap-4 items-center py-3'>
            <FiPhoneCall size={20}/>
            <span className='text-[17px] cursor-pointer font-medium'>+00000000000</span>
          </div>
          <div className='flex gap-4 items-center py-3'>
            <AiOutlineMail size={20}/>
            <span className='text-[17px] cursor-pointer font-medium'>johndoe@example.com</span>
          </div>
          <div className='flex gap-4 items-center py-3'>
            <IoLocation size={20}/>
            <span className='text-[17px] cursor-pointer font-medium'>City,Country</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <form action="" className='flex flex-col py-4 px-6'>
            <label htmlFor="" className='text-[17px] font-light py-3 px-1'>Name</label>
            <input type="text" name='name' placeholder='John Doe' className='w-[250px] md:w-[400px] h-[50px] outline-none rounded-md text-[14px] text-left px-3 text-black bg-white' />
            <label htmlFor="" className='text-[17px] font-light py-3 px-1'>Email</label>
            <input type="email" placeholder='johndoe@example.com' name='email' className='w-[250px] md:w-[400px] h-[50px] outline-none rounded-md text-[14px] text-left px-3 text-black bg-white'/>
            <label htmlFor="" className='text-[17px] font-light py-3 px-1'>Enter message</label>
            <textarea name="message" placeholder='I would like...' className='w-[250px] md:w-[400px] h-[200px] outline-none rounded-md text-[14px] text-left px-3 text-black bg-white'></textarea>
            <div className='py-4 px-3 gap-2'>
              <button className='px-1 w-[180px] py-2 rounded-xl cursor-pointer hover:border-2 border-solid border-white bg-black text-white'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact