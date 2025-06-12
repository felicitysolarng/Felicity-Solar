import React from 'react'
import EditContactDetails from './components/EditContactDetails'

//type Props = {}

function page() {
    return (
        <div className='h-[99vh] '>
            <header className="min-h-16 h-[7vh] py-8 border bg-white border-[#F0F2F5] flex justify-start px-6 items-center text-grey-800 font-bold text-2xl">
                Contact Details
            </header>
            <div className="flex py-8 px-6 flex-col gap-y-12 h-[91vh] overflow-y-scroll">

                <EditContactDetails />
            </div>
        </div>
    )
}

export default page