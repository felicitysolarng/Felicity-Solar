
import { IBlog } from '@/app/(admin)/admin/blogs/components/Articles';
import { fetchArticle } from '@/app/(admin)/admin/blogs/components/EditArticle';
import Navbar from '@/components/layouts/navbar/Navbar';
import { ChevronRight } from 'lucide-react';
//import { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
//import { useRouter } from 'next/router'



type Props = {
    params: Promise<{ slug: string }>
}

interface SuccessResponse {
    status: number;
    data: IBlog;
}

interface ErrorResponse {
    status: number;
    error: string;
}

type BlogResponse = SuccessResponse | ErrorResponse;

async function fetchBlogDetails(id: string): Promise<BlogResponse> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/blogs/${id}`);
        const resp: {
            data?: IBlog;
            status: number | string;
            message?: string;
            error?: string;
        } = await response.json();

        const status = typeof resp.status === 'string' ? parseInt(resp.status) : resp.status;

        if (status !== 200 || !resp.data) {
            return {
                status,
                error: resp.error || resp.message || 'Unknown error',
            };
        }

        return { status, data: resp.data };
    } catch (error: any) {
        return {
            status: 500,
            error: 'Network or parsing error: ' + error.message,
        };
    }
}

function isSuccess(response: BlogResponse): response is SuccessResponse {
    return 'data' in response && response.data !== undefined;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const id = (await params).slug;

    const details = await fetchBlogDetails(id)

    if (details.status !== 200) {
        return <div className="flex flex-col">
            <Navbar linkClassName="text-black" className='hidden lg:flex bg-white text-black border-b border-grey-100' variant='primary' />
            <main className='font-[family-name:var(--font-inter)] bg-white flex justify-center h-[60vh] mx-auto w-[90%] flex-col gap-y-8 xl:w-[70%] 2xl:w-[60%] mt-18 lg:mt-0'>
                <h1 className='font-inter text-3xl font-semibold'>Oooop</h1>
                <p className='text-red-600 font-inter text-base'>  An error Occured!</p>

            </main>
        </div>

    }

    if (isSuccess(details)) {

        return (
            <div className="flex flex-col">
                <Navbar linkClassName="text-black" className='hidden lg:flex bg-white text-black border-b border-grey-100' variant='primary' />
                <main className='font-[family-name:var(--font-inter)] bg-white mx-auto w-[90%] flex-col gap-y-8 xl:w-[70%] 2xl:w-[60%] mt-18 lg:mt-0'>
                    <div className="flex lg:pb-4 pt-8 gap-y-1 lg:gap-y-0 lg:items-center  md:flex-row">
                        <Link href="/blog" className='flex font-medium  text-sm 2xl:text-base items-center text-grey-400'>Blog <ChevronRight size={16} /></Link>
                        <p className='text-grey-700 text-sm 2xl:text-base font-medium'>Post: {details.data.title}</p>
                    </div>

                    <section className='w-full lg:w-4/5 pb-32 pt-14'>
                        <div className="flex w-full h-[300px] rounded-md">
                            <Image src={details.data.thumbnail} width={678} className='rounded-md' height={300} alt={""} />
                        </div>
                        <div className='mt-10' dangerouslySetInnerHTML={{ __html: details.data.content }} /> 
                    </section>

                </main>
            </div>
        )
    }


}