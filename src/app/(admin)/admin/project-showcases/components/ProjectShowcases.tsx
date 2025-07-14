"use client";
import React, { useState } from 'react';
//import { Delete, DeleteIcon, Trash, Trash2 } from 'lucide-react'
import { useQuery } from '@tanstack/react-query';
import { capitalizeFirstLetterOfEachWord } from '@/lib/constants';
import { SquarePen } from 'lucide-react';
import { format, isValid } from 'date-fns';
import Link from 'next/link';
import Pagination from '@/components/ui/pagination';
import DeleteArticle from './DeleteShowcase';
import { IPagination } from '../../blogs/components/Articles';
import { IProjects } from '@/app/(main)/project-showcase/state/[stateId]/page';


type IResponse = {
    data: IProjects[],
    message: string,
    status: number,
    pagination: IPagination
}
export const fetchProjects = async (page: number, limit: number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/project_showcases?page=${page}&limit=${limit}`);
    if (!res.ok) {
        throw new Error('Failed to fetch project showcases');
    }
    const response: IResponse = await res.json();

    return response;
}



function ProjectShowcases() {
    const [currentPage, setCurrentPage] = useState(1)
    const limit = 20;


    const { data, isLoading, isError } = useQuery({
        queryKey: ['project-showcases'],
        queryFn: () => fetchProjects(currentPage, limit)
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
        return <div className='flex h-screen font-semibold text-red-700'>Error loading Project Showcase...</div>
    }
    if (!data || !data.data || data.data.length === 0) {
        return <div className='flex justify-center items-center h-screen dark:text-red-800 font-semibold'>No Project found</div>
    }
    const articles: IProjects[] = data.data;
    const pagination: IPagination = data.pagination;

    return (
        <div className="relative shadow-md sm:rounded-lg pb-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className=" text-gray-700 bg-grey-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4 text-base">
                            Project Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-base">
                            Date Created
                        </th>
                        <th scope="col" className="px-6 py-3 text-base">
                            State
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
                            <td className="font-inter p-5 whitespace-nowrap text-sm lg:text-base leading-6 font-medium text-gray-900 ">{isValid(new Date(p?.created_at ?? "")) && format(new Date(p.created_at ?? ""), "do MMM, yyyy h:mmaaa")}</td>
                            <td className="font-inter p-5 whitespace-nowrap text-sm lg:text-base leading-6 font-medium text-gray-900"> {capitalizeFirstLetterOfEachWord(p.state_name)} </td>

                            <td className="font-inter p-5 whitespace-nowrap text-sm lg:text-base leading-6 font-medium text-gray-900 ">
                                <div className="flex gap-x-6 items-center">
                                    <Link href={`/admin/project-showcases/edit/${p.id}`}>
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

export default ProjectShowcases