import React from 'react'
import { PROJECTS } from '../data'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa6'
import { RxExternalLink } from 'react-icons/rx'

function Projects() {
    
    const router = useRouter();

    return (
        <section id="projects" className="reveal mx-5 mt-40">
            <h1 className="text-4xl font-bold">Projects</h1>
            <div className="flex">
                <p className="whitespace-nowrap text-zinc-700 dark:text-slate-300">Turning ideas into products</p>
                <hr className="w-full my-auto ml-2 border border-gray-300 dark:border-gray-600"/>
            </div>
            <div className="stagger grid-stagger pt-14 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 " style={{ ["--stagger-step" as any]: "400ms" }}>
                {PROJECTS.map((project) => {
                    return (
                        <div key={project.id}
                            onClick={() => router.push(`/projects/${project.id}`)}
                            className="cursor-pointer w-full max-w-[360px] mx-auto"
                        >
                            <div className="
                                rounded-xl h-full bg-gray-300 dark:bg-zinc-800 p-4 hover:shadow-lg
                                dark:hover:shadow-[0_2px_10px_rgba(255,255,255,0.1)] transition-transform duration-200
                                hover:-translate-y-2
                                ">
                                <div className="w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-md ">
                                    <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={100}
                                    className="h-full w-full object-cover"
                                    />
                                </div>
                                <h3 className="mt-3 h-5 md:text-base text-lg font-semibold">{project.title}</h3>
                                <p className="mt-2 h-20 md:text-sm text-zinc-600 dark:text-zinc-300">
                                    {project.description}
                                </p>
                                <div className="mt-3 h-10 flex flex-wrap gap-2 md:text-xs text-blue-600 dark:text-blue-500">
                                    {project.tech.map((t, i) => (
                                        <span key={t}>
                                            {t}{i < project.tech.length - 1 && ","}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex gap-3">
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="text-sm"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FaGithub className="w-7 h-7 md:w-5 md:h-5 sm:w-6 sm:h-6 hover:text-blue-500"/>
                                        </Link>
                                    )}
                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="text-sm"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <RxExternalLink className="w-7 h-7 md:w-5 md:h-5 hover:text-blue-500"/>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects