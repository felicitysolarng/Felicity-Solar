"use client";

import { OrderProductSchema } from '@/lib/schema';
import { ISubmitOrder } from '@/lib/types';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import SuccessfulOrderModal from './successfulOrderModal';
import { toast } from 'react-toastify';


type FormSchema = z.infer<typeof OrderProductSchema>;

const order = async (variables: ISubmitOrder) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/order`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(variables),
    });

    if (!res.ok) {
        const error = await res.json();

        throw new Error(error.error || 'Failed to place order');
    }

    const response = await res.json();
    return response;
}
function ProcessOrder({ productName }: { productName: string }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<FormSchema>({
        resolver: zodResolver(OrderProductSchema),
        defaultValues: {
            fullnames: "",
            productName: "",
            email: "",
            phone: "",
            qty: "1",
            notes: ""
        }
    });

    useEffect(() => {
        if (productName) {
            setValue('productName', productName);
        }
    }, [productName, setValue])



    const mutation = useMutation({
        mutationFn: (variables: ISubmitOrder) => order(variables)
    })

    const onSubmit: SubmitHandler<FormSchema> = (data) => {


        mutation.mutate(data, {
            onSuccess: (data) => {
                toast.success("Order placed successfully");
                console.log("Order placed successfully:", data);
                reset();
                setIsOpen(false);
                setIsSuccess(!isSuccess);
            },
            onError: (error) => {
                console.error("Error placing order:", error);
                toast.error(error.message);
                setIsOpen(false);
            }
        });
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-indigo-600 max-w-[170px] w-max flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                Order Now
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(!isOpen)} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/30" />

                {/* Full-screen container to center the panel */}
                <div className="fixed inset-0 flex w-screen items-center justify-center ">
                    {/* The actual dialog panel  */}
                    <DialogPanel className="max-w-lg space-y-4 rounded-md bg-white px-6 py-12 overflow-y-scroll h-[100vh] lg:h-auto lg:overflow-hidden w-[98vw]">
                        <DialogTitle className="font-bold text-2xl font-inter">Place Your Order Request</DialogTitle>
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                            <div className='mt-10 mb-4'>
                                <p className="mb-2 text-sm font-medium text-gray-900 dark:text-white ">Product Name</p>
                                <p className="text-[15px] border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-sm">
                                    LPBA 48V 200Ah 10kWh Grade A Lithium Phosphate Solar Battery Pack with BMS by Felicity Solar
                                </p>
                                {errors.productName && <p className="text-red-500 mt-1 text-sm">{errors.productName.message}</p>}
                            </div>
                            <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4">
                                <div className='w-full'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fullnames</label>
                                    <input type="text" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-sm text-sm h-11" placeholder="Enter your name" {...register('fullnames')} />
                                    {errors.fullnames && <p className="mt-1 text-red-500 text-sm">{errors.fullnames.message}</p>}
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                    <input type="email" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-sm text-sm h-11" placeholder="name@company.com" {...register('email')} />
                                    {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>}
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4">
                                <div className='w-full'>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                    <input type="text" className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-sm text-sm h-11" placeholder="070484738***" {...register('phone')} />
                                    {errors.phone && <p className="text-red-500 mt-1 text-sm">{errors.phone.message}</p>}
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="qty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                                    <input type="number" className=" border border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-sm h-11" placeholder="Enter the quantity needed" {...register('qty')} />
                                    {errors.qty && <p className="text-red-500 mt-1 text-sm">{errors.qty.message}</p>}
                                </div>
                            </div>
                            <div className='w-full mt-4'>
                                <label htmlFor="qty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Notes / Use Case</label>
                                <textarea
                                    {...register('notes')}
                                    rows={4}
                                    className="block w-full overflow-auto rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 resize-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-sm"
                                    placeholder="Any additional information or special requests?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className='bg-primary text-white px-2 py-2 text-sm rounded-md mt-8'
                                disabled={mutation.isPending}
                            >
                                {mutation.isPending ? "Submitting Order..." : " Submit"}
                            </button>

                        </form>
                    </DialogPanel>
                </div>
            </Dialog>

            {
                isSuccess && <SuccessfulOrderModal />
            }
        </>

    )
}

export default ProcessOrder