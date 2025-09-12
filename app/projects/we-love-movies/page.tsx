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
                <h1 className='mt-16 my-0.5 text-3xl font-bold'>We Love Movies</h1>
                <p className='my-5 text-zinc-700 dark:text-slate-300'>
                    We Love Movies is a full-stack web application where users can browse movies,
                    find nearby theaters, and leave reviews. The project demonstrates my ability to
                    design, build, and deploy a complete system, from backend APIs to frontend UI,
                    while solving real-world challenges like search, CRUD operations, and deployment pipelines.
                </p>
                <ScreenshotGallery screenshots={[
                    {src: '/we-love-movies/WeLoveMovies.png', alt: 'WeLoveMovies'}
                ]}/>
                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>The Challenge</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Most bootcamp-style projects are either frontend-only or backend-only. I wanted to showcase a project that felt like a production-ready app with:
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2">
                        <li>
                            Backend API to manage movies, theaters, and reviews.
                        </li>
                        <li>
                            Frontend UI that is responsive and polished with modern styling.
                        </li>
                        <li>
                            Search and CRUD functionality beyond simple &quot;list and detail&quot; views.
                        </li>
                        <li>
                            Deployment of both frontend and backend to production (Netlify + Fly.io).
                        </li>
                    </ul>
                    <ScreenshotGallery
                        screenshots={[
                            { src: "/we-love-movies/Movie-list.png", alt: "Movie list" },
                            { src: "/we-love-movies/Dark-home.png", alt: "Dark mode home" },
                            { src: "/we-love-movies/Search.png", alt: "Search results" },
                        ]}
                    />
                </div>

                <div className='mt-10 flex-col'>
                    <h5 className='font-semibold'>The Solution</h5>

                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Frontend (React + Vite + Tailwind)
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>React + React Router for dynamic navigation between Movies and Theaters.</li>
                        <li>Dark Mode toggle using Tailwinds dark mode classes for a modern theme.</li>
                        <li>Responsive Layout: collapses navigation on small screens; desktop shows full nav + search.</li>
                        <li>Search Bar: filters movie titles instantly (e.g., typing &quot;Up&quot; only shows relevant movies).</li>
                        <li>CRUD Reviews: create, update, and delete reviews inline with API integration.</li>
                    </ul>

                    <p className='text-zinc-700 dark:text-slate-300 mt-5'>
                        Backend (FastAPI + PostgreSQL)
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>FastAPI provides endpoints for /movies, /theaters, and /reviews.</li>
                        <li>Seeded Database so that the app always has realistic test data when deployed.</li>
                        <li>Robust RESTful Design: Endpoints support listing, searching, and full CRUD for reviews.</li>
                    </ul>

                    <p className='text-zinc-700 dark:text-slate-300 mt-5'>
                        Deployment
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Frontend: Deployed on Netlify, using environment variables (VITE_API_URL) to connect to the backend.</li>
                        <li>Backend: Deployed on Fly.io with Docker + Uvicorn, exposing an API at /api/*.</li>
                        <li>CI/CD: Eventually added a manual deploy script for full control of production releases.</li>
                    </ul>

                    <ScreenshotGallery
                        screenshots={[
                            { src: "/we-love-movies/Movie-detail.png", alt: "Movie list" },
                            { src: "/we-love-movies/Theater-list.png", alt: "Dark mode home" },
                        ]}
                    />
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Lessons Learned</h6>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Managing dark mode with Tailwind and React taught me how to design a consistent theme system.</li>
                        <li>Handling search state and query params showed me how to sync frontend navigation with backend filtering.</li>
                        <li>Deploying a FastAPI backend on Fly.io gave me real-world experience with Docker, ports, and production health checks.</li>
                        <li>Building both frontend + backend deployments made me understand how full-stack apps actually ship in the real world.</li>
                    </ul>
                    <ScreenshotGallery
                        screenshots={[
                            { src: "/we-love-movies/Dark-Movie-list.png", alt: "Movie list" },
                            { src: "/we-love-movies/Theater-showings.png", alt: "Dark mode home" },
                            { src: "/we-love-movies/Dark-Movie-detail.png", alt: "Search results" },
                        ]}
                    />
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Live Demo</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1 flex items-center'>
                        <FaLink className='mr-2'/>
                        Frontend: <a href='https://welovemovies-frontend.netlify.app'
                                    className='underline ml-1 hover:text-blue-600 dark:hover:text-blue-500'
                                    target='_blank'>
                                    welovemovies-frontend.netlify.app
                                </a>
                    </p>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1 flex items-center'>
                        <FaLink className='mr-2'/>
                        Backend: <a href='https://welovemovies-api-francisco.fly.dev/api'
                                    className='underline ml-1 hover:text-blue-600 dark:hover:text-blue-500'
                                    target='_blank'>
                                    welovemovies-api-francisco.fly.dev/api
                                </a>
                    </p>
                </div>
                <div className='mt-5 flex-col'>
                    <h6 className='font-semibold'>GitHub Repo</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1 flex items-center'>
                        <FaRegFolderOpen className='mr-2'/>
                        <a href='https://https://github.com/falvarado7/movie-app'
                            className='underline hover:text-blue-600 dark:hover:text-blue-500'
                            target='_blank'>
                            movie-app (Frontend + Backend)
                        </a>
                    </p>
                </div>
            </div>
        </FadeInItem>
    )
}

export default page