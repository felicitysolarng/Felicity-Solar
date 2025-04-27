import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'About us - Felicity Solar',
    description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}

function index() {
    return (
        <div>About us page</div>
    )
}

export default index