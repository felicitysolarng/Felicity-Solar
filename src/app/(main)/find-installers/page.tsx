import InstallersFilter from '@/components/InstallerFilter'
import Navbar from '@/components/layouts/navbar/Navbar'
import Goback from '@/components/ui/go-back'
import InstallerCard from '@/components/ui/InstallerCard'
import { ChevronRight } from 'lucide-react'
import { Metadata } from 'next'
//import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

////
type PageProps = {
  searchParams?: { stateId?: string }
};

export type Iinstaller = {
  id: string,
  fullnames: string,
  email: string,
  phone: string,
  state_name: string,
  address: string,
  created_at: string,
}

export type IinstallersResponse = {
  data: Iinstaller[],
  message: string,
  status: number
}
async function fetchInstallers(stateId: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/installers/${stateId}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch installers');
    return await res.json();
  } catch (error) {
    console.error(error);
  }

}

export const metadata: Metadata = {
  title: 'Distributors Locations- Felicity Solar',
  description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}

async function Page({ searchParams }: PageProps) {

  const stateId = (await searchParams)?.stateId ?? "";

  const response: IinstallersResponse = await fetchInstallers(stateId);


  return (
    <main className='font-[family-name:var(--font-inter)]'>

      <Navbar linkClassName="text-grey-800 font-semibold" className='hidden lg:flex bg-white text-black border-b border-grey-100' variant='primary' />

      <section className='flex flex-col lg:flex-row pt-12 mx-auto w-[90%] 2xl:w-[75%] md:gap-x-8 lg:gap-x-26 gap-y-10 lg:gap-y-0'>
        <div className="flex lg:hidden my-10 ">
          <Goback />
        </div>
        <div className=" items-center flex-row gap-x-1 hidden lg:flex">
          <Link href={"/"} className='text-grey-400 items-center flex font-medium text-sm' aria-label='link to homepage'> Homepage</Link>
          <p className='text-grey-700 items-center flex font-medium text-sm' aria-label='link to products page'><ChevronRight color='#98A2B3' size={16} />Installers</p>
        </div>

      </section>
      <header className='mb-2 lg:mb-20'>
        <h2 className=' text-grey-900 text-4xl font-bold text-center'>Certified Installers {stateId && response?.data?.[0]?.state_name ? ` in ${response.data[0].state_name}` : ''}</h2>
      </header>

      <InstallersFilter defaultValue={stateId} />

      <section className='grid gap-y-10 lg:gap-y-20 grid-cols-1 md:grid-cols-3 gap-x-10 pt-8 pb-22 mx-auto w-[95%] sm:w-[90%] 2xl:w-[80%]'>
        {
          response.data.length > 0 ? response.data.map(d => {
            return (
              <InstallerCard d={d} key={d?.id} />
            )
          }) :
            <p className='font-inter text-base text-red-600 font-medium'>No Installer found!</p>
        }
      </section>

    </main>
  )
}

export default Page