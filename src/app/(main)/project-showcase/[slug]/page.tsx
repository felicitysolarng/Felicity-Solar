import Navbar from '@/components/layouts/navbar/Navbar';
import { ChevronRight } from 'lucide-react';
import { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { IProjects } from '../state/[stateId]/page';
//import { useRouter } from 'next/router'


type Props = {
    params: Promise<{ slug: string }>
}

interface SuccessResponse {
    status: number;
    data: IProjects;
}

interface ErrorResponse {
    status: number;
    error: string;
}

type ProjectsResponse = SuccessResponse | ErrorResponse;

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).slug;

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/project_showcases/${id}`, {
            next: { revalidate: 60 }, // Optional: revalidate every 60s
        });

        if (!res.ok) {
            throw new Error("Failed to fetch project");
        }

        const data: {
            data: IProjects;
            message: string;
            status: number;
        } = await res.json();

        const project = data?.data;

        return {
            title: `${project?.title} | Felicity Solar`,
            description: project?.content?.slice(0, 160), // Shorten description for SEO
            openGraph: {
                images: [project?.thumbnail],
            },
        };
    } catch (error) {
        console.error(error);

        return {
            title: "Project Not Found | Felicity Solar",
            description: "We couldn't find this project..",
        };
    }
}

async function fetchProjectDetails(id: string): Promise<ProjectsResponse> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/project_showcases/${id}`);
        const resp: {
            data?: IProjects;
            status: number | string;
            message?: string;
            error?: string;
        } = await response.json();

        const status = typeof resp.status === 'string' ? parseInt(resp.status) : resp.status;

        if (status !== 201 || !resp.data) {
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

function isSuccess(response: ProjectsResponse): response is SuccessResponse {
    return 'data' in response && response.data !== undefined;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const id = (await params).slug;

    const details = await fetchProjectDetails(id)

    if (details.status !== 201) {
        return <div className="flex flex-col">
            <Navbar linkClassName="text-black" className='hidden lg:flex bg-white text-black border-b border-grey-100' variant='primary' />
            <main className='font-[family-name:var(--font-inter)] bg-white flex justify-center h-[60vh] mx-auto w-[90%] flex-col gap-y-8 xl:w-[70%] 2xl:w-[60%] mt-18 lg:mt-0'>
                <h1 className='font-inter text-3xl font-semibold'>Oooop</h1>
                <p className='text-red-600 font-inter text-base'>  An error Occured!</p>

            </main>
        </div>

    }

    if (isSuccess(details)) {
   
        const markup = { __html: details?.data?.content };
        return (
            <div className="flex flex-col">
                <Navbar linkClassName="text-black" className='hidden lg:flex bg-white text-black border-b border-grey-100' variant='primary' />
                <main className='font-[family-name:var(--font-inter)] bg-white mx-auto w-[90%] flex-col gap-y-8 xl:w-[70%] 2xl:w-[60%] mt-18 lg:mt-0'>
                    <div className="flex lg:pb-4 pt-8 gap-y-1 lg:gap-y-0 lg:items-center  md:flex-row">
                        <Link href="/project-showcase" className='flex font-medium  text-sm 2xl:text-base items-center text-grey-400'>Project <ChevronRight size={16} /></Link>
                        <p className='text-grey-700 text-sm 2xl:text-base font-medium'>Post: {details.data.title}</p>
                    </div>

                    <section className='w-full lg:w-4/5 pb-32 pt-14'>
                        <div className="flex w-full h-[300px] rounded-md">
                            {details?.data?.thumbnail && <Image src={details?.data?.thumbnail} width={678} className='rounded-md' height={300} alt={details?.data?.title} />}

                        </div>
                        <div className="flex flex-col gap-y-2 mt-5 mb-18">
                            <h3 className='uppercase text-primary font-bold text-xs xl:text-sm '>{details?.data?.state_name}</h3>
                            <h2 className='text-2xl font-bold text-grey-800'>{details?.data?.title}</h2>
                        </div>

                        <div className='article-container flex flex-col gap-y-6' dangerouslySetInnerHTML={markup} />
                    </section>

                </main>
            </div>
        )
    }
}