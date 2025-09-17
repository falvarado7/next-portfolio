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
                <h1 className='mt-5 sm:mt-16 my-0.5 text-3xl font-bold'>GrubDash</h1>
                <p className='my-5 text-zinc-700 dark:text-slate-300'>
                    GrubDash is a full-stack web application for browsing dishes, placing orders, and managing menus.
                    I designed and developed it from scratch to demonstrate a production-ready SaaS workflow,
                    featuring a cloud database, modern frontend, and deployed backend API.
                </p>
                <ScreenshotGallery screenshots={[
                    {src: '/grubdash/GrubDash-Home-Light.png', alt: 'GrubDash'}
                ]}/>
                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>The Challenge</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Many food-ordering applications focus on frontend-only prototypes or lack real deployments. I wanted to create a system that:
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2">
                        <li>
                            Runs on a scalable backend with persistent cloud storage.
                        </li>
                        <li>
                            Provides a modern, responsive UI suitable for both mobile and desktop.
                        </li>
                        <li>
                            Is fully deployed so anyone can interact with the live demo as if it were a real SaaS product.
                        </li>
                    </ul>
                    <ScreenshotGallery
                        screenshots={[
                            { src: "/grubdash/GrubDash-Home-Dark.png", alt: "Dark mode home" },
                            { src: "/grubdash/DishDetail-Light.png", alt: "Light mode dish detail" },
                            { src: "/grubdash/DishDetail-Dark.png", alt: "Dark mode dish detail" },
                        ]}
                    />
                </div>

                <div className='mt-10 flex-col'>
                    <h5 className='font-semibold'>The Solution</h5>

                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Frontend
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>State management via React Query for async data and caching.</li>
                        <li>Components include: dish cards, modals, and a sidebar cart with live totals.</li>
                        <li>Admin dashboard with CRUD for dishes and order management.</li>
                        <li>TailwindCSS: responsive, utility-first design with light/dark themes.</li>
                        <li>React + Vite + TypeScript: fast, type-safe client.</li>
                    </ul>

                    <p className='text-zinc-700 dark:text-slate-300 mt-5'>
                        Backend
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>ASP.NET Core Web API for REST endpoints.</li>
                        <li>Entity Framework Core with migrations for schema management.</li>
                        <li>PostgreSQL (Neon) as the database.</li>
                        <li>Automatic migrations on startup ensure smooth deploys.</li>
                        <li>Configurable CORS + JSON options for clean API consumption.</li>
                    </ul>

                    <p className='text-zinc-700 dark:text-slate-300 mt-5'>
                        Deployment
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>API hosted on Fly.io (Dockerized, SSL, automatic scaling).</li>
                        <li>Frontend hosted on Vercel with environment-based config for API URL.</li>
                        <li>Health checks + logging ensure visibility into app uptime.</li>
                    </ul>

                    <ScreenshotGallery
                        screenshots={[
                            { src: "/grubdash/Cart-Light.png", alt: "Cart light mode" },
                            { src: "/grubdash/Dashboard-dark.png", alt: "Dark mode dashboard" },
                            { src: "/grubdash/EditOrder-Light.png", alt: "Light mode edit order" },
                        ]}
                    />
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Lessons Learned</h6>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Database role mismatches: Fixed connection issues by configuring Neon/Postgres roles and ports consistently.</li>
                        <li>SPA routing on Vercel: Handled /dashboard refresh 404s with fallback rewrites.</li>
                        <li>Frontend/backend integration: Used environment variables for seamless local vs production API switching.</li>
                    </ul>
                    <ScreenshotGallery
                        screenshots={[
                            { src: "/grubdash/EditDish-Dark.png", alt: "Dark mode edit dish" },
                            { src: "/grubdash/Dashboard-Light.png", alt: "Light mode dashboard" },
                            { src: "/grubdash/Cart-Dark.png", alt: "Cart dark mode" },
                        ]}
                    />
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Tech Stack</h6>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Frontend: React, Vite, TypeScript, TailwindCSS, React Query</li>
                        <li>Backend: .NET 9 (C#), EF Core, PostgreSQL</li>
                        <li>DevOps: Fly.io, Vercel, Docker, Neon (DB hosting)</li>
                    </ul>
                    <ScreenshotGallery
                        screenshots={[
                            { src: "/grubdash/EditOrder-Dark.png", alt: "Dark mode edit order" },
                            { src: "/grubdash/EditDish-Light.png", alt: "Light mode edit dish" },
                        ]}
                    />
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Live Demo</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1 flex items-center'>
                        <FaLink className='mr-2'/>
                        Frontend: <a href='https://grubdash-alpha.vercel.app/'
                                    className='underline ml-1 hover:text-blue-600 dark:hover:text-blue-500'
                                    target='_blank'>
                                    grubdash-alpha.vercel.app/
                                </a>
                    </p>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1 flex items-center'>
                        <FaLink className='mr-2'/>
                        Backend: <a href='https://grubdash-api.fly.dev/health'
                                    className='underline ml-1 hover:text-blue-600 dark:hover:text-blue-500'
                                    target='_blank'>
                                    grubdash-api.fly.dev/health
                                </a>
                    </p>
                </div>
                <div className='mt-5 flex-col'>
                    <h6 className='font-semibold'>GitHub Repo</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1 flex items-center'>
                        <FaRegFolderOpen className='mr-2'/>
                        <a href='https://github.com/falvarado7/grubdash'
                            className='underline hover:text-blue-600 dark:hover:text-blue-500'
                            target='_blank'>
                            grubdash (Frontend + Backend)
                        </a>
                    </p>
                </div>
            </div>
        </FadeInItem>
    )
}

export default page