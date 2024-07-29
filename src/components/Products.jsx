import React, { useState } from 'react'
import { datas } from '../data/product.js'

function Products() {
    const [data]=useState(datas);

  return (
    <div className='max-h-full py-16 flex justify-center items-center'>
        <div>
            <h1 className='text-center uppercase text-3xl cursor-pointer font-bold py-6 text-orange-500'>Our Products</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] items-center justify-center gap-10'>
                {data.map((items,index) => (
                    <div key={index} className='w-[270px] h-[400px] md:w-[380px] md:h-[450px] rounded-lg shadow-2xl gap-4 hover:scale-105 duration-300 cursor-pointer'>
                        <div className='flex flex-col w-full h-full rounded-lg'>
                            <img src={items.img} alt="" className='w-full h-[250px] md:h-[320px] object-cover rounded-md'/>
                            <div className='flex flex-col justify-center text-left px-3 md:px-5 lg:px-7 py-3 gap-2'>
                                <p className='font-semibold cursor-pointer gap-4 text-black text-xl '>Name: <span className='text-orange-600 hover:underline underline-offset-8'>{items.name}</span></p>
                                <span className='font-semibold cursor-pointer gap-4 text-black text-xl'>Price: <span className='text-red-600 font-bold hover:underline underline-offset-8'>{items.price}</span> </span>
                                <div className='flex justify-around gap-5'><button className='px-4 py-1 rounded-lg cursor-pointer hover:bg-orange-400 hover:text-black bg-black text-orange-400'>Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products