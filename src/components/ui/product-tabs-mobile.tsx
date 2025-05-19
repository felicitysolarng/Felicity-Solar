"use client"
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import React from 'react'
import { productsCats } from '@/lib/data';
type Props = {
    activeTab: string,
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}


function ProductTabsMobile({ activeTab, setActiveTab }: Props) {

    return (

        <div className="lg:hidden w-full h-14 flex items-center">
            <Select.Root value={activeTab} onValueChange={setActiveTab}>
                {/* trigger ----------------------------------------------------------- */}
                <Select.Trigger
                    className="relative min-w-3/5 mx-auto flex items-center justify-between bg-grey-950 text-white text-sm h-14 px-6 pr-14 rounded-4xl focus:outline-none"
                    aria-label="Product category"
                >
                    <Select.Value placeholder="Choose a product" />
                    <Select.Icon className="absolute right-4 text-white pointer-events-none">
                        <ChevronDownIcon />
                    </Select.Icon>
                </Select.Trigger>

                {/* dropdown ---------------------------------------------------------- */}
                <Select.Portal>
                    <Select.Content
                        className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                        sideOffset={5}
                    >
                        <Select.Viewport className="p-2">
                            {productsCats.map((cat) => (
                                <Select.Item
                                    key={cat.value}
                                    value={cat.value}
                                    className="cursor-pointer font-inter px-4 py-2 text-sm text-gray-800 rounded-md focus:outline-none focus:bg-gray-100 hover:bg-gray-100"
                                >
                                    <Select.ItemText>{cat.label}</Select.ItemText>
                                </Select.Item>
                            ))}
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>

    )
}

export default ProductTabsMobile


/* 

  <select
                value={activeTab}
                onChange={handleChange}
                className="bg-grey-950 relative border border-gray-300 px-4 pr-10 text-white text-sm block h-13 py-2.5 rounded-3xl w-1/2 mx-auto appearance-none"
            >
                <option value="solar_panels">Solar Panels</option>
                <option value="batteries">Batteries</option>
                <option value="street_light">Street Lights</option>
                <option value="inverters">Inverters</option>
                <option value="controllers">Charge Controllers</option>
                <option value="floor_light">Floor Light</option>
            </select>
*/