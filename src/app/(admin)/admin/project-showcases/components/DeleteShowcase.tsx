"use client";
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useMutation } from '@tanstack/react-query';
import { Trash2 } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

type Props = {
    id: string | number
}

async function deleteShowcase(id: string | number) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/project_showcases/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    });

    return await response.json();
}

function DeleteShowcase({ id }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const mutation = useMutation({
        mutationFn: () => deleteShowcase(id),
        mutationKey: ['deletingShowcases', id],
        onSuccess(data, variables, context) {
            //console.log({ data, variables, context });
            toast.success(data.message)
            setIsOpen(false)
        },
        onError(error, variables, context) {
            console.error({ error, variables, context });
            setIsOpen(false)
        },
    })

    return (

        <>
            <button className='bg-transparent' onClick={() => setIsOpen(true)}>
                <Trash2 size={20} color='#9f0202b7' />
            </button>
            <Dialog open={isOpen} onClose={() => setIsOpen(!isOpen)} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/30" />

                {/* Full-screen container to center the panel */}
                <div className="fixed inset-0 flex w-screen items-center justify-center ">
                    {/* The actual dialog panel  */}
                    <DialogPanel className="max-w-lg space-y-4 rounded-md bg-white px-6 py-12 overflow-y-scroll h-[100vh] lg:h-auto lg:overflow-hidden w-[98vw]">
                        <DialogTitle className="font-bold text-2xl font-inter">Delete Product?</DialogTitle>
                        <Description>Are you sure you want to proceed with deleting this Order?</Description>

                        <div className="flex gap-x-6 justify-end">
                            <button className='font-medium border py-2 px-4 border-grey-700 rounded-md ' onClick={() => setIsOpen(!isOpen)}>Close</button>
                            <button
                                disabled={mutation.isPending}
                                onClick={() => mutation.mutate()}
                                className='bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700'
                            >
                                {mutation.isPending ? "Deleting..." : "Proceed"}
                            </button>
                        </div>
                    </DialogPanel>

                </div>
            </Dialog>
        </>

    )
}

export default DeleteShowcase