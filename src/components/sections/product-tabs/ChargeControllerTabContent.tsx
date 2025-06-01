"use client"
import React, { useState } from 'react'
import { Tabs } from "radix-ui";
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';


//

const items = [
    {
        id: "FL-SCCM3024-Li-30A-MPPT",
        title: "Felicity FL-SCCM3024 Li – 30A MPPT Solar Charge Controller (12V/24V)",
        description: "The Felicity FL-SCCM3024 Li is a high-performance 30A MPPT solar charge controller designed for 12V/24V systems. Engineered for precision and durability, it features intelligent MPPT tracking to maximize solar harvest and includes a lithium battery wake-up function — making it perfect for modern off-grid and hybrid energy setups.",
        link: "/products/felicity-charge-controller",
        image: "/assets/images/FL-SCCM3024-Li-30A-MPPT-12V24V-system-lithium-battery-wake-up-function_-view1.jpeg",
    },
    {
        id: "FL-SCCM10048-Li-100A-MPPT",
        title: "Felicity FL-SCCM10048 Li – 100A MPPT Solar Charge Controller (12V/24V/48V)",
        description: "The Felicity FL-SCCM10048 Li is a powerful 100A MPPT solar charge controller built to handle high-load systems with ease. Supporting 12V, 24V, and 48V batteries, it features advanced MPPT tracking technology and a lithium battery wake-up function, making it an essential component for robust off-grid and hybrid solar installations.  ",
        link: "/products/felicity-charge-controller",
        image: "/assets/images/FL-SCCM10048-Li-100A-MPPT-12V24V48-system-lithium-battery-wake-up-function.jpeg",
    },
];


function ChargeControllersTabContent() {
    const [active, setActive] = useState<string>("FL-SCCM3024-Li-30A-MPPT");

    const current = items.find((item) => item.id === active);
    return (
        <Tabs.Content value="controllers" className=' w-full mt-16 flex justify-between items-center gap-x-20'>


            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Left Image */}
                <div className="w-full flex justify-center md:w-1/2">
                    {current && (
                        <Image
                            src={current.image}
                            alt={current.title}
                            width={500}
                            height={400}
                            className="rounded-lg object-cover"
                        />
                    )}
                </div>

                {/* Right Accordion */}
                <div className="w-full md:w-1/2 flex flex-col gap-y-6">
                    {items.map((item) => (
                        <div key={item.id} className="flex flex-col gap-y-2">
                            <h2
                                className="text-left text-grey-800 font-semibold text-xl md:text-2xl  cursor-pointer"
                                onClick={() => setActive(item.id)}
                            >
                                {item.title}
                            </h2>
                            {active === item.id && (
                                <div className="flex flex-col gap-y-2">
                                    <p className="text-grey-500 text-left">{item.description}</p>
                                    <Link
                                        href={item.link}
                                        className="flex h-11 items-center mt-3 text-white p-1 bg-primary hover:bg-primary/90 rounded-sm lg:w-[120px] justify-center font-medium text-base"
                                    >
                                        <span className="mr-1">View more</span>
                                        <MoveRight color="#fff" size={16} />
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Tabs.Content>
    )
}

export default ChargeControllersTabContent