import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='animate-in ml-5 mr-5 mb-3'>    
      <h1 className='mt-16 my-0.5 text-3xl font-bold'>Anoplex Software</h1>
      <p className='my-5 text-zinc-700 dark:text-slate-300'>
        At Anoplex I've been responsible for building out full stack web modules at scale. 
        Which are used by over 150+ customers around the world in over 6 different countries for 
        metal finishing. Here are some of the standout projects and features I've contributed to.
      </p>
      <div className='flex'>
        <Image 
          src="/IMG_5223.JPG" 
          alt='francisco img' 
          width={70} 
          height={30}
          className='rounded-full mr-2'  
        />
        <div className='flex flex-col'>
          Francisco
          <div className='flex space-x-3 text-zinc-700 dark:text-slate-300'>
            <p className=''>June 2024 - Present</p>
            <a href='https://anoplex.com' className='underline'>
            Visit Project        
            </a>
          </div>       
        </div>
        
      </div>
    </div>
  )
}

export default page