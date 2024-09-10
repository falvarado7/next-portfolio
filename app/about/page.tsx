import Image from "next/image"
import FamilyPic from '@/public/IMG_0154.jpg'
import Anoplex from '@/public/Anoplex.webp'
import Thinkful from '@/public/Thinkful.png'
import Link from "next/link"
import { FaGithub, FaLinkedin, FaRegAddressCard, FaEnvelope } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

export default function About() {
  return (
    <div className="animate-in ml-5 mr-5 mb-3">
      <div className="mt-16">
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <p className="text-zinc-700 dark:text-slate-300">A glimpse into me</p>
      </div>
      <div className="mt-10">
        <Image 
          src={FamilyPic} 
          alt="family-pic" 
          width={300}
          height={3}
          className="rounded-xl"
        />
      </div>

      <div className="mt-10 flex flex-col space-y-3">
        <p className="text-zinc-700 dark:text-slate-300">About</p>
        <p>
          Hi, I'm Francisco, born and raised in Houston, Texas. I have been coding for 2 years. 
          As a software engineer I specialize in full-stack web development and product design.
        </p>
        <p>
          When I am not at my desk, I'm probably lifting weights, spending time with my family, 
          or working on projects around my house.
        </p>
      </div>

      <div className="mt-10 flex flex-col space-y-3">
        <p className="text-zinc-700 dark:text-slate-300">Contact</p>
        <div className="flex-col space-y-3">
          <div className=" rounded-md bg-gray-200  dark:bg-zinc-950 py-3">
            <Link
              href='https://www.linkedin.com/in/francisco-alvarado-dev/'
              className="flex justify-between items-center mx-3"
            >
              <div className="flex items-center gap-2">
                <FaLinkedin />
                <h1>LinkedIn</h1>
              </div>
              <MdArrowOutward  className="text-zinc-700 dark:text-slate-300"/>
            </Link>
          </div>
          <div className=" rounded-md bg-gray-200  dark:bg-zinc-950 py-3">
            <Link
              href='https://www.linkedin.com/in/francisco-alvarado-dev/'
              className="flex items-center justify-between mx-3"
            >
              <div className="flex items-center gap-2">
                <FaGithub />
                <p className="text-sm ml-1">GitHub</p>
              </div>
              <MdArrowOutward  className="text-zinc-700 dark:text-slate-300"/>
            </Link>
          </div>
          <div className=" rounded-md bg-gray-200 dark:bg-zinc-950 py-3">
            <Link
              href='https://www.linkedin.com/in/francisco-alvarado-dev/'
              className="flex items-center justify-between mx-3"
            >
              <div className="flex items-center gap-2">
                <FaRegAddressCard />
                <p className="text-sm ml-1">Resume</p>
              </div>
              <MdArrowOutward  className="text-zinc-700 dark:text-slate-300"/>
            </Link>
          </div>
          <div className=" rounded-md bg-gray-200 dark:bg-zinc-950 py-3">
            <Link
              href='https://www.linkedin.com/in/francisco-alvarado-dev/'
              className="flex items-center justify-between mx-3"
            >
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <p className="text-sm ml-1">Email</p>
              </div>
              <MdArrowOutward  className="text-zinc-700 dark:text-slate-300"/>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col space-y-5">
        <p className="text-zinc-700 dark:text-slate-300">Work</p>
        <p>
          I specialize in JavaScript, Express, Laravel, web devlopment, UI/UX, and product design.
          But I am always learning new things. Here are some of the palaces I worked.
        </p>
        <Link href='https://www.anoplex.com/'>
          <div className="flex justify-between my-2">
            <div className="flex">
              <Image 
                src={Anoplex}
                alt="Anoplex logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex-col">
                <p className="ml-5">Full Stack Engineer</p>
                <p className="ml-5 text-zinc-700 dark:text-slate-300">Anoplex Software</p>
              </div>    
            </div>   
            <p className="text-zinc-700 dark:text-slate-300">2024 - </p>
          </div>
        </Link>
        <Link href='https://www.chegg.com/skills/thinkful-is-now-chegg-skills/'>
          <div className="flex justify-between my-2">
            <div className="flex">
              <Image 
                src={Thinkful}
                alt="Thinkful logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex-col">
                <p className="ml-5">Full Stack Engineer</p>
                <p className="ml-5 text-zinc-700 dark:text-slate-300">Thinkful</p>
              </div>    
            </div>   
            <p className="text-zinc-700 dark:text-slate-300">2023 - 2024</p>
          </div>
        </Link>
      </div>

    </div>
  )
}