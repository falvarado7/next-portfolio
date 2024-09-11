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
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h1>
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
        <p className="font-semibold">About</p>
        <p className="text-zinc-700 dark:text-slate-300">
          Hi, I'm Francisco, born and raised in Houston, Texas. I have been coding for 2 years. 
          As a software engineer I specialize in full-stack web development and product design.
        </p>
        <p className="text-zinc-700 dark:text-slate-300">
          When I am not at my desk, I'm probably lifting weights, spending time with my family, 
          or working on projects around my house.
        </p>
      </div>

      <div className="mt-10 flex flex-col space-y-3">
        <p className="font-semibold">Contact</p>
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
        <p className="font-semibold">Work</p>
        <p className="text-zinc-700 dark:text-slate-300">
          I specialize in JavaScript, Express, Laravel, web devlopment, UI/UX, and product design.
          But I am always learning new things. Here are some of the places I worked.
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
                <p className="ml-5">Software Developer</p>
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

      <div className="mt-10 flex flex-col space-y-3">
        <p className="font-semibold">Skills</p>
        <p className="text-zinc-700 dark:text-slate-300">
          These are the languages and technologies that I am proficient in
        </p> 
        <div className="grid grid-cols-2">      
          <a 
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" 
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">JavaScript</h6>
            </div>
          </a>   
          <a 
            href="https://www.typescriptlang.org/" 
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" 
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">TypeScript</h6>
            </div>
          </a>
          <a 
            href="https://www.php.net/" 
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">PHP</h6>
            </div>
          </a> 
          <a 
            href="https://git-scm.com/" 
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">Git</h6>
            </div>
          </a>
          <a 
            href="https://code.visualstudio.com/" 
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">VSCode</h6>
            </div>
          </a>
          <a 
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" 
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">HTML</h6>
            </div>
          </a>
          <a 
            href="https://reactjs.org/" 
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">React</h6>
            </div>
          </a>
          <a 
            href="https://nextjs.org/docs" 
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">NextJs</h6>
            </div>
          </a>
          <a 
            href="https://www.w3.org/TR/CSS/#css"
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">CSS</h6>
            </div>
          </a>
          <a 
            href="https://tailwindcss.com/"
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">Tailwind</h6>
            </div>
          </a>
          <a 
            href="https://mui.com/"
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">MaterialUI</h6>
            </div>
          </a>
          <a 
            href="https://nodejs.org/en/"
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">NodeJs</h6>
            </div>
          </a>
          <a 
            href="https://expressjs.com/"
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">Express</h6>
            </div>
          </a>
          <a 
            href="https://laravel.com/"
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">Laravel</h6>
            </div>
          </a>
          <a 
            href="https://www.mysql.com/"
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">MySQL</h6>
            </div>
          </a>
          <a 
            href="https://www.postgresql.org/"
            target="_blank" 
            rel="noreferrer"
          >
            <div className="flex space-x-2 my-1">
              <img 
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
                width="25" 
                height="25" 
                alt="JavaScript" 
              />
              <h6 className="my-auto">PostgreSQL</h6>
            </div>
          </a>
        </div>      
      </div>

    </div>
  )
}