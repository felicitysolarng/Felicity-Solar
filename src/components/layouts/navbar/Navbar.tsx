"use client";

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/constants';
import LinkButton from '../../ui/Link';
import { nav_items } from '@/lib/data';
//import ListItem from './Navitem';
//import { CaretDownIcon } from '@radix-ui/react-icons';
//import { NavigationMenuList, NavigationMenu, NavigationMenuItem } from './navigation-menu';
import Link from 'next/link';
//import ProductsDropdown from './product-dropdown';

type Props = {
    className?: string,
    linkClassName?: string,
    width?: string,
    variant?: "white" | "primary" | "outline"
}

function Navbar({ className, width = "w-[90%]", linkClassName, variant = "white" }: Props) {
    return (
        <nav className={cn("h-24 flex sticky top-0 z-50 ", className)}>
            <div className={cn("flex justify-between items-center mx-auto", width)}>
                <Image src={"/logo.png"} height={64} width={147} alt='felicity solar logo' priority />

                <ul className="flex gap-x-6 list-none">
                    {nav_items.map(nav => <li key={nav.url}>
                        <Link href={nav.url ?? ""} className={cn("text-white ", linkClassName)}>{nav.label}</Link>
                    </li>
                    )}
                </ul>
                <LinkButton variant={variant} href="/get-a-free-quote" label="Get a Quote" />
            </div>
        </nav>

    )
}

export default Navbar

/* 
lg:translate-x-16  @min-[131em]:translate-x-[19rem]
*/