
import { Plus } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Products from './components/Products'

export const metadata: Metadata = {
    title: 'Product Listing - Felicity Solar',
    description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
}

function index() {
    return (
        <>
            <header className="max-h-16 py-8 border border-[#F0F2F5] flex justify-start px-6 items-center text-grey-800 font-bold text-2xl">
                Product Listing
            </header>
            <div className="flex py-8 px-6 flex-col gap-y-12">
                <div className="flex justify-between items-center w-full">
                    <h2 className='text-grey-800 font-inter text-base font-semibold'>All Products</h2>
                    <Link href={"/admin/products/create"} className='bg-primary h-10 text-white rounded-md text-sm font-medium flex items-center px-2'>
                        <Plus size={16} className='mr-1' />
                        Add Product
                    </Link>
                </div>
                <Products />
            </div>
        </>
    )
}

export default index