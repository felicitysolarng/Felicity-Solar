"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer } from 'recharts';

type IProps = {
    data: {
        month: string,
        Orders: number
    }[]
}


export default function Barchart({ data }: IProps) {
    //static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-has-no-padding-2hlnt8';

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5,
                }}

                barSize={30}
            >
                <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} className='font-inter text-base font-medium' />
                <YAxis allowDecimals={false} className='font-inter font-medium text-sm' />
                <Tooltip labelClassName='font-inter text-grey-950 font-medium' />
                <Legend />
                {/*  <CartesianGrid strokeDasharray="3 3" /> */}
                <Bar dataKey="Orders" fill="#f27d34" background={{ fill: '#eee' }} />
            </BarChart>
        </ResponsiveContainer>
    );
}

