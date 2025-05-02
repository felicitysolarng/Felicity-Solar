import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { company_nav_links } from "@/lib/data";
import { products_nav_links } from "@/lib/data";


//type Props = {}

function Footer() {
    return (
        <footer className="bg-black py-20">
            <div className="grid gap-y-12 mx-auto w-[90%] 2xl:w-[75%] gap-x-8 lg:grid-cols-4 grid-cols-1 md:grid-cols-2">
                <div className="flex w-[155px] h-[64px]">
                    <Image src={"/logo.png"} className="w-auto h-auto" width={155} height={64} alt="felicity solar limited" />
                </div>

                <div className="flex flex-col gap-y-4">
                    <h4 className="text-primary font-bold text-sm">Company</h4>
                    <ul className="flex flex-col gap-y-4">
                        {company_nav_links.map(c => {
                            return (
                                <li key={c.label}>
                                    <Link href={c.url} className="text-white font-medium text-sm" >
                                        {c.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="text-primary font-bold text-sm">Products</h4>
                    <ul className="flex flex-col gap-y-4">
                        {products_nav_links.map(c => {
                            return (
                                <li key={c.label}>
                                    <Link href={c.url} className="text-white font-medium text-sm" >
                                        {c.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex flex-col gap-y-4">
                    <p className="font-semibold text-sm text-white">
                        <span>Tel:</span> <Link href={"tel:+2347032054367"}>+234 801 234 5678</Link>
                    </p>
                    <p className="font-semibold text-sm text-white">
                        <span>Email:</span> <Link href={"mailto:info@felicitysolar.ng"}>info@felicitysolar.ng</Link>
                    </p>
                    <p className="font-semibold text-sm text-white">
                        Estate 2, Omotayo Omotosho Street, Durbar Road, Amuwo Odofin Estate, Lagos State Nigeria
                    </p>
                </div>


            </div>
        </footer>
    )
}

export default Footer