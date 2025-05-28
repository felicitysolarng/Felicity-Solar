"use client";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import React from 'react'



function SuccessfulOrderModal() {
    const [isOpen, setIsOpen] = React.useState(true);
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(!isOpen)} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/30" />

            {/* Full-screen container to center the panel */}
            <div className="fixed inset-0 flex w-screen items-center justify-center ">
                {/* The actual dialog panel  */}
                <DialogPanel className="max-w-lg space-y-4 rounded-md bg-white px-6 py-12 overflow-y-scroll h-[100vh] lg:h-auto lg:overflow-hidden w-[98vw]">
                    <DialogTitle className="font-bold text-3xl font-inter">Order Successful </DialogTitle>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nihil porro facilis molestias quas repellendus vel minima recusandae consectetur. Eius, mollitia quia, itaque reiciendis quidem asperiores odio porro doloribus error inventore suscipit, totam libero accusantium quas veniam iste. Voluptatum cum blanditiis rem eligendi laborum esse inventore itaque illo ab corporis.</p>
                </DialogPanel>

                <button onClick={() => setIsOpen(false)} className='bg-grey-800 text-white px-2 py-2 rounded-md text-sm mt-8'>Okay</button>
            </div>
        </Dialog>
    )
}

export default SuccessfulOrderModal