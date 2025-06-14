"use client";
import React, { useState } from 'react';
//import { Delete, DeleteIcon, Trash, Trash2 } from 'lucide-react'
import { useQuery } from '@tanstack/react-query';
import { capitalizeFirstLetterOfEachWord } from '@/lib/constants';
import { Plus, SquarePen } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import Pagination from '@/components/ui/pagination';
import DeleteArticle from './DeleteArticle';

export type IPagination = {
    "total_rows": number,
    "current_page": number,
    "limit": number,
    "total_pages": number
}
export type IBlog = {
    "id": number,
    "title": string,
    "thumbnail": string,
    "content": string,
    "category": string,
    "created_at": string
}

export type IResponse = {
    data: IBlog[],
    message: string,
    status: number,
    pagination: IPagination
}
export const fetchArticles = async (page: number, limit: number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blogs?page=${page}&limit=${limit}`);
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const response: IResponse = await res.json();

    return response;
}



function Articles() {
    const [currentPage, setCurrentPage] = useState(1)
    const limit = 20;


    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['articles'],
        queryFn: () => fetchArticles(currentPage, limit)
    })

    const handleChange = (page: number) => {
        setCurrentPage(page)
    }


    if (isLoading) {
        return <div className='flex justify-center  h-screen'>
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
    }
    if (isError) {
        return <div className='flex h-screen font-semibold text-red-700'>Error loading articles...</div>
    }
    if (!data || !data.data || data.data.length === 0) {
        return <div className='flex justify-center items-center h-screen gap-y-5 flex-col'>
            <h1 className='font-bold text-4xl'> No Article found</h1>
            <div className='flex flex-col'>
                <Link href={"/admin/blogs/create"} className='bg-primary h-10 text-white rounded-md text-sm font-medium flex items-center px-2'>
                    <Plus size={16} className='mr-1' />
                    Add Article
                </Link>
            </div>

        </div>
    }
    const articles: IBlog[] = data.data;
    const pagination: IPagination = data.pagination;

    return (
        <div className="relative shadow-md sm:rounded-lg pb-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className=" text-gray-700 bg-grey-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4 text-base">
                            Article Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-base">
                            Date Created
                        </th>
                        <th scope="col" className="px-6 py-3 text-base">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3 text-base">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(p => {
                        return <tr key={p.id}>
                            <td className="font-inter p-5 text-sm lg:text-base leading-6 font-medium text-gray-900 break-words"> {p.title}</td>
                            <td className="font-inter p-5 whitespace-nowrap text-sm lg:text-base leading-6 font-medium text-gray-900 ">{format(new Date(p.created_at), "do MMM, yyyy h:mmaaa")}</td>
                            <td className="font-inter p-5 whitespace-nowrap text-sm lg:text-base leading-6 font-medium text-gray-900"> {capitalizeFirstLetterOfEachWord(p.category)} </td>

                            <td className="font-inter p-5 whitespace-nowrap text-sm lg:text-base leading-6 font-medium text-gray-900 ">
                                <div className="flex gap-x-6 items-center">
                                    <Link href={`/admin/blogs/edit/${p.id}`}>
                                        <SquarePen size={20} color='#00102e' />
                                    </Link>
                                    <DeleteArticle id={p.id} />
                                </div>


                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <Pagination totalPages={pagination?.total_pages} currentPage={currentPage} onPageChange={handleChange} />
        </div>
    )
}

export default Articles