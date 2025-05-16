"use client"
import React, { useState } from 'react'
import { Tabs } from "radix-ui";
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';


//type Props = {}

const items = [
    {
        id: "FL-LPBF-48200",
        title: "FL-LPBF 48200 48V-H 10KWH Lithium Battery",
        description: "Power your home, business, or solar system with the Felicity FL-LPBF 48200 48V-H, a robust 10kWh lithium battery engineered for high-performance energy storage. Designed to deliver stable, long-lasting power, it’s ideal for both off-grid and hybrid solar energy setups.",
        link: "/products/felicity-solar-batteries",
        image: "/assets/images/FL-LPBF-48200-48V-10KWH-Lithium-Battery-FIVE-years-warranty.jpeg",
    },
    {
        id: "FL-LPBF48350",
        title: "FL-LPBF48350 51.2V 17.5KWH lithium battery",
        description: "The Felicity FL-LPBF48350 is a high-capacity 51.2V lithium battery designed to meet the demands of advanced solar energy systems and large-scale backup power applications. With 17.5kWh of reliable storage, it offers long-lasting energy independence, exceptional safety, and seamless integration.",
        link: "/products/felicity-solar-batteries",
        image: "/assets/images/FL-LPBF48250-48V-12.5KWH-lithium-battery.jpeg",
    },
];


function BatteryTabContent() {
    const [active, setActive] = useState<string>("FL-LPBF-48200");

    const current = items.find((item) => item.id === active);
    return (

        <Tabs.Content value="batteries" className=' w-full mt-16 flex justify-between items-center gap-x-20'>


            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Left Image */}
                <div className="w-full flex justify-center md:w-1/2">
                    {current && (
                        <Image
                            src={current.image}
                            alt={current.title}
                            width={450}
                            height={350}
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
                                        className="flex items-center text-primary font-medium text-sm"
                                    >
                                        <span className="mr-1">View more</span>
                                        <MoveRight color="#ED7020" size={16} />
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

export default BatteryTabContent