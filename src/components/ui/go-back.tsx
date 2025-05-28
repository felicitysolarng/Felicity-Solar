"use client";
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

//

function Goback() {
    const router = useRouter()
    return (
        <button className='text-grey-400 items-center flex font-medium text-sm' onClick={() => router.back()}>
            <ChevronLeft color='#98A2B3' size={16} /> Go back
        </button>
    )
}

export default Goback