"use client";
import React from 'react'
import AnoplexSoftware from '@/public/anoplex-software.jpg'
import Image, { StaticImageData } from 'next/image';
import { motion, useDragControls } from 'framer-motion';

function PinnedProjects() {

  let pinnedProj: {title: string, summary: string, url: string, image: StaticImageData}[] = [
    {
      title: 'Anoplex Software',
      summary : 'Devoloping Software used by over 150+ customers in 6+ countries',
      url: '/projects/Anoplex',
      image: AnoplexSoftware
    }
  ];

  const controls = useDragControls()

  return (
    <div>
      Pinned Projects
      {pinnedProj.map((proj) => {
        return (
        <div className='w-[250px] mt-5'>
          <motion.div drag="x" dragControls={controls} />
          <Image src={proj.image} alt='company pic' width={250} height={100} className='rounded-lg mb-2'/>
          <div className='font-semibold mb-1'>
            {proj.title}
          </div>
          <div className='text-zinc-700 dark:text-slate-300'>
            {proj.summary}
          </div>
      </div>
      )})}     
    </div>
  )
}

export default PinnedProjects