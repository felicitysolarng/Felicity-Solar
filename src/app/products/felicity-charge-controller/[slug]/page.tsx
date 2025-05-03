//import { Metadata } from 'next';
import Navbar from '@/components/layouts/navbar/Navbar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

/* type Props = {
    params: {
        slug: string;
    };
}; */

export function generateMetadata() {
    // const { slug } = await params;
    return {
        title: `MPPT Solar Charge Controller - 150V 100A`,
        description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
    }
};



export default async function index() {
    //const { slug } = await params

    return (
        <main className='font-[family-name:var(--font-inter)]'>
            <Navbar linkClassName="text-grey-800 font-semibold" className='hidden lg:flex bg-white text-black border-b border-grey-100' variant='primary' />
            <section className='flex justify-center flex-col mx-auto w-[90%] 2xl:w-[75%] '>
                <div className="flex lg:hidden my-10 ">
                <Link href={"/felicity-charge-controller"} className='text-grey-400 items-center flex font-medium text-sm' aria-label='link to products page'><ChevronLeft color='#98A2B3' size={16} /> Go back</Link>
                </div>
                <div className=" items-center my-10 flex-row gap-x-1 hidden lg:flex">
                    <Link href={"/products"} className='text-grey-400 items-center flex font-medium text-sm' aria-label='link to products page'> Products</Link>
                    <Link href={"/felicity-charge-controller"} className='text-grey-400 items-center flex font-medium text-sm' aria-label='link to products page'><ChevronRight color='#98A2B3' size={16} /> Charge Controller</Link>
                    <span className='text-grey-700 text-sm font-medium flex items-center'><ChevronRight color='#98A2B3' size={16} />MPPT Solar Charge Controller - 150V 100A</span>
                </div>



            </section>
        </main>
    )
}
