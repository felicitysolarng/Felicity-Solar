import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/constants";
import Link from "next/link";



const linkVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                primary: "bg-primary text-white",
                outline: "text-grey-800",
                white: "bg-white text-[#000000] min-w-[121px] underline-offset-4",
            },
            size: {
                default: "h-12 px-4 py-2 text-sm",
                lg: "h-[64px] text-lg px-4 py-2"
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "default",
        },
    }
);

export interface LinkProps
    extends
    VariantProps<typeof linkVariants> {
    href: string;
    label: string,
    className?: string;
    icon?: React.ReactElement | string,
}


const LinkButton = ({ className, icon, variant, size, label, href, ...props }: LinkProps) => {

    return (
        <Link
            href={href}
            style={{ transitionTimingFunction: 'cubic-bezier(0, 0.52, 0.39, 1)' }} 
            className={cn(linkVariants({ variant, size, className }), icon && "flex justify-center items-center")}

            {...props}
        > <>{label} {icon && icon}</></Link>
    );
}
export default LinkButton