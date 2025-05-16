import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

//type Props = {}

function MobileProductDropdown() {
    return (
        <div className='w-full flex gap-y-10 flex-col'>
            <div className="flex flex-col gap-y-3">
                <h3 className='font-inter font-semibold text-lg text-primary'>High-Performance Solar Products for Every Power Need</h3>
                <p className='text-tertiary-600 font-inter font-normal text-sm text-white'>Explore our range of solar panels, inverters, batteries, and street lights — built to last and designed for efficiency.</p>
            </div>
            <ul className=" space-y-4 list-none">
                <li className='items-center justify-between pb-2 flex text-white' >
                    <Link href="/products/felicity-solar-panels" className='font-inter text-base font-medium '>Solar Panels</Link>
                    <ChevronRight size={18} color='#fff' />

                </li>
                <li className='pb-2 flex justify-between items-center text-white'>
                    <Link href="/products/felicity-solar-batteries" className='font-inter text-base font-medium '>Solar Batteries</Link>
                    <ChevronRight size={18} color='#fff' />
                </li>
                <li className='pb-2 flex justify-between items-center text-white'>
                    <Link href="/products/felicity-solar-street-light" className='font-inter text-base font-medium '>Solar Street Lights</Link>
                    <ChevronRight size={18} color='#fff' />
                </li>
                <li className='pb-2 flex justify-between items-center text-white'>

                    <Link href="/products/felicity-solar-inverter" className='font-inter text-base font-medium '>Inverters</Link>
                    <ChevronRight size={18} color='#fff' />
                </li>
                <li className='pb-2 flex justify-between items-center text-white'>
                    <Link href="/products/felicity-charge-controller" className="w-full text-left font-inter text-base font-medium text-blakskill-primary900">
                        Charge Controllers
                    </Link>
                    <ChevronRight size={18} color='#fff' />
                </li>
                <li className='pb-2 flex justify-between items-center text-white'>
                    <Link href="/products/felicity-solar-lights" className="w-full text-left font-inter text-base font-medium text-blakskill-primary900">
                        Solar Floor Light
                    </Link>
                    <ChevronRight size={18} color='#fff' />
                </li>
            </ul>

        </div>
    )
}

export default MobileProductDropdown