"use client"
import React, {useState} from 'react'
import {Tabs } from "radix-ui";
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';


//type Props = {}

const items = [
    {
      id: "solar-panel",
      title: "Felicity Solar Panel",
      description: "Power your home or business with our durable, affordable solar panels — built to last and designed to fit your energy needs. Explore our range of long-lasting solutions today!",
      link: "/products/solar-panels",
      image: "/assets/images/solar_panels.jpg", 
    },
    {
      id: "solar-floor-light",
      title: "Felicity Solar Floor Light",
      description: "Light up your space effortlessly with the Felicity Solar Floor Light — stylish, durable, and solar-powered for maximum convenience. Discover why it's the perfect choice for your outdoor lighting needs!",
      link: "/products/solar-floor-light",
      image: "/assets/images/solar_panels.jpg", 
    },
  ];

  
function SolarPanelTabContent() {
    const [active, setActive] = useState<string>("solar-panel");

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
                                    className="text-left text-grey-800 font-semibold text-2xl cursor-pointer"
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