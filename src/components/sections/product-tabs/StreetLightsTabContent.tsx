"use client"
import React, { useState } from 'react'
import { Tabs } from "radix-ui";
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';


//

const items = [
    {
        id: "FL-D2-40Watts",
        title: "FL-D2 40Watts all in one street light",
        description: "Illuminate your streets, pathways, and open spaces with the Felicity FL-D2-40W All-in-One Street Light — a perfect blend of performance, durability, and energy efficiency. Designed with cutting-edge solar technology and an integrated design, it offers a reliable lighting solution that requires zero wiring and minimal maintenance.",
        link: "/products/felicity-solar-lights",
        image: "/assets/images/FL-D2-30W-all-in-one-street-light.jpeg",
    },
    {
        id: "FL-D2C-80W",
        title: "FL-D2C-80W all in one street light with Camera",
        description: "Enhance your outdoor lighting and security with the Felicity FL-D2C-80W, a powerful solar street light equipped with a built-in surveillance camera. Designed for smart cities, estates, streets, and remote areas, this all-in-one solution delivers reliable illumination and real-time monitoring — with zero electricity bills.",
        link: "/products/felicity-solar-lights",
        image: "/assets/images/FL-D2C-80W-all-in-one-street-light-with-camera-all-view.jpeg",
    },
];


function StreetLightTabContent() {
    const [active, setActive] = useState<string>("FL-D2-40Watts");

    const current = items.find((item) => item.id === active);
    return (
        <Tabs.Content value="street_light" className=' w-full mt-16 flex justify-between items-center gap-x-20'>


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

export default StreetLightTabContent