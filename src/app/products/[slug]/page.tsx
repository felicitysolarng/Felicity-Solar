import { Metadata } from 'next';
import React from 'react'

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: `Blog Post - ${slug}`,
        description: 'We have the best Solar products in town. Hybrid inverter, MPPT controller, Solar lithium battery, Gel battery, Solar all in one street light',
    }
};



export default async function index({ params }: Props) {
    const { slug } = await params

    return (
        <div>

            <h1>Product Page</h1>
            <p>{slug}</p>
        </div>
    )
}
