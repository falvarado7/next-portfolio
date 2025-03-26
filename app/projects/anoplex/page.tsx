import React from 'react'
import Image from 'next/image'
import { FaCircleInfo } from "react-icons/fa6";
import Footer from '@/app/components/Footer';

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

      <div className='border border-zinc-700 rounded-md p-4 flex mt-14 text-zinc-700 w-[300px] mx-auto'>
        <FaCircleInfo className='mr-2 size-20 pb-14 '/>
        <p>
          The following projects are private and internal, so unfortunately I'm unable to show live demos or code specifics. However,
          I'll do my best to provide a high level overview of the projects and my role in them.
        </p>
      </div>

      <div className='mt-10 flex-col'>
        <h6 className='font-semibold'>About Anoplex</h6>
        <p className='text-zinc-700 dark:text-slate-300 mt-1'>
          Anoplex software is a web-based solution specifically designed for metal finishing companies. 
          It helps businesses streamline processes like chemical control, material management, and 
          quality assurance. The software is cloud-based, making it accessible from any modern browser, 
          and is used by companies globally across various time zones.
        </p>
        <Image 
          src='/anoplex-testing.jpg' 
          height={200} 
          width={350} 
          alt='Anoplex'
          className='rounded-lg mt-10'  
        />       
      </div>

      <div className='mt-10 flex-col'>
        <h6 className='font-semibold'>Features</h6>
        <p className='text-zinc-700 dark:text-slate-300 mt-1'>
          One of its key features, ChemTrak, allows businesses to monitor chemical concentrations, 
          temperature, and pH levels to ensure consistent plating performance. The software also supports 
          real-time data tracking and can be used on mobile devices and tablets, making it highly flexible 
          for both on-site and remote management. Anoplex is particularly popular in industries that require 
          precise process control and regulatory compliance, such as aerospace and manufacturing
        </p>
        <Image 
          src='/anoplex-software.jpg' 
          height={200} 
          width={350} 
          alt='Anoplex'
          className='rounded-lg mt-10'  
        />       
      </div>

      <div className='mt-10 flex-col'>
        <h6 className='font-semibold'>TestTrak</h6>
        <p className='text-zinc-700 dark:text-slate-300 mt-1'>
          The TestTrak program by Anoplex is designed to simplify the process of corrosion testing, 
          specifically for those working with salt-spray chambers in compliance with the ASTM B117 standard. 
          This can be a complex and time-consuming process, but TestTrak automates much of it, from recording 
          chamber parameters to managing the loading and unloading of test panels. The software also helps 
          users track and document corrosion test results, including automatically calculating load times and 
          alerting users when it's time to unload chambers. It supports up to four chambers and allows for 
          the customization of specifications for different chamber types.
          <br/>
          <br/>
          TestTrak also makes the audit process more manageable by keeping all relevant documentation in one 
          place, ensuring that companies are well-prepared for standards like Nadcap
        </p>      
      </div>


      <div className='mt-10 flex-col'>
        <h6 className='font-semibold'>My Contribution</h6>
        <p className='text-zinc-700 dark:text-slate-300 mt-1'>
          The TestTrak program, initially available solely as a local Windows download, has undergone a 
          transformative upgrade under my guidance. My mission was to seamlessly transition TestTrak to Anoplex's 
          robust cloud based system, ensuring that users can access it effortlessly from any device, anywhere with 
          an internet connection. To achieve this, I employed ReactJS to create a dynamic and responsive frontend, 
          while harnessing the power of Laravel for a secure and efficient backend. To bridge these two technology 
          stacks, I utilized InertiaJS, which facilitated smooth communication and interaction between them. This 
          innovative integration not only enhances user experience but also paves the way for future updates and scalability, 
          aligning with Anoplex's vision of accessible and cutting edge software solutions.           
        </p>      
      </div>

      <Footer />
    </div>
  )
}

export default page