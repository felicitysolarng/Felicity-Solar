"use client";
import { cn } from '@/lib/constants';
import Link from 'next/link'
import React from 'react'
import { NavigationMenu } from "radix-ui";

type ListItemProps = {
    className?: string;
    children: React.ReactNode;
    href: string
};


const ListItem = ({ className, children, href, ...props }: ListItemProps) => {
    return (
        <li>
            <NavigationMenu.Link asChild>
                <Link
                    href={href ?? ""}
                    className={cn('font-medium', className)}
                    {...props}
                >
                    {children}
                </Link>
            </NavigationMenu.Link>
        </li>
    )
}

export default ListItem;