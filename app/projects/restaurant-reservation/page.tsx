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

                <h1 className='mt-16 my-0.5 text-3xl font-bold'>Table Time</h1>
                <p className='mt-5 mb-1 text-zinc-700 dark:text-slate-300'>
                    Table Time is a full-stack web application I designed and built to modernize the
                    restaurant reservation process. The platform allows restaurant hosts to:
                </p>
                <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300">
                    <li>
                        Manage reservations with real-time availability.
                    </li>
                    <li>
                        Assign parties to tables with visual seating status.
                    </li>
                    <li>
                        Track table capacity and free/occupied states.
                    </li>
                    <li>
                        Support dark/light mode with a polished, mobile-responsive UI.
                    </li>
                </ul>
                <p className='mt-1 text-zinc-700 dark:text-slate-300'>
                    I developed this project end-to-end, from backend APIs and database modeling to
                    frontend design and deployment.
                </p>
                <ScreenshotGallery screenshots={[
                    {src: '/table-time/TableTime-home-light.png', alt: 'Light mode home'}
                ]}/>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Key Features</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Modern Reservation Dashboard
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2">
                        <li>
                            Displays reservations by day (prev/today/next navigation).
                        </li>
                        <li>
                            Real-time table availability counts.
                        </li>
                        <li>
                            Quick actions: Edit, Seat, or Cancel.
                        </li>
                        <li>
                            User avatars with randomized colors for visual differentiation.
                        </li>
                    </ul>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Smart Table Management
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2">
                        <li>
                            Each table shows: image, capacity, and status (Free/Occupied).
                        </li>
                        <li>
                            Reservations can be assigned/unassigned to tables.
                        </li>
                        <li>
                            Future-proof: added image_url column so restaurants can upload their own visuals.
                        </li>
                    </ul>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Stunning UI & UX
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2">
                        <li>
                            Glassmorphism + gradient backgrounds.
                        </li>
                        <li>
                            Dark/light mode with a persistent toggle.
                        </li>
                        <li>
                            Scroll-friendly reservation cards (clean design, not cluttered).
                        </li>
                        <li>
                            Mobile-first responsive navbar with collapsible layout.
                        </li>
                    </ul>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Scalable Infrastructure
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2">
                        <li>
                            Fly.io backend with CORS policies for secure cross-origin requests.
                        </li>
                        <li>
                            Neon Postgres cloud DB with migrations handled via Knex.
                        </li>
                        <li>
                            Vercel frontend with VITE_API_BASE for seamless environment switching.
                        </li>
                        <li>
                            CI-friendly scripts: db:migrate, db:seed, db:rollback.
                        </li>
                    </ul>
                    <ScreenshotGallery
                        screenshots={[
                            { src: "/table-time/TT-home-dark.png", alt: "Dark mode home" },
                            { src: "/table-time/New-res-light.png", alt: "Nre reservation light" },
                            { src: "/table-time/New-res-dark.png", alt: "New reservation dark" },
                        ]}
                    />
                </div>

                <div className='mt-10 flex-col'>
                    <h5 className='font-semibold'>The Challenge</h5>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Many restaurant reservation apps exist, but most are either mockups or frontend-only demos.
                        I wanted to create a **production-ready system** that:
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Supports real database persistence in the cloud.</li>
                        <li>Lets staff manage tables, reservations, and seating in real-time.</li>
                        <li>Has a modern, responsive UI with light/dark mode for daily usability.</li>
                        <li>Is deployed end-to-end, so users can test it like a real SaaS product.</li>
                    </ul>
                    <ScreenshotGallery
                        screenshots={[
                            { src: "/table-time/New-table-light.png", alt: "New table light mode" },
                            { src: "/table-time/Search-dark.png", alt: "Search dark mode" },
                            { src: "/table-time/Search-light.png", alt: "Search light mode" },
                        ]}
                    />
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>The Solutions</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Frontend
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>React + Vite + TypeScript for fast, type-safe UI development.</li>
                        <li>TailwindCSS v3 with custom dark mode + gradient backgrounds.</li>
                        <li>Lucide icons + Unsplash imagery for a modern, polished design.</li>
                        <li>React Query for caching and syncing reservations/tables with API.</li>
                        <li>Responsive nav and cards, optimized for mobile/tablet use.</li>
                    </ul>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Backend
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Express.js with modular routers for reservations and tables.</li>
                        <li>Knex.js migrations and seeds for database schema and sample data.</li>
                        <li>Business rules enforced (e.g., no Tuesday bookings, valid time ranges, seating capacity checks).</li>
                        <li>PostgreSQL via Neon for cloud persistence.</li>
                    </ul>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1'>
                        Deployment
                    </p>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Backend deployed on Fly.io (Dockerized, SSL, CORS config).</li>
                        <li>Frontend deployed on Vercel, pulling API base URL from environment variables.</li>
                        <li>Neon PostgreSQL as managed database with persistent storage.</li>
                    </ul>
                    <ScreenshotGallery
                        screenshots={[
                            { src: "/table-time/Mobile-light-closed.png", alt: "Mobile light mode" },
                            { src: "/table-time/Mobile-light-open.png", alt: "Mobile light mode" },
                            { src: "/table-time/Mobile-dark-closed.png", alt: "Mobile dark mode" },
                        ]}
                    />
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Lessons Learned</h6>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Deployment pipelines: migrations must be run manually on Fly.io after deploy.</li>
                        <li>CORS setup: production domain must be explicitly whitelisted.</li>
                        <li>SPA routing: Vercel requires rewrite rules to prevent 404s on refresh.</li>
                        <li>UX matters: small design changes (icons, gradients, avatars) drastically improved usability.</li>
                    </ul>
                    <ScreenshotGallery
                        screenshots={[
                            { src: "/table-time/Mobile-dark-open.png", alt: "Mobile Dark mode" },
                        ]}
                    />
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Tech Stack</h6>
                    <ul className="list-disc list-inside text-zinc-700 dark:text-slate-300 mt-2 space-y-1">
                        <li>Frontend: React, Vite, TypeScript, TailwindCSS, React Query</li>
                        <li>Backend: Node.js, Express, Knex.js, PostgreSQL</li>
                        <li>Database: Neon (Postgres hosting)</li>
                        <li>DevOps: Fly.io (API), Vercel (frontend)</li>
                    </ul>
                </div>

                <div className='mt-10 flex-col'>
                    <h6 className='font-semibold'>Live Demo</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1 flex items-center'>
                        <FaLink className='mr-2'/>
                        Frontend: <a href='https://table-time-vert.vercel.app/'
                                    className='underline ml-1 hover:text-blue-600 dark:hover:text-blue-500'
                                    target='_blank'>
                                    table-time-vert.vercel.app/
                                </a>
                    </p>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1 flex items-center'>
                        <FaLink className='mr-2'/>
                        Backend: <a href='https://tabletime-api.fly.dev/health'
                                    className='underline ml-1 hover:text-blue-600 dark:hover:text-blue-500'
                                    target='_blank'>
                                    tabletime-api.fly.dev/health
                                </a>
                    </p>
                </div>
                <div className='mt-5 flex-col'>
                    <h6 className='font-semibold'>GitHub Repo</h6>
                    <p className='text-zinc-700 dark:text-slate-300 mt-1 flex items-center'>
                        <FaRegFolderOpen className='mr-2'/>
                        <a href='https://github.com/falvarado7/restaurant-reservation'
                            className='underline hover:text-blue-600 dark:hover:text-blue-500'
                            target='_blank'>
                            Table Time (Frontend + Backend)
                        </a>
                    </p>
                </div>
            </div>
        </FadeInItem>
    )
}

export default page