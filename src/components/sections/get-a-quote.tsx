
"use client";
import { SendQuoteSchema } from '@/lib/schema';
import { ISendQuote } from '@/lib/types';
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

const handleQuote = async (variables: ISendQuote) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/quotes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(variables),
    });

    if (!res.ok) {
        throw new Error('Failed to send Quote');
    }

    const response = await res.json();
    return response;
}

type FormSchema = z.infer<typeof SendQuoteSchema>;

function GetQuote() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormSchema>({
        resolver: zodResolver(SendQuoteSchema),
        defaultValues: {
            fullnames: '',
            email: '',
            location: '',
            budget_range: '',
            notes: ''
        }
    });


    const mutation = useMutation({
        mutationFn: (variables: ISendQuote) => handleQuote(variables)
    })

    const onSubmit: SubmitHandler<FormSchema> = (data) => {
        const payload: ISendQuote = {
            fullnames: data.fullnames,
            email: data.email,
            location: data.location,
            budget_range: data.budget_range,
            notes: data.notes
        }

        mutation.mutate(payload, {
            onSuccess(data) {
                if (data.status === 201) {
                      toast.success(data.message)
                    setIsOpen(true)
                  
                }
                reset();
            },
            onError(error) {
                toast.error(error.message);
                console.error(`An error occured => ${error.message}`);

            },
        });
    }

    const cancelModal = () => {
        setIsOpen(false);
        router.back();
    }

    return (
        <>
            <section className="py-12 text-gray-800 sm:py-24 mt-20 lg:mt-10">
                <div className="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row">
                    <div className="max-w-2xl px-4 lg:pr-24">
                        <p className="mb-2 text-primary">Have Custom Needs</p>
                        <h3 className="mb-5 text-3xl font-semibold">Let’s Design the Perfect Solar Solution for You</h3>
                        <p className="mb-16 text-lg text-gray-600">Whether you&apos;re looking to power your home, business, school, or farm, our solar experts are here to help. </p>
                        <div className="mb-5 flex font-medium">

                            <div className="">
                                <p className="mb-2">🔧 Expert System Design</p>
                                <span className="font-normal text-gray-600">Our engineers craft each solar setup to suit your location, budget, and energy usage—ensuring maximum efficiency and durability.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">

                            <div className="">
                                <p className="mb-2">🔋 Seamless Battery Backup</p>
                                <span className="font-normal text-gray-600">Enjoy uninterrupted power with smart battery systems that store excess energy for night-time or outages.</span>
                            </div>
                        </div>
                        <div className="mb-5 flex font-medium">

                            <div className="">
                                <p className="mb-2">💸 Cut Your Energy Bills</p>
                                <span className="font-normal text-gray-600">Slash your electricity expenses from day one and gain independence from unstable grid power.</span>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-full bg-white shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
                        <div className="relative border-b border-gray-300 p-4 py-8 sm:px-8">
                            <h3 className="mb-1 inline-block text-3xl font-medium"><span className="mr-4">Get Started Now!</span></h3>
                            {/* <span className="inline-block rounded-md bg-primary/10 px-2 py-1 text-sm text-primary sm:inline">Quick Response</span> */}
                            <p className="text-gray-600 font-medium">Get a Free Customized Solar Quote for Your Home or Business</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-4 sm:p-8">
                            <div className="flex gap-x-3 mt-4">
                                <div className="flex gap-y-2 flex-col">
                                    <label htmlFor="fullnames">Fullnames</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className=" w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 h-12 shadow-sm focus:border-grey-400  focus:outline-none hover:border-grey-200" placeholder="Enter your full name"
                                        {...register('fullnames')}
                                    />
                                    {errors.fullnames && <p className="text-red-500 text-sm">{errors.fullnames.message}</p>}
                                </div>
                                <div className="flex gap-y-2 flex-col">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" className="w-full h-12 resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-grey-400 focus:outline-none hover:border-grey-200" placeholder="Enter your email"
                                        {...register('email')}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                </div>
                            </div>
                            <div className="flex gap-x-3 mt-4">
                                <div className="flex gap-y-2 flex-col">
                                    <label htmlFor="location">Location</label>
                                    <input id="location" type="text" className=" w-full resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 h-12 shadow-sm focus:border-grey-400  focus:outline-none hover:border-grey-200" placeholder="e.g Lagos"
                                        {...register('location')}
                                    />
                                    {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                                </div>
                                <div className="flex gap-y-2 flex-col">
                                    <label htmlFor="budget">Budget Range </label>
                                    <input id="budget" type="emtextail" className="w-full h-12 resize-y overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-grey-400 focus:outline-none hover:border-grey-200 placeholder:text-sm" placeholder="₦500k–₦1M, ₦1M–₦5M, ₦5M+"
                                        {...register('budget_range')}
                                    />
                                    {errors.budget_range && <p className="text-red-500 text-sm">{errors.budget_range.message}</p>}
                                </div>
                            </div>

                            <label className="mt-5 mb-2 inline-block max-w-full">Additional Notes</label>
                            <textarea
                                id="about"
                                className="mb-8 w-full resize-none text-sm h-30 overflow-auto rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-grey-400 focus:outline-none hover:border-grey-200"
                                placeholder='Share list of equipments you want to power with the solar system'
                            />
                            <button type='submit' disabled={mutation.isPending} className="w-full rounded-lg border h-12 bg-primary p-3 text-center font-medium text-white outline-none transition focus:ring  hover:bg-pirmary-10 hover:text-white">
                                {mutation.isPending ? "Submitting..." : "Send"}
                            </button>
                        </form>
                    </div>
                </div>
            </section >


            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/80" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-lg">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.9997 62.9331C49.0838 62.9331 62.9331 49.0838 62.9331 31.9997C62.9331 14.9157 49.0838 1.06641 31.9997 1.06641C14.9157 1.06641 1.06641 14.9157 1.06641 31.9997C1.06641 49.0838 14.9157 62.9331 31.9997 62.9331Z" fill="#5EDD60" />
                            <path d="M25.878 44.8747L18.6247 37.7899C18.4678 37.6374 18.3431 37.455 18.2579 37.2535C18.1728 37.052 18.1289 36.8354 18.1289 36.6166C18.1289 36.3978 18.1728 36.1812 18.2579 35.9797C18.3431 35.7782 18.4678 35.5958 18.6247 35.4433L21.03 33.0966C21.3526 32.7841 21.7841 32.6093 22.2332 32.6093C22.6824 32.6093 23.1139 32.7841 23.4364 33.0966L27.7543 37.3174L39.8642 18.9067C40.114 18.5352 40.4986 18.2754 40.9365 18.1823C41.3744 18.0891 41.8314 18.1699 42.2108 18.4075L45.0738 20.2059C45.2608 20.3209 45.4228 20.4723 45.5502 20.651C45.6776 20.8298 45.7678 21.0323 45.8154 21.2466C45.8631 21.4609 45.8672 21.6826 45.8276 21.8985C45.7879 22.1144 45.7053 22.3201 45.5847 22.5035L31.2455 44.3105C30.9582 44.7373 30.5808 45.096 30.1398 45.3612C29.6989 45.6264 29.2052 45.7917 28.6935 45.8455C28.1818 45.8993 27.6645 45.8403 27.178 45.6726C26.6916 45.5048 26.2479 45.2325 25.878 44.8747Z" fill="white" />
                        </svg>

                        <DialogTitle className="font-bold text-xl font-inter">Thank you for reaching out!</DialogTitle>
                        <Description>
                            We’ve received your request, and a member of our team will be in touch shortly to follow up
                        </Description>

                        <div className="flex gap-4 justify-end">
                            <button className='bg-black rounded-md hover:bg-black/80 cursor-pointer text-white h-11 px-4' onClick={cancelModal}>Cancel</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>


    )
}

export default GetQuote