import React, { useState } from 'react';
import { SiCoffeescript } from 'react-icons/si';
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai';

function Navbar() {
    const [menu,setMenu]=useState(false);
    const handlechange=()=>{
        setMenu(!menu);
    }
    const closeMenu=()=>{
        setMenu(false);
    }
    
  return (
    <div>
        <div className='flex flex-row justify-between p-3 px-5 bg-gradient-to-r from-red-950 to-orange-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:p-5 lg:px-32'>
            <div className='flex flex-row items-center cursor-pointer gap-2'>
                <span>
                    <SiCoffeescript size={25}/>
                </span>
                <h1 className='text-lg md:text-xl font-semibold cursor-pointer'>Coffee<span className='text-white'>Mate</span>{" "}</h1>
            </div>
            <nav className=' hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                <Link to="home" spy={true} smooth={true} duration={500} className='group relative inline-block hover:text-green-800 cursor-pointer'>
                    Home
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition group-hover:scale-x-100'>
                    
                    </span>
                </Link>
                <Link to="menu" spy={true} smooth={true} duration={500} className='group relative inline-block hover:text-green-800 cursor-pointer'>
                    Menu
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition group-hover:scale-x-100'>
                    
                    </span>
                </Link>
                <Link to="about" spy={true} smooth={true} duration={500} className='group relative inline-block hover:text-green-800 cursor-pointer'>
                    About Us
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition group-hover:scale-x-100'>
                    
                    </span>
                </Link>
                <Link to="products" spy={true} smooth={true} duration={500} className='group relative inline-block hover:text-green-800 cursor-pointer'>
                    Products
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition group-hover:scale-x-100'>
                    
                    </span>
                </Link>
                <Link to="review" spy={true} smooth={true} duration={500} className='group relative inline-block hover:text-green-800 cursor-pointer'>
                    Reviews
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition group-hover:scale-x-100'>
                    
                    </span>
                </Link>
                <Link to="contact" spy={true} smooth={true} duration={500} className='group relative inline-block hover:text-green-800 cursor-pointer'>
                    Contact Us
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition group-hover:scale-x-100'>
                    
                    </span>
                </Link>
            </nav>
            <div className='hidden md:flex'>
                <button className='px-6 py-1 rounded-lg cursor-pointer hover:bg-orange-400 hover:text-black text-orange-400 bg-black hover:border-2 border-solid border-white'>Login</button>
            </div>
            <div className="md:hidden">
                {
                    menu ?(<AiOutlineClose size={25} onClick={handlechange} className='cursor-pointer'/>):(<AiOutlineMenuUnfold size={25} onClick={handlechange} className='cursor-pointer'/>)
                }
            </div>
            {/* Mobile */}
            <div className={`${menu ?"translate-x-0":"translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-12 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-screen transition-transform duration-300`}>
                <Link to="home" spy={true} smooth={true} duration={500} onClick={closeMenu} className='group relative inline-block hover:text-green-800 cursor-pointer'>
                    Home
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition group-hover:scale-x-100'>
                    
                    </span>
                </Link>
                <Link to="menu" spy={true} smooth={true} duration={500} onClick={closeMenu} className='group relative inline-block hover:text-green-800 cursor-pointer'>
                    Menu
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition group-hover:scale-x-100'>
                    
                    </span>
                </Link>
                <Link to="about" spy={true} smooth={true} duration={500} onClick={closeMenu} className='group relative inline-block hover:text-green-800 cursor-pointer'>
                    About Us
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition group-hover:scale-x-100'>
                    
                    </span>
                </Link>
                <Link to="products" spy={true} smooth={true} duration={500} onClick={closeMenu} className='group relative inline-block hover:text-green-800 cursor-pointer'>
                    Products
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition group-hover:scale-x-100'>
                    
                    </span>
                </Link>
                <Link to="review" spy={true} smooth={true} duration={500} onClick={closeMenu} className='group relative inline-block hover:text-green-800 cursor-pointer'>
                    Reviews
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition group-hover:scale-x-100'>
                    
                    </span>
                </Link>
                <Link to="contact" spy={true} smooth={true} duration={500} onClick={closeMenu} className='group relative inline-block hover:text-green-800 cursor-pointer'>
                    Contact Us
                    <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition group-hover:scale-x-100'>
                    
                    </span>
                </Link>
                <div className='flex'>
                    <button className='px-6 py-1 text-black bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full'>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar