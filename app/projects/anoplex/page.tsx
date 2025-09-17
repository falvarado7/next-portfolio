import React from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri'
import FadeInItem from '@/app/components/FadeInItem'
import { FaCircleInfo, FaLink, FaRegFolderOpen } from 'react-icons/fa6'
import ScreenshotGallery from '@/app/components/ScreenshotGallery'

function page() {

    return (
        <FadeInItem delay={160}>
            <div className='mx-5 mb-3'>
                <div className="sm:hidden mt-5">
                    <a
                        href="/#projects"
                        className='inline-flex'
                    >
                        <RiArrowGoBackFill className='border rounded-full size-6 p-1 hover:text-blue-500 hover:border-blue-500'/>
                    </a>
                </div>
                <h1 className='mt-5 sm:mt-16 my-0.5 text-3xl font-bold'>Anoplex Software</h1>
                <p className='my-5 text-zinc-700 dark:text-slate-300'>
                    At Anoplex I&apos;ve been responsible for building out full stack web modules at scale.
                    Which are used by over 150+ customers around the world in over 6 different countries for
                    metal finishing. Here are some of the standout projects and features I&apos;ve contributed to.
                </p>

                <div className='border border-zinc-700 rounded-md p-4 flex mt-14 text-zinc-700 md:w[500px] xs:w-[300px] mx-auto'>
                    <FaCircleInfo className='mr-2 size-20 pb-14 '/>
                    <p>
                        The following projects are private and internal, so unfortunately I&apos;m unable to show live demos or code specifics. However,
                        I&apos;ll do my best to provide a high level overview of the projects and my role in them.
                    </p>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>My Contribution</h6>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-2">
                        <li>
                            <span className="font-medium">TestTrak Migration:</span> Transitioned TestTrak from a local Windows app
                            to a modern React + Laravel web module with InertiaJS, enabling global cloud access.
                        </li>
                        <li>
                            <span className="font-medium">ChemTrak Screen Module:</span> Built a visual dashboard for labs to monitor
                            tank status, test schedules, and compliance with red/yellow/green indicators,
                            including out-of-spec warnings and offline tank detection.
                        </li>
                        <li>
                            <span className="font-medium">JobTrak FAIR Module:</span> Extended JobTrak (Anoplex’s job management system for
                            scheduling, routing, and QA) with a <em>First Accident Incident Report</em> workflow,
                            helping companies track safety events alongside production jobs.
                        </li>
                        <li>
                            <span className="font-medium">Advanced Reporting:</span> Designed and implemented multiple PDF and CSV exports
                            across ChemTrak and JobTrak, simplifying data handling, audits, and client communication.
                        </li>
                    </ul>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>About Anoplex</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Anoplex software is a web-based solution specifically designed for metal finishing companies.
                        It helps businesses streamline processes like chemical control, material management, and
                        quality assurance. The software is cloud-based, making it accessible from any modern browser,
                        and is used by companies globally across various time zones.
                    </p>
                    <ScreenshotGallery screenshots={[
                        {src: '/anoplex/anoplex-testing.jpg', alt: 'Anoplex'}
                    ]}/>
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
                    <ScreenshotGallery screenshots={[
                        {src: '/anoplex/anoplex-software.jpg', alt: 'Monarch'}
                    ]}/>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>TestTrak</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        The TestTrak program by Anoplex is designed to simplify the process of corrosion testing,
                        specifically for those working with salt-spray chambers in compliance with the ASTM B117 standard.
                        This can be a complex and time-consuming process, but TestTrak automates much of it, from recording
                        chamber parameters to managing the loading and unloading of test panels. The software also helps
                        users track and document corrosion test results, including automatically calculating load times and
                        alerting users when it&apos;s time to unload chambers. It supports up to four chambers and allows for
                        the customization of specifications for different chamber types.
                    <br/>
                        TestTrak also makes the audit process more manageable by keeping all relevant documentation in one
                        place, ensuring that companies are well-prepared for standards like Nadcap
                    </p>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>About JobTrak</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        JobTrak is Anoplex&apos;s production and job management system. It helps manufacturers
                        track work orders, manage part routing through plating and finishing processes,
                        enforce quality checks, and maintain traceability for compliance.
                        It is widely used in aerospace and defense supply chains where accountability is critical.
                    </p>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Lessons Learned</h6>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Built reusable patterns for new modules that sped up later feature delivery.</li>
                        <li>Gained experience designing software for industries with strict audit requirements (Nadcap, FAA, ITAR).</li>
                        <li>Learned the importance of visual clarity in lab dashboards, small design choices (color coding, icons) improved adoption significantly.</li>
                    </ul>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Tech Stack</h6>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Frontend: React, TailwindCSS, InertiaJS</li>
                        <li>Backend: Laravel (PHP), SQL</li>
                        <li>Database: MySQL</li>
                        <li>Deployment: Cloud-based Anoplex system</li>
                    </ul>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Live Site</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1 flex items-center'>
                        <FaLink className='mr-2'/>
                        Anoplex Website:
                        <a href='https://anoplex.com/'
                            className='underline ml-1 hover:text-blue-600 dark:hover:text-blue-500'
                            target='_blank'>
                            anoplex.com
                        </a>
                    </p>
                </div>
            </div>
        </FadeInItem>
    )
}

export default page