import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { FaEnvelope } from "react-icons/fa6";

function Intro() {
    return (
        <section id="intro" className="reveal h-screen flex-col pt-40 mx-5 space-y-4">

            <div className="md:text-3xl text-2xl font-mono text-blue-600 dark:text-blue-500">
                <Typewriter
                    words={["Full-Stack Developer", "Programmer", "Builder", "Problem Solver"]}
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </div>

            <div className="absolute inset-0 flex justify-center -z-10 pt-20">
                <div className="
                    h-72 w-72 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full
                    blur-3xl opacity-30 animate-pulse">
                </div>
            </div>
            <h1 className="md:text-5xl text-3xl font-semibold tracking-tight">hey, Francisco here!</h1>
            <p className="md:text-lg text-zinc-700 dark:text-slate-300">
                I&apos;m a Houston based full-stack software engineer with experience in React, PHP, Laravel.
                I&apos;ve built web apps used by 150+ international clients,
                and I bring a unique edge with my oil & gas industry background.
                I focus on delivering clean UI, efficient systems, and scalable solutions.
            </p>
            <div className="flex justify-center pt-5">
                <a className="
                        inline-flex items-center gap-2
                        border border-zinc-900 dark:border-slate-100
                        hover:border-blue-600 hover:text-blue-600
                        dark:hover:border-blue-500 dark:hover:text-blue-500
                        rounded-md px-2 py-2 text-base
                        sm:px-3 sm:py-2 sm:text-lg
                        md:px-4 md:py-3 md:text-xl
                    "
                    href="mailto:francisco.alvarado217@yahoo.com?subject=Let's Work Together!"
                >
                    <FaEnvelope className="mx-2"/>
                    Lets Connect
                </a>
            </div>
        </section>
    )
}

export default Intro