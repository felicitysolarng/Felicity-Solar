import Navbar from '@/components/layouts/navbar/Navbar'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Metadata } from 'next'
import Project from '@/components/ui/project'
//type Props = {}

export const metadata: Metadata = {
  title: "Project Catelogue - Felicity Solar",
  description: '...',
}

function page() {
  return (
    <main className='font-[family-name:var(--font-inter)]'>

      <Navbar linkClassName="text-grey-800 font-semibold" className='hidden lg:flex bg-white text-black border-b border-grey-100' variant='primary' />

      <section className='flex justify-center my-12 flex-col mx-auto w-[90%] 2xl:w-[75%]'>
        <div className="flex flex-col justify-center items-center rounded-xl relative">
          <Image src={"/assets/images/solar_street_light.jpg"} alt='felicity solar products' width={1200} height={250} className='rounded-xl' />
          <div className="absolute z-20">
            <h1 className='text-white text-5xl font-semibold'>Project Showcases</h1>
          </div>
          <div className="overlay absolute top-0 left-0 w-full opacity-70 bg-amber-700 h-full rounded-xl"></div>
        </div>

      </section>

      <section className='flex justify-center my-22 flex-col mx-auto w-[90%] 2xl:w-[75%]'>
        <div className="grid gap-x-9 gap-y-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>

      </section>
    </main>
  )
}

export default page