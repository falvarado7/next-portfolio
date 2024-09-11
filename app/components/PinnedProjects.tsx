"use client";
import React from 'react'
import AnoplexSoftware from '@/public/anoplex-software.jpg';
import Image, { StaticImageData } from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from './CarouselProject';
import Link from 'next/link';

function PinnedProjects() {

  let pinnedProj: {title: string, summary: string, url: string, image: StaticImageData | string}[] = [
    {
      title: 'Anoplex Software',
      summary : 'Devoloping Software used by over 150+ customers in 6+ countries',
      url: '/projects/anoplex',
      image: AnoplexSoftware
    },
    {
      title: 'Monarch',
      summary: 'Investment trading platform that allows users to invest their money with no experience, aided by integrated AI',
      url: '/projects/monarch',
      image: '/Monarch.PNG'
    }
  ];

  return (
    <div>
      <h6 className='font-semibold'>Pinned Projects</h6>
      <Carousel className=''>
        <CarouselContent className=''>      
          {pinnedProj.map((proj, index) => (      
            <CarouselItem key={index}>
              <Link href={proj.url}>
                <div className='w-[250px] mt-5 mr-5'> 
                  <Image src={proj.image} alt='project pic' width={250} height={350} className='rounded-lg mb-2 pinned-proj-img'/>
                  <div className='font-semibold mb-1'>
                    {proj.title}
                  </div>
                  <div className='text-zinc-700 dark:text-slate-300'>
                    {proj.summary}
                  </div>         
                </div>
              </Link>
            </CarouselItem>
          ))}         
        </CarouselContent>
      </Carousel>     
    </div>
  )
}

export default PinnedProjects