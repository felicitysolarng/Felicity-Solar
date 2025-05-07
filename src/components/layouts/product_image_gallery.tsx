"use client";

import Image from 'next/image';
import React, { useState } from 'react'


const imgs = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
]
function ProductImageGallery() {
    const [coverImg, setCoverImg] = useState(imgs[0])

    const changeImage = (img: string) => {
        setCoverImg(img)
    }
    return (
        <div className="w-full md:w-1/2 md:px-4 mb-8">
            <img
                src={coverImg}
                alt="Product"
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