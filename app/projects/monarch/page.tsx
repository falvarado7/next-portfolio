import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='animate-in ml-5 mr-5 mb-3'>    
      <h1 className='mt-16 my-0.5 text-3xl font-bold'>Monarch</h1>
      <p className='my-5 text-zinc-700 dark:text-slate-300'>
        Investment trading platform that allows users to invest their money with no experience,
        aided by integrated AI
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
            <p className=''>2024 - 2024</p>
            <a href='https://hackathon-team2-v2-1.onrender.com/' className='underline'>
            Visit Project        
            </a>
          </div>       
        </div>
      </div>

      <div className='mt-10 flex-col'>
        <h6 className='font-semibold'>About the Project</h6>
        <p className='text-zinc-700 dark:text-slate-300 mt-1'>
          This project was created to help aid users with no experience trading or investing their money,
          using out integrated AI. Built with ReactsJS, ExpressJS, MongoDB and featured a fully 
          interactive graph made using D3.js
        </p>
      </div>
    </div>
  )
}

export default page