import React from 'react'
import Image from 'next/image'
import Footer from '@/app/components/Footer'
import { RiArrowGoBackFill } from 'react-icons/ri'
import FadeInItem from '@/app/components/FadeInItem'
import { RxExternalLink } from 'react-icons/rx'
import { FaGithub } from 'react-icons/fa6'

function page() {
    return (
        <FadeInItem delay={160}>
            <div className='ml-5 mr-5 mb-3'>
                <div className="sm:hidden mt-5">
                    <a
                        href="/#projects"
                        className='inline-flex'
                    >
                        <RiArrowGoBackFill className='border rounded-full size-6 p-1 hover:text-blue-500 hover:border-blue-500'/>
                    </a>
                </div>
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
                        <div className='flex  text-zinc-700 dark:text-slate-300'>
                            <p className=''>2024 - 2024 ·</p>
                            <a
                                href="https://welovemovies-frontend-ekzi.onrender.com/"
                                target="_blank"
                                className="flex items-center gap-1 ml-2 hover:text-blue-600 dark:hover:text-blue-500"
                            >
                                <RxExternalLink className="w-4 h-4" />
                                <span className="font-medium">Visit Link</span>
                            </a>

                            <a
                                href="https://github.com/falvarado7/WeLoveMovies-Backend_Project"
                                target="_blank"
                                className="flex items-center gap-1 ml-2 hover:text-blue-600 dark:hover:text-blue-500"
                            >
                                <FaGithub className="w-4 h-4" />
                                <span className="font-medium">View Repo</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>About the Project</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        This project was created to help aid users with no experience trading or investing their money,
                        using out integrated AI. Built with ReactsJS, ExpressJS, MongoDB and featured a fully
                        interactive graphs made using D3.js
                    </p>
                    <Image
                        src='/Monarch.PNG'
                        alt='Monarch'
                        width={400}
                        height={200}
                        className='rounded-lg mt-8'
                    />
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Mobile First Design</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                    My team and I designed the mobile-first approach, ensuring that the application was
                    responsive to all platforms and viewports.
                    </p>
                    <div className='flex justify-between mt-8'>
                    <Image
                        src='/Monarch1.PNG'
                        alt='Monarch-mobile1'
                        width={100}
                        height={400}
                        className='rounded-lg'
                    />
                    <Image
                        src='/Monarch2.PNG'
                        alt='Monarch-mobile2'
                        width={100}
                        height={400}
                        className='rounded-lg'
                    />
                    <Image
                        src='/Monarch3.PNG'
                        alt='Monarch-mobile3'
                        width={100}
                        height={400}
                        className='rounded-lg'
                    />
                    </div>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>My Contribution</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                    I was responsible for developing all pages post-signup/sign-in,
                    excluding the 'My Account' page. Additionally, I created interactive graphs using D3.js,
                    integrating real-time data provided by our data analyst through an API. This project was
                    built using React and Tailwind CSS.
                    </p>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Read More</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Here is a <a href='https://www.kye-edwards.com/case-study-monarch' className='underline text-blue-500'>blog post</a> that goes more
                        into depth on how it was built
                    </p>
                </div>
            </div>
        </FadeInItem>
    )
}

export default page