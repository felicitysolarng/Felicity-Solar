"use client";

import React from 'react'
import Navitem from './Navitem'
import Image from 'next/image'

type Props = {
    className?: string
}

const nav_items = [{
    url: "/",
    label: "Home"
},
{
    url: "/about-us",
    label: "About us"
},
{
    url: "/products",
    label: "Products"
},
{
    url: "/blog",
    label: "Blog"
},
{
    url: "/contact-us",
    label: "Contact us"
}
]

function Navbar({ className }: Props) {
    return (
        <nav className='h-24 bg-red-400'>
            <div className="flex w-[90%] justify-between items-center mx-auto h-full">
                <Image src={"/logo.png"} height={64} width={147} alt='felicity solar logo' priority />
                <ul className="flex gap-x-6 list-none">
                    {nav_items.map(nav => {
                        return <Navitem key={nav.url} props={nav} />
                    })}
                </ul>
            </div>

        </nav>
    )
}

export default Navbar