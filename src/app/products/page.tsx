import { Metadata } from 'next'
import React from 'react'

//type Props = {}

export const metadata: Metadata = {
  title: 'Products - Felicity Solar',
  description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}

function page() {
  return (
    <div>Products</div>
  )
}

export default page