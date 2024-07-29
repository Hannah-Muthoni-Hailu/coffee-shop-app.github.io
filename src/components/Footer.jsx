import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <div className='bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0'>
        <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
            <div className='w-full md:w-1/4'>
                <h1 className='font-semibold text-2xl pb-4'>CoffeeMate</h1>
                <p className='text-md font-light '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium nisi excepturi voluptates ut laborum sunt fugiat delectus, omnis officia, recusandae soluta voluptas similique sit dolores id cum repudiandae laudantium nam.</p>

            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                <nav className='flex flex-col gap-2'>
                    <a href="/home" className='hover:text-gray-500 transition-all cursor-pointer text-black no-underline'>Home</a>
                    <a href="/about" className='hover:text-gray-500 transition-all cursor-pointer text-black no-underline'>About Us</a>
                    <a href="/products" className='hover:text-gray-500 transition-all cursor-pointer text-black no-underline'>Products</a>
                    <a href="/menu" className='hover:text-gray-500 transition-all cursor-pointer text-black no-underline'>Menu</a>
                    <a href="/reviews" className='hover:text-gray-500 transition-all cursor-pointer text-black no-underline'>Reviews</a>
                    <a href="/contact" className='hover:text-gray-500 transition-all cursor-pointer text-black no-underline'>Contact</a>
                </nav>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Legal</h1>
                <nav className='flex flex-col gap-2'>
                    <a href="" className='hover:text-gray-500 transition-all cursor-pointer text-black no-underline'>Terms and Conditions</a>
                    <a href="" className='hover:text-gray-500 transition-all cursor-pointer text-black no-underline'>Privacy Policy</a>
                    <a href="" className='hover:text-gray-500 transition-all cursor-pointer text-black no-underline'>Advertising Disclosure</a>
                </nav>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Social Media</h1>
                <nav className='flex flex-col gap-2'>
                    <Link to='/' className='hover:text-gray-500 transition-all cursor-pointer text-black no-underline'>Facebook</Link>
                    <Link to='/' className='hover:text-gray-500 transition-all cursor-pointer text-black no-underline'>Whatsapp</Link>
                    <Link to='/' className='hover:text-gray-500 transition-all cursor-pointer text-black no-underline'>Twitter</Link>
                    <Link to='/' className='hover:text-gray-500 transition-all cursor-pointer text-black no-underline'>Instagram</Link>
                </nav>
            </div>

        </div>
        <div>
            <hr className='w-full h-[2px] bg-black'/>
            <p>
                <p className='text-center py-4 font-light cursor-pointer'>
                    {" "}
                    &#169;Copyright | {" "} <span>Design by InnovaVirtus | All rights reserved</span>
                </p>
            </p>
        </div>
    </div>
  )
}

export default Footer