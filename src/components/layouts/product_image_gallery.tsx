"use client";

import Image from 'next/image';
import React, { useState } from 'react'


const imgs = [
    "/assets/images/product_images_1.jpeg",
    "/assets/images/product_images_2.jpeg",
    "/assets/images/product_images_3.jpeg", 
    "/assets/images/product_images_4.jpeg", 
]
function ProductImageGallery() {
    const [coverImg, setCoverImg] = useState(imgs[0])

    const changeImage = (img: string) => {
        setCoverImg(img)
    }
    return (
        <div className="w-full md:w-1/2 md:px-4 mb-8">
            <Image
                src={coverImg}
                alt="Product"
                width={540}
                height={450}
                className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {
                    imgs.map(img => {
                        return (
                            <Image
                                src={img} alt="Thumbnail 1"
                                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                onClick={() => changeImage(img)}
                                key={img}
                                width={200}
                                height={160}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductImageGallery