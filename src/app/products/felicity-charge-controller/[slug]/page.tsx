//import { Metadata } from 'next';
import Navbar from '@/components/layouts/navbar/Navbar'
import ProductImageGallery from '@/components/layouts/product_image_gallery'
import RatingStar from '@/components/layouts/rating-star'
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


                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap -mx-4">

                        <ProductImageGallery />


                        <div className="w-full md:w-1/2 mdpx-4">
                            <h2 className="text-3xl font-bold mb-2">Premium Wireless Headphones</h2>
                            <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold mr-2">$349.99</span>
                                <span className="text-gray-500 line-through">$399.99</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <RatingStar />
                                <RatingStar />
                                <RatingStar />
                                <RatingStar />
                                <RatingStar />
                                <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
                            </div>
                            <p className="text-gray-700 mb-6">Experience premium sound quality and industry-leading noise cancellation
                                with
                                these wireless headphones. Perfect for music lovers and frequent travelers.</p>

                           
                                               
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Color:</h3>
                                <div className="flex space-x-2">
                                    <button
                                        className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                                    <button
                                        className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                                    <button
                                        className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                                </div>
                            </div>

                            {/* 
                            //Quantity
                            <div className="mb-6">
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                                <input type="number" id="quantity" name="quantity" min="1" value="1"
                                    className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div> 
                            */}

                            <div className="flex space-x-4 mb-6 mt-20">
                                <button
                                    className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    Add to Cart
                                </button>
                                <button
                                    className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    Wishlist
                                </button>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Industry-leading noise cancellation</li>
                                    <li>30-hour battery life</li>
                                    <li>Touch sensor controls</li>
                                    <li>Speak-to-chat technology</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main >
    )
}
