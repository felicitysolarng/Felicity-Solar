"use client";
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useRouter } from 'next/navigation';
import React from 'react'



function SuccessfulOrderModal() {
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState(true);

    const handleBtn = () => {
        router.back();
        setIsOpen(false)
    }
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/80" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg flex flex-col justify-center items-center space-y-4 border bg-white p-12 rounded-lg">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.9997 62.9331C49.0838 62.9331 62.9331 49.0838 62.9331 31.9997C62.9331 14.9157 49.0838 1.06641 31.9997 1.06641C14.9157 1.06641 1.06641 14.9157 1.06641 31.9997C1.06641 49.0838 14.9157 62.9331 31.9997 62.9331Z" fill="#5EDD60" />
                        <path d="M25.878 44.8747L18.6247 37.7899C18.4678 37.6374 18.3431 37.455 18.2579 37.2535C18.1728 37.052 18.1289 36.8354 18.1289 36.6166C18.1289 36.3978 18.1728 36.1812 18.2579 35.9797C18.3431 35.7782 18.4678 35.5958 18.6247 35.4433L21.03 33.0966C21.3526 32.7841 21.7841 32.6093 22.2332 32.6093C22.6824 32.6093 23.1139 32.7841 23.4364 33.0966L27.7543 37.3174L39.8642 18.9067C40.114 18.5352 40.4986 18.2754 40.9365 18.1823C41.3744 18.0891 41.8314 18.1699 42.2108 18.4075L45.0738 20.2059C45.2608 20.3209 45.4228 20.4723 45.5502 20.651C45.6776 20.8298 45.7678 21.0323 45.8154 21.2466C45.8631 21.4609 45.8672 21.6826 45.8276 21.8985C45.7879 22.1144 45.7053 22.3201 45.5847 22.5035L31.2455 44.3105C30.9582 44.7373 30.5808 45.096 30.1398 45.3612C29.6989 45.6264 29.2052 45.7917 28.6935 45.8455C28.1818 45.8993 27.6645 45.8403 27.178 45.6726C26.6916 45.5048 26.2479 45.2325 25.878 44.8747Z" fill="white" />
                    </svg>

                    <DialogTitle className="font-bold text-xl font-inter">Order placed Successfully</DialogTitle>
                    <Description className="text-center">
                        We’ve received your order, and a member of our team will be in touch shortly to process your order.
                    </Description>
                    <div className="flex items-center justify-end">
                        <button onClick={handleBtn} className='bg-grey-800 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-grey-800/90 text-base mt-8 h-11 '>Okay</button>
                    </div>

                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default SuccessfulOrderModal