"use client"
import React, { useState } from 'react'
import { Tabs } from "radix-ui";
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';


//

const items = [
    {
        id: "Felicity-M-175W-MONO-Solar-Panel",
        title: "Felicity M-175W MONO Solar Panel",
        description: "The Felicity M-175W Monocrystalline Solar Panel offers high efficiency, compact design, and reliable performance in all weather. Ideal for homes, streetlights, and mobile systems, it delivers stable 175W output with durable, low-light-friendly cells. Perfect for clean energy setups.",
        link: "/products/felicity-solar-panels",
        image: "/assets/images/FL-M-175W-MONO-panel-back-view.jpeg",
    },
    {
        id: "felicity-M-450W-MONO-Panel",
        title: "Felicity M-450W MONO Panel",
        description: "The FL-M-450W Monocrystalline Solar Panel delivers high power output, superior efficiency, and excellent low-light performance. Built for durability and large-scale setups, it's ideal for homes, businesses, and off-grid systems needing reliable solar energy.",
        link: "/products/felicity-solar-panels",
        image: "/assets/images/solar_panels.jpg",
    },
];


function SolarPanelTabContent() {
    const [active, setActive] = useState<string>("Felicity-M-175W-MONO-Solar-Panel");

    const current = items.find((item) => item.id === active);
    return (
        <Tabs.Content value="solar_panels" className=' w-full mt-16 flex justify-between items-center gap-x-20'>


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
                                className="text-left text-grey-800 font-semibold text-xl md:text-2xl cursor-pointer"
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

export default SolarPanelTabContent