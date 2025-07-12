"use client";
import { ContactDetailsSchema } from '@/lib/schema';
import { IContactDetails } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


type IDetails = {
    "id": number,
    "phone": string,
    "email": string,
    "address": string,
    "created_at": string,
    "updated_at": string
}

type IResponse = {
    status: number,
    message: string,
    data: IDetails
}

export const fetchDetails = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/contact-details`);
    if (!res.ok) {
        throw new Error('Failed to fetch contact details');
    }
    const response: IResponse = await res.json();

    return response;
}

const EditContactDetail = async (variables: IContactDetails) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/contact-details`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(variables),
        credentials: 'include',
    });

    if (!res.ok) {
        throw new Error('Failed to edit contact details');
    }

    const response = await res.json();
    return response;
}

type FormSchema = z.infer<typeof ContactDetailsSchema>;

function EditContactDetails() {
    const queryClient = useQueryClient()
    const router = useRouter();
    const id = "1";


    const { data, isLoading, isError } = useQuery({
        queryKey: ['contacts'],
        queryFn: () => fetchDetails()
    })

    const details: IDetails | undefined = data?.data;

    const mutation = useMutation({
        mutationFn: (variables: IContactDetails) => EditContactDetail(variables)
    })


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<FormSchema>({
        resolver: zodResolver(ContactDetailsSchema),
        defaultValues: {
            email: '',
            phone: '',
            address: ''
        }
    });

    useEffect(() => {

        if (details) {
            setValue("email", details.email);
            setValue("phone", details.phone);
            setValue("address", details.address);
        }
    }, [setValue, details])

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
        return <div className='flex h-screen font-semibold text-red-700'>Error loading Contact Details...</div>
    }

    const onSubmit: SubmitHandler<FormSchema> = (data) => {

        const payload: IContactDetails = {
            id,
            email: data.email,
            address: data.address,
            phone: data.phone
        }
        mutation.mutate(payload, {
            onSuccess(data) {
                //console.log({ msg: "Article updated successfully:", data, variables, context });
                toast.success(data.message);
                reset();
                queryClient.invalidateQueries({ queryKey: ['contacts'] });
                router.push("/admin/dashboard")
            },
        });
    }

    return (
        <div className="flex flex-col gap-y-6 h-[91vh] overflow-y-scroll">
            <button className='font-inter font-semibold mt-4 px-6 flex text-sm items-center cursor-pointer dark:text-grey-800' onClick={() => router.back()}> <ChevronLeft color='#344054' size={18} /> Back</button>
            <div className="flex py-8 px-6 gap-x-6 ">

                <div className="w-[80%] py-6 px-10 flex flex-col gap-y-8 bg-white rounded-md">
                    <div className="flex flex-col gap-y-6">
                        <h2 className='text-grey-800 font-inter text-base font-semibold'>Edit Contact Details</h2>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="py-6">
                        <div className="grid grid-cols-1 gap-4 mb-4">
                            <div>
                                <label id='phone' className="block text-sm font-medium mb-1 text-grey-900">Phone Details</label>
                                <input
                                    type="text"
                                    id='phone'
                                    placeholder="Enter Phone contacts"
                                    className="w-full border rounded-md h-11 px-3 py-2 text-sm focus:outline-none focus:border-none focus:ring focus:ring-primary text-grey-900"
                                    {...register('phone')}
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                            </div>

                            <div>
                                <label htmlFor='email' className="block text-sm font-medium mb-1 text-grey-900">Email Address</label>
                                <input
                                    type="text"
                                    id='email'
                                    placeholder="Enter email address"
                                    className="w-full border rounded-md h-11 px-3 py-2 text-sm focus:outline-none focus:border-none focus:ring focus:ring-primary text-grey-900"
                                    {...register('email')}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor='address' className="block text-sm font-medium mb-1 text-grey-900"> Address</label>
                                <textarea
                                    rows={4}
                                    id='address'
                                    placeholder="Enter address"
                                    className="w-full text-grey-900 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:border-none focus:ring-primary resize-none"
                                    {...register('address')}
                                />
                                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                            </div>
                        </div>


                        <div className="flex justify-start gap-4">
                            <button
                                type="submit"
                                disabled={mutation.isPending}
                                className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-6 py-2 rounded-md"
                            >
                                {mutation.isPending ? "submiting" : "Done"}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div >
    )
}

export default EditContactDetails