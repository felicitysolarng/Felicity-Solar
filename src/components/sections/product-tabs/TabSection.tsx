'use client'
import React, { useState } from 'react'
import ProductTabsMobile from '@/components/ui/product-tabs-mobile';
import BatteryTabContent from '@/components/sections/product-tabs/BatteryTabContent';
import ChargeControllersTabContent from '@/components/sections/product-tabs/ChargeControllerTabContent';
import SolarLightTabContent from '@/components/sections/product-tabs/SolarLightTabContent';
import InverterTabContent from '@/components/sections/product-tabs/InverterTabContent';
import SolarPanelTabContent from '@/components/sections/product-tabs/SolarPanelsTabContent';
import StreetLightTabContent from '@/components/sections/product-tabs/StreetLightsTabContent';
import { productsCats } from '@/lib/data';
import { Tabs } from "radix-ui";



function TabSection() {
    const [activeTab, setActiveTab] = useState("solar_panels");

    return (
        <Tabs.Root value={activeTab} onValueChange={setActiveTab} orientation="vertical">
            {/* DESKTOP TABS */}
            <Tabs.List
                aria-label="products"
                className="bg-[#F7F9FC] border border-[#F0F2F5] rounded-full hidden lg:flex gap-x-12 px-4 py-3 lg:w-fit mx-auto"
            >
                {productsCats.map((i) => (
                    <Tabs.Trigger
                        value={i.value}
                        key={i.value}
                        className="data-[state=active]:text-white data-[state=active]:bg-grey-950 data-[state=active]:rounded-full data-[state=active]:px-12 data-[state=active]:py-4 font-medium"
                    >
                        {i.label}
                    </Tabs.Trigger>
                ))}
            </Tabs.List>

            {/* MOBILE DROPDOWN */}
            <ProductTabsMobile activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* TABS CONTENT */}
            <SolarPanelTabContent />
            <BatteryTabContent />
            <StreetLightTabContent />
            <InverterTabContent />
            <ChargeControllersTabContent />
            <SolarLightTabContent />
        </Tabs.Root>
    )
}

export default TabSection