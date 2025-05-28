"use client";

import Image from 'next/image';
import React, { useState } from 'react'


const imgs = [
    "/assets/images/product_images_1.jpeg",
    "/assets/images/product_images_2.jpeg",
    "/assets/images/product_images_3.jpeg",
    "/assets/images/product_images_4.jpeg",
]
function ProductImageGallery({ cover, img2, img3, img4 }: { cover?: string, img2?: string, img3?: string, img4?: string }) {
    const [coverImg, setCoverImg] = useState<string>(cover || imgs[0]);


    const changeImage = (img: string) => {
        setCoverImg(img)
    }
    return (
        <div className="w-full md:w-1/2 md:px-4 mb-8">
            {cover && <Image
                src={coverImg}
                alt="Product"
                width={540}
                height={450}
                className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage"
            />}
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">

                {cover && <Image
                    src={cover} alt="Thumbnail cover"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => changeImage(cover)}
                    width={200}
                    height={160}
                />}
                {img2 && <Image
                    src={img2} alt="Thumbnail 1"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => changeImage(img2)}
                    width={200}
                    height={160}
                />}
                {img3 && <Image
                    src={img3} alt="Thumbnail 2"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => changeImage(img3)}
                    width={200}
                    height={160}
                />}
                {img4 && <Image
                    src={img4} alt="Thumbnail 3"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => changeImage(img4)}
                    width={200}
                    height={160}
                />}


            </div>
        </div>
    )
}

export default ProductImageGallery