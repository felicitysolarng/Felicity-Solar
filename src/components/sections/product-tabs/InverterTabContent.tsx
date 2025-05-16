"use client"
import React, { useState } from 'react'
import { Tabs } from "radix-ui";
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';


//type Props = {}

const items = [
    {
        id: "FL-IVPM2512",
        title: "FL-IVPM2512 Li 2.5KVA 12V Pure Sine wave with 80A MPPT",
        description: "The Felicity FL-IVPM2512 Li is a compact yet powerful 2.5KVA inverter designed for small to medium solar setups. It combines a pure sine wave inverter with an integrated 80A MPPT solar charge controller, ensuring stable, efficient power for your appliances and optimized solar energy harvesting — all from a single unit.",
        link: "/products/felicity-solar-inverter",
        image: "/assets/images/FL-IVPM2512-Li-2.5KVA-12V-pure-sine-wave-inverter-with-80A-MPPT.jpeg",
    },
    {
        id: "FL-IVPS10048",
        title: "Felicity FL-IVPS10048 Li – 10KVA 48V Pure Sine Wave Inverter (≤6 Parallel | Lithium Battery Wake-Up Function)",
        description: "Power your home, office, or industrial setup with the Felicity FL-IVPS10048 Li, a 10KVA pure sine wave inverter built for high-demand applications. Designed with advanced lithium battery support, parallel functionality (up to 6 units), and seamless integration, this inverter is the ultimate solution for reliable and expandable energy systems.",
        link: "/products/felicity-solar-inverter",
        image: "/assets/images/FL-IVPM3524-Li-3.5KVA-24V-pure-sine-wave-inverter-with-80A-MPPT.jpeg",
    },
];


function InverterTabContent() {
    const [active, setActive] = useState<string>("FL-IVPM2512");

    const current = items.find((item) => item.id === active);
    return (
        <Tabs.Content value="inverters" className=' w-full mt-16 flex justify-between items-center gap-x-20'>


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

export default InverterTabContent