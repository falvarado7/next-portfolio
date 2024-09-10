import React from "react";
import { FaGithub, FaLinkedin, FaRegAddressCard } from "react-icons/fa6";
import Link from "next/link";
import PinnedProjects from "./components/PinnedProjects";


export default function Home() {

  

  return (
    <div className='flex flex-col'>
      <div className="flex-col mt-28 mx-5 space-y-4">
        <h1 className="animate-in text-3xl font-semibold tracking-tight">hey, Francisco here!</h1>
        <p className=" text-zinc-700 dark:text-slate-300">
          I'm a software engineer based in Houston who builds for the web with a design-oriented approach. 
          With a strong foundation in both front-end and back-end techologies, I focus on delivering clean, efficient code. 
        </p>
      </div>
      <div className="flex mt-8 ml-5 space-x-4">
        <Link 
          href='https://www.linkedin.com/in/francisco-alvarado-dev/'
          className="border border-black dark:border-white rounded-2xl py-1 px-2 hover:bg-gray-300 dark:hover:bg-white/10"
        >
          <div className="flex items-center">
            <FaLinkedin />
            <p className="text-sm ml-1">LinkedIn</p>
          </div>
        </Link>
        <Link 
          href='https://github.com/falvarado7'
          className="border border-black dark:border-white rounded-2xl py-1 px-2 hover:bg-gray-300 dark:hover:bg-white/10"
        >
          <div className="flex items-center">
            <FaGithub />
            <p className="text-sm ml-1">GitHub</p>
          </div>
        </Link>
        <Link 
          href='https://docs.google.com/document/d/1v2AyIx2MDkd1SizPfZBzZb_Typ-jVi1d5KiEe4Znzjg/edit?usp=sharing'
          className="border border-black dark:border-white rounded-2xl py-1 px-2 hover:bg-gray-300 dark:hover:bg-white/10"
        >
          <div className="flex items-center">
            <FaRegAddressCard />
            <p className="text-sm ml-1">Resume</p>
          </div>
        </Link>
      </div>
      <div className="ml-5 mt-20">
        <PinnedProjects />
        
      </div>
    </div>
  );
}
