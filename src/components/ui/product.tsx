import React from 'react'
import LinkButton from './Link'
import Image from 'next/image'
import { IProduct } from '@/app/(main)/products/page'
type Props = {
    details: IProduct,
    category_path?: string
}

function Product({ details, category_path }: Props) {
    const { id, product_name, key_features, price, image_1 } = details;

    return (
        <>


            {/* 
            <article className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden ">
                <div>
                    <Image width={345} height={198} className="object-cover h-64 w-full" src={image_1} alt={key_features} />
                </div>
                <div className="flex flex-col group hover:bg-grey-100 hover:transition-all h-full">
                    <div className="flex flex-col min-h-[171px] items-center gap-y-3 mt-4 px-4 roup-hover:bg-grey-800 pb-4">
                        <h2 className="text-lg xl:text-xl font-semibold text-gray-800 text-center ">{product_name}</h2>
                        <span className="font-normal text-gray-600 ">{description}</span> 
            <span className="font-medium text-xs bg-grey-500 rounded-sm text-white px-1.5 py-1  w-fit">{category_name}</span> 
            <span className="font-bold text-xl text-center text-gray-800 ">&#8358;{Number(price)}</span>
            <LinkButton href={`/products${`${category_path ? `/${category_path}` : ""}`}/${id}`} className='h-10 px-2 text-sm uppercase w-[130px] font-semibold' label='View details' />
        </div >
         <div className=" justify-between items-center flex p-4 border-t border-gray-200 ">
                    <span className="font-bold text-xl  text-gray-800 ">${price}</span>
                    <LinkButton href={`/products${`${category_path ? `/${category_path}` : ""}`}/${id}`} className='h-10 px-2 uppercase' label='View details' />
                </div> 
                </div >

            </article > */}


            <article className="max-w-sm rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
                <Image
                    src={image_1}
                    alt={key_features}
                    className="w-full h-64 object-cover"
                    width={500}
                    height={300}
                    priority

                />

                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-2">
                        {product_name}
                    </h3>

                    <p className="text-lg font-bold text-green-600 mb-4">₦{price}</p>
                    <LinkButton href={`/products${`${category_path ? `/${category_path}` : ""}`}/${id}`} className='w-full bg-primary hover:bg-orange-600 text-white py-2 px-4 rounded-md h-11 text-sm font-medium transition-colors duration-300' label='View details' />
                    {/*      <button className="w-full bg-primary hover:bg-orange-600 text-white py-2 px-4 rounded-md h-11 text-sm font-medium transition-colors duration-300">
                        View Details
                    </button> */}
                </div>
            </article>
        </>
    )
}

export default Product
