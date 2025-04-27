"use client";
import Link from 'next/link'
import React from 'react'

type Props = {
    props: {
        label: string,
        url: string
    }
}

function Navitem({ props }: Props) {
    return (
        <li className=''>
            <Link className='font-medium' href={props.url}>{props.label}</Link>
        </li>
    )
}

export default Navitem