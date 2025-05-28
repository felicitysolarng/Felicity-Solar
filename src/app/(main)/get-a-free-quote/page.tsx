import Navbar from '@/components/layouts/navbar/Navbar'
import GetQuote from '@/components/sections/get-a-quote'
import { Metadata } from 'next'
import React from 'react'

////

export const metadata: Metadata = {
  title: 'Get Free Quote- Felicity Solar',
  description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}
function page() {
  return (
    <div>
      <Navbar linkClassName="text-grey-800 font-semibold" className='hidden border-b border-grey-100 lg:flex bg-white' variant='primary' />
      <GetQuote />
    </div>
  )
}

export default page