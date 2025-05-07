import Navbar from '@/components/layouts/navbar/Navbar'
import { distributors } from '@/lib/data'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Metadata } from 'next'
//import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

////type Props = {}

export const metadata: Metadata = {
  title: 'Distributors Locations- Felicity Solar',
  description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}
function page() {
  return (
    <main className='font-[family-name:var(--font-inter)]'>

      <Navbar linkClassName="text-grey-800 font-semibold" className='hidden lg:flex bg-white text-black border-b border-grey-100' variant='primary' />

      <section className='flex justify-center flex-col mx-auto w-[90%] 2xl:w-[75%] '>
        <div className="flex lg:hidden my-10 ">
          <Link href={"/felicity-charge-controller"} className='text-grey-400 items-center flex font-medium text-sm' aria-label='link to products page'><ChevronLeft color='#98A2B3' size={16} /> Go back</Link>
        </div>
        <div className=" items-center my-10 flex-row gap-x-1 hidden lg:flex">
          <Link href={"/"} className='text-grey-400 items-center flex font-medium text-sm' aria-label='link to products page'> Homepage</Link>
          <p className='text-grey-700 items-center flex font-medium text-sm' aria-label='link to products page'><ChevronRight color='#98A2B3' size={16} />Distributors</p>
        </div>

      </section>
      <header className='mb-20'>
        <h2 className=' text-grey-900 text-4xl font-bold text-center'>Locations</h2>
      </header>
      <section className='grid grid-cols-1 md:grid-cols-2 mx-auto w-[90%] 2xl:w-[75%]'>
        {
          distributors.map(d => {
            return (
              <p>Hello</p>
            )
          })
        }
      </section>

    </main>
  )
}

export default page