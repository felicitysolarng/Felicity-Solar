"use client"
import React, { useState } from 'react'
import { Tabs } from "radix-ui";
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';


//

const items = [
    {
        id: "FL-15003",
        title: "FL-15003 150W Floor Light with 45W Panel",
        description: "The Felicity FL-15003 is a high-lumen 150W floor light powered by a durable 45W solar panel, delivering bright, eco-friendly lighting for outdoor environments. Perfect for pathways, parks, gardens, and compounds, this light combines performance and aesthetics with zero electricity cost.",
        link: "/products/felicity-solar-lights",
        image: "/assets/images/FL-15003-150W-floor-light-with-45W-panel-packaged-view.jpeg",
    },
    {
        id: "FL-10003",
        title: "FL-10003 100W floor light with 35W panel",
        description: "High-efficiency monocrystalline solar panel with fast charging and long life-span. ·Long-term environmental Batteries with overcharge and over discharge protection, more safe and reliable.",
        link: "/products/felicity-solar-lights",
        image: "/assets/images/FL-15003-150W-floor-light-with-45W-panel.jpeg",
    },
];


function SolarLightTabContent() {
    const [active, setActive] = useState<string>("FL-15003");

    const current = items.find((item) => item.id === active);
    return (
        <Tabs.Content value="floor_light" className=' w-full mt-16 flex justify-between items-center gap-x-20'>


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

export default SolarLightTabContent;