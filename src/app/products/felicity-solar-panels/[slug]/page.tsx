//import { Metadata } from 'next';
import Navbar from '@/components/layouts/navbar/Navbar'
import React from 'react'

/* type Props = {
    params: {
        slug: string;
    };
}; */

/* export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: `Blog Post - ${slug}`,
        description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
    }
}; */



export default async function index() {
    //const { slug } = await params

    return (
        <main className='font-[family-name:var(--font-inter)]'>

            <Navbar linkClassName="text-grey-800 font-semibold" className='hidden lg:flex bg-white text-black border-b border-grey-100' variant='primary' />
            <section className='flex justify-center flex-col mt-12 lg:mt-0 py-32 mx-auto w-[90%] 2xl:w-[75%]'>
                <h1>Product Page</h1>
                <p>{ }</p>
            </section>

        </main>
    )
}
