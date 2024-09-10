import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import AnoplexSoftware from '@/public/anoplex-software.jpg';

export default function page() {
  return (
    <div className="animate-in ml-5 mr-5 mb-3">
      <div className="mt-16 my-0.5">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-zinc-700 dark:text-slate-300">Here you'll find all my custom projcts</p>
        <div className='flex mx-6 mt-8 w-[300px]'>
          <input type="search" placeholder='Filter by language' className='h-8 p-2 rounded-lg dark:bg-white/30'/>
          <button className='bg-gray-300 dark:bg-white/10 p-1 rounded-lg w-20'>Filter</button>
        </div>
        <Link href='/projects/anoplex'>
          <div className='my-10'>
            <Image src={AnoplexSoftware} alt='Anoplex' width={330} className='rounded-lg'/>
            <div className='flex-col mt-2'>
              <h1 className='font-semibold text-lg'>Anoplex Software</h1>
              <p>
                Developing software for metal finishing industries, used by over 150+ customers
                in 6+ countries  
              </p>            
            </div>           
          </div>
        </Link>

        <Link href='/projects/monarch'>
          <div className='my-10'>
            <Image src='/Monarch.PNG' alt='Monarch' width={330} height={250} className='rounded-lg'/>
            <div className='flex-col mt-2'>
              <h1 className='font-semibold text-lg'>Monarch</h1>
              <p>
                Investment trading platform to invest money with no experience, aided by integrated 
                AI 
              </p>            
            </div>           
          </div>
        </Link>
      </div>
    </div>
  )
}
