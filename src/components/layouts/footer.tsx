import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { company_nav_links } from "@/lib/data";
import { products_nav_links } from "@/lib/data";


//

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-black py-20">
            <div className="grid gap-y-12 mx-auto w-[90%] 2xl:w-[75%] gap-x-8 grid-cols-4 md:grid-cols-3 xl:grid-cols-4">
                <div className="flex w-full md:w-[155px] h-[64px] col-start-1 col-end-5 xl:col-start-1 xl:col-end-2">
                    <Image src={"/logo.png"} className="w-auto h-auto" width={155} height={64} alt="felicity solar limited" priority />
                </div>

                <div className="flex flex-col gap-y-4 col-start-1 md:col-end-2 col-end-3 xl:col-start-2 xl:col-end-3">
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
                <div className="flex flex-col gap-y-4 col-start-3 md:col-start-2 md:col-end-3 col-end-5 xl:col-start-3 xl:col-end-4 ">
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
                <div className="flex flex-col gap-y-4 col-start-1 col-end-5 md:col-start-3 md:col-end-4 xl:col-start-4 xl:col-end-5">
                    <p className="font-semibold text-sm text-white">
                        <span>Tel:</span> <Link href={"tel:+2347032054367"}>+234 801 234 5678</Link>
                    </p>
                    <p className="font-semibold text-sm text-white">
                        <span>Email:</span> <Link href={"mailto:info@felicitysolar.ng"}>info@felicitysolar.ng</Link>
                    </p>
                    <p className="font-semibold text-sm text-white">
                        7 Nworisa Okechukwu Ernest, Adamawa Estate, Amuwo Odofin Lagos
                        {/* Estate 2, Omotayo Omotosho Street, Durbar Road, Amuwo Odofin Estate, Lagos State Nigeria */}
                    </p>
                </div>
                <p className='font-inter text-sm lg:text-base md:text-center text-white col-start-1 col-end-5'><span>Copyright &copy; {currentYear} | </span> Designed <span className='hidden md:inline'>and developed</span> by <Link href="https://oyewole-joshua.netlify.ap/" target="__blank" className='text-primary'>Joshua Oyewole</Link></p>

            </div>
        </footer>
    )
}

export default Footer