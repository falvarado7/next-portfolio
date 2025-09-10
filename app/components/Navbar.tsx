'use client'
import ThemeSwitcher from "./ThemeSwitcher"
import Link from "next/link"
import DarkLogo from '@/public/f-dark.png'
import LightLogo from '@/public/f-light.png'
import Image from "next/image"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6"

export default function Navbar() {
    return (
        <header className="flex sticky top-0 z-50 items-center bg-slate-100/80 dark:bg-zinc-900/80 backdrop-blur supports-[backdrop-filter]:bg-opacity-80">
            <Link href="/" className="shrink-0">
                {/* Light on light mode */}
                <Image
                    src={LightLogo}
                    alt="Logo (light)"
                    width={50}
                    height={50}
                    className="block dark:hidden"
                    priority
                />
                {/* Dark on dark mode */}
                <Image
                    src={DarkLogo}
                    alt="Logo (dark)"
                    width={50}
                    height={50}
                    className="hidden dark:block"
                    priority
                />
            </Link>
            <div className="hidden sm:block ml-2">
                <Link href="/#intro" className="mr-2 text-sm">
                    Home
                </Link>
                <Link href="/#about" className="mr-2 text-sm">
                    About
                </Link>
                <Link href="/#experience" className="mr-2 text-sm">
                    Experience
                </Link>
                <Link href="/#projects" className="text-sm">
                    Projects
                </Link>
            </div>
            <div className="flex ml-auto items-center">
                <ThemeSwitcher />
                <div className="flex">
                    <Link
                        href='https://www.linkedin.com/in/francisco-alvarado-dev/' target="_blank"
                        className="py-1 px-2"
                    >
                        <FaLinkedin className="w-5 h-5 hover:text-blue-500"/>
                    </Link>
                    <Link
                        href='https://github.com/falvarado7' target="_blank"
                        className="py-1 px-2"
                    >
                        <FaGithub className="w-5 h-5 hover:text-blue-500"/>
                    </Link>
                    <Link
                        href="mailto:francisco.alvarado217@yahoo.com?subject=Let's Work Together!"
                        className="py-1 px-2"
                    >
                        <FaEnvelope className="w-5 h-5 hover:text-blue-500"/>
                    </Link>
                </div>
            </div>
        </header>
    )
}