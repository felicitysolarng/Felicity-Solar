
"use client";

import { AddQuerySchema } from '@/lib/schema'
import { ICreateQuery } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify'
import { z } from 'zod';

const createQuery = async (variables: ICreateQuery) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/queries`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(variables),
    });

    if (!res.ok) {
        throw new Error('Failed to submit query');
    }

    const response = await res.json();
    return response;
}


type FormSchema = z.infer<typeof AddQuerySchema>;

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormSchema>({
        resolver: zodResolver(AddQuerySchema),
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            message: ''
        }
    });

    const mutation = useMutation({
        mutationFn: (variables: ICreateQuery) => createQuery(variables)
    })

    const onSubmit: SubmitHandler<FormSchema> = (data) => {
        const payload: ICreateQuery = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            message: data.message,
        }
        mutation.mutate(payload, {
            onSuccess(data) {
                /* console.log({ msg: "Product created successfully:", data, variables, context }); */
                toast.success(data.message)
                reset();
                // Optionally, you can reset the form or redirect the user

            },
        });
    }
    /*  async function onSubmit(event: FormEvent<HTMLFormElement>) {
         event.preventDefault()
 
         const formData = new FormData(event.currentTarget)
         const response = await fetch('/api/submit', {
             method: 'POST',
             body: formData,
         })
 
         // Handle response if necessary
         const data = await response.json()
         // ...
     } */
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] mx-auto ">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block md:uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-white text-grey-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"
                            {...register('firstname')}
                        />
                        {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}
                        {/*  <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block md:uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" {...register('lastname')} />
                        {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-8">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block md:uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
                            Phone Number
                        </label>
                        <input required className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type="text" placeholder="23470474682836" {...register('phone')} />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>

                    <div className="w-full md:w-1/2 px-3 md:mb-0">
                        <label className="block md:uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="johndoe@email.com"  {...register('email')} />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block md:uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                            Message
                        </label>
                        <textarea className="appearance-none block w-full h-32 bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none" id="grid-message" placeholder="Your message" {...register('message')} />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>
                </div>
                <button type='submit'
                    disabled={mutation.isPending}
                    className='bg-primary text-white h-12 rounded-sm px-4 cursor-pointer hover:bg-primary/90'>
                    {mutation.isPending ? "Loading..." : " Send Message"}
                </button>
            </form>
        </div>
    )
}

export default ContactForm