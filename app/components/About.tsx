import Image from 'next/image'
import React from 'react'
import { BiRightArrow } from 'react-icons/bi'
import FamilyPic from "@/public/IMG_0154.jpg";

function About() {
    return (
        <section id="about" className="reveal mx-5">
            <h1 className="text-4xl font-bold">About</h1>
            <div className="flex">
                <p className="whitespace-nowrap text-zinc-700 dark:text-slate-300">A glimpse into me</p>
                <hr className="w-full my-auto ml-2 border border-gray-300 dark:border-gray-600"/>
            </div>
            {/* Make a 2-col layout on md+, stack on mobile */}
            <div className="pt-14 md:grid md:grid-cols-[minmax(0,1fr)_220px] md:gap-6">
                {/* Left column: text + languages = same width */}
                <div>
                <p className="text-zinc-700 dark:text-slate-300 pr-2">
                    I'm currently a <span className="font-semibold dark:text-white text-black">Full Stack
                    Software Engineer</span> at <span className="font-semibold text-blue-600 dark:text-blue-500">Anoplex
                    Software</span>,
                    where I've heped modernize legacy systems into scalable, cloud-based modules used by
                    over 150+ international clients. My work spans both front-end and back-end
                    development, with a strong focus on creating clean, intuitive interfaces and reliable,
                    efficient systems.
                    <br></br>
                    Before transitioning into tech, I spent five years in the oil & gas industry as a
                    pipe welder and boilermaker. That hands on experience taught me how
                    critical good tools are for safety and efficiency, and it continues to shape the
                    way I approach building software today.
                    Outside of work, I enjoy spending time with my family, exploring new technologies, and
                    continuously pushing myself to grow as both a developer and a person.
                </p>

                <p className="mt-6 text-zinc-700 dark:text-slate-300">
                    Here are some of the technologies I have been working with:
                </p>

                {/* OPTION A: fixed columns (even widths within the text column) */}
                <ul
                    className="
                    mt-3 grid gap-x-6 gap-y-2
                    grid-cols-2 sm:grid-cols-3
                    text-zinc-700 dark:text-slate-300
                    stagger stagger--slow
                    "
                    style={{ ["--stagger-step" as any]: "140ms" }}
                >
                    {[
                    "TypeScript","JavaScript ES6+","Laravel","PHP",
                    "React.js","Node.js","Python","C#", "PostgreSQL", "MySQL"
                    ].map((label, i) => (
                    <li key={label} className="flex items-start">
                        <BiRightArrow className="mt-1 mr-2 text-blue-600 dark:text-blue-500 shrink-0" />
                        <span>{label}</span>
                    </li>
                    ))}
                </ul>

                </div>

                {/* Right column: image (only on md+) */}
                <Image
                src={FamilyPic}
                alt="family-pic"
                width={220}
                height={220}
                className="rounded-xl hidden md:block justify-self-end"
                />
            </div>


        </section>
    )
}

export default About