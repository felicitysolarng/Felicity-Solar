import { Metadata } from 'next'
import React from 'react'

type Props = {}

export const metadata: Metadata = {
    title: 'Blog - Felicity Solar',
    description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}

function index({ }: Props) {
    return (
        <div>Blog route</div>
    )
}

export default index