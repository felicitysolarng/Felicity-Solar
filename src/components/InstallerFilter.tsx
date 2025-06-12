'use client';


export type IState = {
    state_name: string,
    state_logo: string,
    id: string
}
export type IStateResponse = {
    data: IState[],
    message: string,
    status: number
}

import { useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';

export default function InstallersFilter({ defaultValue }: { defaultValue: string | number }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const fetchStates = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/states-with-installers`);
        if (!res.ok) {
            throw new Error('Failed to fetch states');
        }
        return res.json();
    }
    const { data } = useQuery({
        queryKey: ['states'],
        queryFn: fetchStates
    })

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const state = e.target.value;
        const params = new URLSearchParams(searchParams);
        if (state) {
            params.set('stateId', state);
        } else {
            params.delete('stateId');
        }
        router.push(`?${params.toString()}`);
    };


    const states: IState[] = data?.data ?? [];
    return <div className="flex justify-end items-center mx-auto w-[90%] 2xl:w-[75%] mt-8">
        <form method="GET" className="min-w-[20%]">
            <label htmlFor="countries" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Filter installers by state</label>
            <select name='states' defaultValue={defaultValue} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm xl:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value={""}>Choose a state</option>
                {states.length > 0 && states.map(s => {
                    return <option key={s.id} value={s.id}>{s.state_name}</option>
                })}
            </select>
        </form>
    </div>
}
