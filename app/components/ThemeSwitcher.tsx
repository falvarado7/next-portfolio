'use client'

import { FiMoon, FiSun } from 'react-icons/fi'
import { FaCheck } from "react-icons/fa6";
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import DarkLogo from '@/public/f-dark.png'
import LightLogo from '@/public/f-light.png'
import Image from "next/image"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import clsx from 'clsx'
import Link from 'next/link';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null; // Render nothing on the server or during the initial load
  }

  const themes = [
    { name: 'Light', value: 'light', icon: 'FiSun'},
    { name: 'Dark', value: 'dark', icon: 'FiMoon'},
  ]
  
  return (
    <div className='flex items-center justify-between w-full'>
      <Link href='/'>
        <Image
          src={resolvedTheme === 'dark' ? DarkLogo : LightLogo}
          alt="Logo"
          width={50}
          height={50}
        />
      </Link>
      <div>
      <Listbox value={theme} onChange={(value) => setTheme(value)}>
        <div className='relative'>
          <ListboxButton className={clsx(
            'relative flex h-8 w-8 cursor-default items-center justify-center rounded-lg'          
            )}>
            {resolvedTheme === 'dark' ? (
              <FiMoon className='text-white w-6 h-6 cursor-pointer' />
            
            ) : (
              <FiSun className='text-black w-6 h-6 cursor-pointer' />
            )}  
          </ListboxButton>
          <ListboxOptions
            transition
            className={clsx(
              "w-42 absolute right-0 z-10 mt-2 max-h-60 origin-top-right overflow-auto rounded-xl p-2 text-base capitalize shadow-md focus:outline-none sm:text-sm",
              resolvedTheme === 'dark' ? 'bg-zinc-950' : 'bg-slate-100'
            )}
          >
          {themes.map((theme) => (
              <ListboxOption
                key={theme.value}
                value={theme.value}
                className="relative cursor-default select-none rounded-md py-2 pl-10 pr-4 data-[focus]:bg-gray-300 dark:data-[focus]:bg-white/10"
              >
                {({ selected }) => (                
                  <div className=''>                
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {theme.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50">
                        <FaCheck
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    ) : null}
                  </div>             
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>        
      </Listbox>
      </div>
    </div>
  );
}
