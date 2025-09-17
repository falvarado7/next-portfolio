import React from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri'
import FadeInItem from '@/app/components/FadeInItem'
import { FaLink, FaRegFolderOpen } from 'react-icons/fa6'
import ScreenshotGallery from '@/app/components/ScreenshotGallery'

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
                <h1 className='mt-5 sm:mt-16 my-0.5 text-3xl font-bold'>Monarch</h1>
                <p className='my-5 text-zinc-700 dark:text-slate-300'>
                    Monarch — AI-assisted trading dashboard (Hackathon · 1st place)
                    In a 1-week hackathon, our team built Monarch, a mobile-first trading
                    dashboard that helps beginners invest with AI guidance.
                    I led the post-auth product UI, real-time data visualizations, and front-end integration.
                </p>
                <ScreenshotGallery screenshots={[
                    {src: '/monarch/Monarch.PNG', alt: 'Monarch'}
                ]}/>
                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Key Features</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        AI-Powered Trading Dashboard
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2">
                        <li>Real-time market data visualizations with D3.js.</li>
                        <li>Integrated AI assistant to guide new investors.</li>
                        <li>Secure authentication with role-based access.</li>
                        <li>Responsive design optimized for both desktop and mobile.</li>
                    </ul>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Team Collaboration
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2">
                        <li>Designed and built in one week with a 4-person team.</li>
                        <li>Focused on clean UX to ensure usability under time pressure.</li>
                        <li>Split responsibilities across frontend, backend, and data integrations.</li>
                    </ul>
                    <ScreenshotGallery
                        screenshots={[
                            { src: "/monarch/Monarch1.PNG", alt: "monarch" },
                            { src: "/monarch/Monarch2.PNG", alt: "monarch" },
                            { src: "/monarch/Monarch3.PNG", alt: "monarch" },
                        ]}
                    />
                </div>

                <div className='mt-10 flex-col'>
                    <h5 className='font-semibold'>The Challenge</h5>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Most trading apps are overwhelming for beginners, while AI tools often feel disconnected from real data.
                        Our goal was to build a platform that:
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Simplifies investing for users with no prior trading experience.</li>
                        <li>Provides real-time financial data in an intuitive dashboard.</li>
                        <li>Leverages AI to give actionable insights in plain language.</li>
                        <li>Demonstrates full-stack development under hackathon constraints.</li>
                    </ul>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>The Solutions</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>Frontend</p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2">
                        <li>React + TailwindCSS for rapid UI development.</li>
                        <li>D3.js for interactive and animated stock/portfolio graphs.</li>
                        <li>Mobile-first approach.</li>
                    </ul>

                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>Backend</p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2">
                        <li>Node.js (Express) API serving user, trading, and AI endpoints.</li>
                        <li>PostgreSQL database with schema for users, trades, and history.</li>
                        <li>Integrated external market data API for live updates.</li>
                    </ul>

                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>Deployment</p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2">
                        <li>Frontend deployed on Netlify for speed and reliability.</li>
                        <li>Backend hosted on Render for quick hackathon setup.</li>
                        <li>Collaborative GitHub workflow with feature branches and PRs.</li>
                    </ul>
                </div>

                <div className='mt-10 flex-col'>
                    <h5 className='font-semibold'>Lessons Learned</h5>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Importance of balancing features vs. time constraints in a hackathon.</li>
                        <li>Data visualization libraries like D3.js have a steep learning curve but add huge impact.</li>
                        <li>Clear role delegation allowed us to finish on time and win 1st place.</li>
                        <li>Small UI/UX improvements made the app feel production-ready.</li>
                    </ul>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Tech Stack</h6>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Frontend: React, TailwindCSS, D3.js</li>
                        <li>Backend: Node.js (Express), MongoDB</li>
                        <li>AI: OpenAI API integration for trading insights</li>
                        <li>DevOps: Netlify (frontend), Render (backend)</li>
                    </ul>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Live Demo</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1 flex items-center'>
                        <FaLink className='mr-2'/>
                        Frontend: <a href='https://hackathon-team2-v2-1.onrender.com/'
                                    className='underline ml-1 hover:text-blue-600 dark:hover:text-blue-500'
                                    target='_blank'>
                                    hackathon-team2-v2-1.onrender.com/
                                </a>
                    </p>
                </div>
                <div className='mt-5 flex-col'>
                    <h6 className='font-semibold'>GitHub Repo</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1 flex items-center'>
                        <FaRegFolderOpen className='mr-2'/>
                        <a href='https://github.com/falvarado7/Hackathon-Project'
                            className='underline hover:text-blue-600 dark:hover:text-blue-500'
                            target='_blank'>
                            Monarch (Frontend + Backend)
                        </a>
                    </p>
                </div>
            </div>
        </FadeInItem>
    )
}

export default page