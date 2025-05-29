
import { cities } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

//

function MobileShowcaseDropdown() {
    return (
        <div className='w-full flex gap-y-10 flex-col'>
            <div className="flex flex-col gap-y-3">
                <h3 className='text-primary font-inter font-semibold text-lg'>Trusted Across Cities</h3>
                <p className='text-white font-inter font-normal text-sm'>We’ve delivered successful solar projects in major cities across the country.</p>
            </div>
            <div className="flex-wrap gap-4 py-4 px-3 bg-[#161414] rounded-md flex  items-center">
                {cities.map(city => {
                    return (
                        <Link href={city.path} key={city.name} className='flex items-center justify-center gap-x-2 border rounded-md px-2 py-2 border-grey-700'>
                            <Image src={city.logo} width={36} height={36} alt={city.name} />
                            <p className='text-sm font-medium text-white'>{city.name}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default MobileShowcaseDropdown