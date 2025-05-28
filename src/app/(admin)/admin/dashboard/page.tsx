import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Admin Dashboard- Felicity Solar',
    description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}

function index() {
    return (
        <>
            <header className="h-16 border border-[#F0F2F5] flex justify-start px-6 items-center text-grey-800 font-bold text-2xl">
                Dashboard
            </header>
            <div className="flex py-8 px-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia natus doloremque repellat? Maxime atque mollitia labore possimus nemo alias, totam, numquam magnam laboriosam deleniti ipsam distinctio laudantium, at a voluptatibus accusantium omnis similique dicta rem laborum autem saepe eaque debitis odit. In quos eum illo id quae itaque delectus repellat.
            </div>
        </>
    )
}

export default index