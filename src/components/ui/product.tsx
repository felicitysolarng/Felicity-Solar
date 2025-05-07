import React from 'react'
import LinkButton from './Link'
import Image from 'next/image'

type Props = {
    id: string, category: string, category_path?: string, cover: string, title: string, price: string, description: string, path?: string
}

function Product({ id, category, category_path, cover, title, price, description }: Props) {
    return (
        <article className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden ">
            <div>
                <Image width={345} height={198} className="object-cover h-64 w-full" src={cover} alt="Converse sneakers" />
            </div>
            <div className="flex flex-col group hover:bg-grey-100 hover:transition-all h-full">
                <div className="flex flex-col min-h-[171px]  gap-y-3 mt-4 px-4 roup-hover:bg-grey-800 pb-4">
                    <h2 className="text-lg xl:text-xl font-semibold text-gray-800 ">{title}</h2>
                    <span className="font-normal text-gray-600 ">{description}</span>
                    <span className="font-medium text-xs bg-grey-500 rounded-sm text-white px-1.5 py-1  w-fit">{category}</span>
                </div>
                <div className=" justify-between items-center flex p-4 border-t border-gray-200 ">
                    <span className="font-bold text-xl  text-gray-800 ">${price}</span>
                    <LinkButton href={`/products${`${category_path ? `/${category_path}`:""}`}/${id}`} className='h-10 px-2 uppercase' label='View details' />
                </div>
            </div>

        </article>
    )
}

export default Product
