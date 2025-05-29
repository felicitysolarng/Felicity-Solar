import Navbar from '@/components/layouts/navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import type { Metadata } from 'next'
import Project from '@/components/ui/project'
import { capitalizeFirstLetter } from '@/lib/constants'
//


export type IProjects = {
  id: string,
  project_name: string,
  description: string,

}

export type IProjectShowcase = {
  data: IProjects[],
  message: string,
  status: number
}

type Props = {
  params: Promise<{ state: string }>
}

/* const getStateProjects = async (state: string): Promise<IProjectShowcase> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/projects/${state}`, {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  const response: { data: IProjects, message: string, status: number } = await res.json();
  return response.data;
} */

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const state = (await params).state;

  return {
    title: capitalizeFirstLetter(state) + ' Projects',
    description: 'Explore our projects in ' + state,
    twitter: {
      card: 'summary_large_image',
      title: capitalizeFirstLetter(state) + ' Projects',
      description: 'Explore our projects in ' + capitalizeFirstLetter(state),
      images: ['/assets/images/solar_panel_project.jpg']
    }
  }
}

async function Page({ params }: { params: Promise<{ state: string }> }) {
  const state = (await params).state;

  return (
    <main className='font-[family-name:var(--font-inter)]'>

      <Navbar linkClassName="text-grey-800 font-semibold" className='hidden lg:flex bg-white text-black border-b border-grey-100' variant='primary' />

      <section className='flex justify-center py-12 flex-col mt-6 lg:mt-0'>
        <div className="flex flex-col justify-center items-center xl:rounded-xl relative h-56 xl:w-[75%] xl:mx-auto mx-auto w-full 2xl:w-[75%]">
          <Image src={"/assets/images/solar_street_light.jpg"} alt='felicity solar products' width={1200} height={250} className='xl:rounded-xl h-full  object-fit' />
          <div className="absolute z-20">
            <h1 className='text-white text-4xl lg:text-5xl  font-semibold'>{capitalizeFirstLetter(state)} Showcases</h1>
          </div>
          <div className="overlay absolute top-0 left-0 w-full opacity-70 bg-amber-700 h-full xl:rounded-xl"></div>
        </div>
      </section>

      <section className='flex justify-center my-22 flex-col mx-auto w-[90%] 2xl:w-[75%]'>
        <div className="grid gap-x-9 gap-y-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <Project
            state={state}
            id={"50K System Installed at Felicity Solar's New Plant"}
          />
          <Project
            state={state}
            id={"50K System Installed at Felicity Solar's New Plant"}
          />
          <Project
            state={state}
            id={"50K System Installed at Felicity Solar's New Plant"}
          />
          <Project
            state={state}
            id={"50K System Installed at Felicity Solar's New Plant"}
          />
          <Project
            state={state}
            id={"50K System Installed at Felicity Solar's New Plant"}
          />
          <Project
            state={state}
            id={"50K System Installed at Felicity Solar's New Plant"}
          />
        </div>

      </section>
    </main>
  )
}

export default Page