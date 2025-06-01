"use client";
import React from 'react';
//import { Delete, DeleteIcon, Trash, Trash2 } from 'lucide-react'
import { IProductsResponse } from '@/app/(main)/products/page';
import { useQuery } from '@tanstack/react-query';
import { capitalizeFirstLetterOfEachWord } from '@/lib/constants';
import { SquarePen, Trash2 } from 'lucide-react';

const fetchProduts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/products`);
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
}

function Products() {

    const query = useQuery({
        queryKey: ['products'],
        queryFn: fetchProduts
    })

    const { data, isLoading, isError } = query;

    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'>Loading...</div>
    }
    if (isError) {
        return <div className='flex justify-center items-center h-screen'>Error loading products</div>
    }
    if (!data || !data.data || data.data.length === 0) {
        return <div className='flex justify-center items-center h-screen'>No products found</div>
    }
    const products: IProductsResponse = data;


    return (
        <div className="relative overflow-hidden  shadow-md sm:rounded-lg py-8 px-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className=" text-gray-700 uppercase bg-grey-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4 text-base">
                            {/*  <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div> */}
                            Product
                        </th>
                        <th scope="col" className="px-6 py-3 text-base">
                            Date added
                        </th>
                        <th scope="col" className="px-6 py-3 text-base">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3 text-base">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-base">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.data.map(p => {
                        return <tr key={p.id}>
                            <td className="font-inter p-5 text-sm lg:text-base leading-6 font-medium text-gray-900 break-words"> {p.product_name}</td>
                            <td className="font-inter p-5 whitespace-nowrap text-sm lg:text-base leading-6 font-medium text-gray-900 "> {p.created_at}</td>
                            <td className="font-inter p-5 whitespace-nowrap text-sm lg:text-base leading-6 font-medium text-gray-900"> {capitalizeFirstLetterOfEachWord(p.category_name)} </td>
                            <td className="font-inter p-5 whitespace-nowrap text-sm lg:text-base leading-6 font-medium text-gray-900">&#8358;{Number(p?.price).toLocaleString()}</td>
                            <td className="font-inter p-5 whitespace-nowrap text-sm lg:text-base leading-6 font-medium text-gray-900 ">
                                <div className="flex gap-x-6 items-center justify-center">
                                    <button className='bg-transparent' onClick={() => alert("hello")}>
                                        <SquarePen size={20} color='#00102e' />
                                    </button>
                                    <button className='bg-transparent' onClick={() => alert("hello")}>
                                        <Trash2 size={20} color='#9f0202b7' />
                                    </button>
                                </div>


                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <nav className="flex mt-6 items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Products