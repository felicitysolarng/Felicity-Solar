"use client";
import { cn } from '@/lib/constants';
import Link from 'next/link'
import React from 'react'
import { NavigationMenu } from "radix-ui";


type ListItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    className?: string;
    children: React.ReactNode;
};

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
    ({ className, children, ...props }, forwardedRef) => {
        return (
            <li>
                <NavigationMenu.Link asChild>
                    <Link
                        href={props.href ?? ""}
                        className={cn('font-medium', className)}
                        {...props}
                        ref={forwardedRef}
                    >
                        {children}
                    </Link>
                </NavigationMenu.Link>
            </li>
        )
    })

export default ListItem;