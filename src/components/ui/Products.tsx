"use client";
import React, { useState } from 'react'
import { fetchProduts } from '@/app/(admin)/admin/products/components/Products';
import { useQuery } from '@tanstack/react-query';

import Product from './product';
import Pagination from './pagination';


function Products() {
    const [currentPage, setCurrentPage] = useState(1)
    const limit = 20;


    const query = useQuery({
        queryKey: ['products', currentPage],
        queryFn: () => fetchProduts(currentPage, limit)
    })
    const handleChange = (page: number) => {
        setCurrentPage(page)
    }
    if (query.isLoading) {
        return (
           <div className='flex justify-center w-full h-full '>
            <div className="w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] w-full mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] w-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-full"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] w-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] w-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] w-full"></div>

                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] w-full mb-4 mt-8"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] w-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-full"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] w-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] w-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] w-full"></div>
            </div>
           
        </div>
        )
    }
    if (query.isError) {
        return <div className='flex h-screen font-semibold text-red-700'>Error loading products...</div>
    }
    const products = query.data?.data ?? [];
    const pagination = query.data?.pagination;


    if (products.length === 0) {
        return <p className='text-lg font-medium'>No Product currently available</p>
    }

    return (
        <div className="flex flex-col gap-y-6">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-14 gap-x-7 xl:grid-cols-4">
                {
                    products.map(p => {
                        return (
                            <Product
                                details={p}
                                key={p.id}
                                category_path=""
                            />

                        )
                    })
                }
            </div>


            <Pagination totalPages={pagination?.total_pages ?? 0} currentPage={currentPage} onPageChange={handleChange} />
        </div>

    )


}

export default Products